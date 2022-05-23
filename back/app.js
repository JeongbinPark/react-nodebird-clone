const express = require('express');
const cors = require('cors');

const app = express();
const db = require('./models');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

db.sequelize.sync()
  .then(()=>{
    console.log("DB connected...");
  })
  .catch(console.error);

app.use(cors({
  origin: true,
  credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/post', postRouter);

app.use('/user', userRouter);


app.listen(3065, ()=>{console.log("Server is Listening...");});