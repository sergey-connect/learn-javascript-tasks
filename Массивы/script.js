// //Task 1

// /*
// Что выведет следующий код?

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert( fruits.length ); // ?  4 - Посчитает все элементы, в том числе добавленный в копию.
// */

// //===============================

// //Task 2

// /*
// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
// */

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// let mid = Math.floor(styles.length / 2);
// styles[mid] = 'Классика';
// alert(styles.shift());
// styles.unshift('Рэп', 'Регги');

// // ================================

// //Task 3

// /*
// Каков результат? Почему?

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?
// */

// let arr = ["a", "b"];

// arr.push(function () {
//   alert(this);
// });

// arr[2](); // ? Выведет массив из 3-х элементов: a, b, function() {}

// // ================================

// // Task 4

// /*
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// */

// function sumInput() {
//   let arr = [];
//   let sum = 0;
//   let num;

//   do {
//     num = prompt('Введите число:', '');

//     if (isFinite(num)) arr.push(+num);
//   } while (isFinite(num) && num != null && num != "");

//   for (let pos of arr) {
//     sum += pos;
//   }

//   return alert(sum);
// }

// sumInput()

// ===================================

//Task 5

/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
*/

arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumStart = 0;

    for (let j = i + 1; j < arr.length; j++) {
      let newArr = [];
      sumStart += arr[j];
      sum = Math.max(sumStart, sum)
    }
  }

  return sum;
}

alert(getMaxSubSum(arr))