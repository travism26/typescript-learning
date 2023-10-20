/**
 * Type annotations for functions:
 *  Code we add to tell typesscript what type of arguments a 
 *  function will receive and what type of values it will return
 * 
 * Type inference for functions:
 *  Typescript tries to figure out what type of value a 
 *  function will return
*/
//          Annotate the input;   Annotate the return value
const add = (a: number, b: number): number => { 
  return a+b;
};

/**
 * We dont get type inference on arguments! we always have to write
 * the a: number, b: number, we have type inference from the return value
 * however we will ALWAY write it, this will guarantee that we dont make
 * a mistake.
 */

function divide(a: number, b: number): number {
  return a/b;
};

const multiply = function(a:number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return undefined;
};

// this is super rare usually you return something (throwErrorTwo)
const throwError = (message: string): never => {
  throw new Error(message);
};

// more realistically or change to 'void' and not return anything
const throwErrorTwo = (message: string): string => {
  if(!message) {
    throw new Error(message);
  }
  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: 'summy'
};

const logWeather = ({ date, weather }: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};

// destructuring

logWeather(todaysWeather);