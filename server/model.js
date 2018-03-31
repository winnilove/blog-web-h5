const mongoose = require("mongoose");
//连接mongoose
const DB_URL = "mongodb://127.0.0.1:27017/chat";
mongoose.connect(DB_URL);


const models={
  user:{
    'user':{type:String,require:true},
    'pwd':{type:String,require:true},
    'type':{type:String,require:true},
    //头像
    'avatar':{type:String},
    //简介
    'udesc':{type:String},
    'title':{type:String},
    //如果是boss
    'company':{type:String},
    'money':{type:String}
  },
  chet:{

  }
}
for(let m in models){
  mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports={
  getModel:function(name){
    return mongoose.model(name)
  }
}