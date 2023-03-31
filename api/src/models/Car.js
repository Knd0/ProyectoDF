const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Car', {
    carId:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    placa :{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    cliente:{
        type: DataTypes.STRING,
        allowNull : false
    },
    numeroSiniestro:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gestorFlota:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    AmparoAfectado:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaSiniestro:{
        type: DataTypes.STRING,
        allowNull : false
    },
    tallerAsignado:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagen:{
        type: DataTypes.JSON
    },
    fechaValoracion:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fechaIngresoTaller:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fechaEntregaVehiculo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    diasEnTaller:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    telefono:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    ciudad:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    contactoTaller:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    recobro:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    reserva:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    valorSiniestro:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    valorFinal:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    version:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
});
};
