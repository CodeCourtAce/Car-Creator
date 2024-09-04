// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck  {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  maxSpeed: number;
  wheels: any[];
  towingCapacity: number;
  

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    maxSpeed: number,
    wheels: any[],
    towingCapacity: number
  ) {
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.maxSpeed = maxSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;
  }
  startEngine() {
    console.log(`${this.make} ${this.model} engine started.`);
  }

  stopEngine() {
    console.log(`${this.make} ${this.model} engine stopped.`);
  }

  drive() {
    console.log(`${this.make} ${this.model} is driving.`);
  }
}


// Export the Truck class as the default export
export default Truck;

