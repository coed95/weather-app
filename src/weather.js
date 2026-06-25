const API_KEY = "NYCJ7DK6GA3XK5LER4NL58W7X";

const BASE_URL = 
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export async function getWeather(location, unitGroup = "metric")
{
    const url = `${BASE_URL}/${encodeURIComponent(
        location
    )}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=json`;

    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error("Weather data could not be loaded.");
    }

    const data = await response.json();

    return processWeatherData(data);
}

function processWeatherData(data)
{
    const current = data.currentConditions;
    const today = data.days[0];

    return {
        location: data.resolvedAddress,
        temperature: current.temp,
        feelsLike: current.feelslike,
        condition: current.conditions,
        icon: current.icon,
        humidity: current.humidity,
        windSpeed: current.windspeed,
        description: data.description,
        high: today.tempmax,
        low: today.tempmin,
    };
}