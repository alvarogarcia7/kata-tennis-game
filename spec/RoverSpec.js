beforeEach(function() {
  this.addMatchers({
    toBeIn: function(expectedPosition) {
      return JSON.stringify(this.actual.position) === JSON.stringify(expectedPosition);
    }
  });
});

describe("Rover", function(){
	var rover;
	it("should exist", function(){
		expect(rover).toBeTruthy();
	});
	
	beforeEach(function(){
		rover = new Rover();
	});
	
	describe("moves in one direction:", function(){
		it("left", function(){
			rover.receive("l");
			expect(rover).toBeIn(new Position(-1, 0));
		});
		it("right", function(){
			rover.receive("r");
			expect(rover).toBeIn(new Position(1, 0));
		});
		it("two times to the left", function(){
			rover.receive("ll");
			expect(rover).toBeIn(new Position(-2, 0));
		});
		
		it("forward", function(){
			rover.receive("f");
			expect(rover).toBeIn(new Position(0, 1));
		});
		
		it("backward", function(){
			rover.receive("b");
			expect(rover).toBeIn(new Position(0, -1));
		});
	});
	describe("moves in several directions:", function(){
		it("left forward", function(){
			rover.receive("lf");
			expect(rover).toBeIn(new Position(-1, 1));
		});
		it("left backward", function(){
			rover.receive("lb");
			expect(rover).toBeIn(new Position(-1, -1));
		});
		it("forward right", function(){
			rover.receive("fr");
			expect(rover).toBeIn(new Position(1, 1));
		});
		it("backward right", function(){
			rover.receive("br");
			expect(rover).toBeIn(new Position(1, -1));
		});
			
	});
	describe("does not move", function(){
		it("when left, right, left, right", function(){
			rover.receive("lrlr");
			expect(rover).toBeIn(new Position(0, 0));
		});
	});
	
});