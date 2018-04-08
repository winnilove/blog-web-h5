const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const model = require("./model");
const User = model.getModel("user");
const Chat = model.getModel("chat");
const app = express();
//work with express
//socket.io和express绑定起来
const server = require('http').Server(app)
const io = require("socket.io")(server);
// io shi quanju lianjie de qingqiu
//socket shi zhegelianjiede qingqiu
io.on('connection', function(socket) {
  socket.on('sendmsg', function(data) {
    console.log(data)
    const {
      from,
      to,
      msg
    } = data;
    const chatid = [from, to].sort().join('_')
    // Chat.create({
    //   chatid,
    //   from,
    //   to,
    //   content: msg
    // }, function(err, doc) {
    //   io.emit('recvmsg', Object.assign({}, doc._doc))
    // })
    io.emit('recvmsg', data)

  })
  console.log('login')
})

const userRouter = require("./user");


app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", userRouter);

server.listen(9093, function() {
  console.log("ok 9093");
});