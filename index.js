const limit = parseInt(gets(5));

function gets(val) {
	return val;
}

for (let i = 1; i <= limit; i++) {
	const x = i ** 2;
	const y = i ** 3;

	console.log(i, x, y);
}
