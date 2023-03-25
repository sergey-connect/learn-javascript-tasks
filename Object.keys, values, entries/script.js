//Task 1

/*
Есть объект salaries с произвольным количеством свойств,
содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает
сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/
/*
function sumSalaries(salaries) {
  //let salariesArr = Object.values(salaries);

  //return salariesArr.reduce((sum, current) => sum += current, 0);

  let salariesArr = Object.values(salaries);
  let sum = 0;

  for (let value of salariesArr) {
    sum += value;
  }

  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries)); // 650
*/

//Task 2

/*
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/

function count(obj) {
  return Object.entries(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

console.log(count(user)); // 2