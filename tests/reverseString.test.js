const reverseString = require("../scripts/reverseString");

test("reverseString", () => {
	expect(reverseString("Aloha!")).toBe("!aholA");
});
