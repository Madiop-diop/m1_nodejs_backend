module.exports = (sequelize, DataTypes) =>{
    const Voiture = sequelize.define('voiture',
    {
        type : DataTypes.STRING,
        matricule : DataTypes.STRING
    },
    {
        freezeTableName : true
    });

    return Voiture;
};