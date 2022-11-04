import { Schema,model } from "mongoose";
import bcrypt from 'bcryptjs'

const vehiculoSchema = new Schema(
{
    placa:String,
    marca:String,
    color:String,
    id_usuario:String
},
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
{ collection: 'vehiculos' },
{timestamps: true , versionKey:false},

);

let M_vehiculo = model('m_vehiculo',vehiculoSchema);
module.exports = M_vehiculo;