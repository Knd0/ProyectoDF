const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("User", {
        userId:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nickname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            require: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        picture: {
            type: DataTypes.STRING,
        },
        admin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cars: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        },
        empresa:{
            type: DataTypes.STRING,
        },
        active: {
            type: DataTypes.BOOLEAN,
            default: true,
        },
    });
};
