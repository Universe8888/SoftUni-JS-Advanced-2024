function extractPieFlavors(pieFlavors, startFlavor, endFlavor) {
    let startIndex = pieFlavors.indexOf(startFlavor);
    let endIndex = pieFlavors.indexOf(endFlavor) + 1;

    if (startIndex === -1 || endIndex === 0) {
        return [];
    }

    return pieFlavors.slice(startIndex, endIndex);
}

console.log(extractPieFlavors(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie'));
console.log('-------------------');
console.log(extractPieFlavors(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie'));
