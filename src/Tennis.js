var Tennis = function(){
	this.FIRST_POINT = 15;
	this.scorePlayerOne = 0;
	this.scorePlayerTwo = 0;
};

Tennis.prototype.scoreOne = function(){
	this.scorePlayerOne += this.FIRST_POINT;
}

Tennis.prototype.scoreTwo = function(){
	this.scorePlayerTwo += this.FIRST_POINT;
}

Tennis.prototype.score = function(){
	return this.scorePlayerOne + "-" + this.scorePlayerTwo;
}
