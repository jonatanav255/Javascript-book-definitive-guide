let strname: string = "string name"; // A string to use as a property name
let symname: symbol = Symbol("propname"); // A Symbol to use as a property name

console.log(typeof strname); // => "string": strname is a string
console.log(typeof symname); // => "symbol": symname is a symbol

let o: { [key: string]: any; [key: symbol]: any } = {}; // Create a new object

o[strname] = 1; // Define a property with a string name
o[symname] = 2; // Define a property with a Symbol name

console.log(o[strname]); // => 1: access the string-named property
console.log(o[symname]); // => 2: access the symbol-named property
