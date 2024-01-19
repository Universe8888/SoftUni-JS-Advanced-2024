function list(names) {
    names.sort();
    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}

list(['Jhon', 'Bob', 'Christina', 'Ema']); // 1.Bob, 2.Christina, 3.Ema, 4.Jhon

//judge - 80/100