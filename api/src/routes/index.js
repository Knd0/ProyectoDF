const { Router } = require('express');
const carsRoutes = require('./carsRoutes')
const usersRoutes = require('./usersRoutes')

const router = Router();

router.use('/cars', carsRoutes);
router.use('/user', usersRoutes);

module.exports = router;