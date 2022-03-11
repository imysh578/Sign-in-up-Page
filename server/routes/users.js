const express = require('express');
const router = express.Router();

const {Users} = require('../models/index.js')

/* Crypting password using sha256 for security */
const crypto = require('crypto')
function hash(password) {
  return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST sign-in, check DB */
router.post('/signin', async (req,res,next) => {
  try {
    const email = req.body.email;
    const password = hash(req.body.password);
    const user = await Users.findOne({
      where: {
        email : email,
        password : password,
      }
    });
    if(user) {
      res.send("SignIn Success")
    } else {
      res.send("SignIn Fail")
    }
  } catch (err) {
    console.error(err);
  }
})

router.post('/signup', async (req,res,next) => {
  try {
    const email = req.body.email;
    const password = hash(req.body.password);
    const user = await Users.findOne({
      where: {
        email : email,
      }
    });
    if (user) {
      res.send("Already Existed")
    } else {
      await Users.create({
        email: email,
        password: password,
      });
      res.send("Created successfully")
    }
  } catch (err) {
    console.error(err);
  }
})

module.exports = router;
