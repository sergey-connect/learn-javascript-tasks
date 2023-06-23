//Task 1

/*
Дочерние элементы в DOM
важность: 5
Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)?
*/


console.log(document.body.firstElementChild)
console.log(document.body.children[1])
console.log(document.body.children[1].lastElementChild)


//Task 2

/*
Вопрос о соседях
важность: 5
Если elem – произвольный узел DOM-элемента…

Правда, что elem.lastChild.nextSibling всегда равен null?
Правда, что elem.children[0].previousSibling всегда равен null ?
решение
Да. Верно. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
Нет. Неверно. Потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы. Например, previousSibling может быть текстовым узлом.
Обратите внимание, что в обоих случаях, если детей нет, то будет ошибка. При этом elem.lastChild равен null, а значит – ошибка при попытке доступа к elem.lastChild.nextSibling.
*/

// 1 верно; 2 не верно



//Task 3

/*
Выделите ячейки по диагонали
важность: 5
Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red';

*/

