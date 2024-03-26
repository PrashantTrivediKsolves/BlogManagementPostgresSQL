import express from 'express';
import { connection } from './postgres/postgres.js';
import router from './view/routes.js';
import cors from 'cors';

const app=express();

app.use(express.json());
app.use(router);

app.use(cors);

const PORT=8000;

app.listen(PORT,()=>
{
    console.log(`Server is running at port ${PORT}`);
})

connection();