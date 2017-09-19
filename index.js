const express = require("express");
const bodyParser = require("body-parser");

const port = 7000;

const messages = [
	{
		messages: "I like front-end."
	}
];

const app = express();

app.use(express.static("assets"));
app.use(bodyParser.json());

app.get("/messages", (req, res, next) => {
	res.status(200).json({messages: messages});
});

app.post("/messages", (req, res, next) => {
	messages.push({message: req.body.message, time: new Date()});
	res.status(200).json({messages: messages});
});

app.listen(port, () => {console.log("blah")});