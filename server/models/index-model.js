'use strict'

const Sequelize = require('sequelize');

const path = require('path');
const basename = path.basename(__filename);

const fs = require('fs');

const env = process.env.NODE_ENV || 'develpopment';
const config = require(__dirname + '/../config/config.json')[env];

const db = {};

let sequelize;
if(config.use_env_varible) {
    sequelize = new Sequelize(process.env[config.use_env_varible], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[modelName] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.sequelize = sequelize;

module.exports = db;