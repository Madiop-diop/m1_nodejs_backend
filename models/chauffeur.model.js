module.exports = (sequelize, DataTypes) =>{
    const Chauffeur = sequelize.define('chauffeur',
    {
        prenom : DataTypes.STRING,
        nom : DataTypes.STRING,
        tel : DataTypes.INTEGER,
        permis : DataTypes.STRING
    },
    {
        freezeTableName : true
    });

    return Chauffeur;
};