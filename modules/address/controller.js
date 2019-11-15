const Promise = require('bluebird');

const service = require('./service');
const constants = require('./../constants/constants');


const getStates = (payload) => {
    return new Promise((resolve, reject) => {
        Promise.coroutine(function* () {
            return yield service.getData(payload.apiReference, {
                limit: Number(payload.limit),
                offset: Number(payload.offset),
                query: {state: new RegExp("^" + payload.q, "i")},
                values: {"_id": 0, "state": 1, "district_code": 1, "district": 1}
            });

        })().then((data) => {
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
};


const getTowns = (payload) => {
    return new Promise((resolve, reject) => {
        Promise.coroutine(function* () {
            return yield service.getData(payload.apiReference, {
                limit: Number(payload.limit),
                offset: Number(payload.offset),
                query: {town: new RegExp("^" + payload.q, "i")},
                values: {"_id": 0, "town": 1, "state": 1, "district": 1}
            });

        })().then((data) => {
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
};


const getDistrict = (payload) => {
    return new Promise((resolve, reject) => {
        Promise.coroutine(function* () {
            return yield service.getData(payload.apiReference, {
                limit: Number(payload.limit),
                offset: Number(payload.offset),
                query: {district: new RegExp("^" + payload.q, "i")},
                values: {
                    "_id": 0,
                    "town": 1,
                    "urban_status": 1,
                    "state_code": 1,
                    "state": 1,
                    "district_code": 1,
                    "district": 1
                }
            });

        })().then((data) => {
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
};


const addDistrict = (payload) => {
    return new Promise((resolve, reject) => {
        Promise.coroutine(function* () {
            db.collection("states").insertMany(payload.cities, (err, response) => {
                console.log("err", err)
                return [];
            })

        })().then((data) => {
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
};


module.exports.getStates = getStates;
module.exports.getTowns = getTowns;
module.exports.getDistrict = getDistrict;
module.exports.addDistrict = addDistrict;
