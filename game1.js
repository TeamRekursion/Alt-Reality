var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight-100;
var keys = {};
window.addEventListener('keydown', function (e) {
keys[e.keyCode] = true;
e.preventDefault();
});
window.addEventListener('keyup', function (e) {
delete keys[e.keyCode];
});
function Box(options) {
this.x = options.x || 10;
this.y = options.y || 10;
this.width = options.width || 40;
this.height = options.height || 50;
this.color = options.color || '#000000'
this.speed = options.speed || 5;
this.direction = options.direction || 'right';
}
var player = new Box({
X: 10,
y: 10,
width: 50,
height: 50,
color: '#44ee11',
speed: 5
});
var player1 = new Box({
X: 3,
y: 3,
width: 10,
height: 10,
color: '#000000',
speed: 5
});
// function input(player) {
// if (37 in keys) {
// player.x -= player.speed;
// player.direction = 'left';
// }
// if (39 in keys) {
// player.x += player.speed;
// player.direction = 'right';
// }
// if (38 in keys) {
// player.y -= player.speed;
// player.direction = 'up';
// }
// if (40 in keys) {
// player.y += player.speed;
// player.direction = 'down';
// }
// }
function input(player1) {
if (37 in keys) {
player1.x -= player1.speed;
player1.direction = 'left';
}
if (39 in keys) {
player1.x += player1.speed;
player1.direction = 'right';
}
if (38 in keys) {
player1.y -= player1.speed;
player1.direction = 'up';
}
if (40 in keys) {
player1.y += player1.speed;
player1.direction = 'down';
}
}
function drawBox(box) {
ctx.fillStyle = box.color;
ctx.fillRect(box.x, box.y, box.width, box.height);
}
function update() {
input(player);
input(player1);
}
function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawBox(player);
drawBox(player1);
}
 
function loop() {
update();
draw();
// draw();
window.requestAnimationFrame(loop);
}
loop();