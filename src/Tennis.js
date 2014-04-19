var Tennis = function(){
	this.FIRST_POINT = 15;
	this.SECOND_POINT = 30;
	this.THIRD_POINT = 40;
	this.ADVANTAGE = "ADV"; 
	this.WON = "WON"; 
	this.scorePlayerOne = 0;
	this.scorePlayerTwo = 0;
};

Tennis.prototype.scoreOne = function(){
	this.scorePlayerOne = this.calculateNewScore(this.scorePlayerOne);
	this.normalizeScore();
}

Tennis.prototype.scoreTwo = function(){
	this.scorePlayerTwo = this.calculateNewScore(this.scorePlayerTwo);
	this.normalizeScore();
}

Tennis.prototype.normalizeScore = function(){
	if(this.ADVANTAGE === this.scorePlayerOne && this.ADVANTAGE === this.scorePlayerTwo){
		this.scorePlayerOne = this.THIRD_POINT;
		this.scorePlayerTwo = this.THIRD_POINT;
	}
	if(this.ADVANTAGE === this.scorePlayerOne && this.ADVANTAGE !== this.scorePlayerTwo && this.THIRD_POINT !== this.scorePlayerTwo){
		this.scorePlayerOne = this.WON;
	}
	if(this.ADVANTAGE === this.scorePlayerTwo && this.ADVANTAGE !== this.scorePlayerOne && this.THIRD_POINT !== this.scorePlayerOne){
		this.scorePlayerTwo = this.WON;
	}
}

Tennis.prototype.score = function(){
	if(this.scorePlayerTwo === this.WON){
		return "Player 2 Won";
	}
	if(this.scorePlayerOne === this.WON ){
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
	if(oldScore === this.ADVANTAGE){
		oldScore = this.WON;
	} else if(oldScore === this.THIRD_POINT){
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

