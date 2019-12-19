const names = ['Hochberg', 'Hönigswald', 'Holzman'];
 
const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');
 
// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(', '));

const germanDictionary = new Intl.Collator('de-DE-u-co-dict');
 
// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(', '));
// logs "Hochberg, Holzman, Hönigswald"