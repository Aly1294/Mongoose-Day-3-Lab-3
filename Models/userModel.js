const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
    username: {type:String,required:true,uniqe:true},
    password :{type:String,required:true},
    firstName:{type:String,required:true,min:[3,"First name must be 3 char or more"],max:15},
    age: {type:Number,min:[13,"Age must be 13 years at least"]},

})


const User= mongoose.model("userCollection_in_db",userSchema)

module.exports=User ;