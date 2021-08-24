import { Router } from "express";
const router = Router();

import {
  getPropietarios,
  getUser,
  RegistrarPropietario,
  updateUser,
  deleteUser,
} from "../controllers/propietario.controller";

router.get("/registrar/propietario", getPropietarios);
router.get("/propietario/:id", getUser);
router.post("/propietario", RegistrarPropietario);
router.put("/propietario/:id", updateUser);
router.delete("/propietario/:id", deleteUser);

export default router;