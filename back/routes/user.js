const express = require('express');
const bcrypt = require('bcrypt');
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

module.exports = router;