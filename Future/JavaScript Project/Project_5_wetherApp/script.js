const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorBox = document.querySelector(".error");
const weatherBox = document.querySelector(".weather");

async function checkWeather(city) {
  if (!city) return;

  try {
    const res = await fetch(`${apiUrl}${encodeURIComponent(city)}&appid=${apiKey}`);
    
    if (res.status === 404) {
      errorBox.style.display = "block";
      errorBox.querySelector("p").textContent = "Invalid city name";
      weatherBox.style.display = "none";
      return;
    }
    if (!res.ok) {
      errorBox.style.display = "block";
      errorBox.querySelector("p").textContent = `Error: ${res.status} ${res.statusText}`;
      weatherBox.style.display = "none";
      return;
    }

    const data = await res.json();

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";

    const windKmh = (data.wind.speed * 3.6).toFixed(1); // convert m/s to km/h
    document.querySelector(".wind").innerText = windKmh + " km/h";

    const main = data.weather[0].main;
    if (main === "Clouds") weatherIcon.src = "images/clouds.png";
    else if (main === "Clear") weatherIcon.src = "images/clear.png";
    else if (main === "Rain") weatherIcon.src = "images/rain.png";
    else if (main === "Drizzle") weatherIcon.src = "images/drizzle.png";
    else if (main === "Mist") weatherIcon.src = "images/mist.png";
    else weatherIcon.src = "images/rain.png";

    weatherBox.style.display = "block";
    errorBox.style.display = "none";

  } catch (err) {
    console.error(err);
    errorBox.style.display = "block";
    errorBox.querySelector("p").textContent = "Network error. Check console.";
    weatherBox.style.display = "none";
  }
}

// Event listeners
searchBtn.addEventListener("click", () => checkWeather(searchBox.value.trim()));
searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") checkWeather(searchBox.value.trim());
});
