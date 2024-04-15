const { Router } = require('express');
const controler = require('./controller');


const router = Router();

// router.get('/', (req, res) => {
//     res.send("using api route!!")
// });

router.get('/', controler.getStudents);
router.post('/', controler.addStudent);
router.get('/:id', controler.getStudentById);
router.delete('/:id', controler.removeStudent);
router.put('/:id', controler.updateStudent);

module.exports = router;
