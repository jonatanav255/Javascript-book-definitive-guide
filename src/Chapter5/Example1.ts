let n: number = 12

let binary: string = '0b' + n.toString(2)
let octal: string = '0o' + n.toString(8)
let hex: string = '0x' + n.toString(16)

console.log(binary, octal, hex)
