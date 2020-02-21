class Car {
  constructor() {
    this.parts = [];
  }

  listParts() {
    return `Car parts: ${this.parts.join(', ')}\n`;
  }
}

export default Car;
