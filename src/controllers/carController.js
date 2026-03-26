const carReposito = require("../repositories/car/Repository");
// Listar

async function ListarCars(req, res) {
    const cars = await carRepository.getAllCars();
    res.json(cars);
}

// Buscar por id

async function getCar(req, res) {
    const car = await carRepository.getCarById(req.params.id);

    if (!car) {
        return res.status(404).json ({ erro: "carro não encontrado"})
    }
res.json(car);

}

module.exports = {
    listarCars,
    getCar
};

