const env = require('dotenv').config();
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
  await mongoose.connect(process.env.mongoose_connection_string);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main() 