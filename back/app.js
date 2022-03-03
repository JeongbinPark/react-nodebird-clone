const express = require('express');

const app = express();

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');


app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/post', postRouter);

app.use('/user', userRouter);


app.listen(3306, ()=>{console.log("Server is Listening...");});