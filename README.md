# Dice-Game
<br>
The Dice Game is based on a two-player. Both players roll the dice and the player who gets the highest phase value will win the game.
<br>
Images of Dice Phases: The list of dice phases images are given below. Save all the images in a folder where you save your HTML, CSS, and JavaScript files. You can save all HTML, CSS, and JavaScript files separately and link CSS and JavaScript files to the HTML file or combine all codes (HTML, CSS and JavaScript) in a single file and execute it.
<ul>
<li>Dice 1</li>
<li>Dice 2</li>
<li>Dice 3</li>
<li>Dice 4</li>
<li>Dice 5</li>
<li>Dice 6</li>
</ul>
<br>
HTML Code: HTML code is used to design the basic structure of the project. The HTML code contains the container class that holds the player’s name and initial dice phase. Another bottom div contains the two buttons (one button for roll the dice and another button for rename the player name).
<br> 

``` <body>

  <div class="container">
    <h1>Roll the dice!</h1>

    <div class="dice">
      <p id="player1">Player 1</p>
      <img class="img1" src="images/dice6.png">
    </div>

    <div class="dice">
      <p id="player2">Player 2</p>
      <img class="img2" src="images/dice6.png">
    </div>
  </div>
  <div class="button">
    <button class="btn" type="button" name="button" href="file:///home/jm/Desktop/Web%20Development%20Bootcamp/PROJECTS/Dicee%20Challenge%20-%20Starting%20Files/Dicee%20Challenge%20-%20Starting%20Files/dicee.html">ROLL</button>
  </div>
  <!-- Javascript -->
  <script src="index.js" charset="utf-8"></script>
</body> 
```

<br>
CSS Code: In this section, we will use some CSS property to style the Dice Game.
<br>
<br> 
JavaScript Code: The JavaScript code contains the functionality of Dice Game. The first functionality is to rename the player name after clicking the button. Another functionality is to roll the dice after clicking the button. After rolling the dice by both the player, anyone player will win who get the highest phase value. If both players get the same phase value then the game will draw.
<br> 

```//Get placeholders for player names.
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
  //Change number img 1;
  document.querySelector('.img1').setAttribute('src', 'images/dice' + number + '.png');
  // Change number img 2;
  document.querySelector('.img2').setAttribute('src', 'images/dice' + number + '.png');
  // if the number of image 2 is greater then image 2 change text and the other way
  if (document.querySelector('.img1').getAttribute('src', number) > document.querySelector('.img1').getAttribute('src', number)) {
    document.querySelector('h1').innerHTML = person1 + 'wins!'
  } else if (document.querySelector('.img2').getAttribute('src', number) > document.querySelector('.img2').getAttribute('src', number)){
    document.querySelector('h1').innerHTML = person2 +  'wins!'
  } else {
    document.querySelector('h1').innerHTML = 'Draw!'
  }
}```

<br>



![Dice game](https://github.com/JDevelopz/Dice-Game/blob/main/images/Dice-game.png?raw=true)
