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
  alert('Actually Alex spent 5 years in the Army as a Chinese Mandarin Linguist');
}

if (offspring.toLowerCase() === 'y' || offspring.toLowerCase() === 'yes' && military.toLowerCase() === 'y' || military.toLowerCase() === 'yes') {
  alert('Wow! You are on a roll! Two Correct!');
}

var travel = prompt('Has Alex been to other countries aside from Canada?');
console.log('travel guess:', travel);

if (travel.toLowerCase() === 'y' || travel.toLowerCase() === 'yes') {
  alert('Correct! Alex spent two months traveling around Asia and spent ten months deployed to Afghanistan while in the Military');
} else {
  alert('Actually Alex spent two months traveling around Asia and spent ten months deployed to Afghanistan while in the Military');
}

if (offspring.toLowerCase() === 'y' || offspring.toLowerCase() === 'yes' && military.toLowerCase() === 'y' || military.toLowerCase() === 'yes' && travel.toLowerCase() === 'y' || travel.toLowerCase() === 'yes') {
  alert('Still rolling!! Three Correct!')
}

var college = prompt('Did Alex go to Harvard?');
console.log('college guess:', college);

if (college.toLowerCase() === 'n' || college.toLowerCase() === 'no') {
  alert('Correct! Alex did NOT go to Harvard, he graduated with his BA in Public Health from UW Seattle');
} else {
  alert('Actually Alex graduated with his BA in Public Health from UW Seattle');
}

if (offspring.toLowerCase() === 'y' || offspring.toLowerCase() === 'yes' && military.toLowerCase() === 'y' || military.toLowerCase() === 'yes' && travel.toLowerCase() === 'y' || travel.toLowerCase() === 'yes' && college.toLowerCase() === 'n' || college.toLowerCase() === 'no') {
  alert('Dang! Thought I would trip you up there. Harvard might have been a bit of a leap.  You are doing great!! Four Correct!');
}

var girlfriend = prompt('Does Alex have a girlfriend named Caitlan?');
console.log('girlfriend guess:', girlfriend);

if (girlfriend.toLowerCase() === 'y' || girlfriend.toLowerCase() === 'yes') {
  alert('Correct! And that is the correct spelling');
} else {
  alert('Actually he does');
}

if (offspring.toLowerCase() === 'y' || offspring.toLowerCase() === 'yes' && military.toLowerCase() === 'y' || military.toLowerCase() === 'yes' && travel.toLowerCase() === 'y' || travel.toLowerCase() === 'yes' && college.toLowerCase() === 'n' || college.toLowerCase() === 'no' && girlfriend.toLowerCase() === 'y' || girlfriend.toLowerCase() === 'yes') {
  alert('Wow!!! Are you Alex or a good guesser? 100% Great Job!!!');
}
