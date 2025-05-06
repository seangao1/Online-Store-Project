//const express = require('express');

import express from "express";
import dotenv from "dotenv";
import path from "path";

import {connectDB} from './config/db.js';

import productRoutes from './routes/product.route.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();


app.use(express.json()); // This allows the app to parse json data in the req.body;

app.use('/api/products', productRoutes);  // command the app object to direct to route '/api/products' for all methods defined

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "/frontend/dist"))); 
    // Serve static assets (HTML, JS, CSS) from the frontend's build directory

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")); 
        // if user enters any non-API route(in this case, any route that is not "/api/products"), 
        // render ./frontend/dist/index.html
    });

} 


app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);

});
