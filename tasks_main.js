import users from "./users.js";

// task_01.js
// Получить массив имен всех пользователей (поле name).
const getUserNames = users => users.map(user => user.name);
 console.table(getUserNames(users));
 // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// ===================================
// task_02.js
 //  Получить массив имен пользователей по полу (поле gender).
 const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);
  console.table(getUsersWithGender(users, 'male')); 
  // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ===================================
// task_03.js  
