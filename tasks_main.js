import users from "./users.js";

// task_01.js
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => users.map(user => user.name);
 console.log(getUserNames(users));
 // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

