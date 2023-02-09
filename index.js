const express =require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();


app.use(
    cors()
);

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/**
 * Setup the mongodb connection 
 */
// console.log(process.env.DB_URL);
mongoose.set('strictQuery', false)
 mongoose.connect(process.env.DB_URL, (err)=>{
    if( err){
        console.log( err );
    }else{
        console.log("MongoDB connected ");
    }
    
});






const authRouter = require('./routes/auth.routes');
const homeRoutes = require('./routes/home.routes');
const orderRouter = require('./routes/order.routes');


app.use(  homeRoutes );
app.use( '/api/v1' , authRouter );
app.use( '/api/v1' , orderRouter );

app.listen(process.env.PORT, () => {
    console.log(`Ticket-Creation-Module-Server has started on the port http://localhost:${process.env.PORT}` );
})