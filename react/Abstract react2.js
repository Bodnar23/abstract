//React - это UI библиотека, и ничего не знает про работу с сервервером, а для работы с ним он использует другие api или другие библиотеки.
//API - аплекейшен програминг интерфейс - это спрособ взаимодействия одной программы с другой

//Страница в современных технологиях должна работать без перезагрузки , примеры таких технологий XMLHttpRequest или Fetch API

//Fetch это удобный и современный подход, который вырос из концепции G qwery и полностью замещает функцию аджакс из этой библиотеки. Он использует промисы что позволяет нам полностью уйти от колбеков

//Fetch - это глобальный метод и вызывается он просто так

let url = 'https://jsonplaceholder.typicode.com/posts/',
    data = {username: 'example'};

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type':'application/json'
    }
})
.then((response) => response.json())
.then((myJson) => console.log('Success', myJson))
.catch(error => console.error('Error', error));

//рефакторим

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status:${res.status}`);
    }

    const some = await res.json();

    return some;
};

getResource('https://jsonplaceholder.typicode.com/todos/1000')
    .then((res) => console.log('Success', res))
    .catch(error => console.error('Error', error));

//Асинк авэй - асинхронная операция, она всегда работает только в паре

//Создаём приложение

class GotService {

    constructor() {
        this.apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }
    
        return await res.json();
    };
    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }
    getCharacter(id){
        return this.getResource(`/characters/${id}`);
    }
}

const got = new GotService();

got.getAllCharacters()
    .then(res => {
        res.forEach( item => console.log(item.name));

got.getCharacter(130)
    .then(res => console.log(res));

//Оптимизация кода

updateChar() {
    const id = Math.floor(Math.random()*140 + 25); //25-140
    this.gotService.getCharacter(id)
        .then(this.onCharLoaded);
}

render() {
    const { char, loading } = this.state;

    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <View char={char}/> : null;

    return (
        <div className="random-block rounded">
            {spinner}
            {content}
        </div>
    );
}

//============================================================

updateChar() {
    const id = Math.floor(Math.random()*140 + 25); //25-140
    this.gotService.getCharacter(id)
        .then(this.onCharLoaded);
}

render() {
    const { char, loading } = this.state;

    const content = loading ? <Spinner/> : <View char={char}/>;

    return (
        <div className="random-block rounded">
            {content}
        </div>
    );
}

//Правила!!!!!
//теги рядом использовать нельзя, а если надо то оборачиваем их еще в одни пустые тэги

//Правило!!!!
//Для того, чтоб получить доступ к паапке нужно использовать переменную
//Называется переменное окружение

const ErrorMessage = () => {
    return (
        <>
            <img src={process.env.PUPLIC_URL + '/img/error.jpeg'} alt='error'></img>
            <span>Something goes wrong</span>
        </>
    )
}

//или можно сделать проще
//при этом засовуем картинку прямо в папку с эти файлом

import img from './error.jpeg';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Something goes wrong</span>
        </>
    )
}
