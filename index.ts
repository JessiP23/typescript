//Vehicle class
class Vehicle {
  status: string = "stopped"; //default value of stopped
  
  //properties of the class such as make, model, and wheels
  constructor(public make: string, public model: string, public wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  //method start with no parameters
  //changes the status to started
  start(): void {
    this.status = "started";
  }
  //method named stop with no parameters
  //changes the status property to stopped
  stop(): void {
    this.status = "stopped";
  }
}

//Car class, inherites methods
class Car extends Vehicle {
  //parameters make and model
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}
  
class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}
  
function printStatus(vehicle): void {
  if (vehicle.status === "running") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}
  
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUppercase());
  
const myBuick = new Car("Buick", "Regal");
//myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
//console.log(myBuick.mdl);
  