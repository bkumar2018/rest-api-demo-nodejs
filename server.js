const express = require('express');
const studentRoutes = require('./src/student/routes');


const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello, welcome to student registration portal! For Registration use URI - /api/v1/students");
});

app.use("/api/v1/students", studentRoutes);


const moment = require(moment);
console.log("Hello, welcome to student registration portal! For Registration use URI - /api/v1/students")
const date = moment.format('LL');
console.log(date);

app.listen(port, () => console.log('app listening on port ${port}'));
