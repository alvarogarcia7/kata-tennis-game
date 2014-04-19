describe("Tennis", function(){

	var tennis;
	beforeEach(function(){
		tennis = new Tennis();
	});

	it("should have a game", function(){
		expect(tennis).toBeTruthy();
	});

	it("should score player one", function(){
		tennis.scoreOne();
		expect("15-0").toBe(tennis.score());
	});

	it("should score player two", function(){
		tennis.scoreTwo();
		expect("0-15").toBe(tennis.score());
	});

	it("should score player one three times", function(){
		tennis.scoreOne();
		tennis.scoreOne();
		tennis.scoreOne();
		expect("40-0").toBe(tennis.score());
	});

	it("should score player two three times", function(){
		tennis.scoreTwo();
		tennis.scoreTwo();
		tennis.scoreTwo();
		expect("0-40").toBe(tennis.score());
	}); 
});
