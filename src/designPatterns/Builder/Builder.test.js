import Car from './Car';
import CarBulider from './CarBuilder';
import Motorcycle from './Motorcycle';
import MotorcycleBuilder from './MotorcycleBuilder';
import VehicleDirector from './VehicleDirector';

describe('Builder Pattern', () => {
  it('builds and returns a complex motorcycle object', () => {
    // Given
    const carBuilder = new CarBulider();
    // When
    carBuilder.addWheels();
    carBuilder.addWheels();
    carBuilder.addEngine();
    carBuilder.addWheels();
    carBuilder.addCoolModification();
    // Then
    const completeCar = carBuilder.getProduct();
    expect((completeCar.parts)).toEqual(['Car Wheels', 'Car Wheels', 'Car Engine', 'Car Wheels', 'Cool Spoiler']);
  });

  it('builds and returns a complex motorcycle object', () => {
    // Given
    const motorcycleBuilder = new MotorcycleBuilder();
    // When
    motorcycleBuilder.addEngine();
    motorcycleBuilder.addEngine();
    motorcycleBuilder.addWheels();
    motorcycleBuilder.addCoolModification();
    // Then
    const completeMotorcycle = motorcycleBuilder.getProduct();
    expect((completeMotorcycle.parts)).toEqual(['Bike Engine', 'Bike Engine', 'Bike Wheels', 'Biker Handlebars']);
  });

  describe('Car', () => {
    describe('listParts', () => {
      it('should list its parts by returning a string', () => {
        // Given
        const carInstance = new Car();
        carInstance.parts = [1, 2, 3];
        // When
        const partsString = carInstance.listParts();
        // Then
        expect(partsString).toEqual('Car parts: 1, 2, 3\n');
      });
    });
  });

  describe('Motorcycle', () => {
    describe('listParts', () => {
      it('should its parts by returning a string', () => {
        // Given
        const motorcycleInstance = new Motorcycle();
        motorcycleInstance.parts = [1, 2, 3];
        // When
        const partsString = motorcycleInstance.listParts();
        // Then
        expect(partsString).toEqual('Bike parts: 1, 2, 3\n');
      });
    });
  });

  describe('VehicleDirector', () => {
    const builderObject = {
      addEngine: jest.fn(),
      addWheels: jest.fn(),
      addCoolModification: jest.fn(),
    };
    let director = null;
    beforeEach(() => {
      director = new VehicleDirector(builderObject);
    });

    describe('buildMinimalVehicle', () => {
      it('should call the two minimal vehicle builder methods', () => {
        // When
        director.buildMinimalVehicle();
        // Then
        expect(builderObject.addEngine).toHaveBeenCalled();
        expect(builderObject.addWheels).toHaveBeenCalled();
      });
    });

    describe('buildSportsVehicle', () => {
      it('should call the three sports vehicle builder methods', () => {
        // When
        director.buildSportsVehicle();
        // Then
        expect(builderObject.addEngine).toHaveBeenCalled();
        expect(builderObject.addWheels).toHaveBeenCalled();
        expect(builderObject.addCoolModification).toHaveBeenCalled();
      });
    });

    describe('setBuilder', () => {
      it('should change the builder to the one provided in the function argument', () => {
        // Given
        const newBuilder = '🦓';
        // When
        director.setBuilder(newBuilder);
        // Then
        expect(director.builder).toEqual('🦓');
      });
    });
  });
});
