const carMakers = ['Ford', 'kia'];
const strArr: string[] = [];
const dates = [new Date(), new Date()];

// 2D Array string type: string[][]
const carsByMake:string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with Inference when extracting values
const myCar = carMakers[0];
const secCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(123); // Err incompatible type number

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const importantDatesTwo: (string | Date)[] = [new Date()];
importantDatesTwo.push('2030-10-10');
importantDatesTwo.push(123); // error not allowed type.