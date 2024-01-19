function printArrayWithGivenDelimiter(array, delimiter) {
    console.log(array.join(delimiter));
}

printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
console.log('-------------------');
printArrayWithGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');