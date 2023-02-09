const User = require("../models/user.model");
const Order = require("../models/order.model");

/** Create a ticket */
exports.createOrder = async (req, res) => {

    /**
     * If the Engineer  is available 
     */
    try {

        /** User ID of reported must be present in x-access-token */
        const user = await User.findOne({
            userID: req.userID
        })

        const orderObj = {
            sub_total: req.body.sub_total,
            userID: req.userID,
            phoneNumber: user.phoneNumber,
        }



        const order = await Order.create(orderObj);

        if (order) {

            return res.status(201).send({
                success: true,
                message: `${order._id} , created Successfully !`,
                order: order
            })
        }

    } catch (error) {

        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error "
        })
    }
}


exports.getOrderByUserID = async (req, res) => {

    /**
     * Controller to fetch the Orders based on ID's 
    */

    try{

    


    const order = await Order.findOne({
        userID: req.params.userID
    });

    res.status(200).send({
        success : true ,
        message: `${order.userID}  orders fetchedget successfully !`,
        order
    });

}catch( err ){

    console.log( err );
    return res.status(500).send({
        success: false,
        message: "Internal Server Error "
    })

}


}