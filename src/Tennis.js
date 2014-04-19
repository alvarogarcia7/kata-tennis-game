var Tennis = function(){
	this.scorePlayerOne = 0;
	this.scorePlayerTwo = 0;
};

Tennis.prototype.scoreOne = function(){
	this.scorePlayerOne += 15;
}

Tennis.prototype.score = function(){
	return this.scorePlayerOne + "-" + this.scorePlayerTwo;
}
