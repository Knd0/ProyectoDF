const data = require('../../cars.json');
const { Car, User } = require('../db')
const { deleteImage } = require('../utils/cloudinary')


const getDbCars = async () => {
    return await Car.findAll();
}

const getApiCars = () => {
    return data.cars;
}

const getAllCars = async () => {
        const apiData =  getApiCars();
        const DbData = await getDbCars();
        const response = [...DbData,...apiData ];
        return response;
}

const getCarsByClient = async (cliente) => {
    const data = await getAllCars();
    const filteredCars = data.filter((car) => car.cliente.toLowerCase().includes(marca.toLowerCase()));
        return filteredCars;
}

const getCarByBrand = async (marca) => {
        const data = await getAllCars();
        const filteredCars = data.filter((car) => car.marca.toLowerCase().includes(marca.toLowerCase()));
        return filteredCars;
}

const getCarByModel = async (modelo) => {
        const data = await getAllCars();
        const filteredCars = data.filter((car) => car.modelo.toLowerCase().includes(modelo.toLowerCase()));
        return filteredCars
}

const getCarByPlaca = async (placa) => {
    const data = await getAllCars();
    const filteredCars = data.filter((car) => car.placa.toLowerCase().includes(placa.toLowerCase()));
    return filteredCars
}

const getCarDetail = async (id) => {
    const data = await getAllCars();
    const filteredCars = data.filter((car) => car.id == id||car.carId==id );
    return filteredCars;
}
const createCar = async ({ marca, modelo, cliente, placa, imagen, ...restOfcar }, userId) => {
    if (!marca || !modelo || !cliente || !placa ) return ('Missing info');
    const carCreate =  await Car.create({ marca, modelo, cliente, placa, imagen, ...restOfcar});
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if (searchUser) {
        searchUser.cars.push(carCreate.carId);
        await User.update({ cars: searchUser.cars }, {
            where: { empresa: cliente }
        });
    } else return ('this user does not exist')
    return carCreate;
}



const deleteCarById = async(userId, id) => {
    if(!userId) return ('You need to login for delete a car')
    const car = await Car.findByPk(id);
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This User not exist')
    if (!car) return ('Car not found');
    if(car.img.public_id) {
        const deleteImg = await deleteImage(car.img.public_id)
        }

    await car.destroy();
    if(searchUser.publications.length){
        searchUser.publications = searchUser.publications.filter((carId) => carId !== id)
        await User.update({ publications: searchUser.publications }, {
            where: { userId: userId }
        });
    } else return ('You dont have publications')
    if(searchUser.favorites.length){
        searchUser.favorites = searchUser.favorites.filter((carId) => carId !== id)
        await User.update({ favorites: searchUser.favorites }, {
            where: { userId: userId }
        });
    } else return ('You dont have favorites')

    return 'Car successful delete';
    }


const editCar = async (userId, id, carUpdates) => {
        if (!id) return ('Id not provided');
        const car = await Car.findByPk(id);
        if (!car) return ('Car not found');
        let searchUser = await User.findOne({
            where: { userId: userId }
        });
        if(searchUser){
            if(searchUser.publications && searchUser.publications.indexOf(id) === -1) return ('you can not edit this car')
            else {
                await car.update({...carUpdates});
        return 'The car was updated';
            }
        }
}


module.exports = {
    getApiCars,
    getCarByBrand,
    getCarByModel,
    getCarDetail,
    deleteCarById,
    createCar,
    editCar,
    getAllCars,
    getCarByPlaca,
    getCarsByClient
};
