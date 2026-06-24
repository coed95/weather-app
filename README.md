# Weather App

## About

Weather App is a simple web application built as part of The Odin Project curriculum. It allows users to search for any location and view the current weather conditions using the Visual Crossing Weather API.

The application displays essential weather information, supports switching between Celsius and Fahrenheit, and updates the page's appearance based on the current weather conditions.

## Features

- Search weather by city or location
- Display current temperature
- Display "feels like" temperature
- Display daily high and low temperatures
- Display humidity
- Display wind speed
- Show a short weather description
- Toggle between Celsius and Fahrenheit
- Dynamic background based on the current weather
- Loading and error states while fetching data

## Built With

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Webpack
- Visual Crossing Weather API

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### Install dependencies

```bash
npm install
```

### Add your API key

Open `src/weather.js` and replace the placeholder with your own Visual Crossing API key.

```javascript
const API_KEY = "YOUR_API_KEY";
```

### Start the development server

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

## What I Learned

This project helped me practice:

- Working with asynchronous JavaScript using `async` and `await`
- Fetching data from a REST API
- Processing JSON responses
- Handling errors with `try` and `catch`
- Organizing code into ES6 modules
- Dynamically updating the DOM
- Managing application state
- Creating a responsive interface
- Styling the page based on API data

## API Key

This project uses the Visual Crossing Weather API.

For educational purposes, the API key is stored in the frontend. In a production application, API keys should be kept on a backend server and never exposed to the client.

## Acknowledgements

This project was completed as part of **The Odin Project**.

Weather data is provided by the **Visual Crossing Weather API**.