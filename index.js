const express = require("express")
const app = express()
var cors = require('cors')
require('dotenv').config()
const {connection} = require("./db")
const { signRouter } = require("./route/Signup.route")
const {loginRouter } = require("./route/Login.route")
const {todoRouter} = require("./route/Todo.route")

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 6500

app.get("/",(req,res)=>{

    res.send({"msg":"welcome to eavl"})
})

app.use("/sign",signRouter)
app.use("/login",loginRouter)
app.use("/todo",todoRouter)



app.listen(PORT, async ()=>{
try{

    await connection
    console.log("PORT connected")

}catch(er){

    console.log(er)
}


    console.log("5500 port")
})

