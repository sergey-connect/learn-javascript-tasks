//Task 1

/*
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.
*/
/*
let date = new Date(2012, 01, 20, 03, 12);

console.log(date)
*/


//Task 2

/*
Напишите функцию getWeekDay(date), показывающую день недели
коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/
/*
let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

function getWeekDay(date) {
    return days[date.getDay()]
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getWeekDay(date));        // нужно вывести "ВТ"
*/


//Task 3

/*
В Европейских странах неделя начинается с понедельника (день номер 1),
затем идёт вторник (номер 2) и так до воскресенья (номер 7).
Напишите функцию getLocalDay(date), которая возвращает «европейский»
день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/
/*
function getLocalDay(date) {
    if (date.getDay() == 0) return 7;

    return date.getDay()
}

let date = new Date(2012, 0, 7);  // 3 января 2012 года
console.log(getLocalDay(date));       // вторник, нужно показать 2
*/

//Task 4

/*
Создайте функцию getDateAgo(date, days), возвращающую число,
которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.
*/
/*
function getDateAgo(date, days) {
    let dateAgo = new Date(date.getTime() - days * 24 * 3600 * 1000)

    return dateAgo
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
*/


//Task 5

/*
Напишите функцию getLastDayOfMonth(year, month), возвращающую
последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

/*
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1);
    return date.getDate(date.setDate(0))
}

console.log(getLastDayOfMonth(2012, 1))
*/


//Task 6

/*
Напишите функцию getSecondsToday(), возвращающую количество
секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно
быть конкретного значения сегодняшней даты.
*/
/*
function getSecondsToday() {
    let date = new Date();
    return date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 3600;
}

console.log(getSecondsToday())
*/


//Task 7

/*
Создайте функцию getSecondsToTomorrow(), возвращающую количество
секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно
быть конкретного значения сегодняшней даты.
*/
/*
function getSecondsToTomorrow() {
    let now = new Date();
    let tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tommorow - now) / 1000)
}

console.log(getSecondsToTomorrow())
*/


//Task 8

/*
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/

function formatDate(date) {
    let diffTime = new Date() - date;
    if (diffTime < 1000) return "прямо сейчас";
    if (diffTime < 60 * 1000) return `${diffTime / 1000} сек. назад`;
    if (diffTime < 60 * 60 * 1000) return `${diffTime / 60 / 1000} мин. назад`;

    let year = date.getFullYear();
    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let dayOfMonth = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    if (diffTime > 60 * 60 * 1000) {
        return `${dayOfMonth}.${month}.${year}, ${hours}:${minutes}`
    };
}


alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));