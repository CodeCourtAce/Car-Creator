import readline from 'readline';
import Truck from './classes/Truck';
import Car from './classes/Car';
import Motorbike from './classes/Motorbike';
import Wheel from './classes/Wheel';



class Cli {
  private vehicles: any[];
  private rl: readline.Interface;

  constructor(vehicles: any[]) {
    this.vehicles = vehicles;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  static generateVin(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  startCli() {
    this.showMainMenu();
  }

  showMainMenu() {
    console.log('1. Create a new vehicle');
    console.log('2. Select an existing vehicle');
    console.log('3. Exit');
    this.rl.question('Choose an option: ', (answer) => {
      switch (answer) {
        case '1':
          this.createVehicle();
          break;
        case '2':
          this.selectVehicle();
          break;
        case '3':
          this.rl.close();
          break;
        default:
          console.log('Invalid option');
          this.showMainMenu();
          break;
      }
    });
  }

  createVehicle() {
    console.log('1. Car');
    console.log('2. Truck');
    console.log('3. Motorbike');
    this.rl.question('Choose a vehicle type: ', (answer) => {
      switch (answer) {
        case '1':
          this.createCar();
          break;
        case '2':
          this.createTruck();
          break;
        case '3':
          this.createMotorbike();
          break;
        default:
          console.log('Invalid option');
          this.createVehicle();
          break;
      }
    });
  }

  createCar() {
    this.rl.question('Enter color: ', (color) => {
      this.rl.question('Enter make: ', (make) => {
        this.rl.question('Enter model: ', (model) => {
          this.rl.question('Enter year: ', (year) => {
            const car = new Car(Cli.generateVin(), color, make, model, parseInt(year), 3000, 130, []);
            this.vehicles.push(car);
            console.log('Car created successfully');
            this.showMainMenu();
          });
        });
      });
    });
  }

  createTruck() {
    this.rl.question('Enter color: ', (color) => {
      this.rl.question('Enter make: ', (make) => {
        this.rl.question('Enter model: ', (model) => {
          this.rl.question('Enter year: ', (year) => {
            this.rl.question('Enter towing capacity: ', (towingCapacity) => {
              const truck = new Truck(Cli.generateVin(), color, make, model, parseInt(year), 5000, 120, [], parseInt(towingCapacity));
              this.vehicles.push(truck);
              console.log('Truck created successfully');
              this.showMainMenu();
            });
          });
        });
      });
    });
  }

  createMotorbike() {
    this.rl.question('Enter color: ', (color) => {
      this.rl.question('Enter make: ', (make) => {
        this.rl.question('Enter model: ', (model) => {
          this.rl.question('Enter year: ', (year) => {
            const motorbikeWheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
            const motorbike = new Motorbike(Cli.generateVin(), color, make, model, parseInt(year), 500, 125, motorbikeWheels);
            this.vehicles.push(motorbike);
            console.log('Motorbike created successfully');
            this.showMainMenu();
          });
        });
      });
    });
  }

  selectVehicle() {
    if (this.vehicles.length === 0) {
      console.log('No vehicles available');
      this.showMainMenu();
      return;
    }
    console.log('Select a vehicle:');
    this.vehicles.forEach((vehicle, index) => {
      console.log(`${index + 1}. ${vehicle.constructor.name} - ${vehicle.make} ${vehicle.model}`);
    });
    this.rl.question('Choose a vehicle: ', (answer) => {
      const vehicleIndex = parseInt(answer) - 1;
      if (vehicleIndex >= 0 && vehicleIndex < this.vehicles.length) {
        this.performAction(this.vehicles[vehicleIndex]);
      } else {
        console.log('Invalid option');
        this.selectVehicle();
      }
    });
  }

  performAction(vehicle: any) {
    console.log(`Selected vehicle: ${vehicle.constructor.name} - ${vehicle.make} ${vehicle.model}`);
    console.log('1. Start engine');
    console.log('2. Stop engine');
    console.log('3. Drive');
    console.log('4. Back to main menu');
    this.rl.question('Choose an action: ', (answer) => {
      switch (answer) {
        case '1':
          vehicle.startEngine();
          console.log('Engine started');
          this.performAction(vehicle);
          break;
        case '2':
          vehicle.stopEngine();
          console.log('Engine stopped');
          this.performAction(vehicle);
          break;
        case '3':
          vehicle.drive();
          console.log('Driving');
          this.performAction(vehicle);
          break;
        case '4':
          this.showMainMenu();
          break;
        default:
          console.log('Invalid option');
          this.performAction(vehicle);
          break;
      }
    });
  }
}

export default Cli;