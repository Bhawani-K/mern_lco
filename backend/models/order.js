const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: 'Product',
    },
    name: String,
    count: Number,
    price: Number
})
const ProductModel = mongoose.model('ProductCart', ProductCartSchema)


const orderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transactionId: {},
    isCOD: false,
    amount: {
        type: Number,
    },
    address: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref: 'User',
    }
},
    { timestamps: true }
)

const OrderModel = mongoose.model('Order', orderSchema)

module.exports = { OrderModel, ProductModel }