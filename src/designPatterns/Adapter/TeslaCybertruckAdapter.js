class TeslaCybertruckAdapter {
  constructor(teslaCybertruck) {
    this.teslaCybertruck = teslaCybertruck;
  }

  addGas() {
    this.teslaCybertruck.addCharge();
  }
}

export default TeslaCybertruckAdapter;
