const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
});

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
});
