const {Todo} = require("../model/Todo.model")
const {authenticate} = require("../middleware/authentication")
const { Router } = require("express")

const todoRouter = Router()

todoRouter.get("/",authenticate,async (req,res)=>{

    const {email} = req.body
    //console.log(email)
const data = await Todo.find({email})

res.send({msg:data})

})

todoRouter.post("/create",authenticate,async (req,res)=>{

    const {email,tag,status,taskname,id} = req.body
    //console.log(email)
    //const data = await Todo.insertMany({email:email},{})
const data = new Todo({

    email,
    tag,
    status,
    taskname,
    id

})

await data.save()
res.send({msg:"data created"})

})

todoRouter.put("/edit/:id",authenticate,async (req,res)=>{
const {id} = req.params
   //const {email} = req.body
    console.log(id)

const data = await Todo.updateOne({id:id},{$set :{taskname:"revis", status:"complted"}})

res.send({msg:"data updated"})

})


todoRouter.delete("/del/:id",authenticate,async (req,res)=>{
    const {id} = req.params
       //const {email} = req.body
        console.log(id)
    
    const data = await Todo.deleteOne({id:id})
    
    res.send({msg:"data deleted"})
    
    })
    

module.exports = {todoRouter}