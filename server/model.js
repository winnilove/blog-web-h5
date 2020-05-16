const mongoose = require("mongoose");
//连接mongoose
const DB_URL = "mongodb://127.0.0.1:27017/user";
mongoose.connect(DB_URL, { useNewUrlParser: true });

const models = {
  user: {
    'user': {
      'type': String,
      'require': true
    },
    'pwd': {
      'type': String,
      'require': true
    },
    'type': {
      'type': String,
    },
    //头像
    'avatar': {
      'type': String
    },
    //简介
    'desc': {
      'type': String
    },
    'title': {
      'type': String
    },
    //如果是boss
    'company': {
      'type': String
    },
    'money': {
      'type': String
    },
    'content':{
      'type': String,
    },
    'imgUrl':{
      'type': String,
    },
    'like':{
      'type': Number,
    },
    'commit':{
      'type': Object,
    },
    'create_time': {
      'type': Number,
      'default': Date.now
    }
  },
  chat: {
    'chatid': {
      'type': String,
      'require': true
    },
    'from': {
      'type': String,
      'require': true
    },
    'to': {
      'type': String,
      'require': true
    },
    'read': {
      'type': Boolean,
      'default': false
    },
    'content': {
      'type': String,
      'require': true,
      'default': ''
    },
    'create_time': {
      'type': Number,
      // 'default': Date.now
      'default': Date.now
    }
  },
  list: {
    'name': {
      'type': String,
    },
  }
}
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}