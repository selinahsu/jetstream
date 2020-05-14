# jetstream

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run on your the app from the root repository, run 

## `npm run dev`

You may need to install the following dependencies for the above command to work: 

## `npm i concurrently`
## `npm i nodemon`


## Notes on Calculated Values

Using figures obtained from [carbonindependent.org](https://www.carbonindependent.org/22.html):

### Boeing 737-400
CO2 Emissions: 0.115 kg per passenger km 
Fuel Usage: 0.0366 kg per passenger km 

### Boeing 747-400
CO2 Emissions: 0.101 kg per passenger km 
Fuel Usage: 0.0322 kg per passenger km 

The 737 is typically used for short international flights, while the 747 is used for long haul flights. In this project, a long haul flight is designated by being 10+ hours, which can be roughly approximated as 8,280 km (the distance between Tokyo and San Francisco). 

One trip across the continental US is approximated to be around 4500 km. 
The MPG of a 2020 Honda Civic is 32.0, which can be converted to 13.6 km/L. A litre of gas weighs 1.6378664 lbs or 0.74 kg, so the fuel efficiency is roughly 18.31 km per kg of fuel. 
Thus, the distance in km travelled by n amount of fuel is n times 18.31 (for the purposes of this project).