import GasStation from './GasStation.js';
import Car from './Car.js';
import TeslaCybertruck from './TeslaCybertruck.js';
import TeslaCybertruckAdapter from './TeslaCybertruckAdapter.js';

const gasStation = new GasStation();
const car = new Car();
const tesla = new TeslaCybertruck();

car.drive();
car.drive();
car.drive();
gasStation.fill(car);
car.drive();

tesla.drive();
tesla.drive();
// gasStation.fill(tesla);
console.log('gasStation.fill(tesla); Doesn\'t work, since Tesla can\'t be filled with gas.');

const adaptedTesla = new TeslaCybertruckAdapter(tesla);
gasStation.fill(adaptedTesla);
tesla.drive();
tesla.drive();
