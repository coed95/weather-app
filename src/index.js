import "./styles.css";

import { updateWeatherFields,
         swapTemperatureScale } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");
    const searchBar = document.getElementById("searchBar");
    const searchButton = document.getElementById("searchButton");
    const scaleButton = document.getElementById("scaleButton");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    searchButton.addEventListener("click", () => {
        if (searchBar.value === "") {
            return;
        }
    
        const dataWrapper = document.getElementById("dataWrapper");
        dataWrapper.classList.remove("hidden");
        updateWeatherFields(searchBar.value);
    });

    scaleButton.addEventListener("click", () => {
        swapTemperatureScale();
    });
});