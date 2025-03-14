const numberArray: Array<number> = [1, 2, 3, 4, 5];

numberArray.forEach(n => {
    if (n > 2 && n % 2 === 0) {
        console.log(`${n} * 2 => ${n * 2}`);
    }
});

numberArray.map(n => console.log(`${n} => ${n}`));
numberArray.map(n => console.log(`${n} * 2 => ${n * 2}`));
numberArray.map(n => console.log(`${n} ** 2 => ${n ** 2}`));