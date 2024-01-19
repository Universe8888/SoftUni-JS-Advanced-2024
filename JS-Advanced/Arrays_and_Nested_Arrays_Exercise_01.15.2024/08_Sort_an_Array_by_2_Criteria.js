function sortArrayBy2Criteria(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join('\n'));
}

sortArrayBy2Criteria(["alpha", "beta", "gamma"]); // beta, alpha, gamma
console.log('-----');
sortArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]); // Jack, George, Harrison, Isacc, Theodor
console.log('-----');
sortArrayBy2Criteria(["test", "Deny", "omen", "Default"]); // Deny, Default, omen, test

//judge - 100/100