import express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes/routes.js';
import { ddbbConnection } from './config/ddbb.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/v1', routes);
app.use((error, _req, res, _next) => {
    return res.status(400).send(error.message);
});
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(ddbbConnection());
    console.log(`Server on PORT ${PORT}`);
});
