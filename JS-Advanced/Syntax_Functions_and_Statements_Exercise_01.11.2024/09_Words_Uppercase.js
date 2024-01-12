function upperCase(text) {
    let pattern = /\w+/g;
    let match = text.match(pattern);
    let result = [];
    for (let word of match) {
        result.push(word.toUpperCase());
    }
    console.log(result.join(', '));
}

upperCase('Hi, how are you?');
console.log('-------------------');
upperCase('hello');
console.log('-------------------');
upperCase('Functions in JS can be nested, i.e. hold other functions');