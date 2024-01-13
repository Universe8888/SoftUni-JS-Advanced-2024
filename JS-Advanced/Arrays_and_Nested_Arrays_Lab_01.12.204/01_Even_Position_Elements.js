function evenPositionEl(arr) {
    let result = arr.filter((x, i) => i % 2 == 0);
    console.log(result.join(' '));
}

evenPositionEl(['20', '30', '40', '50', '60']);
console.log('-------------------');
evenPositionEl(['5', '10']);