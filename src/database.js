import mongoose from 'mongoose'
require("dotenv").config();
const url = process.env.MONGO_DB_URL;
/*mongoose
  .connect(url, { dbName: "CursosOnline"
  // ,userNewUrlparser:true,
  // useUnifiedTopology:true,
  // useFindAndModify:true
})*/
mongoose
  .connect(url, { dbName: "Examen"
  // ,userNewUrlparser:true,
  // useUnifiedTopology:true,
  // useFindAndModify:true
})
  .then(() => console.log("Conectado a Mongo Atlas"))
  .catch((e) => console.log("Error de conexion" + e));
