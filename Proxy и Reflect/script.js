//Task 1

/*
Ошибка при чтении несуществующего свойства
Обычно при чтении несуществующего свойства из объекта возвращается undefined.

Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.

Это может помочь обнаружить программные ошибки пораньше.

Напишите функцию wrap(target), которая берёт объект target и возвращает прокси,
добавляющий в него этот аспект функциональности.

Вот как это должно работать:

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      // ваш код
    });
  }

  user = wrap(user);

  alert(user.name); // John
  alert(user.age); // Ошибка: такого свойства не существует
*/
/*
let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, reciever) {
      if (prop in target) {
        return Reflect.get(target, prop, reciever);
      } else {
        throw new ReferenceError('Свойство не существует: "${prop}"')
      }
    }
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует
*/

//Task 2

/*
Получение элемента массива с отрицательной позиции
В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.

Вот так:

let array = [1, 2, 3];

array[-1]; // 3, последний элемент
array[-2]; // 2, предпоследний элемент
array[-3]; // 1, за два элемента до последнего
Другими словами, array[-N] – это то же, что и array[array.length - N].

Создайте прокси, который реализовывал бы такое поведение.

Вот как это должно работать:

let array = [1, 2, 3];

array = new Proxy(array, {
  // ваш код
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2

// вся остальная функциональность массивов должна остаться без изменений
*/

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, reciever) {
    if (prop > 0) {
      return Reflect.get(target, prop, reciever);
    } else {
      return Reflect.get(target, target.length + +prop, reciever);
    }
  }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2


