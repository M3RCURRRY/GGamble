const express = require("express");
const uuid = require("node-uuid");
const ws = require("ws");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const http = require("http");

const config = require("./config");
const credentials = require("./key.json");
const userRoutes = require('./routes/user-routes');

// *********
//  Server init
// *********

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);

const server = http.createServer(app);
const wss = new ws.Server({ server });

// *********
//  Firebase init
// *********

// Format - UUID : WebSocketClient
const rouletteClients = new Map();
const slotsClients = new Map();
const betsClients = new Map();
const onlyChatClient = new Map();

const allClients = new Map();

// All available routes
const ROUTES = {
  ROULETTE: "ROULETTE",
  SLOTS: "SLOTS",
  BETS: "BETS",
  ONLYCHAT: "ONLYCHAT",
};

const ACTIONS = {
  HANDSHAKE: "HANDSHAKE",
  SWITCH: "SWITCH",
};

wss.on("connection", (wsClient) => {
  wsClient.id = uuid.v4();
  allClients.set(wsClient.id, wsClient);

  const messageHandler = (wsc, msg) => {
    const jsonMsg = JSON.parse(msg);

    switch (jsonMsg.action) {
      case ACTIONS.HANDSHAKE:
        if (jsonMsg.data === ROUTES.ROULETTE) {
          rouletteClients.set(wsc.id, wsc);
          wsc.send(`Connected to ${ROUTES.ROULETTE}`);
          break;
        }

        if (jsonMsg.data === ROUTES.SLOTS) {
          slotsClients.set(wsc.id, wsc);
          wsc.send(`Connected to ${ROUTES.ROULETTE}`);
          break;
        }

        wsc.send("This route does not exist to connect");
        break;

      case ACTIONS.SWITCH:
        if (!Object.keys(ROUTES).has(jsonMsg.data)) {
          wsc.send("This route does not exist to switch");
          break;
        }

        if (rouletteClients.has(wsc.id) && jsonMsg.data !== ROUTES.ROULETTE) {
          rouletteClients.delete(wsc.id);
          switch (jsonMsg.data) {
            case ROUTES.SLOTS:
              slotsClients.set(wsc.id, wsc);
              wsc.send(`Switched to ${jsonMsg.data}`);
              break;
            default:
              break;
          }
          break;
        }

        if (slotsClients.has(wsc.id) && jsonMsg.data !== ROUTES.SLOTS) {
          slotsClients.delete(wsc.id);
          switch (jsonMsg.data) {
            case ROUTES.ROULETTE:
              rouletteClients.set(wsc.id, wsc);
              wsc.send(`Switched to ${jsonMsg.data}`);
              break;
            default:
              break;
          }
          break;
        }

        break;
      default:
        wsc.send("Unknown action");
        break;
    }
  };

  wsClient.on("message", function (msg) {
    messageHandler(wsClient, msg);
  });

  wsClient.on("close", function () {
    console.log("User disconnected");
  });
});

// *********
//  Server startup
// *********

server.listen(config.port, () => console.log("Server started"));

// Roulette service

// Chat service

// Bets service

//

// setInterval(() => {
//   console.log("Roll started");
//   for (let client of roulette_clients) {
//     client.send("ROLL");
//     console.log(client.id);
//   }
// }, 5000);

// function onConnect(wsClient) {
//   wsClient.send("User connected");

//   wsClient.on("message", messageHandler);

//   wsClient.on("close", function () {
//     console.log("User disconnected");
//   });
// }
