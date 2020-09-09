import exprss from "express";
import mongoose from "mongoose";

const app = exprss();
const port = 9000;

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.listen(port, () => console.log(`listning on localhost:${port}`))
