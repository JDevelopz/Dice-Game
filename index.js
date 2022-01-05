// Makes Javascript Activate on button click
var button = document.querySelector('button');
button.onclick = function() {
  // random number generator for image 1
  var number = Math.random();
  number = number * 6;
  number = Math.floor(number) + 1;
  document.querySelector('.img1').setAttribute('src', 'images/dice' + number + '.png');
  // random number generator for image 2
  var number = Math.random();
  number = number * 6;
  number = Math.floor(number) + 1;
  document.querySelector('.img2').setAttribute('src', 'images/dice' + number + '.png');
  // if the number of image 2 is greater then image 2 change text and the other way
  if (document.querySelector('.img2').getAttribute('src', number) > document.querySelector('.img1').getAttribute('src', number)) {
    document.querySelector('h1').innerHTML = 'Player 2 wins!'
  } else {
    document.querySelector('h1').innerHTML = 'Player 1 wins!'
  }
}
