class Motorcycle {
  constructor() {
    this.parts = [];
  }

  listParts() {
    return `Bike parts: ${this.parts.join(', ')}\n`;
  }
}

export default Motorcycle;
