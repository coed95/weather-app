import "./style.css";

import { getWeather } from "./weather.js";
import { renderWeather, showLoading, showError } from "./dom.js";

let currentUnitGroup = "metric";
let currentUnitLabel = "C";
let lastLocation = "London";

const form = document.querySelector(".search-form");
const input = document.querySelector("#location");
const toggleButton = document.querySelector(".unit-toggle");

async function loadWeather(location) {
    try {
        showLoading();

        const weather = await getWeather(location, currentUnitGroup);
        renderWeather(weather, currentUnitLabel);

        lastLocation = location;
    }
    catch (error) {
        showError(error.message);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = input.value.trim();

    if (!location) {
        showError("Please enter a location.");
        return;
    }

    loadWeather(location);
});

toggleButton.addEventListener("click", () => {
    if (currentUnitGroup === "metric") {
        currentUnitGroup = "us";
        currentUnitLabel = "F";
        toggleButton.textContent = "Show °C";
    }
    else {
        currentUnitGroup = "metric";
        currentUnitLabel = "C";
        toggleButton.textContent = "Show °F";
    }

    loadWeather(lastLocation);
});

loadWeather(lastLocation);