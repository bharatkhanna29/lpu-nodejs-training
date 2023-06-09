const express = require("express")
const app = express()
app.use(express.json())

function addNums(req, res) {
    if (req.query.a == null || req.query.b == null) {
        res.status(400).send({error: "Numbers are given as null"})
    }
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const name = req.query.name;
    console.log(name);
    const sum = a + b;
    res.status(200).send(
        {
            "sum": sum
        }
    );
}

function subtractNums(req, res) {
    if (req.query.a == null || req.query.b == null) {
        res.status(400).send({error: "Numbers are given as null"})
    }
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const name = req.query.name;
    console.log(name);
    const sum = a - b;
    res.status(200).send(
        {
            "sum": sum
        }
    );
}

app.get('/addTwoNums', addNums)
app.get('/subtractNums', subtractNums)

const port = 3001
const ip = "localhost"
app.listen(port, ip, function() {
    console.log("I am listening");
})
