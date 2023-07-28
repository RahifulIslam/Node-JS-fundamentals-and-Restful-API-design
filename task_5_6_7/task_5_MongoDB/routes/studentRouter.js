const router = require('express').Router();

const { createStudent, 
    updateStudent,
    getStudent,
    deleteStudent
 } = require('../controllers/studentControllers');

// router.route('/createStudent').post( createStudent );
// router.route('/updateStudent/:id').post(updateStudent);
// router.route('/getStudent').post(getStudent);
// router.route('/deleteUser/:id').post(deleteStudent);

router.post('/createStudent', createStudent)
router.post('/updateStudent/:id', updateStudent)
router.post('/getStudent', getStudent)
router.post('/deleteUser/:id', deleteStudent)


module.exports = router;