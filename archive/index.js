// @flow
/* eslint-disable no-console */

// newer ES6 modules syntax, nodeJS doesnt natively support this so you know babel is working
import Dog from './dog'
// const Dog = require('./dog');

const toby = new Dog('Toby')

console.log(toby.bark())

const str = 'ES6'
console.log(`Hello ${str}`)

// const color = require('color');

// const redHexa = color({ r: 255, g: 0, b: 0 }).hex();

// console.log(redHexa);

// console.log("Hello World");
