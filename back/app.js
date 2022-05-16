const express = require('express');

const app = express();
const db = require('./models');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

db.sequelize.sync()
  .then(()=>{
    console.log("DB connected...");
  })
  .catch(console.error);

app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/post', postRouter);

app.use('/user', userRouter);


app.listen(3065, ()=>{console.log("Server is Listening...");});