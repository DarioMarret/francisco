import { Request, Response } from "express";
import { getRepository, getConnection } from "typeorm";
import { Propietario } from "../entity/Propietario";
import nodemailer from 'nodemailer';

export const getPropietarios = async ( req: Request, res: Response ): Promise<Response> => {
  const users = await getRepository(Propietario).find();
  return res.json(users);
};

export const getUser = async ( req: Request, res: Response ): Promise<Response> => {
  const results = await getRepository(Propietario).findOne(req.params.id);
  return res.json(results);
};

export const RegistrarPropietario = async ( req: Request, res: Response): Promise<Response>  => {
  try {
    const newUser = await getRepository(Propietario).create(req.body);
    const results = await getRepository(Propietario).save(newUser);
    if(results){
      var user = {
        "email":req.body.email,
        "password":req.body.cedula,
        "usuario":req.body.nombre,
      }
      CorreoContraceña(user);
    }
    return res.json(results);
  } catch (error){
    return res.status(400).json({ error: error.toString()});
  }
};

export const updateUser = async ( req: Request, res: Response ): Promise<Response> => {
  const user = await getRepository(Propietario).findOne(req.params.id);
  if (user) {
    getRepository(Propietario).merge(user, req.body);
    const results = await getRepository(Propietario).save(user);
    return res.json(results);
  }
  return res.json({ msg: 'Not user found' });
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Propietario).delete(req.params.id);
  return res.json(results);
};
//envio de contraseña y usuario por correo electronico 
type Datauser ={
  email: string,
  password: string,
  usuario: string,
}
const CorreoContraceña = async (user: Datauser) => {

  let transporter = nodemailer.createTransport({
      host: 'mail.fkaccountingservices.com',
      port: 587,
      secure: false,
      auth: {
          user: 'servicios@fkaccountingservices.com',
          pass: '123456789'
      },
      tls: {
          rejectUnauthorized: false
      }
  });
  let info = await transporter.sendMail({
      from: "servicios@fkaccountingservices.com",
      to: user.email,
      subject: "ContabilidadBM",
      //text: "Hello World",
      html: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"><h1 class="text-center" style="font-weight:bold">ContabilidadBM</h1><p>Gracias Por registrarte a nuestro servicio ContabilidadBM Al momento se activa una cuenta de prueba por 7 dias antes o despues podras cambiarte a un plan que se ajuste a tus actividades<br><b>Usuario:</b>${user.usuario},<br><b>Password:</b>${user.password}</p>`
  })
  console.log('1 Message sent: %s', info.messageId);
  console.log('2 Preview URL: %s', nodemailer.getTestMessageUrl(info));

}