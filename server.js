const axios = require('axios');
const express = require('express');

const app = express(); 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/appletest', (req, res) => {
  const appletest = 
    {id: 1, fruit: 'apple'};
  res.json(testData);
}); 

const monsters = [{ type: 'werewolf' }, { type: 'hydra' }, { type: 'chupacabra' }];

/* Middleware */
const getFlight = (req, res, next) => {
  console.log("helooo from the middleware");
  res.send("this is the senddd");
  next();
}

app.get('/api/test', getFlight)

//app.use(getFlight);

// app.get('/api/test', (req, res) => {
//   // axios.get(`http://www.distance24.org/route.json?stops=Hamburg|Berlin`)
//   //   .then((res) => {
//   //     console.log("hellooo");
//   //   })
//   console.log(req.params);
//   res.send(monsters);
// });

/* Do not use 3000, that's the default for the default react-app */
const port = process.env.port || 5000; 

app.listen(port, () => 
    console.log(`Server started on port ${port}.`)
);
