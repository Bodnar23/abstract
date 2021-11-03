//Функция стрелочная не имеет своего контекста вызова и всё берёт у родителя

// const { log } = require("console");
// const { connect } = require("http2");
// const { getEnabledCategories } = require("trace_events");

// Например:

// Правильно:
// let obj = {
//     number: 5,
//     sayNumber: function() {
//         say = () => {
//             console.log(this)
//         }
//         say();
//     }
// }

// obj.sayNumber();

// Не правильно:
// let obj = {
//     number: 5,
//     sayNumber: function() {
//         function say() {
//             console.log(this)
//         }
//         say();
//     }
// }

// obj.sayNumber();
//------------------------------------------------------------------------------------------------------------------------
//Методы map и filter, они перебирают весь массив и возвращают новый массив в зависимости от колбека который мы в них передали

//Первый метод filter, преребирает и образует новый массив по нашим параметрам

// let names = ['Nastya', 'Egor', 'Yliana', 'Nikita', 'Nadezda', 'Tim', 'Kolia'];

// let shortNames = names.filter((name) => {
//     return name.length < 5
// });

// console.log(shortNames);

//Метод map трансформирует каждый элемент массива и формарует новый массив с результатами его действий

//Например он взял все элементы, перебрал их, и выдал нам новый массив где всё в нижнем регистре

// let answers = ['NastYa', 'EgoR', 'HeLLo'];

// answers = answers.map((item) => item.toLowerCase());

// console.log(answers);
//------------------------------------------------------------------------------------------------------------------------
//Конкатинацию мы можем заменить интерполяцией (бэктики)

// console.log(`Пользователь ${name}, ${age} лет`)

// function fetchData(data, count = 0) {
//     console.log(`Данные: ${data} в количестве ${count}`)
// }

// fetchData('something');
//------------------------------------------------------------------------------------------------------------------------
//Используем res оператор, теперь наша функция будет принимать в себя неограниченое количество цифр при этом она вернёт их в массиве и мы с можем дальше их использовать

// function max (a, b, ...numbers) {
//      console.log(numbers);
// }

// max(3, 4, 67);

//Ответ [ 67 ]

// function max (...numbers) {
//     console.log(numbers);
// }

// max(3, 4, 67);

//Ответ [ 3, 4, 67 ]

//Тaк же есть spret оператор, который наоборот, разворачивает массив на элементы

// const arr1 = [1, 2, 5],
//       arr2 = [43, 2, 6];

// const res = Math.max(...arr1, ...arr2);
// console.log(res);

//Ответ 43 (показывает самое большое число)

//Практика

// const avatar = 'Photo';

// const user = {
//     name: 'default',
//     pass: 'qwerty',
//     rigths: 'user'
// };

// const admin = {
//     name: 'admin',
//     pass: 'root'
// }

//Чтотбы объеденить два объекта - пишем

//const res  = Object.assign({}, user, admin);

//Или проще используем object spret оператор, он будет разворачивать наши объекты

// const res = {...user, ...admin, avatar};
// console.log(res);

//Разбираем новый синтаксис
// const x = 25, y = 10;
// const coords = {
//     x: x,
//     y: y
// }

// console.log(coords);

//В данном случае можно записать короче. Если свойства имеет название объекта.

// const x = 25, y = 10;
// const coords = {x, y}


// console.log(coords);

//Чтобы получить площадь можно написать

// const x = 25, y = 10;

// const coords = {
//     x: x,
//     y: y,
//     calcSq: function() {
//         console.log(this.x*this.y);
//     }
// }
// ===============================================
//Или более оптимизированый вариант
// const coords = {x, y,
//     calcSq() {
//         console.log(this.x*this.y);
//     }
// }

// coords.calcSq();

// console.log(coords);
//------------------------------------------------------------------------------------------------------------------------
//Деструктуризация объектов

// const user = {
//     name: 'default',
//     pass: 'qwerty',
//     rigths: 'user'
// };

//const userName = user.name;

//console.log(user.name);
//------------------------------------------------------------------------------------------------------------------------
//Деструктуризация

// const {name, pass, rigths} = user;

// console.log(name, rigths);
//-------------------------------------------------

//Вытаскиваем два ключа
// const user = {
//     name: {
//         first: 'Sam',
//         second: 'Smith'
//     },
//     pass: 'qwerty',
//     rigths: 'user'
// };
// const {name: {first, second}, pass, rigths} = user;

// console.log(first, second);
//------------------------------------------------------------------------------------------------------------------------
//Паттерн в js

// function connect({
//     host = 'localhost',
//     port = 3000,
//     user = 'default'}) {
//         console.log(`host: ${host}, port: ${port}, user: ${user}`)
// }

// connect({
//     port: 232,
//     host: 'yeei'
// })

//Ответ host: yeei, port: 232, user: default
//------------------------------------------------------------------------------------------------------------------------
//Дестректуризация массива

// const numbers = [3, 5, 6, 6];

// const [a, b, c] = numbers;

// console.log(a, b, c);

//Ответ 3 5 6

// const numbers = [3, 5, 6, 6];

// const [, , c] = numbers;

// console.log(c);

//Ответ 6

// const numbers = [[3, 5], [6, 6]];

// const [[a, b], [c, d]] = numbers;

// console.log(a, b, c, d);

//Ответ 3 5 6 6

// const country = {
//     name: 'England',
//     population: 20000000,
//     gender: {
//         male: ['15%', '40%'],
//         female: ['16%', '29%']
//     }
// }

//country.gender.male[0]

// const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;

// console.log(maleUnder18, femAdult);
//------------------------------------------------------------------------------------------------------------------------
//React

//создвём приложение реакт 

// npx create-react-app my-app
// cd my-app
// npm start

//В файле index.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const elem = <h2>Hello World!</h2>
//==============================================================
//создаётся автоматически при помощи bebel
//const elem = React.createElement('h2', null, "Hello World!!!")

//ReactDOM.render(elem, document.getElementById('root'));

//Правила
//Если элемент имеет многострочную структуру его необходимо обернуть в круглые скобки
//Необходимо обернуть ещё в div иначе работать не будет 
//------------------------------------------------------------------------------------------------------------------------
//Компоненты это функции которые могут возвращать jsx элементы и они должны быть написаны с большой буквы иначе bebel воспримет как обычный элемент

// const Header = () => {
//     return <h2>Hello World!</h2>
//   }

//Правило

  // const Btn = () => {
  //   const text = "Log in";
  //   const res = () => {
  //     return 'Log in, please'
  //   }
  //   const p = <p>Log in</p>
  //   return <button>{p}</button>
  // }

//мы не можем помещать объекты во внутрь наших реакт элементов

//меняем инпут

// const Field = () => {
//     const holder = "Enter here";
//     return <input type='text' placeholder={holder} />
//   }

//Правило!!! В реакте писать код только камл кейс
//Атрибут for теперь в реакте только htmlFor

//Образец файла index.js 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//import App from './App';



// const Header = () => {
//   return <h2>Hello World!</h2>
// }

// const Field = () => {
//   const holder = "Enter here";
//   const styleField = {
//     width: '500px'
//   }

//   return <input 
//          style={styleField}
//          type='text' 
//          placeholder={holder} 
//          autoComplete=""
//          className="first"
//          htmlFor="" />
// }

// const Btn = () => {
//   const text = "Log in";
//   const logged = true;
//   return <button>{logged ? "Enter" : text}</button>
// }

// const App = () => {
//   return (
//     <div>
//          <Header/>
//          <Field/>
//          <Btn/>
//     </div>
//   )
// }

// ReactDOM.render(<App/>, document.getElementById('root'));
//------------------------------------------------------------------------------------------------------------------------
//Называем папки техникой кебаб кейс либо можно использовать кэмл кейс 
//------------------------------------------------------------------------------------------------------------------------
//Свойства и состояния компонентов. События в React

//Свойтво props свойство компонента

//Props - это обьект со всеми атрибутами которые мы передаём ей

// function WhoAmI(props) {
//   return (
//     <React.Fragment>
//       <h1>My name is {props,name}, surname - {props.surname}</h1>
//       <a href="">{props.link}My profile</a>
//     </React.Fragment>
//   )
// }

// ReactDOM.render(<WhoAmI name="Nastia" surname="Bodnar" link="facebook.com"/>, document.getElementById('root'));

//Проще можно сделать с помощью синтаксиса деструктуризации

// function WhoAmI({name, surname, link}) {
//   return (
//     <React.Fragment>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href="">{link}My profile</a>
//     </React.Fragment>
//   )
// }

// const All = () => {
//   return (
//     <>
//         <WhoAmI name="Nastia" surname="Bodnar" link="instagram.com"/>
//         <WhoAmI name="Egor" surname="Bodnar" link="facebook.com"/>
//         <WhoAmI name="Tofi" surname="Bodnar" link="tiktok.com"/>
//     </>
//   )
// }

// ReactDOM.render(<All/>, document.getElementById('root'));

//Мы получили три разних свойства у разных компонентов, у каждого из них своё свойство

//Мы создавали компоненты в функциональном стиле,просто писали всё функциями у которых были свои пропсы 
//Менять динамически мы их не можем!!!
//в начале кода компоненнт App создан как класс, в чём разница?
//Используя обычные функции мы не можем хранить никакие состояния компонента, если компонент использует счётчик, который динамически может увеличиваться на 1 каждый раз, то записать так мы не сможем

// let counter = 0;
// function WhoAmI({name, surname, link}) {
//   counter++;
//   return (
//     <React.Fragment>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href="">{link}My profile</a>
//     </React.Fragment>
//   )
// }

//не верная запись потому , что когда мы создадим несколько элементов с счётчиками, то они все будут использовать переменную counter и все булут увеличивать на 1, то есть ни у одного элемента не будет своего состояния

// const All = () => {
//   return (
//     <>
//         <WhoAmI name="Nastia" surname="Bodnar" link="instagram.com"/>
//         <WhoAmI name="Egor" surname="Bodnar" link="facebook.com"/>
//         <WhoAmI name="Tofi" surname="Bodnar" link="tiktok.com"/>
//     </>
//   )
// }

//Пример с классами и слайдерами
//Метод render помещает вёрстку, данные на страницу, то что делает функция при помощи return который возвращает нашу вёрстку

// class WhoAmI extends Component {
//   constructor (props) {
//     super(props);
//   }
//   render() {
//     const {name, surname, link} = this.props;   //используем деструктуризацию
//     return (
//       <React.Fragment>
//         <h1>My name is {name}, surname - {surname}</h1>
//         <a href="">{link}My profile</a>
//       </React.Fragment>
//     )
//   }
// }

//У каждого экземпляра свои props, для того чтобы их получить нужно прописать this.props, мы используем контекст вызова и так как это обьект мы можем его деструктурировать на переменные и сразу их использовать с фигурными скобками. Наш класс это полная копия нашей функции
//------------------------------------------------------------------------------------------------------------------------
//Мадифицируем класс

//Как динамически менять данные в компонентах
//Через пропс ничего не выйдет - эти атрибуты только для чтения и менять динамически их нельзя
//Мы должны задать собственное свойство в конструкторе как бы мы делали в нативном js, в реакте создаётся свойство в виде объекта и уже из него мы вытягиваем то, что нужно

// class WhoAmI extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
//   }
//   render() {
//     const {name, surname, link} = this.props;   //используем деструктуризацию
//     return (
//       <React.Fragment>
//         <h1>My name is {name}, surname - {surname}, years = {this.state.years}</h1>
//         <a href="">{link}My profile</a>
//       </React.Fragment>
//     )
//   }
// }

//Чтоб каждый раз не прописывать такую конструкцию мы можем написать

// class WhoAmI extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
//   }
//   render() {
//     const {name, surname, link} = this.props;   //используем деструктуризацию
//     const {years} = this.state;
//     return (
//       <React.Fragment>
//         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//         <a href="">{link}My profile</a>
//       </React.Fragment>
//     )
//   }
// }

//назначаем обработчика событий в качестве атрибута в формате кэмл кейс
//создаём кнопку и назначаем ей событие клик

// class WhoAmI extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
//   }
//   nextYear () { //создаём метод у нашего класса
//     console.log(1);
//   }
//   render() {
//     const {name, surname, link} = this.props;   //используем деструктуризацию
//     const {years} = this.state;
//     return (
//       <React.Fragment>
//         <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//         <a href="">{link}My profile</a>
//       </React.Fragment>
//     )
//   }
// }

//Если мы просто пытаемся написать this.state просто обращаемся к этому свойству и пытаемся поставить ++ то у нас будет ошибка, мы не можем менять наш стейт, мы должны использовать команду сэт стэйт

// nextYear () { 
//   console.log(1);
// //  this.StaticRange.years++  //не правильно!!!!!  
//     this.setState({
//       years: 27
//     })   //правильно!!!!!
// }

//для оптимизации добавляем функцию


// class WhoAmI extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       years: 26,
//     }
//   }

// nextYear () { 
//   console.log(1);
// //  this.StaticRange.years++  //не правильно!!!!!  
//     this.setState(state => ({
//       years: ++state.years
//     }))  

//если запустить этот код, то он не будет работать из-за контекста вызова this.
//Способы решения
//1.Жёстко при помощи баинда привязать метод к каждому экземпляру нашего обьекта

// class WhoAmI extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
//     this.nextYear = this.nextYear.bind(this); 
//   }

  //Всегда используем setState

  //2.Способ привязать контекст вызова у обрабротчика событий это использовать его в конструкторе

  // class WhoAmI extends Component {
  //   constructor (props) {
  //     super(props);
  //     this.state = {
  //       years: 26
  //     }
  //     this.nextYear = () => {
  //       this.setState(state => ({
  //         years: ++state.yeats
  //       }))
  //     }
  //   }
  
//3.Способ использовать функцию как обработчик событий. Class fils.

// nextYear = () => {
//   this.setState(stste => ({
//     years: ++state.years
//   }))
// } 

//таким образом функция запишится в обьект

//Свойства и состояния компонентов

// important === true

// return (
//   <ul className="app-list list-group">
//       <PostListItem label={posts [0].label} important={posts[0].important}/>
//       {/* <PostListItem label='Going to learn React' important/>
//       <PostListItem label='That is so good'/>
//       <PostListItem label='I need a break...'/>*/}
//   </ul>
// )

//Обджект спрет оператор

//Было
// const PostList = ({posts}) => {

//   const elements = posts.map((item) => {
//       return (
//          <li className='list-group-item'>
//             <PostListItem 
//             label={item.label} 
//             important={item.important}/>
//          </li>
//       )
//   });

//Стало
// const PostList = ({posts}) => {

//   const elements = posts.map((item) => {
//       return (
//          <li className='list-group-item'>
//             <PostListItem {...item}/>
//          </li>
//       )
//   });

//Метод render - когда срабатывает отрисовывает наш класс на странице

//Добавляем на страницу элемент который хотим создать

// const AppBlock = styled.div  // - добавляем div
// const AppBlock = styled.a   // - добавляем ссылку
// const AppBlock = styled.section   // - добавляем секцию


//Первый вариант как сделать так чтоб нажимая на корзинку  элемент удалялся


// deleteItem(id) {
//   this.setState(({data}) => {
//       const index = data.findIndex(elem => elem.id === id);
//       data.splice(index, 1);
//       return {
//           data: data
//       }
//   });
// }

//мы так мутируем данные а это делать нельзя

//Система кастомных событий

//Стэйт можно изменять только при помощи сэт стэйт и всегда он должен быть иммутабельным, то есть на прямую мы его менять не можем, изза этого получаются большие конструкции

//Стэйт - это всегда объект!!!
//События не вешить на сабмит а вешать на форму!!!

//Контролируемые элементы

// value={this.state.text}

//чтобы очистить поле вводе пишем конструкцию 

// this.setState({
//   text: ''
// });

//в контексте

// onSubmit(e){
//   e.preventDefault();
//   this.props.onAdd(this.state.text);
//   this.setState({
//       text: ''
//   });
// }

//Если у нас пару фильтров то используем иф и элс а если много то рациональней использовать свитч кейс которые позволяют нам делать множественные условия
//------------------------------------------------------------------------------------------------------------------------
//Библиотека бустреп

// import { Button } from 'reactstrap';

// <Button outline color='warning'>Все</Button>