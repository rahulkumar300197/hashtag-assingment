const express = require('express');
const router = express.Router();

const validator = require('./validator');
const routeHandler = require('./routeHandler');



router.get('/state', validator.getStates, routeHandler.getStates);
router.get('/town', validator.getTowns, routeHandler.getTowns);
router.get('/district', validator.getDistrict, routeHandler.getDistrict);
router.post('/add_district', routeHandler.addDistrict);

module.exports = router;