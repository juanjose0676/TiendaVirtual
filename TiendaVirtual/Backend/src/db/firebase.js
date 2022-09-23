const admin = require("firebase-admin");

const serviceAccount = require("./latiendavirtual-bd392-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;