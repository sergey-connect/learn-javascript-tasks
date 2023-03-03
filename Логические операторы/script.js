//Task 1

//Что выведет код ниже?

alert(null || 2 || undefined); // Выведет 2.

//Task 2

//Что выведет код ниже?

alert(alert(1) || 2 || alert(3)); // alert(1), затем 2.

//Task 3

//Что выведет код ниже?

alert(1 && null && 2); // null.

//Task 4

//Что выведет код ниже?

alert(alert(1) && alert(2)); // Только alert(1) и undefined.

//Task 5

//Что выведет код ниже?

alert(null || 2 && 3 || 4); // Выведет 3.

//Task 6

/*
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.
*/

if (age >= 14 && age <= 90);

//Task 7

/*
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

if (!(age >= 14 && age <= 90));

if (age < 14 || age > 90);

//Task 8

/*
Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?
*/

if (-1 || 0) alert('first'); // true
if (-1 && 0) alert('second'); // false
if (null || -1 && 1) alert('third'); // 1

//Task 9

/*
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».

Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.

Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.
*/

let login = prompt("Ваш Логин", "");

if (login == 'Админ') {
    let password = prompt('Ваш пароль', '')
    if (password == 'Я главный') {
        alert('Здравствуйте!')
    } else if (password == '' || password == null) {
        alert('Отменено')
    } else {
        alert('Неверный пароль')
    }
} else if (login == '' || login == null) { alert('Отменено') };
