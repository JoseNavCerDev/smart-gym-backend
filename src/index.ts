import express from 'express';
import * as dotenv from 'dotenv';

import routes from './routes/routes';
import {ddbbConnection} from './config/ddbb';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', routes);

app.get('/', (_req,res) => res.send({msg: "oK"}) );

app.listen(process.env.PORT || 3000, () => {
    ddbbConnection();
    console.log(`Server on PORT ${process.env.PORT}`);    
});