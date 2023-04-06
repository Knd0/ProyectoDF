const { getCarsByClient, getCarByBrand, getCarByModel, getCarDetail, deleteCarById, createCar, editCar, getAllCars, getCarByPlaca } = require("../controllers/carsControllers.js");
const { uploadImage } = require("../utils/cloudinary.js");
const fs = require('fs-extra')

const getCars = async (req, res) => {
    const { marca, modelo, placa, cliente } = req.query;

    try {
        if(marca){
            const response = await getCarByBrand(marca);
            res.status(200).send(response);
        }
        else if(modelo){
            const response = await getCarByModel(modelo);
            res.status(200).send(response);
        } 
        else if(placa){
            const response = await getCarByPlaca(placa);
            res.status(200).send(response);
        }
        else if(cliente){
            const response = await getCarsByClient(cliente);
            res.status(200).send(response);
        }
        else {
            const response = await getAllCars();
            res.status(200).send(response);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getCarById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getCarDetail(id);
        res.status(200).send(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const postCar = async (req, res) => {
    const { userId } = req.params
    const { body: car } = req;
    try {
        if(req.files?.img){
            const result = await uploadImage(req.files.img.tempFilePath)
            car.img = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            await fs.unlink(req.files.img.tempFilePath)
        }
        const create = await createCar(car, userId);
        res.status(200).json(create);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const putCar = async (req, res) => {
    const { userId, id } = req.params;
	try {
        if(id){
		    const response = await editCar(userId, id, req.body);
            res.status(200).send(response);
        }
	} catch (error) {
		res.status(500).json({ error: error.message });
	}

}

const deleteCar = async (req, res) => {
    const { userId, id } = req.params;
    try {
        const response = await deleteCarById(userId, id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getCars,
    getCarById,
    postCar,
    putCar,
    deleteCar
}

