const { UserData } = require("../model/User.model")
const { Router } = require("express")
require('dotenv').config()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const loginRouter = Router()

loginRouter.post("/", async (req, res) => {

    const { email, password } = req.body

    const Chek = await UserData.findOne({ email: email })

    if (Chek) {
        // res.send({ msg: "" })
        const new_password = Chek.password
        const email = Chek.email

        bcrypt.compare(password, new_password, function(err, result) {

if(err){
    res.send({ msg: "can't login error occured" })
}
if(result){

var token = jwt.sign({ email:email }, process.env.SECRET);
res.send({ "msg":token })


}else{
    res.send({ msg: "login failed" })
}
            // result == true
        });

    }else{

        res.send({ msg: "signup again" })
    }
    
    
})


module.exports = {loginRouter }