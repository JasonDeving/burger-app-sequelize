var Sequelize = require('sequelize');

var source = {
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    },
    jawsDB: {
        port: 3306,
        host: 'z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'wdynmqq98179uvqa',
        password: 'vt1xxgtx3o8w1u6g',
        database: 'cb9rt0iraihdajk6'
    }
}

var selectedSource = source.jawsDB;


var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
    host: selectedSource.host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = sequelize;
