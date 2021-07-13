//Redux это не обязательно часть реакта, это паттерн

//Функция reduser всегда должна юбыть чистой функцией, она должна зависить только от стэйта который ей приходит и от экшона и не исеть никаких побочных эффектов

//Фигма - полезные инструменты как для дизайнера так и для фронт энд разработчика
//заменяет зэплин и авокод

//Фигма есть дэсктопная версия и браузерная 

//Фигма работает с векторными изображениями и макетами

//import {Provider} from 'react-redux'; - провайдер это обёрка чтобы передать определённые параметры по всему приложению ниже по всей иерархии ниже. Внутри себя он использует контекст Api 

//React Context
//для этого нужно два компонента
//1.Провайдер (Provider) - это компонент в котором можно установить значение для использования ниже
//2.Консьюмер (Consumer) - читает значения которое мы установили в провайдер

//Обычно это применябт при работе с языком или темой

//Испоьзование контекста

// import React from 'react';

// const MyContext = React.createContext();

// export default MyContext;

//Всегда должен быть запрос, успех и ошибка!!!!!!!!!!!

//Команда запуска тестов 

// npm run test 

//Как выглядят тесты

// import React from 'react';
// import RandomChar from './randomChar';
// import {shallow} from 'enzyme';

// describe('Testing <RandomChar/>', () => {
//     const char = shallow(<RandomChar/>);

//     describe('Tasting snap & state', () => {

//         it('RandomChar have rendered correctly', () => {
//             expect(char).toMatchSnapshot();
//         });
    
//         it('RandomChar state "char" is empty object', () => {
//             expect(char.state().char).toBeObject();
//         });
    
//         it('RandomChar state "loading" is true', () => {
//             expect(char.state().loading).toBeTruthy();
//         });
    
//         it('RandomChar state "error" is false', () => {
//             expect(char.state().error).toBeFalsy();
//         });
//     });
//     describe('Handlers tests', () => {
//         it('testing onCharLoaded', () => {
//             char.instance().onCharLoaded();
//             expect(char.state().loading).toBeFalsy();
//         });

//         it('testing onError', () => {
//             char.instance().onError();
//             expect(char.state().loading).toBeFalsy();
//             expect(char.state().error).toBeTruthy();
//         });

//         it('testing updateChar', () => {
//             char.instance().updateChar();
//             expect(char.state().loading).toBeFalsy();
//         });
//     });
// });