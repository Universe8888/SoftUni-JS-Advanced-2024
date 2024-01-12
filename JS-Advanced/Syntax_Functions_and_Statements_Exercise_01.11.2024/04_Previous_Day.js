function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let previousDay = new Date(year, month - 1, day - 1);
    console.log(`${previousDay.getFullYear()}-${previousDay.getMonth() + 1}-${previousDay.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);