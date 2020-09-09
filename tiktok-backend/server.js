import exprss from "express";
import mongoose from "mongoose";
import Data from './data.js';


// app config
const app = exprss();
const port = 9000;

//middlware


//DB config
const connection__url = 'mongodb+srv://admin:Nishit@2020@cluster0.uzjoa.mongodb.net/tiktok?retryWrites=true&w=majority';

mongoose.connect(connection__url, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true,
})

//api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.get("/v1/posts", (req, res) => res.status(200).send(Data));

// listen
app.listen(port, () => console.log(`listning on localhost:${port}`))
