const foo = new String('foo'); // Creates a String object
console.log(foo); // Displays: [String: 'foo']
typeof foo; // Returns 'object'
const firstString = '2 + 2'; // Creates a string literal value
const secondString = new String('2 + 2'); // Creates a String object
eval(firstString); // Returns the number 4
eval(secondString); // Returns the string "2 + 2"
const hello = 'Hello, World!';
const helloLength = hello.length;
hello[0] = 'L'; // This has no effect, because strings are immutable
hello[0]; // This returns "H"