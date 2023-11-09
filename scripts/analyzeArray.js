const analyzeArray = (array) => {
	const sum = array.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
  
	const length = array.length;
	const average = sum / length;
	const min = Math.min(...array);
	const max = Math.max(...array);

	return {
		average,
		min,
		max,
		length,
	};
};

module.exports = analyzeArray;
