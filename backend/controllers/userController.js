const firebase = require ('./../db');
const User = require('./../models/user');
const firestore = firebase.firestore();

// *********
//  REST API
// *********

const addUser = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await firestore.collection('users').doc().set(data);
    res.send("Record saved");
  } catch (err) {
    res.status(400).send(err.message);
  }
}

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await firestore.collection("users").doc(id);
    await user.update(data);

    res.send("User has been updated");
  } catch (err) {
    res.status(400).send(err.message);
  }
}

// *********
//  WS API
// *********

const wsGetUsers = async () => {
  try {
    const users = await firestore.collection("student");
    const data = await users.get();
    const usersArray = [];

    if (data.empty) {
      return null;
    } 
    else {
      data.forEach(doc => {
        const user = new User(
          doc.id,
          doc.username,
          doc.email
        );

        usersArray.push(user);
      });

      return usersArray;
    }
  } catch (err) {
    return "Error fired in wsGetUsers()";
  }
}

module.exports = {
  addUser, 
  updateUser
}