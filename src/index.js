import app from './app'
import './database'

const cors = require('cors')
const mongoose = require("mongoose");
// SETTING
app.set("port", process.env.PORT);

//* Uso del CORS
app.use(cors())

// SERVER  ESCUCHANDO
app.listen(app.get("port"), () => {
  console.log("Servidor en puerto", app.get("port"));
});

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://erickdev:<password>@atlascluster.ltt9wqi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
// password 12345