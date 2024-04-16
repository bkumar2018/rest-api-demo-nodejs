const express = require('express');
const studentRoutes = require('./src/student/routes');


const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello, welcome to student registration portal! For Registration use URI - /api/v1/students");
});

app.use("/api/v1/students", studentRoutes);


console.log("Hello, welcome to student registration portal! For Registration use URI - /api/v1/students")

app.listen(port, () => console.log('app listening on port ${port}'));

// const url = "http://localhost:3000/api/v1/students";

const { exec } = require('child_process');

exec('curl -s http://localhost:3000/api/v1/students', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
