// get random position for enemy
let randomPosition = function() {
		let number = Math.floor((Math.random() * 3) + 1);
		return number;
};

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = (randomPosition())*75;
    this.speed = (randomPosition())*150;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if (this.x > 510) {
      this.x = -40;
      this.speed = (randomPosition())*75;
    };

    // handles collision with the Player

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    // setting the Player initial location
    this.x = 200;
	  this.y = 410;

    // The image/sprite for our player
    this.sprite = 'images/char-boy.png';
};

// Update the player's position
Player.prototype.update = function(dt) {

};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// player moves
Player.prototype.handleInput = function(keyCode) {
    if (keyCode === 'left' && this.x > 0) {
      this.x -= 102;
    }
    if (keyCode === 'right' && this.x < 400) {
      this.x += 102;
    }
    if (keyCode === 'down' && this.y < 400) {
      this.y += 85;
    }
    if (keyCode === 'up' && this.y > 0) {
      this.y -= 85;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3];
// Place the player object in a variable called player
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
