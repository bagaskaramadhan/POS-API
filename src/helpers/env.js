require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    secretKey: process.env.secretKey,
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    HOSTURL: process.env.HOSTURL,
    BUSER: process.env.DB_USER,
    BHOST: process.env.DB_HOST,
    BNAME: process.env.DB_DATABASE,
    BPASS: process.env.DB_PASSWORD
}