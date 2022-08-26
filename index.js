// create a new express applications with cors enabled that will be used to handle the requests for a pricing calculator, the main endpoint will be to test that you can acceess the json data, and the /calc endpoint will recieve data and return a price.

var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
	res.json({
		success: true,
		message: "Pricing Calc API is running",
	})
})

app.get('/calc', (req, res) => {
	var { hourlyRate, hoursWorked } = req.query;
	var price = hourlyRate * hoursWorked;
	res.json({
		success: true,
		price,
	})
})

app.listen(3000, () => {
	console.log("Pricing Calc API is running on port 3000");
});

