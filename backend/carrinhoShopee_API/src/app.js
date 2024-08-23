import express from 'express';
import bodyParser from 'body-parser';
import routes from './router/routes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// Middleware para lidar com JSON
app.use(bodyParser.json());

// Rotas API
app.use('/api', routes);

// Middleware de tratamento de erros
app.use(errorHandler)

export default app;
