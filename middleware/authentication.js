const { loginRouter } = require("../route/Login.route")
require('dotenv').config()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {

    const token = req.headers.authorization

    try {

        var decoded = jwt.verify(token, process.env.SECRET);
       req.body.email = decoded.email
        next()

    } catch (er) {

        res.send({ msg: "can't authenticate" })
    }


}

module.exports = {authenticate}