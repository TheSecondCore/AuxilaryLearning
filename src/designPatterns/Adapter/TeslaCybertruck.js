class TeslaCybertruck {
  constructor() {
    this.charge = 100;
  }

  addCharge() {
    if (this.charge < 100) {
      this.charge += 50;
      console.log('Tesla Cybertruck filled with 50 units of charge.');
    }
  }

  drive() {
    if (this.charge >= 10) {
      this.charge -= 10;
      console.log(`Tesla Cybertruck drove around, it now has ${this.charge} units of charge.`);
    } else {
      throw new Error('Tesla Cybertruck car can\'t drive! It has no charge!');
    }
  }
}

export default TeslaCybertruck;
