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
	var { pricing, timeTodo, websiteSize, hourlyRate } = req.query;

	// Validate timeTodo
	if(timeTodo === "10-20"){
		timeTodo = 15;
	} else if(timeTodo === "5-10"){
		timeTodo = 7.5;
	} else if(timeTodo === "2-4"){
		timeTodo = 3;
	} else {
		timeTodo = 15;
	}

	// Validate websiteSize
	if(websiteSize === "Single Page"){
		websiteSize = 1;
	} else if(websiteSize === "​3-5 Pages"){
		websiteSize = 4.5;
	} else if(websiteSize === "​15-45 Pages"){
		websiteSize = 25;
	} else if(websiteSize === "​+50 Pages"){
		websiteSize = 50;
	} else {
		websiteSize = 1;
	}

	// Validate websiteSize
	if(hourlyRate === "​$25 per hour"){
		hourlyRate = 25;
	} else if(hourlyRate === "​$50 per hour"){
		hourlyRate = 50;
	} else if(hourlyRate === "​$100 per hour"){
		hourlyRate = 100;
	} else if(hourlyRate === "​+$150 per hour"){
		hourlyRate = 150;
	} else {
		hourlyRate = 25;
	}
	let price = timeTodo*websiteSize*hourlyRate
	console.log(pricing,timeTodo,websiteSize, hourlyRate, price);
	res.json({
		success: true,
		price,
	})
})	

app.listen(3000, () => {
	console.log("Pricing Calc API is running on port 3000");
});

