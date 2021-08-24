import { Router } from "express";
const router = Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUsuario
} from "../controllers/usuario.controller";

router.get("/usuario", getUsers);
router.get("/usuario/:id", getUser);
router.post("/usuario", createUser);
router.put("/usuario/:id", updateUser);
router.delete("/usuario/:id", deleteUser);
router.post("/login", getUsuario);

export default router;