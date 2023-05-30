const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    category: {
        type: ObjectId,
        ref: 'Cateory', //COMMENT: from where does the ObjectId being pulled.
        required: true,
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        type: Buffer,
        contentType: String
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)