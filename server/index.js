import dotenv from 'dotenv';

// Load environment variables from .env file into process.env
dotenv.config();

// Now you can access variables defined in .env
// console.log(process.env.DB_HOST); // Outputs: localhost

import express from 'express';
import { connection } from './postgres/postgres.js';
import { connectionBlog } from './postgres/blog.js';
import { connectionUser } from './postgres/nuser.js';
import {connectionComment } from './postgres/commentuser.js'
import router from './view/routes.js';
import routerBlog from './view/blogRoute.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import routerComment from './view/comment.js';

import routeruser  from './view/status.js';

import { authenticateToken } from "./middlewares/jwt.js";

import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(routeruser);
const port = process.env.PORT || 8000;
// app.use(authenticateToken);

// Place authenticateToken middleware here.....................
app.use(routerBlog);
app.use(routerComment)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

connectionBlog();
connection();
connectionUser();
connectionComment();
