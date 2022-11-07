const { UserData } = require("../model/User.model")
const { Router } = require("express")
const bcrypt = require('bcrypt');


const signRouter = Router()

signRouter.post("/", async (req, res) => {

    const { email, password ,name} = req.body
    console.log(email,name)
    const ChekEmail = await UserData.findOne({ email: email })
console.log(ChekEmail)
    if (ChekEmail) {

        res.send({ msg: "user Exist already ,login" })

    }
    else {
        bcrypt.hash(password, 4, async function (err, hash_pass) {

            if (err) {
                res.send({ msg: "can't signedup" })
            } else {
                const new_user = new UserData({
                    name,
                    email,
                    password: hash_pass
                })
                try{

                    await new_user.save()
                    res.send({ msg: "signedup succeess" })

                }catch(er){

                    res.send({ msg: "signedup has error" })
                }
               

            }

         
        });
    }

})


module.exports = { signRouter }