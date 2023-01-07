const express = require('express')
const app = express()
const mongoose=require("mongoose")
const port = 3000
const userRoute=require("./Routes/user")
const todoRoute=require("./Routes/todo")



// Mongoose Code
mongoose.set("strictQuery",false)
mongoose.connect("mongodb://0.0.0.0:27017/Mongoose_Lab3_database").then(()=>
{
    console.log('Sucssesfull connect with database');
})


app.use(express.urlencoded({extended:true}))


// Routing  
app.use("/users",userRoute)
app.use("/todos",todoRoute)



// for try
/*
app.get("/",function(req,res){
    res.send("Hello from PostMan")
})
*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))