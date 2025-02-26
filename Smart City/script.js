// Attractions Search Feature
const attractions = ["City Park", "Museum of History", "Skyline Tower", "Waterfront Plaza"];

function searchAttractions() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let results = document.getElementById("searchResults");
    results.innerHTML = "";

    let filtered = attractions.filter(attraction => attraction.toLowerCase().includes(input));

    if (filtered.length === 0) {
        results.innerHTML = "<li>No results found</li>";
    } else {
        filtered.forEach(attraction => {
            let li = document.createElement("li");
            li.textContent = attraction;
            results.appendChild(li);
        });
    }
}

// Weather API Integration
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
const CITY = "YourCity";

async function getWeather() {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        document.getElementById("weatherInfo").textContent = 
            `🌡️ ${data.main.temp}°C | ${data.weather[0].description}`;
    } catch (error) {
        document.getElementById("weatherInfo").textContent = "Failed to load weather";
    }
}

document.addEventListener("DOMContentLoaded", getWeather);

// Public Transport Information
async function getTransportInfo() {
    document.getElementById("transportData").textContent = "Loading transport info...";
    
    // Simulating transport API (Replace with actual API)
    setTimeout(() => {
        document.getElementById("transportData").textContent = 
            "🚍 Bus 102 - Downtown Route | 🚇 Metro Line 3 - City Center";
    }, 2000);
}
function goHome() {
    window.location.href = "index.html";  // Redirects to Home Page
}
function goHome() {
    window.location.href = "index.html";  // Redirects to Home Page
}
