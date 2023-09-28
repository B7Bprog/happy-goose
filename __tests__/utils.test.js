const { formatData } = require("../utils/format_data");

describe("swap_name_with_id", () => {
  test("should ", () => {});
});
describe("format_data", () => {
  test("should return an empty array when an empty array passed", () => {
    //Arrange
    const input = [];
    const expected = [];
    //Act
    const actual = formatData(input);
    //Assert
    expect(actual).toEqual(expected);
  });
});
