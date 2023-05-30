require('dotenv').config();

const { Sequelize } = require("sequuelize");
const CONNECTION_URL = process.env.DATABSE_URL;


const sequelize = new Sequelize(CONNECTION_URL);

// https://github.com/sequelize/express-example/blob/master/express-main-example/sequelize/index.js
const modelDefiners = [
	require('./models/User.model'),
	require('./models/BlogPost.model'),
    // we add more models here when we create them
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;