import { Router } from "express";
import * as userCtrl from "../controllers/user.controller";
import { isAdmin, verifyToken } from "../middlewares/authJwt";
import { checkExistingUser } from "../middlewares/verifySignUp";

const router = Router();

router.get("/", userCtrl.getUsers);
router.post("/",  userCtrl.createUser);
router.put('/:id', userCtrl.updateUserById);
router.delete('/:_id', userCtrl.deleteUserById);

export default router;