const firstLesson = (...numbers) => {
    let sum = 0;
    let big = false;
    for (let i = 0; i < numbers.length; i += 1) {
        big = typeof numbers[i] === 'bigint' || !Number.isSafeInteger(numbers[i]) || !Number.isSafeInteger(sum);
        sum = big ? BigInt(sum) : sum;
        sum += big ? BigInt(numbers[i]) : numbers[i];
    }
    console.log(typeof sum, sum);
    return sum;
}

firstLesson(1, 2, 3);
firstLesson(1, 2, 3n, 4, 5);

const converter = (number) => ({
    binary: number.toString(2),
    octal: number.toString(8),
    hexa: number.toString(16)
})

console.log(converter(16));