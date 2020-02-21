class Car {
  constructor() {
    this.gas = 66;
  }

  addGas() {
    if (this.gas < 66) {
      this.gas += 36;
      console.log('Regular car filled with 36 units of gas.');
    }
  }

  drive() {
    if (this.gas >= 6) {
      this.gas -= 6;
      console.log(`Regular car drove around, it now has ${this.gas} units of gas.`);
    } else {
      throw new Error('Regular car can\'t drive! It has no gas!');
    }
  }
}

export default Car;
