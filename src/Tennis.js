var Tennis = function(){
	this.FIRST_POINT = 15;
	this.scorePlayerOne = 0;
	this.scorePlayerTwo = 0;
};

Tennis.prototype.scoreOne = function(){
	this.scorePlayerOne = this.calculateNewScore(this.scorePlayerOne);
}

Tennis.prototype.scoreTwo = function(){
	this.scorePlayerTwo += this.FIRST_POINT;
}

Tennis.prototype.score = function(){
	return this.scorePlayerOne + "-" + this.scorePlayerTwo;
}

Tennis.prototype.calculateNewScore = function(oldScore){
	var increment = this.FIRST_POINT;
	if(oldScore === 2*this.FIRST_POINT){
		increment = 10;
	}
	oldScore += increment;
	return oldScore;
}

