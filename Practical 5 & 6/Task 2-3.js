const dotenv = require("dotenv");
const path = require("path");

const environment = process.env.NODE_ENV || "development";

dotenv.config({
    path: path.join(__dirname, "../config/.env." + environment),
});

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

console.log("Database Configuration:", dbConfig);
