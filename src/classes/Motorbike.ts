// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
  class Motorbike {
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    maxSpeed: number;
    wheels: any[];
  
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      maxSpeed: number,
      wheels: any[]
    ) {
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.maxSpeed = maxSpeed;
      this.wheels = wheels;
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
  
  export default Motorbike;
