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
        type: DataTypes.STRING,
        allowNull: false
    },
    placa :{
        type: DataTypes.STRING,
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
    amparoAfectado:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaSiniestro:{
        type: DataTypes.DATE,
        allowNull : false
    },
    tallerAsignado:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    imagen:{
        type: DataTypes.JSON
    },
    fechaValoracion:{
        type: DataTypes.DATE,
        allowNull: true,
    },
    fechaIngresoTaller:{
        type: DataTypes.DATE,
        allowNull: true,
    },
    fechaEntregaVehiculo: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    diasEnTaller:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    telefono:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ciudad:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    contactoTaller:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    recobro:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    reserva:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    valorSiniestro:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    valorFinal:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    version:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    createInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
});
};
