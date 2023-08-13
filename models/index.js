const dbconfig = require('../config/db-config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbconfig.DATABASE,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect: dbconfig.DIALECT
});

const db = {};
db.sequelize=sequelize;
db.Sequelize = Sequelize;
db.User = require('./user')(sequelize,Sequelize.DataTypes);
db.Voiture = require('./voiture.model')(sequelize,Sequelize,Sequelize.DataTypes);
db.Passager = require('./passager.model')(sequelize,Sequelize,Sequelize.DataTypes);
db.Bagage = require('./bagage.model')(sequelize,Sequelize,Sequelize.DataTypes);
db.Depart = require('./depart.model')(sequelize,Sequelize,Sequelize.DataTypes);
db.Chauffeur = require('./chauffeur.model')(sequelize,Sequelize,Sequelize.DataTypes);

db.Voiture.hasMany(db.Passager, {foreignKey: 'voitureID', as: 'passager', onDelete: 'cascade' });
db.Passager.belongsTo(db.Voiture, { foreignKey: 'voitureID', as: 'voiture' });

db.Passager.hasMany(db.Bagage, {foreignKey:'passagerID', as : 'bagage', onDelete : 'cascade'});
db.Bagage.belongsTo(db.Passager, { foreignKey: 'passagerID', as: 'passager' });

db.Voiture.hasMany(db.Depart,{foreignKey: 'voitureID', as : 'depart', onDelete: 'cascade'} );
db.Depart.belongsTo(db.Voiture, { foreignKey: 'voitureID', as: 'voiture' });

db.Chauffeur.hasMany(db.Depart, { foreignKey: 'chauffeurID', as: 'depart', onDelete: 'cascade'});
db.Depart.belongsTo(db.Chauffeur, { foreignKey: 'chauffeurID', as: 'chauffeur' });

module.exports = db; 