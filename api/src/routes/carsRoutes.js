const { Router } = require('express')
const { getCars } = require('../handlers/carsHandlers')

const carsRouter = Router();

carsRouter.get('/', getCars)

module.exports = carsRouter