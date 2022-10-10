import User from "../models/m_user";
import Role from "../models/m_role";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password
    });

    // encrypting password
    //user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.userId);
  return res.json(user);
};

export const updateUserById= async (req, res) => {
  try {
          const {
            username,
            email,
            password
          } = req.body;
      
          console.log(req.body)
          console.log(req.params)
          const { _id } = req.params;
      
          const User_upd = await User.findOneAndUpdate(
            { _id },
            {
              username,
              email,
              password
            }
          );
          if (!User_upd) {
            return res.json({
              status: 404,
              message: "No se encontró al usuario que se quiere editar",
            });
          }
      
          const updated_user = await User.findOne({ _id });
      
          return res.json({
            status: 200,
            message: "Se ha actualizado el usuario",
            data: updated_user,
          });
        } catch (error) {
          console.log(error);
          return res.json({
            status: 500,
            message: "Ha aparecido un ERROR al momento de actualizar a un usuario",
            
          });
        }
       

}

export const deleteUserById= async (req, res) => {
try {
  const { _id } = req.params;
  await User.findByIdAndDelete(_id);
  return res.json({
    status: 200,
    message: "Se ha eliminado el usuario",
  });
} catch (error) {
  console.log(error);
  return res.json({
    status: 500,
    message: "Hubo un error al momento de eliminar el usuario",
  });
}

}