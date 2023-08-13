module.exports = (sequelize, DataTypes) =>{
    const Depart = sequelize.define('depart',
    {
        date : DataTypes.DATE,
        destination : DataTypes.STRING
    },
    {
        freezeTableName : true
    });

    return Depart;
};