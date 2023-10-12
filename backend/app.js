const express = require('express');
const cors = require('cors')
const errorMiddleware = require("./middleware/error");

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const blog= require('./routes/blogRoutes');
const team = require('./routes/teamRoutes')
const webDev = require('./routes/webDevRoutes')
const appDev = require('./routes/appDevRoutes')
const graphic = require('./routes/graphicRoutes')
const fileUpload = require("express-fileupload");

app.use(fileUpload({
    useTempFiles:true,
}))

app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200
}))

app.use('/api/v1',blog);
app.use('/api/v1/',team)
app.use('/api/v1',webDev)
app.use('/api/v1',appDev)
app.use('/api/v1',graphic)

app.use(errorMiddleware)

module.exports= app