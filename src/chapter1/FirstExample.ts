
const si: boolean = true
import { n } from "../Chapter5/Example1";


console.log("hi")

let timestamp = Date.now();
let now: Date = new Date();
let ms: number = now.getTime();
let iso: string = now.toISOString();


console.log(timestamp)
console.log(now)
console.log(ms)
console.log(iso)


// A string representing 2 lines written on one line:
const lineBreakString = 'two\nlines';
console.log(lineBreakString);
// Output:
// two
// lines

// A one-line string written on 3 lines:
const longString = "one\
long\
line";
console.log(longString);
// Output:
// onelongline

// A two-line string written on two lines:
const multiLineString = `the newline character at the end of this line
is included literally in this string`;
console.log(multiLineString);
// Output:
// the newline character at the end of this line
// is included literally in this string
