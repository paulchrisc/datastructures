'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[0]]: {
    open: 11,
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
  [weekdays[5]]: {
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
/* if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//with optional chaining
console.log(restaurant.openingHours.mon?.open);
// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open  ||  ?? 'closed';
  //same as openingHours.mon ,openingHours.tue and so on
  console.log(`On ${day},we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisottp?.(0, 1) ?? 'Method does not exist');

//arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.ios' }];
console.log(users[0]?.name ?? 'User array empty');
*/

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//property values

const values = Object.values(openingHours);
console.log(values);

//entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
//no indexes on set

for (const order of orderSet) console.log(order);

//example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

const restMaps = new Map();
restMaps.set('name', 'Classico Italiano');
restMaps.set(1, 'Firenze, Italy');
console.log(restMaps.set(2, 'Lisbon, Portugal'));

restMaps
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(restMaps.get('name'));
console.log(restMaps.get(true));
console.log(restMaps.get(1));

const time = 21;
console.log(
  restMaps.get(time > restMaps.get('open') && time < restMaps.get('close'))
);

console.log(restMaps.has('categories'));
// restMaps.delete(2);
const arr = [1, 2];
restMaps.set(arr, 'Test');
restMaps.set(document.querySelector('h1'), 'Heading');
console.log(restMaps);

console.log(restMaps.get(arr));

const question = new Map([
  ['question', 'what is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct💯🎉'],
  [false, 'Incorrect, try again ❌'],
]);

console.log(question);

//convert object to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(answer === question.get('correct')));

//converting map to array

console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,87£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus Family');
}

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to board');
  } else {
    console.log('Welcome Aboard');
  }
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and Camera');
checkBaggage('Snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // or
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('paul phristopher caña');

//padding

const message = 'Go to gate 23!';

console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(8456413254876));
console.log(maskCreditCard('8456413254876'));

//repeat
const message2 = 'Bad Weather...  All Departures Delayed...  ';

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
/* 
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);s
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); //substring (new) - can not mutate string as it is primitive
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got Lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

//STRING REVIEW
