const express = require('express');
const {mongoConnet} = require('./databases/config')
const genroRoutes = require('./routes/genero');
const directorRoutes = require('./routes/director');
const productoraRoutes = require('./routes/productora');
const tipoRoutes = require('./routes/tipo');
const mediaRoutes = require('./routes/media');

const dotenv = require("dotenv").config();
const cors = require('cors');
mongoConnet();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors({
    origin: '*'
}))

app.listen(port,() => console.log("server listenig on sport", port));

//Middleware
app.use(express.json());
app.use('/api/v1',genroRoutes);
app.use('/api/v1',directorRoutes);
app.use('/api/v1',productoraRoutes);
app.use('/api/v1',tipoRoutes);
app.use('/api/v1',mediaRoutes);

//routes
app.get("/",(req,res)=>{
    res.send("Welcome to my api");
})

app.get("*",(req,res)=>{
    res.status(404).json({
        msj: "No encontrado",
        status: 404
    });
})



