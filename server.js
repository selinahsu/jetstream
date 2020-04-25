const axios = require('axios');
const express = require('express');

const app = express(); 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/testdata', (req, res) => {
    const testData = [
        {id: 1, fruit: 'apple'},
        {id: 2, fruit: 'peach'},
        {id: 3, fruit: 'kiwi'},
    ];
    res.json(testData);
}); 

/* Do not use 3000, that's the default for the default react-app */
const port = process.env.port || 5000; 

app.listen(port, () => 
    console.log(`Server started on port ${port}.`)
);
