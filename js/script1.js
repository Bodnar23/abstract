'use strict';

//Продвинутый JS

//Локальные сервера

//Хостинг - покупаем место или папку на компьютере у провайдера,всё что мы поместим в папкуотобразится у него,но нужен бесперебойный интернет

//Локальный сервер бывает простой(выполняют одну задачу) и сложный(комплексный)

//Get запрос - получение информации(например гугл)
//Post запрос - отправляет данные на сервер

//Чтобы отправить свой проект на сервер заходим в папку MAMP -> htdocs -> вставляем свой проект

//_______________________________________________________________

//Json формат передачи данных

//Асинхронное выполнение задачь и общение с сервером
//Это нужно чтоб обновить часть контента без перезагрузки и обновления страницы
//1 - удобно , красиво, интерактивно
//2 - ускорение реакции интерфейса
//3 - тратим меньше трафик пользователя и упрощаем жизнь серверу


//События 
// inputRub.addEventListener('change', () => {              //change - возникает когда импут уходит из фокуса, измениловь вэлью внутри импута
//     const request = new XMLHttpRequest();

// inputRub.addEventListener('input', () => {               //input - более универсальное
//     const request = new XMLHttpRequest();


//Чтобы отправить данные
// const persone = {
//     name: 'Alex',
//     tel: '+79051283205'
// };

// console.log(JSON.stringify(persone));

//Чтобы полуить данные
// const persone = {
//     name: 'Alex',
//     tel: '+79051283205'
// };

// console.log(JSON.parse(JSON.stringify(persone)));

//Глубокие копии

// const persone = {
//     name: 'Alex',
//     tel: '+79051283205',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };

// const clone = JSON.parse(JSON.stringify(persone));
// clone.parents.mom = 'Ann';
// console.log(persone);
// console.log(clone);

//Вот что получилось

// {
//     name: 'Alex',
//     tel: '+79051283205',
//     parents: { mom: 'Olga', dad: 'Mike' }
//   }
//   {
//     name: 'Alex',
//     tel: '+79051283205',
//     parents: { mom: 'Ann', dad: 'Mike' }
//   }

//В глубоком клонировании родитель не меняется

//___________________________________________________________
//Асинхронное выполнение задач на странице и общение с сервером
//AJAX нужна для того чтобы фронт общался с сервером : запрашиваем данные, постим данные (без перезагрузки страницы)
//Используется например фильтры, чтоб без обновления страницы высвечивало только нужную информацию
//Обновляем часть контента, уменьшаем нагрузку на сервер и экономим трафик пользователя

//XMLHttpRequestэто API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером. Данный API предоставляет простой способ получения данных по ссылке без перезагрузки страницы. Это позволяет обновлять только часть веб-страницы не прерывая пользователя.  

//Методы(open)(send)

// const inputRub = document.querySelector('#rub'),
//     inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();

//     request.open(method[get-запрашиваем или post-постим], url[путь к серверу,куда посылаемзапрос], async[отвечает за асинхронность], login[логин], pass[пароль]);
//     request.setRequestHeader('Content-type'[тип континта], 'application/json; charset=utf-8'[какой тип, кодировка]);
//     request.send();[метод запроса, может принимать body(в POST), send (в  GET)]
// // });

//Свойства обьекта

//1)status:

//1xx: Informational (информационные):
// 100 Continue («продолжай»);
// 102 Processing («идёт обработка»);
// 2xx: Success (успешно):
// 200 OK («хорошо»);
// 201 Created («создано»);
// 202 Accepted («принято»);
// 302 Found («найдено»);
// 404 Not Found («не найдено»);
// 410 Gone («удалён»);
// 429 Too Many Requests («слишком много запросов»);
// 5xx: Server Error (ошибка сервера):
// 500 Internal Server Error («внутренняя ошибка сервера»);
// 503 Service Unavailable («сервис недоступен»);
// 520 Unknown Error («неизвестная ошибка»);
// 521 Web Server Is Down («веб-сервер не работает»);
// 522 Connection Timed Out («соединение не отвечает»);

//Информационные - 100, 101, 102, 103
//Успех - 200, 201, 202, 203, 204, 205, 206, 207, 208, 226
//Перенаправление - 300, 301, 302, 303, 304, 305, 306, 307, 308
//Ошибка клиента - 400, 401, 402, 403, 404, 405
//Ошибка сервера - 500, 501, 502, 503

//2)statusText - это текстовое описание ответа от сервера(ok, undefaund)

//3)respons - ответ от сервера(то что задал бэк энд разработчик)

//4)readyState: - текущее состояние нашего запроса

// Значение 	Состояние	      Описание
// 0	        UNSENT	          Объект был создан. Метод open() ещё не вызывался.

// 1	        OPENED	          Метод open() был вызван.

// 2	        HEADERS_RECEIVED  Метод send() был вызван, доступны заголовки (headers) и статус.

// 3	        LOADING	          Загрузка; responseText содержит частичные данные.

// 4	        DONE	          Операция полностью завершена.


//События

//load start - начало загрузки
//progress
//readystatechange - это событие отслеживает статус готовности запроса в данный текущий момент
//load - оно срабатывает когда наш запрос полностью загрузился

// request.addEventListener('readystatechange', () => {

// }); это событие отслеживает статус готовности запроса в данный текущий момент


// открыть браузер с разрешением просматривать локальные файлы 
// open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files

//Пример конвертера волют

//script.js

// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('load', () => {
//         console.log(request);
//       if (request.status === 0) {
//           const data = JSON.parse(request.response);
//           inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//       } else {
//           inputUsd.value = 'Что-то пошло не так';
//       }
//     });
// });

//current.json

// {
//     "current": {
//         "usd": 74
//     }
// }

//index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Calc</title>
//     <style>
//         label {
//             display: block;
//             font-size: 30px;
//         }
//         input {
//             width: 300px;
//             height: 50px;
//             font-size: 30px;
//         }
//     </style>
// </head>
// <body>
//     <label for="rub">RUB</label>
//     <input id="rub" type="text">
//     <label for="usd">USD</label>
//     <input id="usd" type="text">
//     <script src="js/script.js"></script>
// </body>
// </html>

//_________________________________________________________________
//Реализация скрипта отправки данных на сервер

//У нашей формы всегда должен быть атрибут name

//Почистить кэш - command + shigt + r
//_______________________________________________________
//Промисы - обещания. Для работы с асинхронными операциями.
//Асинхронный код используем в тайм аутах лиюо при запросах на сервер
//Промисы - 
//Колбеки - функции обратного вызова

//Resolve - обещание сработало

//Reject - обещание не выполнено

// console.log('Запрос данных...');

// const req = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });

// //Метод then -  положительный исход

// req.then( (product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            product.status = 'order';
//            resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then( (data) => {
//     console.log(data);
// });
//Преимущество промисов перед колбэками - мы можем возвращать промисы из then  по цепочке. Когдп одна операция выполниться потом мфы выполняем следующую и следующую

//Добиваемся последовательности

//Вызывает reject (если произошла ошибка)

// console.log('Запрос данных...');

// const req = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });


// req.then( (product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            product.status = 'order';
//            reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then( (data) => {
//     console.log(data);
// }).catch( () => {
//      console.error('Произошла ошибка');
// });

//Блок кода файнари - в лобом исходе промиса

// console.log('Запрос данных...');

// const req = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });
// req.then( (product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            product.status = 'order';
//            resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then( (data) => {
//     console.log(data);
// }).catch( () => {
//     console.error('Произошла ошибка');
// }).finally(() => {
//     console.log('Finally');
// });

//Методы all и race

// const test = time => {
//     return new Promise(resolve => {
//        setTimeout( () => resolve(), time); 
//     });
// };

// test(1000).then( () => console.log('1000 ms'));
// test(1000).then( () => console.log('2000 ms'));

// 1) Метод all - чтобы точно убедится что все промисы выполнились. Ждёт окончание всех промисов.

// Promise.all([test(1000), test(2000)]).then( () => {
//      console.log('All');
// });

//2) Метод race - гонка, какой из промисов выполнился первый выполняет дальше

// Promise.race([test(1000), test(2000)]).then( () => {
//     console.log('All');
// });

//______________________________________________________________________________

// Fetch API - встроина в браюзер

//A - application P - programm I - interface  - набор данных и возможностей которые предоставляют нам готовое решение

//API - нам предоставляют готовые методы и свойства которые мы можем использовать
//DOM API

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify({name: 'Nasty'}),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
// .then(response => response.json())
// .then(json => console.log(json));

//___________________________________________________________________
//Методы переборов массивов

//1)ForEach никогда не возвращает новый массив, он перебирает готовый

//2)Filter - фильтрует элементы массива внутри

// const names = ['Ansstasia', 'Timon', 'Ann', 'Pumba', 'Ksenia', 'Voldemord'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//3)Map - Перебирает каждый элемент, трансформирует каждый элемент внутри, переводим все элементы массива в нижний регистр

// const answers = ['Nastia', 'AnnA', 'Hello'];

// const result = answers.map(item => {
//     return item.toLowerCase();
// });
//=============================================================================
// const answers = ['Nastia', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);
//===========================================================================
//но лучше так не делать
// let answers = ['Nastia', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

//4)Every/some
//Every - Если все значения подходят возвращает true

// const some = [4, 5, 7];

// console.log(some.every(item => typeof(item) === 'number'));

//Some - если хоть один элемент подходит он возвращает true

// const some = [4, 'qwq', 'streferf'];

// console.log(some.some(item => typeof(item) === 'number'));

//5)Reduce - схлопывать , собирать массив в одно единственное целое

// const arr = [4, 5, 1, 3, 2, 6];
                        //   0      4
                        //   4      5
                        //   9      1
                        //   10     3
// const res = arr.reduce( (sum, current) => sum + current);
// console.log(res);


// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce( (sum, current) => `${sum}, ${current}`);
// console.log(res);

//_________________________________________________
//Можем задавать изначальное число.Например 
//const arr = [4, 5, 1, 3, 2, 6];
                        //   3      4
                        //   4      5
                        //   9      1
                        //   10     3
// const res = arr.reduce( (sum, current) => sum + current, 3);
// console.log(res);

//Практика
//Превращение в массивы перечислены через запятую
// const obj = {
//     nastia: 'persone',
//     egor: 'persone',
//     tofic: 'animal',
//     molly: 'animal'
// };

// const newArr = Object.entries(obj);

// console.log(newArr);

//Используем filter и map для получения нового массива гдетолько люди и их исена через запятую
// const obj = {
//     nastia: 'persone',
//     egor: 'persone',
//     tofic: 'animal',
//     molly: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);

//Можем запускать методы по цепочке

//_________________________________________________
//Метод entries

// const obj = {a: 23, b: 50};
// console.log(Object.entries(obj));

//Метод массив массивов(делает матрицу)
//[ [ 'a', 23 ], [ 'b', 50 ] ]

//Метод fromEntries(обратный) из массива в обьект

//const json = JSON.stringify(Object.fromEntries(formData.entries()));

//Метод для получения матрицы, массивов

// const obj = {a: 23, b: 50};
// console.log(Object.entries(obj));

// Вот что получаем
// [ [ 'a', 23 ], [ 'b', 50 ] ]

//Создаём слайды

//1 Назначаем переменные
//2 Создаём функцию
//3 Назначаем обработчики события (клик)
//4 Запускаем колбек функцию


//Регулярные выражения

//это патерн и флаги

//патерн - шаблон того, что мы ищем в строке или что мы пытаемся удалить. как-то ограничиваем список символов

//Например

//  new RegExp('pattern', 'flags');  //устаревший метод использования

//  /pattern/f

//Методы регулярных выражений. Относытся к срокам

//1 метод search поиск

// const ans = prompt('Введите ваше имя');

// const reg = /n/i;

// console.log(ans.search(reg));

//Флаги
//1 i - если хотим что-то найти в независимости от регистра
//2 g - глобал, хотим найти несколько вхождений
//3 m - многострочный режим

//можно использовать несколько

//2 метод match - получаем массив(кусочек строки, индекс, строка)

// const ans = prompt('Введите ваше имя');

// const reg = /n/ig;

// console.log(ans.match(reg));

//3 метод replace - первая часть что мы изменяем, вторая - на что мы изменяем
//Например заменяет пароль на звёздочки

// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*'));

//убираем все дефисы и заменяем на двоеточия

//console.log('12-34-56'.replace(/-/g, ':'));

//Метод test - возвпащает правду или лож, тестирует

// const ans = prompt('Введите ваше имя');

// const reg = /n/ig;

// console.log(reg.test(ans));

//Классы

//   \d - дигитс - ищим цифры
//   \w - ищим все слова, все буквы
//   \s - спэйсис - ищем все пробелы

// const ans = prompt('Введите ваше число');

// const reg = /\d/;

// console.log(ans.match(reg));

// const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/));

//Экранируем не чиста и не буквы

// \D - не чиста
// \W - не буквы

//Геттеры и сеттеры
//Свойства акцессоры
//Свойство-это то, что описывает наш обьект(характеристики и данные)
//1Свойства данные - просто описывает обьект
//2Свойства акцессоры - комплекс, который позволяет присваивать и получать значения
         //1Геттеры - позволяют получать значение свойства
         //2Сеттеры - устанавливают знавение свойства

//Методы - это то, что умеет делать обьект


//Наппример

// const persone = {
//     name: 'Alex',
//     age: 25,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// };

// console.log(persone.userAge = 30);
// console.log(persone.userAge);

//Инкапсуляция - это один из принципов обьектоориентированного програмирования
//Например машиной человек пользуется чтобы ездить и не лезет под капот так и здесь пользователь использует интерфейс а мы скрываем от него код чтоб он его не сломал и т.д

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст ${userAge} `);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 100) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     };
// }

//  const nastia = new User('Nastia', 27);
//  console.log(nastia.name);
//  console.log(nastia.getAge());

//  nastia.setAge(30);
//  nastia.setAge(300);
//  console.log(nastia.getAge());

//  nastia.say();

 //////////////////////////////////////////////////////////////////////////

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     say() {
//         console.log(`Имя пользователя ${this.name}, возраст ${this._age} `);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 100) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     }
// }

//  const nastia = new User('Nastia', 27);
//  console.log(nastia.age);
//  nastia.age = 99;
//  console.log(nastia.age);

//  nastia.say();

 /////////////////////////////////////////////////////////////////////////////////

//  class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surname = 'Bodnar';

//     say = () => {
//         console.log(`Имя пользователя ${this.name}${this.#surname}, возраст ${this._age} `);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 100) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     }
// }

//  const nastia = new User('Nastia', 27);
//  console.log(nastia.surname);

//  nastia.say();

//////////////////////////////////////////////////////////////////////////////

//Модули - для структуризации кода

//2 способа создания модулей через нативную реализацию

//Первый способ использовать анонимную самовызывающуюся функцию
//Фанкшон экспрешон

// const number = 1;

// (function(){
//      let number = 2;
//      console.log(number);
//      console.log(number + 3);
// }());                           //модуль со своей областью видимости

// console.log(number); //обращаемся к глобальной видимости

// //Второй способ для создания модуля , использования обьектного интерфейса

// const user = (function(){
//     const privat = function() {
//         console.log('I am privat!');
//     };

//     return{
//         sayHallo: privat   //обьектный интерфейс
//     };
// }());

// user.sayHallo();

//Webpack. Собираем наш проэкт

// function myModule() {
//     this.hello = function() {
//         console.log('hello');
//     };

//     this.goodbye = function() {
//         console.log('bye!');
//     };
// }

// myModule.exports = myModule;

//в другом файле js пишем

// const myModule = require('./main');

// const myModuleInstance = new myModule();

// myModuleInstance.hello();
// myModuleInstance.goodbye();

//любая модульная система должна быть собрана в один результирующий файл
//галп это планировщик задач
//вэбпэк сборщик модулей
//при помощи галпа можем запустить вэбпэк
//обязательно пишем натройки вэбпака  в файл с названием webpack.config.js
//внутри пигем примерно 
 

// 'use strict';

// let path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: './js/script.js',
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/js'
//   },
//   watch: true,

//   devtool: "source-map",

//   module: {}
// };

//ES6 Modules

//1 способ экспорта
// export let one = 1;

// //2 способ
// let two = 2;

// export {two};

// export function sayHi() {
//     console.log('Hello');
// }

//в другом файле пишем 

// import {one, two} from './main';

// console.log(`${one} and ${two}`);

//далее к терминале пишем 
// macbook@MacBook-Pro-MacBook:(название папки) $ npx webpack


//Ошибки

// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('result');
// } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {
    
// }

// console.log('Still normal');

// try {
//     document.querySelector('.active').addEventListener('click', () => {
//         console.log('click');
//    }); 
// } catch(e) {
//     console.log(e);
// }

// console.log('normal');

//Преобразование кода в старый формат

//Babel - трансплиит (преобразовует новый код в старый)
//Полифилы - участки кода, которые эмулирует новый код под старый

//Сингл пэйдж апликейшон - приложения которые работают внутри браузеров. SPI

//Библиотеки и фреймворки

//Angular:          (Google)
//-node.js
//-TypeScript
//-Webpack
//-MVC pattern
//-Angular

//React: 
//-node.js          (Facebook)
//-JSX
//-Babel
//-Webpack
//-React

//Vue.js:
//-node.js
//-Webpack
//-Vue

//Функции генераторы - это функция которая нам генерирует какой-то результат и делает это последовательно

// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 'd';
// };

// const str = generator();

// console.log(str.next());
// console.log(str.next());
// console.log(str.next()); 
// console.log(str.next());
// console.log(str.next());
// console.log(str.next()); 

//получаем обьект 
// { value: 'S', done: false }
// { value: 'c', done: false }

//или можно вызвать и сразу получить букву

// console.log(str.next().value);
//получает 
//S

//Например

// function* count(n) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }

//Можно эту функцию перебрать методом for of

// for (let k of count(7)) {
//     console.log(k);
// }

//получаем 0 1 2 3 4 5 6

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

//Получаем 0 1 2

//Анимации

//Старый метод

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

//Новый метод

// let pos = 0;

// function myAnimation() {
//     pos++;
//     elem.style.top = pos + 'px';
//     elem.style.left = pos + 'px';

//     if (pos < 300) {
//         requestAnimationFrame(myAnimation);
//     }
// }

// btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);


//Event loop или сидативный цикл. События имя цикл. 
//Call Stack - вызовы функций ктоторые выполняются в данный момент
//Web Apis - это хранилище в браузере, для того, чтобы хранить промежуточные данные
//Callback Queue - события , которые становятся в очередь

// console.log(1);

// setTimeout(() => {
//     console.log('timeout');
// }, 2000);

// setTimeout(() => {
//     console.log('timeout_4000');
// }, 4000);

// console.log(2);

//все колбэки асинхронные