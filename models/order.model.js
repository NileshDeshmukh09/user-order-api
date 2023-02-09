

/**
* Schema for the user Model will be provided Here
*/

const mongoose = require("mongoose");

// Define the Order schema
const orderSchema = new mongoose.Schema({
    userID:{
        type: String,
        required: true
    },
    sub_total: {
        type : Number,
        required : true
    },
    phoneNumber: { 
        type :String,
        required : true
    }
});

/* These will automatically generates the created and updated fields */
orderSchema.set('timestamps' , true);



module.exports = mongoose.model("Order", orderSchema );