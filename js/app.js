// Sharks our hero must avoid
/**
 * @param  {} x
 * @param  {} y
 * @param  {} speed
 */
const Shark = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/shark-fin.png';
};
// Update the sharks positions
/**
 * @param  {} dt
 */
Shark.prototype.update = function (dt) {
    this.x += this.speed * dt;

// Resets position of sharks
/**
 * @param  {} this.x>550
 * @param  {} {this.x=-100;this.speed=100+Math.floor(Math.random(
 * @param  {} *400
 */
if (this.x > 550) {
    this.x = -100;
    this.speed = 100 + Math.floor(Math.random() * 400);
    }

// Check for collision between hero and sharks
/**
 * @param  {} hero.x<=this.x+60&&hero.x+35>=this.x&&hero.y<=this.y+35&&40+hero.y>=this.y
 */
if (hero.x <= this.x + 60 && hero.x + 35 >= this.x && hero.y <= this.y + 35 && 40 + hero.y >= this.y) {
    hero.x = 200;
    hero.y = 380;
}
};

// Draw the shark on the screen, required method for game
/**
 * @param  {} {ctx.drawImage(Resources.get(this.sprite
 * @param  {} this.x
 * @param  {} this.y
 */
Shark.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Our brave hero
/**
 * @param  {} x
 * @param  {} y
 * @param  {} speed
 */
const Hero = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-pink-girl.png';
};
/**
 * @param  {} {if(this.y>380
 * @param  {} {this.y=380;}if(this.x>400
 * @param  {} {this.x=400;}if(this.x<0
 * @param  {} {this.x=0;}if(this.y<0
 */
Hero.prototype.update = function () {
    // Keeps hero in bounds
    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // Checks for survival to land
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
};
// Draws our hero
/**
 * @param  {} {ctx.drawImage(Resources.get(this.sprite
 * @param  {} this.x
 * @param  {} this.y
 */
Hero.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// How our hero moves
/**
 * @param  {} keyPress
 * @param  {} {switch(keyPress
 * @param  {this.x-=this.speed+50;break;case'up':this.y-=this.speed+30;break;case'right':this.x+=this.speed+50;break;case'down':this.y+=this.speed+30;break;}};} {case'left'
 * @returns this
 */
Hero.prototype.handleInput = function (keyPress) {
    switch (keyPress) {
        case 'left':
            this.x -= this.speed + 50;
            break;
        case 'up':
            this.y -= this.speed + 30;
            break;
        case 'right':
            this.x += this.speed + 50;
            break;
        case 'down':
            this.y += this.speed + 30;
            break;
    }
};

// Instantiates sharks
/**
 * @param  {} 200
 * @param  {} 380
 * @param  {} 50
 */
const allEnemies = [];

// Shark positions
let sharkPosition = [85, 170, 255];
let hero = new Hero(200, 380, 50);
let shark;
/**
 * @param  {} function(posY
 * @param  {} {shark=newShark(0
 * @param  {} posY
 * @param  {} 100+Math.floor(Math.random(
 * @param  {} *512
 * @param  {} ;allEnemies.push(shark
 * @param  {} ;}
 */
sharkPosition.forEach(function (posY) {
    shark = new Shark(0, posY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(shark);
});

// This listens for key presses and sends the keys to your
// Hero.handleInput() method. You don't need to modify this.
/**
 * @param  {} 'keyup'
 * @param  {} function(e
 * @param  {'left'} {constallowedKeys={37
 * @param  {'up'} 38
 * @param  {'right'} 39
 * @param  {'down'} 40
 * @param  {'left'} 65
 * @param  {'up'} 87
 * @param  {'right'} 68
 * @param  {'down'};} 83
 * @returns down
 */
document.addEventListener('keyup', function (e) {
    const allowedKeys = {
        37: 'left', //Left arrow
        38: 'up', //Up arrow
        39: 'right', //Right arrow
        40: 'down', // Down arrow
        //Additional keys gathered from https://keycode.info/
        65: 'left', //A key
        87: 'up', //W key
        68: 'right', //D key
        83: 'down' //S key
    };
/**
 * @param  {} allowedKeys[e.keyCode]
 * @param  {} ;}
 */
hero.handleInput(allowedKeys[e.keyCode]);
});