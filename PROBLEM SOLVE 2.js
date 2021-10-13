// todo: WEATHER START; 


let weatherWrapper = document.querySelector(".weatherWrapper");

let weatherInputPart = document.querySelector(".weatherInputPart");

let weatherTxt = document.querySelector(".weatherTxt");

let weatherCityInput = document.querySelector(".weatherInputPart input");

let weatherLocationBtn = document.querySelector(".weatherBtn");

let weatherPart = document.querySelector(".weather_part");

let wIcon = weatherPart.querySelector(".weatherIcon");

let weatherArrowBack = document.querySelector(".weatherHeader i");

let weatherApi;

weatherCityInput.addEventListener("keyup", e => {

    // ! if user pressed enter btn and input value is not empty;

    if (e.keyCode == 13 && weatherCityInput.value != "") {

        requestApi(weatherCityInput.value);

    };

});

weatherLocationBtn.addEventListener("click", () => {

    if (navigator.geolocation) {

        // ! if browser support geolocation api ;

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    } else {

        alert("Your browser not support geolocation api");

    }

});

function onSuccess(WeatherPossition) {

    let { latitude, longitude } = WeatherPossition.coords;

    let weatherApikey = "a4abc1104fca0aee4012b21030ee9339";

    weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherApikey}`;

    fetchData();

}

function onError(WeatherError) {

    weatherTxt.innerText = "You denied the request";

    weatherTxt.classList.add("weatherError");


}

function requestApi(weatherCity) {

    // ? api get from = https://openweathermap.org/api ;

    let weatherApikey = "a4abc1104fca0aee4012b21030ee9339";

    weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&units=metric&appid=${weatherApikey}`;

    fetchData();

};

function fetchData() {

    weatherTxt.innerText = "Getting weather details...";

    weatherTxt.classList.add("weatherPending");

    // ? get by { fetch(weatherApi).then(abc => console.log(abc.json())) };

    fetch(weatherApi).then(response => response.json().then(weatherResult => weatherDetails(weatherResult)));

}

function weatherDetails(weatherInfo) {

    // ? get by { console.log(weatherInfo) } ;

    if (weatherInfo.cod == "404") {

        // ! if user entered city name isn't valid ;

        weatherTxt.classList.replace("weatherPending", "weatherError");

        weatherTxt.innerText = `${weatherCityInput.value} isn't a valid city name`;

    } else {

        // ? description , id , temp , feels_like , humidity, main , weather[0] , sys.country , name get by { console.log(weatherInfo) } ;

        const city = weatherInfo.name;

        const country = weatherInfo.sys.country;

        const { description, id } = weatherInfo.weather[0];

        const { temp, feels_like, humidity } = weatherInfo.main;

        // ! using custom weather icon according to the id which api gives to us ;

        // ? id limit get from = https://openweathermap.org/weather-conditions ;

        if (id == 800) {

            wIcon.src = "icons/clear.svg";

        } else if (id >= 200 && id <= 232) {

            wIcon.src = "icons/storm.svg";

        } else if (id >= 600 && id <= 622) {

            wIcon.src = "icons/snow.svg";

        } else if (id >= 701 && id <= 781) {

            wIcon.src = "icons/haze.svg";

        } else if (id >= 801 && id <= 804) {

            wIcon.src = "icons/cloud.svg";

        } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {

            wIcon.src = "icons/rain.svg";

        };

        // ! passing a particular weather info to a particular element ;

        document.querySelector(".weatherTemp .weatherNumb").innerText = Math.floor(temp);

        document.querySelector(".weather").innerText = description;

        document.querySelector(".weatherLocation span").innerText = `${city}, ${country}`;

        document.querySelector(".weatherTemp .weatherNumb-2").innerText = Math.floor(feels_like);

        document.querySelector(".weatherHumidity span").innerText = `${humidity}%`;

        // ! passing a particular weather info to a particular element End ;

        weatherTxt.classList.remove("weatherPending", "weatherError");

        weatherArrowBack.style.display = "block";

        weatherInputPart.style.display = "none";

        weatherPart.style.display = "flex";

    };

};

weatherArrowBack.addEventListener("click", () => {

    weatherPart.style.display = "none";

    weatherInputPart.style.display = "block";

    weatherCityInput.value = "";

    weatherArrowBack.style.display = "none";

});

// todo: WEATHER END;



// todo: MODAL POPUP BOX START;

let popUpInput = document.querySelector("#popUpInput");

let popUpBtnDiv = document.querySelector(".popUpBtn");

let popUpBtn = document.querySelector(".popUpBtn button");

let popUp = document.querySelector(".popup");

let popUpCloseBtn = document.querySelector(".popup button");

let popUpIcon = document.querySelector(".popup div");

let popUpMsg = document.querySelector(".popup p");


popUpBtn.addEventListener("click", () => {

    popUp.style.display = "block";

    if (popUpInput.value.length >= 3) {

        popUpIcon.innerHTML = `<i class="far fa-check-circle"></i>`;

        popUpIcon.style.color = `#20b2a2`;

        popUpMsg.innerText = `Congrates ! You successfully done the process.`;

        popUpCloseBtn.style.background = `#20b2a2`;

    } else {

        popUpIcon.innerHTML = `<i class="far fa-times-circle"></i>`;

        popUpIcon.style.color = `#f03353`;

        popUpMsg.innerText = `Sorry ! User Name must be in 3 characters.`;

        popUpCloseBtn.style.background = `#f03353`;

    }

});

popUpCloseBtn.addEventListener("click", () => {

    popUp.style.display = "none";

    popUpInput.value = "";

});

// ? TRIGGER WITH ENTER BUTTON ;

popUpInput.addEventListener("keyup", e => {

    e.preventDefault();

    if (e.keyCode == 13) {

        popUpBtn.click();

    };

});

// todo: MODAL POPUP BOX END;