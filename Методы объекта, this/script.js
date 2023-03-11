//Task 1

/*
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?
*/

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?  --  Будет ошибка

//=================================

//Task 2

/*
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
  read() {
    this.x = +prompt('Первое значение', '');
    this.y = +prompt('Второе значение', '')
  },

  sum() {
    return this.x + this.y
  },

  mul() {
    return this.x * this.y
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//=====================================

//Task 3


//У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // показывает текущую ступеньку
    alert(this.step);
    return this;
  }
};
//Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
//Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
//Такой подход широко используется в библиотеках JavaScript.
