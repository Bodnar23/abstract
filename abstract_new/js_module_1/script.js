ОСНОВЫ JavaScript
//1. Переменные

let number = 5;
number = 10;

console.log(number);  //перезаписывает 10
//
const leftBorderWidth = 1;
leftBorderWidth = 10;

console.log(leftBorderWidth); //ошибка, потому, что const постоянная переменная
//
const obj = {
    a: 50
}

obj.a = 10;

console.log(obj); //{ a: 10 }
//
var name = 'Ivan';

name = 'Alex';
console.log(name); //Alex
//
console.log(name); //undefined
var name = 'Ivan';
//
console.log(number); //error
let number = 5; 
//
{
    let result = 50;
}

console.log(result); //error
//
{
    var result = 50;
}

console.log(result); //50
//
alert(5);
[].push('a');
//---------------------------------------------
//2. Типы данных

NaN - not a number - не число
null - не существует
undefined - что-то существует но значения никакого нет
BigInt - большие числа

//
Числа

let number = 4.6; //можно записать дробное число через точку
//
console.log(4/0); // infinity - бесконечность
console.log(-4/0); // -infinity
//
console.log('srting' * 9); //NaN
//
const persone = "Alex ghgkjhl fgjfl 5 fghg"; //строка
//
const bool = true;
const bool1 = false;
//
console.log(something); //NaN - error - не можем ссослатся на несуществующий объект
//
let und;
console.log(und); //undefined
//
const obj = {         // объект
    name: 'John',
    age: 25,
    isMarried: false
}

console.log(obj.name); //John
console.log(obj[name]); //error
console.log(obj["name"]); //John

name - ключ
'John' - значение
//
Является ли массив отдельным типом данных?
нет
массив - это частный случий объекта

               0            1        2       3        4   5
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; //может содержать люботь тип данный и считает по порядку начиная с нуля
console.log(arr[2]);

0 - ключ
'plum.png' - значение
--------------------------------------
//3. Всплывающие окна

alert - текст - обычное
alert('Hello');
//
confirm - текст + две кнопки (отмена и ок)
const result = confirm('Are you here?');
//
prompt - текст + поле ввода + две кнопки 
const answer = prompt('Вам есть 18?', ''); //тип данных строка
console.log(answer + 5); //получаем 105 если в answer 10 - просто склеилось
Чтобы узнать тип данных
console.log(typeof(answer));
const answer = +prompt('Вам есть 18?', ''); //тип данных принудительно число (динамическая типизация)
console.log(answer + 5); //получаем 15 если в answer 10 - так как преобразовали в числа
//
const answers = [];

answer[0] = prompt('Как ваше имя?', '');
answer[1] = prompt('Как ваша фамилия?', '');
answer[2] = prompt('Сколько вам лет?', '');

Чтобы вытянуть ответы и записать их
document.write(answer); //устаревшая команда, всё записывает прям на страницу
console.log(typeof(answer)); // object

console.log(typeof(null)); // object (особенность js)
-----------------------------------------
//4.Бектики - конкатенация

const user = 'Nastya';

alert(`Hello, ${user}`); //выведет 'Hello, Nastia'
-----------------------------------------
//5.Операторы

console.log('arr' + ' - object'); //arr - object, - конкатенация - сложение строк
console.log(4 + ' - object'); //4 - object
console.log(4 + +' - object'); //NaN
console.log(4 + +'5'); //9

Унарный + это + который ставится перед чем-то, использует только один аргумент для своей работы

Инкримент - уветичение на 1
Дикримент - уменьшение на 1

let incr = 10,
    decr = 10;

//постфиксные
incr++;
decr--;

console.log(incr); //11
console.log(decr); //9

//префиксные
++incr;
--decr;

console.log(incr); //11
console.log(decr); //9

В чём же разница? По факту если отрабатывает сразу, то результат изменяется

console.log(incr++); //10
console.log(decr--); //10

console.log(++incr); //11
console.log(--decr); //9

console.log(5%2); //1 - потому, что получили остаток

= - присваивание
== - сравниваем

console.log(2*4 == 8); //true
console.log(2*4 == '8'); //true

=== - сравниваем по типу данных

console.log(2*4 === 8); //true
console.log(2*4 === '8'); //false

&& - и
|| - или

true && true = true         true || true = true              true = true
false && true = false       true || false = true             !true = false
true && false = false       false || true = true             !!true = true
false && false = false      false || false = false

! - оператор отрицания

console.log(2 + 2 * 2 === 8); //false
console.log(2 + 2 * 2 === 6); //true
console.log(2 + 2 * 2 != 8); //true
console.log(2 + 2 * 2 != '8'); //true
console.log(2 + 2 * 2 != '6'); //false
console.log(2 + 2 * 2 !== '6'); //true
-----------------------------------------
command + shift + . = видеть скрытые файлы