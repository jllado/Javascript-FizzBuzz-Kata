// 1 - 1
// 2 - 2
// 3 - Fizz
// 4 - 4
// 5 - Buzz
// 6 - Fizz
// 7 - 7
// 15 - FizzBuzz

describe("Play FizzBuzz", function() {

    var fizzBuzz = new FizzBuzz([new FizzBuzzRule(), new FizzRule(), new BuzzRule()]);
    
    it("should return 1 when play 1", function() {
        expect(fizzBuzz.play(1)).toBe(1);
    });

    it("should return 2 when play 2", function() {
        expect(fizzBuzz.play(2)).toBe(2);
    });

    it("should return Fizz when play 3", function() {
        expect(fizzBuzz.play(3)).toBe("Fizz");
    });

    it("should return Buzz when play 5", function() {
        expect(fizzBuzz.play(5)).toBe("Buzz");
    });

    it("should return Fizz when play 6", function() {
        expect(fizzBuzz.play(6)).toBe("Fizz");
    });

    it("should return FizzBuzz when play 15", function() {
        expect(fizzBuzz.play(15)).toBe("FizzBuzz");
    });
});