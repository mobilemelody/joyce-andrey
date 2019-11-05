const mysql = require('mysql');
const pool = mysql.createPool(process.env.JAWSDB_MARIA_URL);
module.exports.pool = pool;