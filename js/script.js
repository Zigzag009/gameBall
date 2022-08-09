var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var circle = function (x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
};

var Ball = function () {
	this.x = width / 2;
	this.y = height / 2;
	this.xSpeed = 5;
	this.ySpeed = 0;
}

Ball.prototype.move = function () {
	this.x += this.xSpeed;
	this.y += this.ySpeed;

	if (this.x < 0) {
		this.x = width;
	} else if (this.x > width) {
		this.x = 0;
	}
	if (this.y < 0) {
		this.y = height;
	} else if (this.y > height) {
		this.y = 0;
	}
};
var emoji = String.fromCodePoint(0x1F447);
var fillCircl = prompt("Який хочеш кружок? \n заповнений чи обведений \n Напиши " + emoji);
Ball.prototype.draw = function () {
	circle(this.x, this.y, 10);
	if (fillCircl === "заповнений") {
		ctx.fill();
	} 
	if(fillCircl === "обведений"){
		ctx.stroke();
	}
	ctx.stroke();
};


Ball.prototype.setDirection = function (direction) {
	if (direction === "up") {
		this.xSpeed = 0;
		this.ySpeed = -5;
	} else if (direction == "down") {
		this.xSpeed = 0;
		this.ySpeed = 5;
	}
	else if (direction == "left") {
		this.xSpeed = -5;
		this.ySpeed = 0;
	}
	else if (direction == "right") {
		this.xSpeed = 5;
		this.ySpeed = 0;
	} else if (direction == "stop") {
		this.xSpeed = 0;
		this.ySpeed = 0;
	}
}
var ball = new Ball();

var keyActions = {
	32: "stop",
	37: "left",
	38: "up",
	39: "right",
	40: "down"
};

$("body").keydown(function(event) {
	var direction = keyActions[event.keyCode];
	ball.setDirection(direction);
});
alert("Ти маєш рухати кружок за допомогою стрілок на клавіатурі)")
setInterval(function (argument) {
	ctx.clearRect(0, 0, width, height);

	ball.draw();
	ball.move();

	ctx.lineWidth = 5;
	ctx.strokeRect(0, 0, width, height);
}, 30);
