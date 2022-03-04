const { options } = require("nodemon/lib/config");

module.exports = {
    port: process.env.PORT || 8000,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
           dialect: process.env.DIALECT || 'sqlite',
           host: process.env.HOST,
           storage: './tabtracker.sqlite'
        }
    }
}