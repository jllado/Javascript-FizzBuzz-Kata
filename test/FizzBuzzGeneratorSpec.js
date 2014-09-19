// 1 -> [1]
// 2 -> [1, 2]
// 3 -> [1, 2, Fizz]
// 4 -> [1, 2, Fizz, 4]
// 5 -> [1, 2, Fizz, 4, Buzz]
// 6 -> [1, 2, Fizz, 4, Buzz, Fizz]
// 15 -> [1, 2, Fizz, 4, Buzz, Fizz, ..., FizzBuzz]
// 0 -> []

describe("Generate of FizzBuzzGenerator", function () {

    it("should return [1] when generate 1", function () {
        expect(FizzBuzzGenerator.generate(1)).toEqual([1]);
    });

    it("should return [1, 2] when generate 2", function () {
        expect(FizzBuzzGenerator.generate(2)).toEqual([1, 2]);
    });

    it("should return [1, 2, Fizz] when generate 3", function () {
        expect(FizzBuzzGenerator.generate(3)).toEqual([1, 2, "Fizz"]);
    });

    it("should return [1, 2, Fizz, 4, Buzz, Fizz] when generate 6", function () {
        expect(FizzBuzzGenerator.generate(6)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"]);
    });

    it("should contains FizzBuzz when generate 15", function () {
        expect(FizzBuzzGenerator.generate(15)).toContain("FizzBuzz");
    });

    it("should return [] when generate 0", function () {
        expect(FizzBuzzGenerator.generate(0)).toEqual([]);
    });
});