const Joi = require('joi');

const commonServices = require('../commonServices/service');
const responses = require('../responses/responses');

const apiReferenceModule = 'address';


const getStates = (req, res, next) => {
    const schema = Joi.object().keys({
        q: Joi.string().required(),
        limit: Joi.string().required(),
        offset: Joi.string().required()
    });
    if (commonServices.validateFields(req.query, res, schema)) {
        req.query.apiReference = {
            module: apiReferenceModule,
            api: "getStates"
        };
        next();
    } else {
        responses.parameterMissingResponse(res);
    }
};

const getTowns = (req, res, next) => {
    const schema = Joi.object().keys({
        q: Joi.string().required(),
        limit: Joi.string().required(),
        offset: Joi.string().required()
    });
    if (commonServices.validateFields(req.query, res, schema)) {
        req.query.apiReference = {
            module: apiReferenceModule,
            api: "getTowns"
        };
        next();
    } else {
        responses.parameterMissingResponse(res);
    }
};

const getDistrict = (req, res, next) => {
    const schema = Joi.object().keys({
        q: Joi.string().required(),
        limit: Joi.string().required(),
        offset: Joi.string().required()
    });
    if (commonServices.validateFields(req.query, res, schema)) {
        req.query.apiReference = {
            module: apiReferenceModule,
            api: "getDistrict"
        };
        next();
    } else {
        responses.parameterMissingResponse(res);
    }
};


module.exports.getStates = getStates;
module.exports.getTowns = getTowns;
module.exports.getDistrict = getDistrict;