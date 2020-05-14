const axios = require('axios');
const express = require('express');

const app = express(); 

app.use(express.json());

app.post('/api/distance', getDistance, getRoundTripMultiplier, getEmissions, getFuel, (req, res) => {
  const destination = {id: req.body.params.destination};
  if (!destination) res.status(404).send('Oops! Something went wrong.');
  console.log("i am here");
  res.send({
    distance: res.locals.distance,
    emissions: res.locals.emissions,
    fuel: res.locals.fuel
  });
}); 


/***************** Middleware *****************/

async function getDistance(req, res, next) { 
  const response = await axios({
    url: 'https://www.distance24.org/route.json?stops=Toronto|Berlin',
    method: 'get'
  });
  console.log(response.data.distance);
  if (isNaN(response.data.distance)) {
    res.send('ERROR');
  }
  else {
    res.locals.distance = response.data.distance;
    next();
  }
}

function getRoundTripMultiplier(req, res, next) {
  if (req.body.params.flightType == 'round-trip')
    res.locals.roundTripMultiplier = 2; 
  else 
    res.locals.roundTripMultiplier = 1;
  next();
}

function getEmissions(req, res, next) {
  let emiMultiplier = 0.115;
  // If the flight is long haul, change the multiplier
  if (res.locals.distance > 8280) {
    emiMultiplier = 0.101;
  }
  res.locals.emissions = res.locals.distance
    *res.locals.roundTripMultiplier
    *req.body.params.passengers
    *emiMultiplier;
  next();
};

function getFuel(req, res, next) {
  let fuelMultiplier = 0.0366;
  // If the flight is long haul, change the multiplier
  if (res.locals.distance > 8280) {
    fuelMultiplier = 0.0322;
  }
  res.locals.fuel = res.locals.distance
    *res.locals.roundTripMultiplier
    *req.body.params.passengers
    *fuelMultiplier;
  next();
};

/***************** End of Miidleware *****************/


/* Do not use port 3000, it's used by the default react-app */
const port = process.env.port || 5000; 

app.listen(port, () => 
    console.log(`Server started on port ${port}.`)
);


// Playing around with things
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/appletest', (req, res) => {
  const appletest = {id: req.body.params.name};
  if (!appletest) res.status(404).send('Oops! The params were not given.');
  res.send(`${appletest.id} yoooooooooo`);
}); 