import { Schema,model } from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
{
    username:String, 
    email:String,
    password:String
    /*,
    roles:[{
        ref : "Role",
        type: Schema.Types.ObjectId
    }]*/
},
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
{ collection: 'users' },
{timestamps: true , versionKey:false},

);
// para encriptar
userSchema.statics.encryptPassword= async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)

}
// para comparar
userSchema.statics.comparePassword= async (password, receivedpassword) => {
    return await bcrypt.compare(password,receivedpassword)

}

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let M_user = model('m_user',userSchema);
module.exports = M_user;