class VehicleDirector {
  constructor(builder) {
    this.builder = builder;
  }

  setBuilder(builder) {
    this.builder = builder;
  }

  buildMinimalVehicle() {
    this.builder.addEngine();
    this.builder.addWheels();
  }

  buildSportsVehicle() {
    this.builder.addEngine();
    this.builder.addWheels();
    this.builder.addCoolModification();
  }
}

export default VehicleDirector;
