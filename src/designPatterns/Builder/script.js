import CarBuilder from './CarBuilder.js';
import MotorcycleBuilder from './MotorcycleBuilder.js';
import VehicleDirector from './VehicleDirector.js';

console.log('Two cars built with the specific Builder following a common interface:');
const carBuilder = new CarBuilder();
const director = new VehicleDirector(carBuilder);
director.buildMinimalVehicle();
const toyota = carBuilder.getProduct();
director.buildSportsVehicle();
const lambo = carBuilder.getProduct();

console.log(toyota.listParts());
console.log(lambo.listParts());

console.log('Motorcycles (The same construction code is used by the Director):');
const motoBuilder = new MotorcycleBuilder();
director.setBuilder(motoBuilder);
director.buildMinimalVehicle();
const regularMotorcycle = motoBuilder.getProduct();
director.buildSportsVehicle();
const bikerMotorcycle = motoBuilder.getProduct();

console.log(regularMotorcycle.listParts());
console.log(bikerMotorcycle.listParts());

console.log('Client can use the builder directly to build custom objects. (Example - a Big Truck with many wheels and two engines)');
carBuilder.addWheels();
carBuilder.addWheels();
carBuilder.addEngine();
carBuilder.addWheels();
console.log(carBuilder.getProduct().listParts());
