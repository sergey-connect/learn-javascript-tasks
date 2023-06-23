//Task 1

/*
Поиск элементов
важность: 4
Вот документ с таблицей и формой.

Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.
*/

const table = document.getElementById('age-table')
console.log(table)
const label = table.querySelectorAll('label')
console.log(label)
const td = table.querySelector('td')
console.log(td)
const form = document.getElementsByName('search')[0]
console.log(form)
const firstInput = form.querySelector('input')
console.log(firstInput)
const lastInput = form.lastElementChild
console.log(lastInput)