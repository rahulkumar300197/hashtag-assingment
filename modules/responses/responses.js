const zlib = require('zlib');
const constants = require('./../constants/constants');


const parameterMissingResponse = (res) => {
    let response = {
        "message": constants.responseMessages.PARAMETER_MISSING,
        "status": constants.responseFlags.PARAMETER_MISSING,
        "data": {}
    };
    res.send(JSON.stringify(response));
};

const actionCompleteResponse = (res, data) => {
    res.send(data);
};

const sendCustomResponse = (res, response) => {
    res.send(JSON.stringify(response));
};


exports.parameterMissingResponse = parameterMissingResponse;
exports.actionCompleteResponse = actionCompleteResponse;
exports.sendCustomResponse = sendCustomResponse;