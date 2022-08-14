const city = document.querySelector ("#weatherAPI span:first-child")
const weather = document.querySelector ("#weatherAPI span:last-child")

function successGeo (position) {
    const lon = position.coords.longitude
    const lat = position.coords.latitude
    const weatherAPI_URL= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4b6acf368a9dbbff1d5d83369817e34e&units=metric` 

    fetch(weatherAPI_URL)
        .then ((response) => response.json())
        .then ((info) => {
            city.innerText = info.name,
            weather.innerText = `${info.weather[0].main} / ${info.main.temp}`
        })
}

function errGeo () {
    alert ("Where are you?")
}

navigator.geolocation.getCurrentPosition(successGeo,errGeo)

