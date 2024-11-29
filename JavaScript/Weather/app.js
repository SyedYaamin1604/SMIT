const weatherUpdate = document.querySelector("#weather-update");
const city = document.querySelector("#city");

async function checkWeather() {
    try {
        const res = await axios(`http://api.weatherapi.com/v1/current.json?key=23566f2c8fd1455d885155704242206&q=${city.value}&aqi=no`)
        weatherUpdate.innerHTML = `
        <div class="d-flex justify-content-center align-items-center mt-5" id="weather-update">
        <img id="image" src="${res.data.current.condition.icon}" class="rounded mx-auto d-block" alt="...">
        </div>
        <h1>${res.data.current.temp_c}°C</h1>
        <h1>${res.data.location.name}</h1>
        <div class="d-flex justify-content-around align-items-center mt-3" id="temp">
        <h3>Humidity: ${res.data.current.humidity}</h3>
        <h3>Wind: ${res.data.current.wind_kph}Km/h</h3>
        </div>
        <hr>
        `
        city.value = '';
    } catch (error) {
        weatherUpdate.innerHTML = `
        <div class="d-flex justify-content-center align-items-center mt-5" id="weather-update">
        <h1>${city.value} Weather Data is not Available </h1>
        </div>`
    }
}