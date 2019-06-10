// Scope Homework: Who Dunnit
//
// Learning Objectives
//
// Understand function scope
// Know the difference in between the let and const keywords
// Brief
//
// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.
//
// MVP
//
// Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Here the output for 'Episode 1' the output will be 'Miss Scarlet', as all const cannot be modified unless is the value of the object.

// Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
 murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// the output will be an error as the const variable cannot be modified also it's having the same variable name as the const variable so the variable 'muderer' won't work, once 'const' is added the output will be 'The murderer is Professor Plum.' the the constant won't change.

// // Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// here the output will be:
// 'First Verdict: The muderer is Mrs. Peacock'
// 'Second Verdict: The muderer is Professor Plum.'
// as the variable 'let' declared in the function does not redeclare the variable outside the function, and on the first statement the function is invoked.

 // Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// here the output will be:
//'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard'
// 'Suspect three is Mrs. Peacock'
/* as the block scope let for suspectThree has been reasigned inside of a function and the function called as 'const = suspects' in the first console log, change the output for suspectThree, while in the second output the function is not invoked and the variable has been declered at the begging of the episode 4 is Mrs. Peacock*/

// // Episode 5
//
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

//here the output will be:
// `The waepon is the revolver` as the key value of const sceneario is allowed to be reasigned but not the property itself.


// // Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
Here is `The murderer is Mrs. White` as the function name changed to plotTwist and it has been invoked in the changeMurderer function.



// Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
here the output:
`The murderer is Mr. Green`  I think 'let murderer' here  by redeclaring the variavle with 'let' block scope in the function and none of the other two functions can reasigned the variable 'muderer'. No 100% sure about this.



// Episode 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// here the output is 'The weapon is Candle Stick' as the murderer is still Mrs. Peacock as declered in the function 'plotTwist'

// // Episode 9
//
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Extensions
// hete the output should be `The murderer is Professor Plum` as let murderer is a block scope and connot be reasigned.
// // Make up your own episode!
