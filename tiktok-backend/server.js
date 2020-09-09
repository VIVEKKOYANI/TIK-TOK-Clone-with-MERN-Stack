import exprss from "express";
import mongoose from "mongoose";

// app config
const app = exprss();
const port = 9000;

//middlware


//DB config


//api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));

// listen
app.listen(port, () => console.log(`listning on localhost:${port}`))
