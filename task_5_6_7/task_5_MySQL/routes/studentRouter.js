const router = require('express').Router();

const { createStudent, 
    updateStudent,
    getStudent,
    deleteStudent
 } = require('../controllers/studentControllers');

router.route('/createStudent').post( createStudent );
router.route('/updateStudent/:id').post(updateStudent);
router.route('/getStudent').post(getStudent);
router.route('/deleteUser/:id').post(deleteStudent);

module.exports = router;