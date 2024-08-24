import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './router/cart.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// Configuração do CORS com opções
const corsOptions = {
  origin: 'http://192.168.0.127:8080', // Permitir a origem do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

// Middleware para lidar com JSON
app.use(bodyParser.json());

// Rotas API
app.use('/api/cart', routes); // Use o roteador aqui

// Middleware de tratamento de erros
app.use(errorHandler);

export default app;
