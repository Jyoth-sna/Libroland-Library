const { connect } = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();


const connectDb = async () => {
  return connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
}
console.log(process.env.DB_URI);
console.log(process.env.DB_NAME);


module.exports = { connectDb }
