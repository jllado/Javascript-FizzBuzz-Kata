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

    it("should return 3 when play Fizz", function() {
        expect(Fizzbuzz.play(3)).toBe("Fizz");
    });

    it("should return 5 when play Buzz", function() {
        expect(Fizzbuzz.play(5)).toBe("Buzz");
    });

    it("should return 6 when play Fizz", function() {
        expect(Fizzbuzz.play(6)).toBe("Fizz");
    });
});