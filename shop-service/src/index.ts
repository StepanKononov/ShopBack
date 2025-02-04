import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import itemRoutes from './routes/itemRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/api', itemRoutes);
app.use('/api', orderRoutes);

createConnection().then(() => {
    app.listen(3000, () => {
        console.log('Main service is listening on port 3000');
    });
}).catch(error => console.error(error));
