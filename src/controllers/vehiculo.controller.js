import Vehiculo from "../models/m_vehiculo";

export const createVehiculo = async (req, res) => {
  try {
    const { placa, marca, color, id_usuario } = req.body;
    const vehiculo = new Vehiculo({
      placa, marca, color, id_usuario
    });
    const savedVehiculo = await vehiculo.save();
    console.log("Llego")
    return res.status(200).json({
      _id: savedVehiculo._id,
      placa: savedVehiculo.placa,
      marca: savedVehiculo.marca,
      color: savedVehiculo.color,
      id_usuario: savedVehiculo.id_usuario
    });
  } catch (error) {
    console.error(error);
  }
};

export const getVehiculos = async (req, res) => {
  const vehiculos = await Vehiculo.find();
  return res.json(vehiculos);
};

export const getVehiculo = async (req, res) => {
  const vehiculo = await Vehiculo.findById(req.params.vehiculoId);
  return res.json(vehiculo);
};

export const updateVehiculoById= async (req, res) => {
  try {
          const {
            placa, marca, color, id_usuario
          } = req.body;
      
          console.log(req.body)
          console.log(req.params)
          const { _id } = req.params;
      
          const Vehiculo_upd = await Vehiculo.findOneAndUpdate(
            { _id },
            {
              placa, marca, color, id_usuario
            }
          );
          if (!Vehiculo_upd) {
            return res.json({
              status: 404,
              message: "No se encontró ael vehiculo que se quiere editar",
            });
          }
      
          const updated_vehiculo = await Vehiculo.findOne({ _id });
      
          return res.json({
            status: 200,
            message: "Se ha actualizado la informacion del vehiculo",
            data: updated_vehiculo,
          });
        } catch (error) {
          console.log(error);
          return res.json({
            status: 500,
            message: "Ha aparecido un ERROR al momento de actualizar la informacion del vehiculo",
            
          });
        }
       

}

export const deleteVehiculoById= async (req, res) => {
try {
  const { _id } = req.params;
  await Vehiculo.findByIdAndDelete(_id);
  return res.json({
    status: 200,
    message: "Se ha eliminado el vehiculo",
  });
} catch (error) {
  console.log(error);
  return res.json({
    status: 500,
    message: "Hubo un error al momento de eliminar el vehiculo",
  });
}

}

export const createVehiculoTransaccion = async (req, res) => {
  try {
    const { placa, marca, color, id_usuario } = req.body;
    session.startTransaction()
    const savedVehiculo = await vehiculo.save();
    session.commitTransaction()
    return res.status(200).json({
      _id: savedVehiculo._id,
      placa: savedVehiculo.placa,
      marca: savedVehiculo.marca,
      color: savedVehiculo.color,
      id_usuario: savedVehiculo.id_usuario
    });
  } catch (error) {
    session.abortTransaction()
    console.error(error);
  }
};