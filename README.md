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
</body> ```



![Dice game](https://github.com/JDevelopz/Dice-Game/blob/main/images/Dice-game.png?raw=true)
