require("dotenv").config();

const { Sequelize } = require("sequelize");

const connection = new Sequelize({
    host: process.env.DBHOST,
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    dialect: process.env.DBDIALECT,
    port: process.env.DBPORT
});

//authenticate
connection.authenticate().then(() => {
    console.log("connected to database");
}).catch(() => {
    console.log(error);
    console.log("Unable to connect to database");
})

module.exports = connection;



// require ("dotenv").config();

// const {Sequelize} = require ("sequelize");

// const connection = new Sequelize ({
//     host : process.env.DBHOST,
//     port : process.env.DBPORT,
//     database : process.env.DBNAME,
//     username : process.env.DBUSERNAME,
//     password : process.env.DBPASSWORD,
//     dialect : process.env.DBDIALECT,
// });

// connection.authenticate().then(()=>{
//     console.log("Connected to Database");

// }).catch((error)=>{
//     console.log(error);

//     console.log("Unable to connect to Database");

// });

// module.exports= connection;


// // require("dotenv").config();

// // const { Sequelize } = require("sequelize");

// // const connection = new Sequelize({
// //     host: process.env.DBHOST,
// //     username: process.env.DBUSERNAME,
// //     password: process.env.DBPASSWORD,
// //     database: process.env.DBNAME,
// //     dialect: process.env.DBDIALECT,
// //     port: process.env.DBPORT
// // });

// // //authenticate
// // connection.authenticate().then(() => {
// //     console.log("Connected to database");
// // }).catch((error) => {
// //     console.log(error);
// //     console.log("Unable to connect to database");
// // });

// // module.exports = connection;

