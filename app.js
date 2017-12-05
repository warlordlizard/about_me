'use strict';

var user = prompt('Hi, what is your name?');
console.log('username:', user);

alert('Welcome ' + user + ', I am going to ask you some questions about Alex.  Please answer with either yes/no or y/n.');

var offspring = prompt('Does Alex have kids?');
console.log('offspring guess:', offspring);

if (offspring.toLowerCase() === 'y' || offspring.toLowerCase() === 'yes') {
  alert('Correct! Alex has one daughter named Jillean');
} else {
  alert('Actually Alex has a daughter named Jillean');
}

var military = prompt('Has Alex served in the Military?');
console.log('military guess:', military);

if (military.toLowerCase() === 'y' || military.toLowerCase() === 'yes') {
  alert('Correct! Alex spent 5 years in the Army as a Chinese Mandarin Linguist');
} else {
  alert('Actually Alex spent 5 years in the Army as a Chinese Mandarin Linguist')
}

if (offspring.toLowerCase() === 'y' || 'yes' && military.toLowerCase() === 'y' || 'yes') {
  alert('Wow! You are on a roll!')
}

var travel = prompt('Has Alex been to other countries aside from Canada?')
console.log('travel guess:', travel)
