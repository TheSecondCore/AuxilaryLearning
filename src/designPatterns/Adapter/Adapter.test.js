import GasStation from './GasStation';
import Car from './Car';
import TeslaCybertruck from './TeslaCybertruck';
import TeslaCybertruckAdapter from './TeslaCybertruckAdapter';

describe('Adapter Pattern', () => {
  it('should allow GasStation to charge a Tesla', () => {
    // Given
    const gasStation = new GasStation();
    const tesla = new TeslaCybertruck();
    tesla.drive();
    // When
    const adaptedTesla = new TeslaCybertruckAdapter(tesla);
    // Then
    expect(() => gasStation.fill(adaptedTesla)).not.toThrow();
  });

  describe('GasStation', () => {
    it('should call the addGas method on passed arguments', () => {
      // Given
      const gasStationInstance = new GasStation();
      const car = {
        addGas: jest.fn(),
      };
      // When
      gasStationInstance.fill(car);
      // Then
      expect(car.addGas).toHaveBeenCalled();
    });

    it('should be able to charge a Car', () => {
      // Given
      const gasStation = new GasStation();
      const car = new Car();
      car.drive();
      // Then
      expect(() => gasStation.fill(car)).not.toThrow();
    });

    it('should not be able to charge a Tesla', () => {
      // Given
      const gasStation = new GasStation();
      const tesla = new TeslaCybertruck();
      tesla.drive();
      // Then
      expect(() => gasStation.fill(tesla)).toThrow();
    });
  });

  describe('Car', () => {
    let carInstance = null;
    beforeEach(() => {
      carInstance = new Car();
    });

    it('should be able to fill its gas', () => {
      // Given
      carInstance.drive();
      const gasBeforeFilling = carInstance.gas;
      // When
      carInstance.addGas();
      // Then
      expect(gasBeforeFilling).toBeLessThan(carInstance.gas);
    });

    it('should not be able to drive without gas', () => {
      // Given
      carInstance.gas = 0;
      // Then
      expect(() => carInstance.drive()).toThrow();
    });
  });

  describe('Tesla Cybertruck', () => {
    let teslaInstance = null;
    beforeEach(() => {
      teslaInstance = new TeslaCybertruck();
    });

    it('should be able to charge its battery', () => {
      // Given
      teslaInstance.drive();
      const chargeBeforeCharging = teslaInstance.charge;
      // When
      teslaInstance.addCharge();
      // Then
      expect(chargeBeforeCharging).toBeLessThan(teslaInstance.charge);
    });

    it('should not be able to drive without charge', () => {
      // Given
      teslaInstance.charge = 0;
      // Then
      expect(() => teslaInstance.drive()).toThrow();
    });
  });
});
