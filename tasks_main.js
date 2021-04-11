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


// ===================================
// task_06.js 
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min && user.age <= max);
console.table(getUsersWithAge(users, 20, 30)); 
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// ===================================
// task_07.js
// Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = users => users.reduce((acc, user) => acc + user.balance, 0);
console.table(calculateTotalBalance(users)); // 20916


// ===================================
// task_08.js
// Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friendName) => users.filter(user => user["friends"].includes(friendName)).map(user => user.name);
console.table(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.table(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

