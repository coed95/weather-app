export async function getWeatherData(cityName) {
    try {
        const apiKey = "1d1a7eb2d7c345dd84a92629241706";
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.location) {
            const weather = {
                location: {
                    name: data.location.name,
                    country: data.location.country,
                },
                current: {
                    temperature: data.current.temp_c,
                    weather: data.current.condition.text,
                    humidity: data.current.humidity,
                    windSpeed: data.current.wind_kph,
                },
            };

            return weather;
        }
        else {
            throw new Error("City not found or weather data not avaiable.");
        }
    }
    catch (error) {
        console.error("Error fetching weather data: ", error);
        alert(error);
        throw new Error("Failed to fetch weather data. Please try again later.");
    }
}