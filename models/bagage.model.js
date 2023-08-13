module.exports = (sequelize, DataTypes) =>{
    const Bagage = sequelize.define('bagage',
    {
        libelle: DataTypes.STRING,
        type : DataTypes.STRING,
        quantite : DataTypes.STRING
    },
    {
        freezeTableName : true
    });

    return Bagage;
};