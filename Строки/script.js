//Task 1

/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/

/*
function ucFirst(str) {
  let uc = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    uc += str[i]
  }

  return uc
}

alert(ucFirst("магнолия"))
*/

function ucFirst(str) {
  let newStr = str.charAt(0).toUpperCase() + str.slice(1);

  return newStr
}

// alert(ucFirst("вася"))

// =======================================

//Task 2

/*
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
  if (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) {
    return alert(true)
  }

  return alert(false)
}

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// Task 3

/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, 
если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let newStr = str.slice(0, maxlength - 1) + "…";
    return newStr
  }

  return str
}

//alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

//alert(truncate("Всем привет!", 20))

// =====================================

//Task 4

/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять 
числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true
*/

function extractCurrencyValue(str) {
  let newStr = +str.slice(1);
  return newStr
}

alert(extractCurrencyValue('$120') === 120);