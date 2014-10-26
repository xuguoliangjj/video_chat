var mysql = require("mysql");

var config = {
    host:"127.0.0.1",
    user:"root",
    password:"123456",
    database:"lqsm"
};

module.exports.connect = function() {
    db = mysql.createConnection(config);
    db.connect(handleError);
    db.on('error', handleError);
}


function handleError (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            module.exports.connect();
        } else {
            console.error(err.stack || err);
        }
    }
}