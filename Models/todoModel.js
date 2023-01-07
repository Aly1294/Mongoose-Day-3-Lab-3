const mongoose=require("mongoose")

const todosSchema=mongoose.Schema({
    userId: Number,
    title: {type:String,required:true,min:5,max:20, index: true}, 
    status: {type:String, default: 'to-do'}, 
    tags:{type:String,max:10},
    // createdAt:{ timestamps: true},

})

const Todo=mongoose.model("todosCollection_in_db",todosSchema)

module.exports=Todo;