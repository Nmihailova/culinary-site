const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mlabUri: process.env.MLAB_URI
};