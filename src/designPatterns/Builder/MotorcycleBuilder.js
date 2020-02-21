import Motorcycle from './Motorcycle.js';

class MotorcycleBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.result = new Motorcycle();
  }

  addEngine() {
    this.result.parts.push('Bike Engine');
  }

  addWheels() {
    this.result.parts.push('Bike Wheels');
  }

  addCoolModification() {
    this.result.parts.push('Biker Handlebars');
  }

  getProduct() {
    const { result } = this;
    this.reset();
    return result;
  }
}

export default MotorcycleBuilder;
