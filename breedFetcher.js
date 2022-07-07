const request = require('request')


const userInput = process.argv.slice(2).join("").toLowerCase().replaceAll(" ", "").replaceAll("-", "")


request('https://api.thecatapi.com/v1/breeds', function (error, response, body) {
  let data = JSON.parse(body);
  data.forEach(element => {
    if (userInput === element.name.toLowerCase().replaceAll(" ", "").replaceAll("-", "")) {
      console.log(element.description);
    }
  });

});





