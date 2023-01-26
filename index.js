//Get placeholders for player names.
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
// init function that runs when application gets launched.
function init(){
  // Get player names 
let person1 = prompt('Player 1, please enter your name');
let person2 = prompt('Player 2, please enter your name');
  // Change placeholders to user names of choice.
if(person1 != null){
  player1.innerHTML = person1
}
if(person2 !== null){
  player2.innerHTML = person2;
}
};
init()

// Activate on button click
const button = document.querySelector('button');
button.onclick = function() {
  // random number generator for image 1
  let number = Math.random();
  number = number * 6;
  number = Math.floor(number) + 1;
  // random number generator for image 2
  let number2 = Math.random();
  number2 = number * 6;
  number2 = Math.floor(number) + 1;
  //Change number img 1;
  document.querySelector('.img1').setAttribute('src', 'images/dice' + number + '.png');
  // Change number img 2;
  document.querySelector('.img2').setAttribute('src', 'images/dice' + number2 + '.png');
  // if the number of image 2 is greater then image 2 change text and the other way
  if (document.querySelector('.img1').getAttribute('src', number) > document.querySelector('.img1').getAttribute('src', number)) {
    document.querySelector('h1').innerHTML = person1 + 'wins!'
  } else if (document.querySelector('.img2').getAttribute('src', number) > document.querySelector('.img2').getAttribute('src', number2)){
    document.querySelector('h1').innerHTML = person2 +  'wins!'
  } else {
    document.querySelector('h1').innerHTML = 'Draw!'
  }
}
