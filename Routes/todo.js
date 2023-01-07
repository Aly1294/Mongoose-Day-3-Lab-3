const todoControllers=require("../Controllers/todoController")
const express=require("express")
const route=express.Router();



route.post("/",async function(req,res){
    
    if (req.body.userId=="" || req.body.title==""||req.body.tags=="")
    {
        res.send("you should put valid data")
    }
    else {
        let data = await todoControllers.insert_new_todo(req.body)
        res.send("Todo saved successfully"+data)
      
    }
})



route.get("/:id",async function(req,res){
    let data = await todoControllers.get_todo_of_specific_user(req.params.id)
    res.send("Todo : "+data)
})

route.delete("/:id",async function(req,res){
    let data = await todoControllers.deleteTodo(req.params.id)
    res.send("Data deleted sucssesfully")
    // res.send(data)
})

route.patch("/:id",async function(req,res){
    let data_after_update = await todoControllers.updatedTodo(req.params.id,req.body)
    res.send("Data Updated sucssesfully")
    // res.send(data_after_update)
})



module.exports=route;