function checker(x1, y1, x2, y2) {

    function distance(x1, y1, x2, y2) {
        let distanceX = x1 - x2;
        let distanceY = y1 - y2;
        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }

    let firstDistance = distance(x1, y1, 0, 0);
    let secondDistance = distance(x2, y2, 0, 0);
    let thirdDistance = distance(x1, y1, x2, y2);

    if (Number.isInteger(firstDistance)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(secondDistance)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(thirdDistance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

checker(3, 0, 0, 4);

console.log('-------------------');

checker(2, 1, 1, 1);