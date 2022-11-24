// Map

// Нехай даний масив масивів ([[1,"first"], [3,"third"]]).
// Створіть колекцію Map з цього масиву.
// Отримайте список ключів та значень окремо.
// Отримайте кількість елементів.
// Додати та видалити елемент
// Здійсніть пошук за ключом

const arrayOfArrays = [
  [1, 'first'],
  [3, 'third'],
];

const myCollection = new Map(arrayOfArrays);

console.group('Created collection : ');
console.log(myCollection);
console.groupEnd();

console.group('Keys of myCollection : ');
console.log(myCollection.keys());
console.groupEnd();

console.group('Values of myCollection : ');
console.log(myCollection.values());
console.groupEnd();

// add element to map
myCollection.set(2, 'second');
console.log(myCollection);

// remove element from map
myCollection.delete(2);
console.log(myCollection);

console.log('does key 2 exist in myCollection ? => ', myCollection.has(2));
