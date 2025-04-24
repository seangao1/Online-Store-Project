//const express = require('express');

import express from "express";
import dotenv from "dotenv";

import {connectDB} from './config/db.js';

import productRoutes from './routes/product.route.js';


dotenv.config();


const app = express();




app.use(express.json()); // This allows the app to parse json data in the req.body;

app.use('/api/products', productRoutes);


app.listen(3000, () => {
    connectDB();
    console.log('Server started at http://localhost:3000');

});
