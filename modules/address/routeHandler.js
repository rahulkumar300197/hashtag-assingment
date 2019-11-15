const path = require('path');


const commonServices = require('../commonServices/service');
const responses = require('../responses/responses');
const address = require('./controller');


const getStates = (req, res) => {
    address.getStates(req.query).then((data) => {
        responses.actionCompleteResponse(res, data);
    }, (error) => {
        responses.sendCustomResponse(res, error);
    });
}

const getTowns = (req, res) => {
    address.getTowns(req.query).then((data) => {
        responses.actionCompleteResponse(res, data);
    }, (error) => {
        responses.sendCustomResponse(res, error);
    });
}

const getDistrict = (req, res) => {
    address.getDistrict(req.query).then((data) => {
        responses.actionCompleteResponse(res, data);
    }, (error) => {
        responses.sendCustomResponse(res, error);
    });
}

const addDistrict = (req, res) => {
    address.addDistrict(req.body).then((data) => {
        responses.actionCompleteResponse(res, data);
    }, (error) => {
        responses.sendCustomResponse(res, error);
    });
}


module.exports.getStates = getStates;
module.exports.getTowns = getTowns;
module.exports.getDistrict = getDistrict;
module.exports.addDistrict = addDistrict;