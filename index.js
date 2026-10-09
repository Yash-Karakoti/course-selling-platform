const express = require('express');
const app = express();
const port = 3000;
const mongoose = require ('mongoose');

const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

app.use("/api/v1/user", userRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  await mongoose.connect('mongodb+srv://karakoti:HXt56THQrOzaSbGy@cluster0.xm1d94g.mongodb.net/coursera-app');
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main() 