module.exports = (sequelize, DataTypes) =>{
    const Passager = sequelize.define('passager',
    {
        prenom : DataTypes.STRING,
        nom : DataTypes.STRING,
        adresse : DataTypes.STRING,
        tel : DataTypes.INTEGER,
        cni : DataTypes.INTEGER
    },
    {
        freezeTableName : true
    });

    return Passager;
};