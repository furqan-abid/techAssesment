const express = require('express');
const cors = require('cors')
const errorMiddleware = require("./middleware/error");

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const cart = require('./routes/cartRoutes')

app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200
}))

app.use('/api',cart);

app.use(errorMiddleware)

module.exports= app