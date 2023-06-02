const UserModel = require('../models/user')

exports.signout = (req, res) => {
    res.json({
        'code': '0',
        'message': 'User signout'
    })
}

exports.signup = (req, res) => {
    const user = new UserModel(req.body)
    user.save((err, doc) => {
        if (err) {
            return res.status(400).json({
                err: 'Not able to save the user in DB'
            })
        } else {
            res.status(200).json({
                name: doc.name,
                email: doc.email,
                id: doc._id
            })
        }
    })
}