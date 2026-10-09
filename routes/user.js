const { Router } = require('express');
const userRouter = Router();

userRouter.post('/signup', (req, res) => {
  res.send('User signup endpoint');
});

userRouter.post('/signin', (req, res) => {
  res.send('User signin endpoint');
});

userRouter.get('/purchases', (req, res) => {
  res.send('User purchases endpoint');
});

module.exports = {
    userRouter: userRouter
}