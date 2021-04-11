import users from "./users.js";

// task_01.js
// Получить массив имен всех пользователей (поле name).
const getUserNames = users => users.map(user => user.name);
 console.table(getUserNames(users));
 // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// ===================================


// task_02.js
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue')); 
 // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// ===================================
// task_03.js  
 //  Получить массив имен пользователей по полу (поле gender).
 const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);
  console.table(getUsersWithGender(users, 'male')); 
  // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// ===================================
// task_04.js 
// Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = users => users.filter (user => user.isActive);
console.log(getInactiveUsers(users)); 
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson] 


// ===================================
// task_05.js 
// Получить пользоваля (не массив) по email (поле email, он уникальный).
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
console.table(getUserWithEmail(users, 'shereeanthony@kog.com')); 
// {объект пользователя Sheree Anthony}
console.table(getUserWithEmail(users, 'elmahead@omatom.com')); 
// {объект пользователя Elma Head}