function addAndRemoveEl(input){
    let result = [];
    let number = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            result.push(number);
        } else {
            result.pop();
        }
        number++;
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemoveEl(['add', 'add', 'remove', 'add', 'add']);
console.log('-----');
addAndRemoveEl(['add', 'add', 'add', 'add']);
console.log('-----');
addAndRemoveEl(['remove', 'remove', 'remove']);