function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}
//1 using Constructor Functions
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
let person2 = new Person('Sarah', 25);

//2 The Object() constructor
let person1 = new Object();
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function () {
    alert('Hi! I\'m ' + this.name + '.');
};

//3 Object literal
let person1 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function () {
        alert('Hi! I\'m ' + this.name + '.');
    }
})

//4 using the create() method 
let person2 = Object.create(person1);
person2.name;
person2.greeting();  