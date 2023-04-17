'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[6]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 2}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Solo',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Solo',
  starterIndex: 1,
});

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);
// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
// //Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(arr);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);

// // //nest destructuring
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // //default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

// // const arr = [7, 8, 9];
// // const bnewArr = [1, 2, arr[0], arr[1], arr[2]];

// // //or

// // const newArr = [1, 2, ...arr];

// // console.log(...newArr); //

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy

// // const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu2);

// // //iterables: arrays, strings,maps, sets. Not objects

// // const str = 'Jonas';
// // const letters = [...str, '', 'S.'];
// // console.log(letters);

// // //objects

// // const newRestaurante = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// // console.log(newRestaurante);

// //spread,
// // const arr = [1, 2, 3, ...[4, 5]];

// // //rest

// // const [c, d, ...others] = [1, 2, 3, 4, 5];
// // console.log(d, d, others);

// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];

// // console.log(pizza, risotto, otherFood);

// // //objects

// // const { sat, ...weekdays } = restaurant.openingHours;

// // console.log(weekdays);

// // //functions

// // const add = function (...numbers) {
// //   let ans = 0;
// //   for (let x = 0; x < numbers.length; x++) {
// //     ans += numbers[x];
// //   }
// //   console.log(ans);
// // };

// // add(2, 3);
// // add(5, 3, 7, 2);
// // add(5, 6, 7, 8, 9, 10, 11);

// // const arrNew = [23, 5, 7];
// // add(...arrNew);

// // //use any data type, return any data type, short circuiting

// // console.log(3 || 'Jonas');
// // console.log('' || 'Jonas');
// // console.log(true || 0);
// // console.log(undefined || null);

// // console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// // restaurant.numGuests = 23;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // console.log('------ AND ------');

// // console.log(0 && 'Jonas');
// // console.log(7 && 'Jonas');

// // console.log('Hello' && 23 && null && 'jonas');

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushroom', 'spinach');
// // }

// // restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// // //nullish : null and undefined (not 0 or '')
// // //only if the value before ?? is null and undefined will the code short circuit

// // const rest0 = {
// //   name: 'Capri',
// //   // numGuests: 20,
// //   numGuests: 0,
// // };

// // const rest02 = {
// //   name: 'La Piazza',
// //   owner: 'Giovanni Rossi',
// // };

// // //OR assignment operator
// // // rest0.numberGuests = rest0.numGuests || 10;
// // // rest02.numberGuests = rest02.numGuests || 10;

// // // rest0.numGuests ||= 10;
// // // rest02.numGuests ||= 10;

// // //nullish assignment operator
// // rest0.numGuests ??= 10;
// // rest02.numGuests ??= 10;
// // // rest02.owner = rest02.owner && '<Anonymous>';
// // // rest0.owner = rest0.owner && '<Anonymous>';
// // rest0.owner &&= '<Anonymous>';
// // rest02.owner &&= '<Anonymous>';
// // console.log(rest0);
// // console.log(rest02);

// // const menew = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menew) console.log(item);

// for (const item of menew.entries()) {
//   console.log(`${item[0] + 1}: ${item}`);
// }

/////review data structures///////
//done review destructuring arrays section 103
//done review destructuring objects section 104
//done review spread operator
//done rest pattern and parameters
//done short circuitting
//done nullish
//done logical assignment
//review resume // 4/17
