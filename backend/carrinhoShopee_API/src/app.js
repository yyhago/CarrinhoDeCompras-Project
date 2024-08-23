import express from 'express';
import bodyParser from 'body-parser';
import routes from './router/routes.js';

const app = express();

// Middleware para lidar com JSON
app.use(bodyParser.json());

// Rotas API
app.use('/api', routes);

export default app;
