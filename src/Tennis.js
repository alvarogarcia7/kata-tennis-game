var Tennis = function(){
	this.FIRST_POINT = 15;
	this.SECOND_POINT = 30;
	this.THIRD_POINT = 40;
	this.ADVANTAGE = 41; 
	this.scorePlayerOne = 0;
	this.scorePlayerTwo = 0;
};

Tennis.prototype.scoreOne = function(){
	this.scorePlayerOne = this.calculateNewScore(this.scorePlayerOne);
}

Tennis.prototype.scoreTwo = function(){
	this.scorePlayerTwo = this.calculateNewScore(this.scorePlayerTwo);
}

Tennis.prototype.score = function(){
	if(this.playerTwoHasAdvantage()){
		return "Player 2 Won";
	}
	if(this.playerOneHasAdvantage()){
		return "Player 1 Won";
	}
	return this.scorePlayerOne + "-" + this.scorePlayerTwo;
}

Tennis.prototype.playerTwoHasAdvantage = function(){
	return this.scorePlayerTwo === this.ADVANTAGE;	
}

Tennis.prototype.playerOneHasAdvantage = function(){
	return this.scorePlayerOne === this.ADVANTAGE;
}

Tennis.prototype.calculateNewScore = function(oldScore){
	if(oldScore === this.THIRD_POINT){
		oldScore = this.ADVANTAGE;
	} else if(oldScore === this.SECOND_POINT){
		oldScore = this.THIRD_POINT;
	} else if(oldScore === this.FIRST_POINT){
		oldScore = this.SECOND_POINT;
	} else {
		oldScore = this.FIRST_POINT;
	}
	return oldScore;
}

