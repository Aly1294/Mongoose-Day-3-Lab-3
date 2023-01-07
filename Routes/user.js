const userControllers=require("../Controllers/userController")
const express=require("express")
const route=express.Router();



route.post("/register",async function(req,res){
    // try {
    //     let data = await userControllers.insert_new_user(req.body)
    //     res.send("user was registered successfully"+data)
      
    // } catch (error) {
    //     console.log(error.message)
    // }
    if (req.body.username=="" || req.body.age==""||req.body.password==""||req.body.firstName=="")
    {
        res.send("you should put valid data")
    }
    else {
        let data = await userControllers.insert_new_user(req.body)
        res.send("user was registered successfully"+data)
      
    }
})

route.post("/login",async function(req,res){
    let data = await userControllers.logIn(req.body.username,req.body.password)
    
    if(data.length==0)
    {
        res.status(401).send('error:invalid credentials')
    }
    else
    res.send("logged in successfully");
})

route.get("/getFirstname",async function(req,res){
    let data = await userControllers.get_first_name_of_registed_users()
    res.send("Users first name is : "+data)
})

route.delete("/:id",async function(req,res){
    let data = await userControllers.deleteUser(req.params.id)
    // res.send("Data deleted sucssesfully")
    res.send(data)
})

route.patch("/:id",async function(req,res){
    // try {
    //     let data_after_update = await userControllers.updatedUser(req.params.id,req.body)
    //     res.send(data_after_update)
      
    // } catch (error) {
    //     console.log(error.message)
    // }
    let data_after_update = await userControllers.updatedUser(req.params.id,req.body)
    // res.send("Data Updated sucssesfully")
    res.send(data_after_update)
})



module.exports=route;