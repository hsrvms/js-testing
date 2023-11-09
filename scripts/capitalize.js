const capitalize = (string) => {
  return string.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter ).join('');
}

module.exports = capitalize;