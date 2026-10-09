const { Router } = require("express");

const courseRouter = Router();

courseRouter.get('/preview', (req, res) => {
  res.send('courses!');
});


courseRouter.post('/purchase', (req, res) => {
  // money comes this way
  res.send('Course purchase endpoint');
});

module.exports = {
    courseRouter: courseRouter
}