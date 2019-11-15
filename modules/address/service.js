const Promise = require('bluebird');

const logging = require('../logging/loggingService');
const constants = require('../constants/constants');


const getData = (apiReference, payload) => {
    return new Promise((resolve, reject) => {
        Promise.coroutine(function* () {
            let data = yield db.collection('states').find(payload.query, payload.values).limit(payload.limit).skip(payload.offset).toArray();
            return data;
        })().then((data) => {
            resolve(data);
        }, (error) => {
            logging.log(apiReference, {ERROR: error, DATA: {}});
            reject({
                "message": constants.responseMessages.ERROR_IN_EXECUTION,
                "status": constants.responseFlags.ERROR_IN_EXECUTION,
                "data": {}
            });
        });
    });
};


module.exports.getData = getData;