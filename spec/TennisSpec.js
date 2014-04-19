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
		expect(tennis.score()).toBe("15-0");
	});

	it("should score player two", function(){
		tennis.scoreTwo();
		expect(tennis.score()).toBe("0-15");
	});

	it("should score player one three times", function(){
		tennis.scoreOne();
		tennis.scoreOne();
		tennis.scoreOne();
		expect(tennis.score()).toBe("40-0");
	});

	it("should score player two three times", function(){
		tennis.scoreTwo();
		tennis.scoreTwo();
		tennis.scoreTwo();
		expect(tennis.score()).toBe("0-40");
	}); 

	it("should let player two win", function(){
		tennis.scoreTwo();
		tennis.scoreTwo();
		tennis.scoreTwo();
		tennis.scoreTwo();
		expect(tennis.score()).toBe("Player 2 Won");
	}); 
	
	it("should let player one win", function(){
		tennis.scoreOne();
		tennis.scoreOne();
		tennis.scoreOne();
		tennis.scoreOne();
		expect(tennis.score()).toBe("Player 1 Won");
	}); 
	
	it("should let player one get the advance", function(){
		tennis.scoreOne();
		tennis.scoreOne();
		tennis.scoreOne();
		
		tennis.scoreTwo();
		tennis.scoreTwo();
		tennis.scoreTwo();
		expect(tennis.score()).toBe("40-40");
		
		tennis.scoreOne();
		expect(tennis.score()).toBe("ADV-40");
	}); 

	it("should let player one win after getting the advance", function(){
		tennis.scoreOne();
		tennis.scoreOne();
		tennis.scoreOne();
		
		tennis.scoreTwo();
		tennis.scoreTwo();
		tennis.scoreTwo();
		
		tennis.scoreOne();
		expect(tennis.score()).toBe("ADV-40");
		tennis.scoreOne();
		expect(tennis.score()).toBe("Player 1 Won");
	}); 

	it("should let player two win after getting the advance", function(){
		tennis.scoreOne();
		tennis.scoreOne();
		tennis.scoreOne();
		
		tennis.scoreTwo();
		tennis.scoreTwo();
		tennis.scoreTwo();
		
		tennis.scoreTwo();
		expect(tennis.score()).toBe("40-ADV");
		tennis.scoreTwo();
		expect(tennis.score()).toBe("Player 2 Won");
	}); 

});
