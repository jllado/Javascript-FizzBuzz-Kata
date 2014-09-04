// 1 - 1
// 2 - 2
// 3 - Fizz
// 4 - 4
// 5 - Buzz
// 6 - Fizz
// 7 - 7

describe("Play FizzBuzz", function() {

    it("should return 1 when play 1", function() {
        expect(Fizzbuzz.play(1)).toBe(1);
    });

    it("should return 2 when play 2", function() {
        expect(Fizzbuzz.play(2)).toBe(2);
    });

    it("should return Fizz when play 3", function() {
        expect(Fizzbuzz.play(3)).toBe("Fizz");
    });

    it("should return Buzz when play 5", function() {
        expect(Fizzbuzz.play(5)).toBe("Buzz");
    });

    it("should return Fizz when play 6", function() {
        expect(Fizzbuzz.play(6)).toBe("Fizz");
    });

    it("should return FizzBuzz when play Fizz", function() {
        expect(Fizzbuzz.play(15)).toBe("FizzBuzz");
    });
});