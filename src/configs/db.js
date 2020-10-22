const mysql = require('mysql2')
const {BHOST,BUSER,BPASS,BNAME} = require('../helpers/env')

const connection = mysql.createConnection({
    host: BHOST,
    user: BUSER,
    password: BPASS,
    database: BNAME
})

connection.connect((error) => {
    if (error) {
      console.log(`Error to connect ${BNAME}`,error)
      return
    }
    console.log(`Connect database ${BNAME}`);
  });

module.exports = connection


