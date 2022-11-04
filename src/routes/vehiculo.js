import { Router } from "express";
import * as vehiculoCtrl from "../controllers/vehiculo.controller";
import { isAdmin, verifyToken } from "../middlewares/authJwt";
import { checkExistingUser } from "../middlewares/verifySignUp";

const router = Router();

router.get("/", vehiculoCtrl.getVehiculos);
router.post("/transaccion", vehiculoCtrl.createVehiculoTransaccion);
router.post("/",  vehiculoCtrl.createVehiculo);
router.put('/:id', vehiculoCtrl.updateVehiculoById);
router.delete('/:_id', vehiculoCtrl.deleteVehiculoById);

export default router;