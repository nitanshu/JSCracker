console.log('1a', myName1); // undefined
if (1) {
 console.log('1b', myName1); // undefined
 var myName1 = "‘Sunil";
}
console.log('2a', myName2); // error: myName2 is not defined
if (1) {
    console.log('2b', myName2); // undefined
    let myName2 = 'Sunil';
}
console.log('3a', myName3); // error: myName3 is not defined
if (1) {
    console.log('3b', myName3); // undefined
    const myName3 = 'Sunil';
}