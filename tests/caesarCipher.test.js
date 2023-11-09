const caesarCipher = require("../scripts/caesarCipher");

test("Caesar Cipher", () => {
	expect(caesarCipher.encipher("defend the east wall of the castle", 8)).toBe(
		"LMNMVL BPM MIAB EITT WN BPM KIABTM"
	);
	
	expect(caesarCipher.encipher("Hello World!?", 4)).toBe("LIPPS ASVPH!?");
});
