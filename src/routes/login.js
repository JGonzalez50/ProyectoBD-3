import { Router } from "express";
import * as loginCtrl from "../controllers/login.controller";
import { isAdmin, verifyToken } from "../middlewares/authJwt";
import { checkExistingUser } from "../middlewares/verifySignUp";

const router = Router();

router.get("/", loginCtrl.logIn);
router.post("/",  loginCtrl.logIn);

export default router;