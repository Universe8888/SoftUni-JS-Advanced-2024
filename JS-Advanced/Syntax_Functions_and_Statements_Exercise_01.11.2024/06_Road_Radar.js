function roadRadar (travelSpeed, place) {
    let speedLimit = 0;
    let status = '';
    let difference = 0;
    let speed = 0;
    let speedLimitCity = 50;
    let speedLimitResidential = 20;
    let speedLimitInterstate = 90;
    let speedLimitMotorway = 130;

    switch (place) {
        case 'city':
            speedLimit = speedLimitCity;
            break;
        case 'residential':
            speedLimit = speedLimitResidential;
            break;
        case 'interstate':
            speedLimit = speedLimitInterstate;
            break;
        case 'motorway':
            speedLimit = speedLimitMotorway;
            break;
    }

    if (travelSpeed <= speedLimit) {
        status = 'Driving ' + travelSpeed + ' km/h in a ' + speedLimit + ' zone';
    } else {
        difference = travelSpeed - speedLimit;
        speed = difference;
        if (difference <= 20) {
            status = 'The speed is ' + speed + ' km/h faster than the allowed speed of ' + speedLimit + ' - speeding';
        } else if (difference <= 40) {
            status = 'The speed is ' + speed + ' km/h faster than the allowed speed of ' + speedLimit + ' - excessive speeding';
        } else {
            status = 'The speed is ' + speed + ' km/h faster than the allowed speed of ' + speedLimit + ' - reckless driving';
        }
    }

    console.log(status);

}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');