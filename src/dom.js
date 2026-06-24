export function renderWeather(weather, unit)
{
    const weatherCard = document.querySelector(".weather-card");

    weatherCard.innerHTML = `
        <h2>${weather.location}</h2>
        <p class="conditions">${weather.condition}</p>
        <p class="temperature">${Math.round(weather.temperature)}°${unit}</p>
        <p>Feels like: ${Math.round(weather.feelsLike)}°${unit}</p>
        <p>High: ${Math.round(weather.high)}°${unit}</p>
        <p>Low: ${Math.round(weather.low)}°${unit}</p>
        <p>Humidity: ${weather.humidity}%</p>
        <p>Wind: ${weather.windSpeed} m/s</p>
        <p>${weather.description}</p>
    `;

    updateBackground(weather.icon);
}

export function showLoading() {
    document.querySelector(".weather-card").innerHTML = `<p>Loading weather...</p>`;
}

export function showError(message) {
    document.querySelector(".weather-card").innerHTML = `<p class="error">${message}</p>`;
}

function updateBackground(icon) {
    document.body.className = "";

    if (icon.includes("rain")) {
        document.body.classList.add("rainy");
    }
    else if (icon.includes("snow")) {
        document.body.classList.add("snowy");
    }
    else if (icon.includes("cloud")) {
        document.body.classList.add("cloudy");
    }
    else if (icon.includes("clear")) {
        document.body.classList.add("sunny");
    }
    else {
        document.body.classList.add("default-weather");
    }
}