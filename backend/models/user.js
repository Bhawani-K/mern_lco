const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1')

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastname: {
        type: String,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim: true
    },
    encry_password: {
        type: String,
        required: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    purchases: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
)


// *****************************************************************


userSchema.virtual('password')
    .set(function (password) {
        this._password = password   // NOTE : to make password as private, we can use "_"before the variable
        this.salt = uuidv1()
        this.encry_password = this.securePassword(password)
    })
    .get(function () {
        return this._password
    })

// custom methods for a schema
userSchema.methods = {
    authinticate: function (plainPassword) {
        return this.securePassword(plainPassword) === this.encry_password
    },
    securePassword: function (plainPassword) {
        if (!plainPassword) return ""
        try {
            return crypto.createHmac('sha256', secret)
                .update('plainPassword')
                .digest('hex')
        } catch (err) {
            return ""
        }
    }
}

module.exports = mongoose.model('User', userSchema)