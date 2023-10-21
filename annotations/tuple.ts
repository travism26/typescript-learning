/**
 * Array like structure where each element represends some property of a record
 * multiple diff properties to describe the same thing.
 * Ex: Drink: {color: brown, carbonated: true, sugar: 40} 1 object represents 1 drink
 */

// What if we wanted to represent this in an array?
const ex = ['brown', true, 40];
// tuples have a fixed data structure if we say the 
// object should look: [color, carbonated, sugar] we 
// shouldnt mix the order of the values.

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// how to enforce the order of data
const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40; // Err we cant put number in the string position.

type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

/**
 *  Where do we use this? Not to often, maybe when using a CVS file
 */

// What does the numbers mean? this can cause confusions.
const carSpecs: [number, number] = [400, 3354];

// Objects are more clear vs tuples
const carStats = {
  horsePower: 400,
  weight: 3354
};