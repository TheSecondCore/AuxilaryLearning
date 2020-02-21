import Car from './Car.js';

class CarBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.result = new Car();
  }

  addEngine() {
    this.result.parts.push('Car Engine');
  }

  addWheels() {
    this.result.parts.push('Car Wheels');
  }

  addCoolModification() {
    this.result.parts.push('Cool Spoiler');
  }

  getProduct() {
    const { result } = this;
    this.reset();
    return result;
  }
}

export default CarBuilder;
