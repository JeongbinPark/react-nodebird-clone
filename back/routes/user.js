const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.userEmail,
      }
    });
    if(exUser){
      return res.status(403).send('이미 사용 중인 아이디입니다.');
    }

    const hashedPassword = await bcrypt.hash(req.body.userPassword, 10);
    await User.create({
      email: req.body.userEmail,
      nickname: req.body.userNickname,
      password: hashedPassword
    })
    res.status(201).send('ok');
  } catch (error) {
    console.log(error);
    next(error);
  }
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err){
      console.error(err);
      return next(err);
    }
    if(info){
      console.log(info);
      return res.status(401).send(info.reason);
    }
    return req.login(user, async(loginErr) => {
      if(loginErr){
        console.error(loginErr);
        return next(loginErr);
      }
      return res.status(201).json(user);
    });
  })(req, res, next);
});

module.exports = router;