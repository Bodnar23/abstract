//React - это UI библиотека, и ничего не знает про работу с сервервером, а для работы с ним он использует другие api или другие библиотеки.
//API - аплекейшен програминг интерфейс - это спрособ взаимодействия одной программы с другой

//Страница в современных технологиях должна работать без перезагрузки , примеры таких технологий XMLHttpRequest или Fetch API

//Fetch это удобный и современный подход, который вырос из концепции jQuery и полностью замещает функцию AJAX из этой библиотеки. Он использует промисы что позволяет нам полностью уйти от колбеков

//Fetch - это глобальный метод и вызывается он просто так

// let url = 'https://jsonplaceholder.typicode.com/posts/',
//     data = {username: 'example'};

// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type':'application/json'
//     }
// })
// .then((response) => response.json())
// .then((myJson) => console.log('Success', myJson))
// .catch(error => console.error('Error', error));

//рефакторим

// const getResource = async (url) => {
//     const res = await fetch(url);

//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status:${res.status}`);
//     }

//     const some = await res.json();

//     return some;
// };

// getResource('https://jsonplaceholder.typicode.com/todos/1000')
//     .then((res) => console.log('Success', res))
//     .catch(error => console.error('Error', error));

//------------------------------------------------------------------------------------------------------------------------
//Асинк авэй - асинхронная операция, она всегда работает только в паре

//Создаём приложение

// class GotService {

//     constructor() {
//         this.apiBase = 'https://www.anapioficeandfire.com/api';
//     }

//     async getResource (url) {
//         const res = await fetch(`${this._apiBase}${url}`);
    
//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}, status:${res.status}`);
//         }
    
//         return await res.json();
//     };
//     getAllCharacters() {
//         return this.getResource('/characters?page=5&pageSize=10');
//     }
//     getCharacter(id){
//         return this.getResource(`/characters/${id}`);
//     }
// }

// const got = new GotService();

// got.getAllCharacters()
//     .then(res => {
//         res.forEach( item => console.log(item.name));

// got.getCharacter(130)
//     .then(res => console.log(res));

//Оптимизация кода

// updateChar() {
//     const id = Math.floor(Math.random()*140 + 25); //25-140
//     this.gotService.getCharacter(id)
//         .then(this.onCharLoaded);
// }

// render() {
//     const { char, loading } = this.state;

//     const spinner = loading ? <Spinner/> : null;
//     const content = !loading ? <View char={char}/> : null;

//     return (
//         <div className="random-block rounded">
//             {spinner}
//             {content}
//         </div>
//     );
// }

//============================================================

// updateChar() {
//     const id = Math.floor(Math.random()*140 + 25); //25-140
//     this.gotService.getCharacter(id)
//         .then(this.onCharLoaded);
// }

// render() {
//     const { char, loading } = this.state;

//     const content = loading ? <Spinner/> : <View char={char}/>;

//     return (
//         <div className="random-block rounded">
//             {content}
//         </div>
//     );
// }

//Правила!!!!!
//теги рядом использовать нельзя, а если надо то оборачиваем их еще в одни пустые тэги

//Правило!!!!
//Для того, чтоб получить доступ к папке нужно использовать переменную
//Называется переменное окружение

// const ErrorMessage = () => {
//     return (
//         <>
//             <img src={process.env.PUPLIC_URL + '/img/error.jpeg'} alt='error'></img>
//             <span>Something goes wrong</span>
//         </>
//     )
// }

//или можно сделать проще
//при этом засовуем картинку прямо в папку с эти файлом

// import img from './error.jpeg';

// const ErrorMessage = () => {
//     return (
//         <>
//             <img src={img} alt='error'></img>
//             <span>Something goes wrong</span>
//         </>
//     )
// }

//------------------------------------------------------------------------------------------------------------------------
//Жизненый цикл компонента

//Жизненый цикл и хуки
//Компонент появился на странице (componentDidMount())---->  Компонент обновился (new props, или setState) (componentDidUpdate())------>  Компонент был удалён (componentWillUnmount())
//Либо второй вариант ----- произошла ошибка (componentDidCath())

//Новая команда 

//npm run build

//Остановить сервер control + C

//Запускаем на сервер командой http-server + название папки

//Рендер функция - это функция, которая передаётся в компонент для рендеринга части его содержимого. Таким образом мы можем котролировать её извне. Лучше всего её называть renderслово например renderItems.

//Реакт элементы не изменяются, можно только создать копию их методом cloneElement()

//Навигацияв приложении с помощью Реакт Роутинг и библиотека реакт роут

//import {withRouter} from 'react-router-dom';  для того чтоб импортировать из библиотеки способность переходить на страницы

//Свойство default props.

//Работает так же как и параметры по умолчанию в функциях только для свойств компонентов

//js - язык с динамической типизацией и  это значит что когда мы работаем с какими то объектами и типами данных они могут трасформироваться в другие типы данных во время работы нашей программы и есои не следить за их преобразованиями то можем получить ошибку или некорректную работу

//RandomChar.propTypes проверяет типы данных

// RandomChar.propTypes = {
//    interval: (props(список всех наших проперти которые приходят в компонент), propName(имя какого-то определённого проперти), componentName(имя самого компонента)) => {

//    }
// }

//интервал обязательно должен быть числом

//Компоненты высшего порядка (эйчь о си)

//Классы как и функции могут быть безымянными

//Хуки (перехват)- это технология кокторая позволяет перехватить какого то стандартного поведения какого то действия и изменить его.

//1.Используются по желанию
//2.Обратно совместимы(можно рефакторить код, комбинировать)
//3.Классовые компоненты не исчезают

//Хуки - это функции которые позволяют нам не создавать классовых компонентов вообще

//Классовые компоненты нужно тогда когда нам нужно классовое состояние компонентов

//Хук юстейт возвращает массив 

//useState - это хук который принимает в себя начальное состояние

// import React, {useState} from 'react';
// import './App.css';

// function App() { //у этой функции есть состояние
//     const [count, setCount] = useState(0); //начинаем счётчик с нуля и дальше изменять при помощи setState. 

//     return (
//         <div>
//             <p>Вы кликнули {count} раз</p>
//             <button
//             onClick={() => setCount(count + 1)}>Кликни меня</button>
//         </div>
//     );
// }

// export default App;

//это функциональный компонент но при этом он уже исеет какое то состояние

// import React, {useState} from 'react';
// import './App.css';

// function App() { 
//     const [count, setCount] = useState(0); 
//     const [data, refreshData] = useState([{name: 'Nastia', sex: 'male'}])

//     return (
//         <div>
//             <p>Вы кликнули {count} раз</p>
//             <button
//             onClick={() => setCount(count + 1)}>Кликни меня</button>
           
//             {data.map(item => {
//                 return (
//                     <div>Name: {item].name}, sex: {item.sex}</div>
//                 );
//             })}
//             <button 
//             onClick={() => refreshData(data => ([...data, {name: 'Egor', sex: 'male'}]))}>
//             Добавить данные</button>
//         </div>

//     );
// }

// export default App;

//Хук - useEffect это комбинация компоненнт дид маунт компонент дид апдейт и компонент вил аймаунт или появление либо исчезнавение  компонента с нашей страницы

// import React, {useState, useEffect} from 'react'; //useEffect - хук
// import './App.css';

// function App() { 
//     const [count, setCount] = useState(0); 
//     const [data, refreshData] = useState([{name: 'Nastia', sex: 'male'}])

//     useEffect(() => {
//         updateChar();
//         let timerId = setInterval(updateChar, 15000);
//         return () => {
//             clearInterval(this.timerId);
//         }
//     });

//     return (
//         <div>
//             <p>Вы кликнули {count} раз</p>
//             <button
//             onClick={() => setCount(count + 1)}>Кликни меня</button>
           
//             {data.map(item => {
//                 return (
//                     <div>Name: {item].name}, sex: {item.sex}</div>
//                 );
//             })}
//             <button 
//             onClick={() => refreshData(data => ([...data, {name: 'Egor', sex: 'male'}]))}>
//             Добавить данные</button>
//         </div>

//     );
// }

//Хук useEffect - сообщает реакту что компонент должен что-то сделать после отрисовки, реакт запомнит переданую нами функцию  и вызовит её после того как обновится наш дом.

//useEffect - запускается как после первой отрисовки так и после каждого дальнейшего обновления компонента

//Вызываем хуки только из компонента функций

//Вызываем хуки только на верхнем уровне

//Вызываем хук внутри функции

//Хук нельзя поместить во внутрь циклов условий или вложеных функций

//Рефакторим код с помощью хуков

//до

// import React, {Component} from 'react';
// import './itemList.css';
// import Spinner from '../spinner/';


// export default class ItemList extends Component {

//     state = {
//         itemList: null
//     }

// //     componentDidMount() {
//         const {getData} = this.props;

//         getData()
//             .then((itemList) => {
//                 this.setState({
//                     itemList
//                 })
//             })
//     }
    
//     renderItems(arr) {
    //     return arr.map((item) => {
    //         const {id, name} = item;

    //         const label = this.props.renderItem(item);

    //         return (
    //             <li
    //                 key={id}
    //                 className="list-group-item"
    //                 onClick={ () => this.props.onCharSelected(id)}>
    //                 {label}
    //             </li>
    //         )
    //     })
    // }


//     render() {
//         const {itemList} = this.state;


//         if(!itemList) {
//             return <Spinner/>
//         }

//         const items = this.renderItems(itemList);

//         return (
//             <ul className="item-list list-group">
//                 {items}
//             </ul>
//         );
//     }
// }

//после

// import React, {useState, useEffect} from 'react';
// import './itemList.css';
// import Spinner from '../spinner/';



// function ItemList({getData, onItemSelected, renderItem}) {

//     const [itemList, updateList] = useState([]);

//     useEffect(() => {
//         getData()
//             .then((data) => {
//                 updateList(data)
//             })
//     }, [])

    
    // function renderItems(arr) {
    //     return arr.map((item) => {
    //         const {id, name} = item;

    //         const label = renderItem(item);

    //         return (
    //             <li
    //                 key={id}
    //                 className="list-group-item"
    //                 onClick={ () => onItemSelected(id)}>
    //                 {label}
    //             </li>
    //         )
    //     })
    // }

    // if(!itemList) {
    //     return <Spinner/>
    // }

//     const items = this.renderItems(itemList);

//     return (
//         <ul className="item-list list-group">
//             {items}
//         </ul>
//     );
    

// }

// ItemList.defaultProps = {
//     onItemSelected: () => {}
// }

// export default ItemList;
