const forceDatabaseRefresh = false;

import { seedUsers } from './seeds/user-seeds.js';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);

sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    seedUsers(); //Trying to bypace nmp run seed.

    console.log(`Server is listening on port ${PORT}`);
  });
});

// Made by Zade and Oran and Lila kABFJJFBKWJFB