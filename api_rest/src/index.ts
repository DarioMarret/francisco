import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import userRoutes from './routes/usuario.routes'
import propitarioRoutes from './routes/propietario.routes'

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes);
app.use(propitarioRoutes);

app.listen(4000,()=>{
    console.log('Server on port', 4000);
});