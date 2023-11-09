const caesarCipher = {
	encipher
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";

function encipher(text, shift) {
	const upperTextArray = text.toUpperCase().split("");
	const enciphed = upperTextArray.map((letter) => {
		if (!alphabet.includes(letter)) {
			return letter;
		}

    const index = alphabet.indexOf(letter)
    const targetIndex = (index + shift) % 26;
    const targetLetter = alphabet.charAt(targetIndex)
		return targetLetter;
	});

	console.log(enciphed.join(''));
	return enciphed.join('');
}


module.exports = caesarCipher;
