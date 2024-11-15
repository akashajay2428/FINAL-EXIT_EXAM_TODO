const mongoose=require('mongoose');

const todoSchema=mongoose.Schema({
    work:{type:String,required:true},
    status:{type:String,required:true},
    time:{type:String,required:true}
})

const tododata=mongoose.model('todo',todoSchema);

module.exports=tododata;