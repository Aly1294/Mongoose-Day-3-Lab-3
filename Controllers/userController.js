const userModel= require("../Models/userModel")

async function insert_new_user (user_data)
{
    let res= await userModel.create(user_data)
    console.log(res);
    return res ; 
}

async function logIn (username,password){
    let res= await userModel.find({$and:[{username:username},{password:password}]});
    return res;
}

async function get_first_name_of_registed_users (){
    let res=await userModel.find({},{firstName:1,_id:0})
    console.log(res)
    return res ;
}

async function deleteUser(id)
{
    let delteled_data=await userModel.deleteOne({_id:id});
    return delteled_data;
}

async function updatedUser(id,data)
{
    let updated_data=await userModel.updateOne({_id:id},data);
    return updated_data;
}


module.exports={insert_new_user,updatedUser,deleteUser,logIn,get_first_name_of_registed_users}