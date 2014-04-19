var Tennis = function(){
	this.FIRST_POINT = 15;
	this.scorePlayerOne = 0;
	this.scorePlayerTwo = 0;
};

Tennis.prototype.scoreOne = function(){
	this.scorePlayerOne = this.calculateNewScore(this.scorePlayerOne);
}

Tennis.prototype.scoreTwo = function(){
	if(this.scorePlayerTwo === 40){
		this.scorePlayerTwo = 41;
	} else {
		this.scorePlayerTwo = this.calculateNewScore(this.scorePlayerTwo);
	}
}

Tennis.prototype.score = function(){
	if(this.playerTwoHasAdvantage()){
		return "Player 2 Won";
	}
	return this.scorePlayerOne + "-" + this.scorePlayerTwo;
}

Tennis.prototype.playerTwoHasAdvantage = function(){
	return this.scorePlayerTwo === 41;	
}

Tennis.prototype.calculateNewScore = function(oldScore){
	var increment = this.FIRST_POINT;
	if(oldScore === 2*this.FIRST_POINT){
		increment = 10;
	}
	oldScore += increment;
	return oldScore;
}

