var Tennis = function(){
	this.FIRST_POINT = 15;
	this.scorePlayerOne = 0;
	this.scorePlayerTwo = 0;
};

Tennis.prototype.scoreOne = function(){
	var increment = this.FIRST_POINT;
	if(this.scorePlayerOne === 2*this.FIRST_POINT){
		increment = 10;
	}
	this.scorePlayerOne += increment;
}

Tennis.prototype.scoreTwo = function(){
	this.scorePlayerTwo += this.FIRST_POINT;
}

Tennis.prototype.score = function(){
	return this.scorePlayerOne + "-" + this.scorePlayerTwo;
}
