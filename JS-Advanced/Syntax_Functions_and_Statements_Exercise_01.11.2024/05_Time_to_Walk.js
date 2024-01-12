function studentTimeToWalk(steps, length, speed) {
    let distance = steps * length;
    let time = Math.round(distance / speed * 3.6);
    let rest = Math.floor(distance / 500) * 60;
    time += rest;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = (time % 3600) % 60;

    console.log(`${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`);
}

studentTimeToWalk(4000, 0.60, 5);
studentTimeToWalk(2564, 0.70, 5.5);