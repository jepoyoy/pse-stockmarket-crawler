var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
const fetch = require('node-fetch');

app.get('/test', function (req, res) {
  res.send('Hello World!')


	const data = {cmpy_id:187,security_id:125,startDate:"02-20-1991",endDate:"08-11-2017"}
	const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Host':'edge.pse.com.ph',
		'Origin':'http://edge.pse.com.ph',
		'Referer':'http://edge.pse.com.ph/companyPage/stockData.do?cmpy_id=187'
        },
    body: JSON.stringify(data)
    };
function handleJson(data) {
    console.log(data.chartData);
    }
fetch('http://edge.pse.com.ph/common/DisclosureCht.ax', options)
    .then(response => response.json())
    .then(handleJson)
    .catch(console.log);

})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})

console.log('Magic happens on port 8081');

exports = module.exports = app;