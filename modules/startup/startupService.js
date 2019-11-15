const apiReferenceModule = "startup";

const Promise = require('bluebird');

const logging = require('./../logging/loggingService');
const mongoLib = require('./../database/mongolLib');
const httpLib = require('./../httpService/httpService');

const initializeServer = () => {
    return new Promise((resolve, reject) => {
        let apiReference = {
            module: apiReferenceModule,
            api: "initializeServer"
        };
        Promise.coroutine(function* () {
            db = yield mongoLib.initializeConnection();
            let server = yield httpLib.startHttpServer();
        })().then((data) => {
            resolve(data);
        }, (error) => {
            logging.log(apiReference, {ERROR: error, DATA: {}});
            reject(error);
        });
    });
}


exports.initializeServer = initializeServer;