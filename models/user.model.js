
/**
* Schema for the user Model will be provided Here
*/

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    userID : {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber : {
        type : Number ,
        required : true , 
    },

    password: {
        type: String,
        required: true
    }

});

/* These will automatically generates the created and updated fields */
userSchema.set('timestamps' , true);



module.exports = mongoose.model("User", userSchema);


