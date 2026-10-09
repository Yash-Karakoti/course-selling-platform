const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require('../db');

adminRouter.post('/signup', (req, res) => {
  res.send('Admin signup endpoint');
});

adminRouter.post('/signin', (req, res) => {
  res.send('Admin signin endpoint');
});

adminRouter.post('/courses', (req, res) => {
  res.send('Admin courses endpoint');
});

adminRouter.put('/courses', (req, res) => {
  res.send('Admin courses endpoint');
});

adminRouter.get('/courses/bulk', (req, res) => {
  res.send('Admin courses endpoint');
});

module.exports = {
    adminRouter: adminRouter
}
