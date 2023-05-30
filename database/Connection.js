require('dotenv').config();

const { Sequelize } = require("sequuelize");
const CONNECTION_URL = process.env.DATABSE_URL