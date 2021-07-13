'use strict';

// 1 Переменные и строгий режим
// let number = 5;
// const leftBorderWidth = 1;


// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Nastya';

// {
//     var result = 50;
// }

// console.log(result);

// alert(5);
// [].push('a');
//------------------------------------------------------------------------------------------------------------------------
// // 2 Типы данных

// let number = 4.6;

// console.log(4 / 0);
// console.log('string' * 9);

// const persone = 'Nastya';

// const bool = false;

// //console.log(something); //null-не существует

// let und;
// console.log(und); //undefined-нет значения
//-------------------------------------------------------------------------------------------------------------------------
// //Объект

// const obj = {
//    name: 'Nastya',
//    age: 25,
//    isMarried: true 
// };

// //console.log(obj.name);
// console.log(obj['name']);
//------------------------------------------------------------------------------------------------------------------------
// //Массив

//                0            1        2       3        4   5
// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[3]);
//------------------------------------------------------------------------------------------------------------------------
//Всплывающие окна

//alert('Hello');

//const result = confirm('Are you here?');
//console.log(result);

// const answer = +prompt('Вам есть 18?', '25');
// console.log(answer + 5);

// const answer = [];

// // answer[0] = prompt('Как ваше имя?', '');
// // answer[1] = prompt('Как ваша фамилия?', '');
// // answer[2] = prompt('Сколько вам лет?', '');

// // document.write(answer);
// console.log(typeof(answer));
//------------------------------------------------------------------------------------------------------------------------
//Интерполяция

// const category = 'toys';

// console.log(`http://someurl.com/${category}/5`);

// const user = 'Nastya';

//alert(`Привет, ${user}`);
//------------------------------------------------------------------------------------------------------------------------
//Операторы

// console.log('arr' + ' - object');
// console.log(4 + '5');

// //console.log(4 + +'5'); //-второй плюс + унарный

// let incr = 10,
//     decr = 10;

// // //постфиксные
// // incr++; //оператор инкримента(увеличивает на 1)
// // decr--; //оператор декримента(уменьшает на 1)  

// // //префиксные
// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 !== '6');

// const isChacked = false,
//       isClose = false;

// console.log(isChacked || !isClose);
//-------------------------------------------------------------------------------------------------------------------------
//Условия

// if (4 == 4) {
//     console.log('Ок!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('Ок!');
// }

//Тернарный оператор

// const num = 50;
// (num === 50) ? console.log('Ок!') : console.log('Error');

//Свичь может вмещать много условий

// const num = '50';

// switch (num) {
//     case '49': 
//         console.log('Неверно');
//         break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case '50':
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }
//------------------------------------------------------------------------------------------------------------------------
//Циклы

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break;
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
//   }

//   let i = 0;
//   while(i < 3){
//     console.log( `number ${i}!` );
//     i++;
//   }


// let number = 0;

// while( number != undefined && number <= 100 ) {
//     number = +prompt('Введите число больше 100');
//     console.log(number);
// }

// let num; 

// do{
//     num = +prompt('Введите число больше 100', 0);
// }while (num <=100 && num != undefined && num != NaN);

// for (let n = 10; n < 10; n++){
//     if (n % 2 == 0){
//         alert(n);
//     }
// }
//------------------------------------------------------------------------------------------------------------------------
//Функции

//Fanction Decloreshen
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

//Function Expression
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//       console.log('Hello');
// };

// logger();

//Стрелочная функция
// const calc = (a, b) => a + b;

// const calc1 = (a, b) => { 
//     console.log('1');
//     return a + b; 
// };
//-------------------------------------------------------------------------------------------------------------------------
//Методы и свойства у строк и чисел

//const str = 'teSt';

//console.log(str[2] = 'd');//полуим test, мы не пожем просто так заменить

//Метод изменение регистра(с больших букв на маленькие и наоборот)

//console.log(str.toUpperCase());
//console.log(str.toLowerCase());
//console.log(str);

//Метод поиск подстроки(находит нужную букву)

//const fruit = 'Some fruit';

//console.log(fruit.indexOf('t'));

//Метод стайс( может вырезать нужный кусок строки)(поддерживает отрицательные значения,чтоб считать с конца)

//const logg = 'Hello world';

//console.log(logg.slice(6));

//Метод субстринг(не поддерживает отрицательные значения)

//console.log(logg.substring(6, 10));

//Метод сабстр(во второе условие пишем сколько символов надо захватить,а первое число-с какого начать)

//console.log(logg.substr(6, 5));
//------------------------------------------------------------------------------------------------------------------------
//Числа

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseFloat(test));
//------------------------------------------------------------------------------------------------------------------------
//Callback Функции

// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callbak) {
//     console.log(`Я учу: ${lang}`);
//     callbak();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);
//------------------------------------------------------------------------------------------------------------------------
//Обьекы деструктуризация обьектов

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//        border: 'black',
//        bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

//console.log(options['colors']['border']);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);
//-----------------------------------------------------------------------------------------------------------------------
//Массивы и псевдомассивы

// const arr = [234, 13, 3, 26, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a-b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// // arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));
//------------------------------------------------------------------------------------------------------------------------
//Передача по ссылке или по значению

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;  //передаем не структуру а ссылку

// copy.a = 10; //модифицируем обьект

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//      let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// };

// const numbers = {
//     a:2,
//     b:5,
//     c: {
//         x:7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers); //поверхностные копии

// const add = {
//     d:17,
//     e:20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adasdasda';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarry = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// let ap = [1, 2, 3];
// let ap2 = [...ap];

// console.log(ap2);

// //Apply
// function myFunction(x, y, z) {}
//     let args = [0, 1, 2];
//     myFunction.apply(null, args);

// console.log(args);
// //Spread syntax
// function myFunction2(x, y, z) {}
//     let args2 = [0, 1, 2];
//     myFunction2(...args2);

// console.log(args2);

// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// // Append all items from arr2 onto arr1
// arr1 = arr1.concat(arr2);

// console.log(arr1);
//------------------------------------------------------------------------------------------------------------------------
//Обьектоорентированое програмирование

// let str = 'some';
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const solder = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const jonh = Object.create(solder);

// // const jonh = {
// //     helth: 100
// // };

// // jonh.__proto__ = solder;

// // Object.setPrototypeOf(jonh, solder);

// // console.log(jonh.armor);
// jonh.sayHello();
//------------------------------------------------------------------------------------------------------------------------
// //Динамическая типизация

// //to string

// // 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// //2 конкотинация - это сложение строк или строки с чем то
// console.log(typeof(5 + ''));

// const num = 5;

// console.log('http://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// //to number

// //1)
// console.log(typeof(Number('4')));

// //2 унарный плюс
// console.log(typeof(+'5'));

// //3 
// console.log(typeof(parseInt('15px', 10)));


// let answ = +prompt('Hello', '');

// //to boolean

// // 0, '', null, undefined, NaN;  - folse

// //1
// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// //2
// console.log(typeof(Boolean('4')));

// //3
// console.log(typeof(!!'44444'));
//------------------------------------------------------------------------------------------------------------------------
// //Собеседование
// //1)
// let x = 5;

// console.log(x++);
// console.log(x);

// //ответ 5
// //2)
// let g = [];
// let n = g + false - null + true;

// console.log(n);

// //ответ NaN
// //3)
// let y = 1;
// let m = y = 2;

// console.log(m);

// //ответ 2
// //4)
// let c = [] + 1 + 2;

// console.log(c);

// //ответ 12
// //5)
// console.log('1'[0]);

// //ответ 1
// //6)

// let d = 2 && 1 && null && 0 && undefined;

// console.log(d);

// //ответ null, потому что null это ложь а как только выражение (и))запинается на лжи оно даже не идет!
// //7)
// console.log(!!(1 && 2) === (1 && 2));

// //ответ false потому что первое выражение булиновое
// //8)
// console.log(null || 2 && 3 || 4);

// //ответ 3 , (И)&&  запинается на лжи, (ИЛИ)|| запинается на правде!!!
// //9)
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b);

// //ответ нет! это разнае хранилища информации, разные ящики
// //10)
// console.log( +'infinity');

// //ответ infinity, тип данных строка, а унарный + преобразовует строку в число
// //11)
// console.log('Ёжик' > 'яблоко');

// //ответ false .смотрим таблицу юникод
// //12)
// console.log(0 || '' || 2 || undefined || true || false);

// //ответ 2
//------------------------------------------------------------------------------------------------------------------------
// //Получене элементов со страницы

// const box = document.getElementById('box');//айди может быть только один и он уникален

// console.log(box);


// const btns = document.getElementsByTagName('button');//получаем псевдомассив и выводим конкретную кнопку двумя способами
// console.log(btns[1]);

// //=================================================

// const btns1 = document.getElementsByTagName('button')[1];
// console.log(btns1);

// const circles = document.getElementsByClassName('circle');// не ставим точку так как уже указано что это класс
// console.log(circles);

// const hearts = document.querySelectorAll('.heart'); //используем селекторы перед указанием класса ставим точку

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
//============================================
//box.style.cssText = 'background-color: blue; width: 500px';

//box.style.cssText = `background-color: blue; width: ${num}px`;


// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor= 'red';
// circles[2].style.backgroundColor= 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'yellow';
// }

// hearts.forEach(item => {
//      item.style.backgroundColor = 'yellow';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

//div.classList.add('black');

// document.body.append(div);
//------------------------------------------------------------------------------------------------------------------------
//методы добавлять элементы задавать их стиль или удалять

//rapper.append(div);//  вставляет в конец кода
//wrapper.appendChild(div);  //более старый метод

//wrapper.prepend(div); //вставляет в начало кода

// hearts[0].before(div);  //вставляет перед
// hearts[0].after(div);  //вставляем после
//wrapper.insertBefore(div, hearts[2]); //более старый метод

//circles[0].remove();  //удаляет элемент со страницы
//wrapper.removeChild(hearts[1]); //более старый метод

//hearts[0].replaceWith(circles[0]);  //заменяет один элемент другим
//wrapper.replaceChild(circles[0], hearts[0]); //более старый мметод

//вставить текст через инер html

// div.innerHTML = 'Hello world';  //вставляем текст
//div.innerHTML = '<h1>Hello world</h1>'; //втавляем заголовок, html структура

//div.textContent = 'Hello'; //работает только с текстом 

//div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); //вставляет код html перед элементом
//div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); //вставляет код html в начало элемента
//div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); //вставляет перед концом
//div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); //вставляет после элемента
//------------------------------------------------------------------------------------------------------------------------
//присваивание

// a = a + 1;
// ====================================
// a += 1;
//------------------------------------------------------------------------------------------------------------------------
// События

// const btns = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second Click');
// };

// let i = 0;
// const deleteElement = (e) => {
//   //e.target.remove();
//     //console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(e.type);
//     // i++;
//     // if (i == 1) {
//     // btn.removeEventListener('click', deleteElement);
//     // }
// };

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

// btns.forEach(btn => {
//    btn.addEventListener('click', deleteElement, false);   //false писать не обязательно
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement, {once: true});
//  });

// btn.addEventListener('click', (e) => {
//     //console.log(e. target);
//     e.target.remove();
//     //console.log('Hover');
// });

// btn.addEventListener('click', () => {
//     alert('Second Click');
// });
//------------------------------------------------------------------------------------------------------------------------
//Отменяем старнартное поведение браузера

// const link = document.querySelector('a');

// link.addEventListener('click', function(event) {
//     event.preventDefault();

//     console.log(event.target);
// });
//------------------------------------------------------------------------------------------------------------------------
//Навигация по DOM

//console.log(document.body); //документ-дерево
//console.log(document.head); //сюда можем запендить какойто метотег либо еще один линк который будет подставлять какие то сисс стили шрифты будет подключать  
//console.log(document.documentElement); //
//console.log(document.body.childNodes); //(узлы которые являются деться у бади) позволяет получить все ноды и узлы которые находятся внутри этого родителя

//разница между дом элемент и дом узел

//console.log(document.body.firstChild);// получить первого ребёнка внутри родителя
//console.log(document.body.firstElementChild); //первый элемент у родите
//console.log(document.body.lastChild);// получить последнего ребёнка внутри родителя
//console.log(document.body.lastElementChild); //последний элемент у родителя

//получить родителя соседей и детей

//console.log(document.querySelector('#current').parentNode); //получаем через ноду
//console.log(document.querySelector('#current').parentElement); //получаем элемент

//как получать атрибут

//console.log(document.querySelector('[data-current="3"]').nextSibling);  //получить следущще свойство через ноду
//onsole.log(document.querySelector('[data-current="3"]').previousSibling); //получить придедущее свойство через ноду
//console.log(document.querySelector('[data-current="3"]').nextElementSibling); //получаем сам элемент следующий
//console.log(document.querySelector('[data-current="3"]').previousElementSibling); //получаем сам элемент придедущий

//получить только элемент , все элементы

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node)
// };
//------------------------------------------------------------------------------------------------------------------------
//события на мобильных устройствах

//их 6 штук

//touchstart касание пальцем к элементу
//touchmove палец соприкасаясь с элементом начинает двигаться
//touchend  палец отрывается от элемента
//touchenter ведем пальцем по экрану и заскакиваем на элемент
//touchleave когда палец скользя по экрану покинул приделы элемента
//tochcancel когда точка прикосновения уже не регистрируется на поверхности

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
    //    e.preventDefault();

    //    console.log('Start');
    //    console.log(e.touches);
    // });

    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
 
    //     console.log(e.targetTouches[0].pageX);
    //  });

    //  box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
 
    //     console.log('End');
    //  });
// });

//touches свойтво которое выдаёт сколько пальцев взаимодействует прям сейчас
//targetTouches все пальцы которые взаимодействуют именно с этим элементом сейчас
//changetTouches список пальцев которые учавствуют в текущем событии

//Async, defer, динамические скрипты.Загрузка скриптов на страницу

//1 способ: defer атрибут сообщает браузеру чтобы он продолжал загружать страницу не дожидаясь

//2 способ: async страница не ждёт асинхронных скриптов + они не ждут друг друга и вообще никого не ждут

//3 способ: поместить скрипт через js в HTML 


// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false; //для того чтобы загружались подругому
//     document.body.append(script);
    
// };

// loadScript('js/test.js');
// loadScript('js/script1.js');
//------------------------------------------------------------------------------------------------------------------------
//Модуль 3

//ClassList и делигирование событий

//const btns = document.querySelectorAll('buttons');

//console.log(btns[0].classList.length);  //количество классов
//console.log(btns[0].classList.item(0)); //метод который даёт получить класс который раположем под этим синтаксисом
//console.log(btns[0].classList.add('red', 'tgflfl'));// добавляет определённые классы
//console.log(btns[0].classList.remove('blue')); //удаляет определённые классы
//console.log(btns[0].classList.toggle('blue')); //топлит классы/если есть удаляет если нет добавляет

//метод контейнс проверяет налие класса на значения и отвечает тру или фолс
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }
//__________________________________________
// btns[0].addEventListener('click', () => {
// if (!btns[1].classList.contains('red')) {
//     btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     } 
// });

//===========================================

// btns[0].addEventListener('click', () => {
//   btns[1].classList.toggle('red');
//     });
//___________________________________________

//console.log(btns[0].className); //в строчку перечисляет классы
//------------------------------------------------------------------------------------------------------------------------
//Делигирование-работаем с родителем пишем функцию для его потомков/для того чтобы все кнопки работали даже те которые новые

//const wrapper = document.querySelector('.btn-block');

// wrapper.addEventListener('click', (event) => {
//     //console.dir(event.target);
//    if (event.target && event.target.tagName == 'BUTTON') {  //на каждую кнопку нажимая мы получаем хэллоу
//    console.log('Hello');
//    }
// });

// wrapper.addEventListener('click', (event) => {
//     //console.dir(event.target);
//    if (event.target && event.target.matches('button.red')) {  //метод матчес сравнивает элементы
//    console.log('Hello');
//    }
// });

//метод без делигирования/новая кнопка уже работать не будет
// btns.forEach(btn =>{      //при помощи обычного перебора
//     btn.addEventListener('click', () => { //на каждую строчку весим обработчика собыьтя 
//         console.log('Hello');
//     });
// });

// const btn = document.createElement('button');  //создаёт элемент на странице
// btn.classList.add('red');
// wrapper.append(btn);

// wrapper.addEventListener('click', (event) => {
//    if (event.target && event.target.classList.contains('blue')) { //меняет цвет при нажатии и пишет хэллоу
//    console.log('Hello');
//    }
// });
//------------------------------------------------------------------------------------------------------------------------
//Создаём табы

// window.addEventListener('DOMContentLoaded', () => {

//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//            item.classList.add('hide');
//            item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//        tabsContent[i].classList.add('show', 'fade');
//        tabsContent[i].classList.remove('hide');
//        tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//       const target = event.target;

//       if (target && target.classList.contains('tabheader__item')) {
//           tabs.forEach((item, i) => {
//               if (target == item) {
//                   hideTabContent();
//                   showTabContent(i);
//               }
//           }); 
//       }
//     });
// });
//------------------------------------------------------------------------------------------------------------------------
//Скрипты и время их выполнения. SetTimeout & SetInterval

//const timeId = setTimeout(function(text) {
 //   console.log(text);
//}, 2000, 'Helllo');    //интервал задаётся в милисекундах/ 2000 = 2 секунды


// const btn = document.querySelector('.btn');
// let timeId,
//     i = 0;

// btn.addEventListener('click', () => {
//   //  const timeId = setTimeout(logger, 2000);
//   timeId = setInterval(logger, 2000); //каждые 2 секунды повторят действие/запускается заново неограничено
// });


//const timeId = setTimeout(logger, 2000); //переменная это уникальный числовой индентификатор

//clearInterval(timeId);  //сбрасывается таймер, останавливает

// function logger () {
//     if (i === 3) {
//         clearInterval(timeId);
//     }
//     console.log('text');
//     i++;
// }

//Чем рекрусивный сэттаймаут лучше чем сэтинтервал (по факту эта функция внутри сама себя вызывает)/когда таймер с интервалом работает он не учиитывает как долго будет работать функция внутрри него


//Рекурсивный метод / ждёт две секунды потом снова ждёт пока выполнится действте внутри
// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 2000);
// }, 2000);

//Перемещаем синий квадрат по диагонали вниз


// const btn = document.querySelector('.btn');
// let timeId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame () {
//         if (pos === 300) {
//             clearInterval(id);
//         }else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);
//------------------------------------------------------------------------------------------------------------------------
//Работа с датами

//const now = new Date();

//new Date.parse('2020-05-01'); //можно записать в таком формате

//console.log(now); //получаем текущую дату

//метод получение компонентов даты
// console.log(now.getFullYear()); //высветит год

// console.log(now.getMonth()); //высветит месяц,на один меньше чем есть на самом деле потому что январь 0

// console.log(now.getDate());  //день

// console.log(now.getDay()); //номер дня недели/нумерация с воскресенья

// console.log(now.getHours());

// console.log(now.getUTCHours()); //часовой пояс +0

//console.log(now.getTimezoneOffset());  //получает разницу между часовым поясом и UTC в минутах

//console.log(now.getTime());  //получает колличество милисекунд с 1 января 1970 года

//методы сетеры для установки даты

//console.log(now.setHours(18, 40)); //первое часы второе минуты/часть с часами
//console.log(now);

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;       //две ** означает в квадрате
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);  //такие операции называются бэнчмарки/когда смотрим на производительность операции/функции/цикла
//------------------------------------------------------------------------------------------------------------------------
//Создаём таймер

// const deadline = '2020-10-31';

// function getTimeRemaining(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date()),
//           days = Math.floor(t / (1000 * 60 *60 * 24)),
//           hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//           minutes = Math.floor((t / 1000 / 60) % 60),
//           seconds = Math.floor((t / 1000) % 60);

//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//     };

// }

// function getZero(num) {
//     if (num >= 0 && num < 10) {
//         return `0${num}`;
//     } else {
//         return num;
//     }
// }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//            days = timer.querySelector('#days'),
//            hours = timer.querySelector('#hours'),
//            minutes = timer.querySelector('#minutes'),
//            seconds = timer.querySelector('#seconds'),
//            timeInterval = setInterval(updateClock, 1000);

//         updateClock();

//         function updateClock() {
//                const t = getTimeRemaining(endtime);

//                days.innerHTML = getZero(t.days);
//                hours.innerHTML = getZero(t.hours);
//                minutes.innerHTML = getZero(t.minutes);
//                seconds.innerHTML = getZero(t.seconds);

//                if (t.total <= 0) {
//                    clearInterval(timeInterval);
//                }
//         }
//     }

//     setClock('.timer', deadline);
//------------------------------------------------------------------------------------------------------------------------
//Параметры документа окна и работа с ними

//документ- обьект который содержит всю html структуру
//виндов- окно в котором показывает наш документ
//скрин- экран весь наш видемый монитор

//Получить в консоле : console.dir(document)

// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// const width = box.clientWidth; // ширина
// const height = box.clientHeight; //высота

// const width = box.offsetWidth; // ширина полностью
// const height = box.offsetHeight; //высота полностью

// const width = box.scrollWidth; 
// const height = box.scrollHeight; 

// console.log(width, height);

//scrollTop - показывает сколько текста ещё осталось спрятаным

//Разварачиваем текст по клику на кнопку
//btn.addEventListener('click', () => {   //на кнопку навешиваем обработчика событий
//   box.style.height = box.scrollHeight + 'px';  //инлайн стили которые появляются внутри вёрстки, перебиваем стили  сss
// console.log(box.scrollTop);
// });

//Получаем координаты.В js координаты расчитываются с левого верхнего угла

//console.log(box.getBoundingClientRect());

//console.log(box.getBoundingClientRect().top);// если получить конкретный параметр

//как получить стили которые были применены к элементы при помощи css

//const style = window.getComputedStyle(box); //эти стили идут из css

//console.log(style);
//console.log(style.display); //если нужен конкретный элемент

//console.log(documentElement.clientWidth); // получить колличество пикселей которое уже отлистал клиент
//console.log(documentElement.scrollTop);

//через консоль в браузере
//window.scrollBy(0, 400) // это работает от текущей позиции
//window.scrollTo(0, 400) //относительно всей страницы
//------------------------------------------------------------------------------------------------------------------------
//Создаём модальное окно

//Тригер - это окно которое вызывает последующие действия

//Modal

// const modalTrigger = document.querySelectorAll('[data-modal]'),
//       modal = document.querySelector('.modal'),
//       modalCloseBtn = document.querySelector('[data-close]');

// modalTrigger.forEach(btn => {
//     btn.addEventListener('click', function() {
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//     });
// });

// function closeModal() {
//     modal.classList.add('hide');
//     modal.classList.remove('show');
//     document.body.style.overflow = '';
// }

// modalCloseBtn.addEventListener('click', closeModal);

// modal.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             closeModal();
//         }
//     });

// document.addEventListener('keydown', (e) => {
//     if (e.code === "Escape" && modal.classList.contains('show')) {
//           closeModal();
//      }
// });
//------------------------------------------------------------------------------------------------------------------------
//Модификация модального окна

//как сделать так чтоб понять что пользователь долистал до конца страницы

//берём свойство которое отвечает за прокрутку далее берём свойство которое отображает высоту клиента и будем её сравнивать с полной прокруткой

// const modalTimerId = setTimeout(openModal, 5000);

//     window.addEventListener('scroll', () => {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//         openModal();
//         }
//     }, {once: true});
//___________________________________________________

// const modalTimerId = setTimeout(openModal, 5000);

// function showModalByScroll() {
//     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//         openModal();
//         window.removeEventListener('scroll', showModalByScroll);
//     }
// }

// window.addEventListener('scroll', showModalByScroll);
//------------------------------------------------------------------------------------------------------------------------
//Функции конструкторы

//Функция - это по сути обьект в который можно записать методы и свойства

// const num = new Number(3);
// console.log(num);

//===================================

// const num = new Function(3);
// console.log(num);

//Функции для конструирования обьектов и для создания подобных копий/прототип от которого можно отпочковывать определённых потомков

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {   //метод
//         console.log(`Hello ${this.name}`)
//     };
// }

//Прототайп - при помощи него мы можем добавлять новые методы или свойства в наш конструктор и они будут прототипно наследоваться у потомков
//Это используется когда у нас нет доступа к прототипу и мы не можем его менять но его нужно модифицировать

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушёл`);
// };

// const nastia = new User('Nastia', 25);
// const egor = new User('Egor', 27);

// nastia.exit();

// nastia .hello();
// egor.hello();

// console.log(nastia);
// console.log(egor);
//------------------------------------------------------------------------------------------------------------------------
//В js изначально классов не было они появились в качетве синтаксического сахара

//Контекст вызова функции.This

//Фунция может вызываться  четырьмя способами

//Первый метод - вызов функции

// function showThis() {
//     console.log(this);
// }
// showThis();

//function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum:function() {
//         console.log(this);
//     }
// };
// obj.sum();

//1)Обычная функция: this = window, но если стоит use strict - undefined

//Второй метод - Если мы используем метод внутри обьеекта то контекст вызова всегда будет ссылаться на обьект/Контекст

//2)Коетекст у методов обьекта - сам обьект

// const obj = {
//     a: 20,
//     b: 15,
//     sum:function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

//Получаем undefined потому что это простой вызов функции этоне метод обьекта это функция которая запускаеться внутри метода

//Третий метод функци конструкторы через оператор new

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello!' + this.name);
//     };
// }

// let nastia = new User('Nastia', 25);

//3)this в конструкторах и классах - это новый экземпляр обьекта

//Четвертый метод - ручное присваение this

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Alisa'
// };

//sayName.call(user, 'Bodnar');
//========================================разница в синтаксисе
//sayName.apply(user, ['Bodnar']);

//Создаёт новую функцию которая удваивает

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(23));

//double это новая функция у которой есть жестко привязаный контекст/может быть только один аргумент который всегда будет удваиваться

//4)Ручная привязка this; call, apply, bind

//Практика

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
// });

//когда обработчик события который идёт колбек функция написан в классическом режиме function() контекст вызова бедет сам элемент на котором произошло событие

// btn.addEventListener('click', function() {
//    this.style.backgroundColor = 'red';
// });
//============================
// btn.addEventListener('click', (e) =>. {
//      e.target.style.backgroundColor = 'red';
// });
//------------------------------------------------------------------------------------------------------------------------
//Стрелочные функции и как они работают с контекстом вызова
//У стрелочных функций нет своего контекста вызова/она всегда будет брать его у своего родителя

// const obj = {
//     num: 5,
//     sayNumber: function () {
// const say = () => {
//     console.log(this.num);
// };
// say();
//     }
// };

// obj.sayNumber();

// const double = (a) => {
//     return a * 2;
// };
//================================
//const double = a => a * 2;

//console.log(double(4));

//В обработчиках событий когда мы используем обычный синтаксис через function мы имеем доступ this/но если мы используем стрелочную функцию то контекст вызова теряетсяи будет = undefined 
//------------------------------------------------------------------------------------------------------------------------
//Классы ES6 - это красивая обёртка функций конструкторов(синтаксический сахар) так что классы внутри это всё те же функции

//Синтаксис классов
 //всегда начинается с большой буквы

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     } 

//     calcArea() {
//         return this.height * this.width;
//     }
// } 

// class ColoredRectangleWithText extends Rectangle {    //наследование от родителя
//     constructor(height, width, text, bgColor) {
//         super(height, width);            //вызавает строки родителя за счёт наследование/супер должна быть первой строчкой
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProms() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor} `);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

// div.showMyProms();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());
//------------------------------------------------------------------------------------------------------------------------
//Принципы обьекто ореинтированого програмирования
//1) обстракция - когда мы отделяем концепцию от её экземпляра
//2) наследование - способность обьекта или класса базироваться на другом обьекте или классе для повторного использования кода

//Используем классы для карточек

// class MenuCard {
//     constructor(src, alt, title, descr, price, parentSelector) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = descr;
//         this.price = price;
//         this.parent = document.querySelector(parentSelector);
//         this.transfer = 27;
//         this.changeToUAH();
//    } 
    
//     changeToUAH() {
//       this.price = this.price * this.transfer;
//     }

//     render() {
//         const element = document.createElement('div'); 
//         element.innerHTML = `
//         <div class="menu__item">
//             <img src=${this.src} alt=${this.alt}>
//             <h3 class="menu__item-subtitle">${this.title}</h3>
//             <div class="menu__item-descr">${this.descr}</div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//             </div>
//         </div>
//         `;
//         this.parent.append(element);
//    }
// }

// const div = new MenuCard();
// div.render();
// //================================
// new MenuCard().render();     //это только если мы его используем один раз


// new MenuCard(
//     "img/tabs/vegy.jpg",
//     "vegy",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     '.menu .container'
// ).render();

// new MenuCard(
//     "img/tabs/elite.jpg",
//     "elite",
//     'Меню “Премиум”',
//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     14,
//     '.menu .container'
// ).render();

// new MenuCard(
//     "img/tabs/post.jpg",
//     "post",
//     'Меню "Постное"',
//     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//     21,
//     '.menu .container'
// ).render();
//------------------------------------------------------------------------------------------------------------------------
//Rest оператор и параметры по умолчанию

//Spret - берёт сущности(массив) и раскладывает их на элементы
//Rest - отдельные элементы обьеденяет их в один массив(...rest)

// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log('bassic', 'rest', 'operator', 'usage');

//Стандарт по умолчанию

// function calcOrDouble (number, basis) {
//     console.log(number * basis);
// }

// calcOrDouble(3, 5);

// function calcOrDouble (number, basis) {
//     basis = basis || 2;
//     console.log(number * basis);
// }

// calcOrDouble(3);
// //=================================================
// function calcOrDouble (number, basis = 2) {
//     basis = basis || 2;
//     console.log(number * basis);
// }

// calcOrDouble(3);

//Примеры
//1)
// class MenuCard {
//     constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = descr;
//         this.price = price;
//         this.classes = classes || 'menu__item';
//     }

//2)
// class MenuCard {
//     constructor(src, alt, title, descr, price, parentSelector, ...classes = menu__item) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = descr;
//         this.price = price;
//         this.classes = classes;
//     }

//3)
// if (this.classes.length === 0) {
//     this.element = 'menu__item';
//     element.classList.add(this.element);
// } else {
//     this.classes.forEach(className => element.classList.add(className));
// }


