function rotateArr(arr, rotations) {
    let result = arr.slice();
    for (let i = 0; i < rotations; i++) {
        let lastElement = result.pop();
        result.unshift(lastElement);
    }
    console.log(result.join(' '));
}

rotateArr(['1', '2', '3', '4'], 2);
console.log('-----');
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15);