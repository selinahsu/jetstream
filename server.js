const axios = require('axios');
const express = require('express');

const app = express(); 

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/appletest', (req, res) => {
  const appletest = {id: req.body.params.name};
  if (!appletest) res.status(404).send('Oops! The params were not given.');
  res.send(`${appletest.id} yoooooooooo`);
}); 

/* Middleware */
const getDistance = (req, res) => {
  const testing = req.body.params.destination;
  if (!testing) res.status(404).send('Oops! The params were not given.');
  res.send(`this is the senddd ${testing}`);
  // const url = "https://www.distance24.org/route.json?stops=Hamburg|Berlin";
  // //const url = `https://www.distance24.org/route.json?stops=${req.data.departure}|${req.data.destination}`;
  // axios.get(url).then((res) => {
  //   console.log(res.data);
  //   console.log("helooo from the middleware");
  //   res.send("this is the senddd");
  // });  
}

app.get('/api/flight', getDistance)

app.use(getDistance);

// app.get('/api/test', (req, res) => {
//   // axios.get(`http://www.distance24.org/route.json?stops=Hamburg|Berlin`)
//   //   .then((res) => {
//   //     console.log("hellooo");
//   //   })
//   console.log(req.params);
//   res.send(monsters);
// });

/* Do not use port 3000, it's used by the default react-app */
const port = process.env.port || 5000; 

app.listen(port, () => 
    console.log(`Server started on port ${port}.`)
);
