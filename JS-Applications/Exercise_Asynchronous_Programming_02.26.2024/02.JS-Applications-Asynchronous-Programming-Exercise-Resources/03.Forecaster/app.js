const getData = async (uri) => {
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/${uri}`);
    if (!response.ok) throw new Error('Server responded with an error!');
    return response.json(); // Ensure proper deserialization of JSON.
}

const getCode = (locations, name) => {
    const location = locations.find(loc => loc.name.toLowerCase() === name.toLowerCase());
    if (!location) throw new Error('Location not found!');
    return location.code;
}

const symbols = {
    Sunny: '&#x2600;', // ☀
    'Partly sunny': '&#x26C5;', // ⛅
    Overcast: '&#x2601;', // ☁
    Rain: '&#x2614;', // ☂
    Degrees: '&#176;', // °
};

function tomorrowTemplate({ forecast, name }) {
    return `
        <div class="forecasts">
            <span class="condition symbol">${symbols[forecast.condition]}</span>
            <span class="condition">
                <span class="forecast-data">${name}</span>
                <span class="forecast-data">${forecast.low}${symbols.Degrees}/${forecast.high}${symbols.Degrees}</span>
                <span class="forecast-data">${forecast.condition}</span>
            </span>
        </div>
    `;
}

function dayTemplate({ condition, low, high }) {
    return `
        <span class="upcoming">
            <span class="symbol">${symbols[condition]}</span>
            <span class="forecast-data">${low}${symbols.Degrees}/${high}${symbols.Degrees}</span>
            <span class="forecast-data">${condition}</span>
        </span>
    `;
}

const outputVisibility = (display) => document.getElementById('forecast').style.display = display;

const clearSections = () => {
    document.getElementById('current').innerHTML = '<div class="label">Current conditions</div>';
    document.getElementById('upcoming').innerHTML = '<div class="label">Three-day forecast</div>';
}

async function displayData(name) {
    outputVisibility('block');
    clearSections();

    try {
        const locations = await getData('locations');
        const code = getCode(locations, name);
        const todayForecast = await getData(`today/${code}`);
        const upcomingForecast = await getData(`upcoming/${code}`);

        document.getElementById('current').innerHTML += tomorrowTemplate(todayForecast);
        upcomingForecast.forecast.forEach(forecast => {
            document.getElementById('upcoming').innerHTML += dayTemplate(forecast);
        });
    } catch (error) {
        document.getElementById('current').innerHTML += '<span>Error</span>';
        document.getElementById('upcoming').innerHTML += '<span>Error</span>';
    }
}

function attachEvents() {
    const inputField = document.getElementById('location');
    document.getElementById('submit').addEventListener('click', () => displayData(inputField.value.trim()));
}

attachEvents();


//secound solution

// const symbols = {
//     'Sunny': '☀',
//     'Partly sunny': '⛅',
//     'Overcast': '☁',
//     'Rain': '☂',
//     'Degrees': '°'
// }

// function attachEvents() {
//     document.getElementById('submit').addEventListener('click', getWeather);
// }

// attachEvents();

// async function getWeather() {
//     const location = document.getElementById('location').value;
//     const code = await getCode(location);
//     const [current, upcoming] = await Promise.all([
//         getCurrent(code),
//         getUpcoming(code)
//     ]);

//     const forecast = {
//         current,
//         upcoming
//     }

//     displayWeather(forecast);
// }

// async function getCode(location) {
//     const url = 'http://localhost:3030/jsonstore/forecaster/locations';
//     const response = await fetch(url);
//     const data = await response.json();

//     return data.find(x => x.name.toLowerCase() == location.toLowerCase()).code;
// }

// async function getCurrent(code) {
//     const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
//     const response = await fetch(url);
//     const data = await response.json();

//     return data;
// }

// async function getUpcoming(code) {
//     const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
//     const response = await fetch(url);
//     const data = await response.json();

//     return data;
// }

// function displayWeather(forecast) {
//     const currentDiv = document.getElementById('current');
//     const upcomingDiv = document.getElementById('upcoming');

//     const forecastDiv = document.getElementById('forecast');
//     forecastDiv.style.display = 'block';

//     const currentSymbol = symbols[forecast.current.forecast.condition];
//     const currentCondition = forecast.current.forecast.condition;
//     const currentHigh = forecast.current.forecast.high;
//     const currentLow = forecast.current.forecast.low;

//     const currentConditionSymbol = createEl('span', ['condition', 'symbol'], currentSymbol);
//     const currentConditionSpan = createEl('span', ['condition']);
//     const currentLocationSpan = createEl('span', ['forecast-data'], forecast.current.name);
//     const currentTemperatureSpan = createEl('span', ['forecast-data'], `${currentLow}${symbols.Degrees}/${currentHigh}${symbols.Degrees}`);
//     const currentConditionSpanCondition = createEl('span', ['forecast-data'], currentCondition);

//     currentConditionSpan.appendChild(currentLocationSpan);
//     currentConditionSpan.appendChild(currentTemperatureSpan);
//     currentConditionSpan.appendChild(currentConditionSpanCondition);

//     currentDiv.appendChild(currentConditionSymbol);
//     currentDiv.appendChild(currentConditionSpan);

//     for (let day of forecast.upcoming.forecast) {
//         const upcomingSpan = createEl('span', ['upcoming']);
//         const upcomingSymbol = symbols[day.condition];
//         const upcomingConditionSymbol = createEl('span', ['symbol'], upcomingSymbol);
//         const upcomingTemperatureSpan = createEl('span', ['forecast-data'], `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`);
//         const upcomingConditionSpan = createEl('span', ['forecast-data'], day.condition);

//         upcomingSpan.appendChild(upcomingConditionSymbol);
//         upcomingSpan.appendChild(upcomingTemperatureSpan);
//         upcomingSpan.appendChild(upcomingConditionSpan);

//         upcomingDiv.appendChild(upcomingSpan);
//     }
// }

// function createEl(type, classes, content) {
//     const result = document.createElement(type);

//     if (classes) {
//         result.classList.add(...classes);
//     }

//     if (content) {
//         result.innerHTML = content;
//     }

//     return result;
// }