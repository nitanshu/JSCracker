let peter = new Person('Peter', 25); // ReferenceError: Person is  
                                     // not defined
console.log(peter);class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}