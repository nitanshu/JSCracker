function Animal(name){
    this.name= name
    Animal.prototype.hunt = function(){return 'it hunts!!!'}
}
function WildAnimal(name){
    Animal.call(this, name)
    WildAnimal.prototype = Object.create(Animal.prototype)
    Object.defineProperty(WildAnimal.prototype, 'constructor', { 
        value: WildAnimal, 
        enumerable: false, // so that it does not appear in 'for in' loop
        writable: true 
    });
}