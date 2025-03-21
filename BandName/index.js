import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

let bandName = '';

// middlewares
function bandNameGen(req, res, next) {
    bandName = req.body["street"] + ["pet"];
    next();
}

function logger(req, res, next) {
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
}

app.use(bodyParser.urlencoded({ extended: true}), logger, bandNameGen);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {

    res.send(`<h1>${bandName}</h1>`);
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Listening on Port ${port}.`);
})
