const todoModel= require("../Models/todoModel")

async function insert_new_todo (user_data)
{
    let res= await todoModel.create(user_data)
    return res ; 
}



async function get_todo_of_specific_user (id){
    let res=await todoModel.findOne({_id:id})
    return res ;
}

async function deleteTodo(id)
{
    let delteled_data=await todoModel.deleteOne({_id:id});
    return delteled_data;
}

async function updatedTodo(id,data)
{
    let updated_data=await todoModel.updateOne({_id:id},data);
    return updated_data;
}


module.exports={insert_new_todo,updatedTodo,deleteTodo,get_todo_of_specific_user}