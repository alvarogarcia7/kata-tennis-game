describe("Tennis", function(){
	it("should have a game", function(){
		var tennis = new Tennis();
	});

	it("should score player one", function(){
		var tennis = new Tennis();
		tennis.scoreOne();
		expect("15-0").toBe(tennis.score());
	});
	it("should score player two", function(){
		var tennis = new Tennis();
		tennis.scoreTwo();
		expect("0-15").toBe(tennis.score());
	});
});
