const mongoose = require('mongoose')


const cartInfoTemplate = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    products:[
        {
            productID:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }
    ],
    history: [{
        productID: String,
        productImage: String
    }]
})

module.exports = mongoose.model('cart_info', cartInfoTemplate)