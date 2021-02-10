require("dotenv").config({path: './.env'});

module.exports = {
  env: {
    API_KEY: process.env.X_API_KEY,
  },
}