/**
 * Classes: Blueprint to create an object with some fields(Values) 
 * and methods (functions) to represend a 'thing'
 * 
 * Why will we use them?
 *  These are the primary tool do create re-usable code in TS
 */

class Vehicle {

  constructor(public color: string, public year: Date){}

  protected honk(): void {
    console.log('beep');
    console.log(this.year);
  }
}

const vehicle = new Vehicle('orange', new Date());
console.log(vehicle.color);
// vehicle.honk(); // ERR cant call this

// How to override methods
class Car extends Vehicle {
  // override the parent class drive method.

  constructor(public wheels: number, color: string){
    super(color, new Date());
  }
  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();

// private does not add application security just restricts the different
// methods that other developers can call. You might also not trust other
// devs to break some application this is why to set them to private.
