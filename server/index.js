import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Routes from './routing/route.js';
import Connection from './database/db.js';

const app = express();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

const PORT = '8080';

Connection();
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));