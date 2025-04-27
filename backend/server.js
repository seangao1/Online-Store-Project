//const express = require('express');

import express from "express";
import dotenv from "dotenv";

import {connectDB} from './config/db.js';

import productRoutes from './routes/product.route.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json()); // This allows the app to parse json data in the req.body;

app.use('/api/products', productRoutes);  // command the app object to direct to route '/api/products' for all methods defined


app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);

});
