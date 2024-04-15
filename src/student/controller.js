const pool = require('../../db.js');
const queries = require('./queries.js')

const getStudents = (req, res) => {
    //console.log('getting students')
    // pool.query("SELECT * FROM students", (error, results) => {
    //     if(error) throw error;
    //     res.status(200).json(results.rows);
    // })
    pool.query(queries.getStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};


const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });

};

const addStudent = (req, res) => {
    const {name, email, age, dob} = req.body;
    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if(results.rows.length){
            res.send("Email already exists.");
        }
        //add student to DB
        pool.query(queries.addStudent, 
            [name, email, age, dob], 
            (error, results) => {
                if(error) throw error;
                res.status(201).send("Student created successfully!")
        });

    });
};

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    //check id exists
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not exist in the database.");
        }
        
        pool.query(queries.removeStudent, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Student removed successfully.");
        });
    });
};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    //check id exist
    pool.query(queries.getStudentById, [id], (error, results) =>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not exist in the database.");
        }

        pool.query(queries.updateStudent, [name, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Student updated successfully");

        });
    });
};


module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
}