import { Request, Response } from "express";
import { getRepository, getConnection } from "typeorm";
import { Usuario } from "../entity/Usuario";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(Usuario).find();
  return res.json(users);
};

export const getUsuario = async (req: Request,res: Response): Promise<Response> => {
  try {
    const user = await getConnection()
    .createQueryBuilder()
    .select("usuario")
    .from(Usuario, "usuario")
    .where("usuario.usuario = :usuario and usuario.password = :password", { usuario: req.body.usuario, password: req.body.password })
    .getOne();
    return res.json(user);
  } catch (error) {
    console.log(error.toString());
    return res.status(400).json({ error: error.toString()});
  }
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Usuario).findOne(req.params.id);
  return res.json(results);
};

export const createUser = async ( req: Request, res: Response): Promise<Response>  => {
  try {
    const newUser = await getRepository(Usuario).create(req.body);
    const results = await getRepository(Usuario).save(newUser);
    return res.json(results);
  } catch (error){
    return res.status(400).json({ error: error.toString()});
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(Usuario).findOne(req.params.id);
  if (user) {
    getRepository(Usuario).merge(user, req.body);
    const results = await getRepository(Usuario).save(user);
    return res.json(results);
  }
  return res.json({ msg: 'Not user found' });
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Usuario).delete(req.params.id);
  return res.json(results);
};
