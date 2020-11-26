const firstLesson = (...numbers) => {
    let sum = 0;
    let big = false;
    for (let i = 0; i < numbers.length; i += 1) {
        big = typeof numbers[i] === 'bigint' || !Number.isSafeInteger(numbers[i]) || !Number.isSafeInteger(sum);
        sum = big ? BigInt(sum) : sum;
        sum += big ? BigInt(numbers[i]) : sum += numbers[i];
    }
    console.log(typeof sum, sum);
    return sum;
}

firstLesson(42354235325456464564654654654654, 235342542352354, 23353253245);

const converter = (number) => ({
    binary: number.toString(2),
    octal: number.toString(8),
    hexa: number.toString(16)
})

console.log(converter(16));