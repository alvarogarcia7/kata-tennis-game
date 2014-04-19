describe("Tennis", function(){
	it("should have a game", function(){
		var tennis = new Tennis();
	});

	it("should score player one", function(){
		var tennis = new Tennis();
		tennis.scoreOne();
		expect("15-0").toBe(tennis.score());
	});
});
