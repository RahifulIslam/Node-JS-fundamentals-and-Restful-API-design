const router = require('express').Router();

const { createUser } = require('../controllers/userControllers');

router.route('/createUser').post( createUser );

module.exports = router;