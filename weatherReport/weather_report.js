function showweatherDetails(event) {
      event.preventDefault();
       const city = document.getElementById('city').value;
      const apiKey = 'c61826652bb811676ef48b7620e9cf0e'; // Replace 'YOUR_API_KEY' with your actual API key
      const lon = "74.3602";
      const lat = "31.5859";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
       fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
}
 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );