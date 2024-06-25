import { getWeatherData } from "./api";

export async function updateWeatherFields(cityName) {
    try {
        const weatherData = await getWeatherData(cityName);

        if (weatherData && weatherData.location && weatherData.current) {
            clearWeatherFields();

            const name = document.getElementById("name");
            const temperature = document.getElementById("temperature");
            const weather = document.getElementById("weather");
            const humidity = document.getElementById("humidity");
            const windSpeed = document.getElementById("windSpeed");

            const celsius = document.getElementById("celsius");
            const fahreneit = document.getElementById("fahreneit");

            name.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
            weather.textContent = `Weather: ${weatherData.current.weather}`;
            humidity.textContent = `Humidity: ${weatherData.current.humidity}%`;
            windSpeed.textContent = `Wind: ${weatherData.current.windSpeed} km/h`;

            if (celsius.classList.contains("active")) {
                temperature.textContent = `${Math.round(weatherData.current.temperature)} °C`;
            }
            else if (fahreneit.classList.contains("active")) {
                temperature.textContent = `${Math.round((weatherData.current.temperature * 9/5) + 32)} °F`;
            }
        }
        else {
            console.log("Weather data not avaiable");
        }
    }
    catch (error) {
        console.error("Error fetching data: ", error.message);
    }
}

function clearWeatherFields() {
    const name = document.getElementById("name");
    const temperature = document.getElementById("temperature");
    const weather = document.getElementById("weather");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");

    name.textContent = '';
    temperature.textContent = '';
    weather.textContent = '';
    humidity.textContent = '';
    windSpeed.textContent = '';
}

export function swapTemperatureScale() {
    const celsius = document.getElementById("celsius");
    const fahreneit = document.getElementById("fahreneit");
    const temperature = document.getElementById("temperature");

    if (celsius.classList.contains("active")) {
        celsius.classList.remove("active");
        fahreneit.classList.add("active");

        if (temperature.textContent !== "") {
            const temperatureNumber = Number(temperature.textContent.replace(/[^0-9.-]+/g, '').trim());
            const fahreneitNumber = Math.round((temperatureNumber * 9/5) + 32);
            temperature.textContent = `${fahreneitNumber} °F`;
        }
    }
    else {
        fahreneit.classList.remove("active");
        celsius.classList.add("active");

        if (temperature.textContent !== "") {
            const temperatureNumber = Number(temperature.textContent.replace(/[^0-9.-]+/g, '').trim());
            const celsiusNumber = Math.round((temperatureNumber - 32) * 5/9);
            temperature.textContent = `${celsiusNumber} °C`;
        }
    }
}