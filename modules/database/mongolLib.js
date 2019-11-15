const MongoClient = require('mongodb').MongoClient;

const initializeConnection = () => {
    return new Promise((resolve, reject) => {

        const url = config.get('databaseSettings.mongodb.MONGO_URI');
        const dbName = config.get('databaseSettings.mongodb.DB_NAME');

        MongoClient.connect(url,{ useUnifiedTopology: true }, (err, client) => {
            if (err) {
                console.log("ERROR IN CONNECTING WITH MONGO DB : ", err);
            }
            return resolve(client.db(dbName));
        });
    });
}


exports.initializeConnection = initializeConnection;