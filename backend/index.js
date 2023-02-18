const ws = require("ws");
const express = require("express");
const app = express();

const wss = new ws.Server({ port: 9000 }, () =>
  console.log("Server started on 9000")
);

const roulette_clients = [];
const slots_clients = [];
const betting_clients = [];

const all_clients = [];

wss.on("connection", (wsClient) => {
  wsClient.send("User connected");
  all_clients.push(wsClient);

  const messageHandler = (msg) => {

    const jsonMsg = JSON.parse(msg);

    switch (jsonMsg.action) {
      case "HANDSHAKE":

        console.log(jsonMsg.data);

        if (jsonMsg.data === "ROULETTE") {
          roulette_clients.push(wsClient);
          wsClient.send("Connected to roulette");
          break;
        }
        
        if (jsonMsg.data === "SLOTS") {
          slots_clients.push(wsClient);
          wsClient.send("Connected to slots");
          break;
        }

        console.log("No Handler");
        
        break;
      case "ECHO":
        wsClient.send(jsonMsg.data);
        break;
      case "PING":
        setTimeout(() => {
          wsClient.send("PONG")
        }, 2000);
        break;
      default:
        wsClient.send("Unknown action");
        break;
    }
  }

  wsClient.on("message", messageHandler);

  wsClient.on("close", function () {
    console.log("User disconnected");
  });
});

setInterval(() => {
  console.log("Roll started");
  for (let client of roulette_clients) {
    client.send("ROLL");
  }
}, 5000);

// function onConnect(wsClient) {
//   wsClient.send("User connected");

//   wsClient.on("message", messageHandler);

//   wsClient.on("close", function () {
//     console.log("User disconnected");
//   });
// }