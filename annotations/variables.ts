// type annotation
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let myNums: number[] = [1, 2, 3];
let myBool: boolean[] = [true, false, true];

// Classes
class Car {

}

// instance of a car similar to java
let car: Car = new Car();

// Object literal 
// inline type setting
let point: { x: number; y:number } = {
  x: 10, 
  y: 20
};

// Function
// annotation: `: (i: number) => void` <- what we are telling typescript
//            this function takes as input and output of funtion
const logNumber: (i: number) => void = (i:number) => {
  console.log(i);
};

// Why would we use type annotations vs inference


/** WHEN TO USE
 * Annotations
 * - When we declare a variable on one line then initialize it later
 * - when we want a vaiable to have a type that cant be inferred
 * - when a function returns the 'any' type and we need to clarify the value
 * 
 * Inference
 * - Always, we use this most of the time
 */

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// json.parse returns type: 'any' this is one of many functions
// that return type: any note: we as devs can write functions with
//  a return type any use this to annotate the types returned.
const coordinates: {x: number; y:number} = JSON.parse(json);
console.log(coordinates);

// 2) Declare a var on one line and init it later
let words = ['red', 'green', 'blue'];
// obviously would have been better to init = false
// this is just a contrived example
let foundWord: boolean; 

for(let i=0; i< words.length; i++) {
  if(words[i] == 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
// again contraived example this is not the best code approach
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i=0; i<numbers.length; i++){
  if(numbers[i] >0) {
    numberAboveZero = numbers[i];
  }
}
