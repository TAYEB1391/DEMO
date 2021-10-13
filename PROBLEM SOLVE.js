// todo: EMAIL VALIDATION CHECK START;

let email = document.querySelector(".validMail");

let mailErr = document.querySelector("#mailError");

let mailIcon = document.querySelector("#validMailIcon");

//let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

let mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.oninput = function() {

    mailIcon.style.display = "inline-block";

    if (email.value.match(mailRegex)) {

        mailIcon.innerHTML = `<i class="fas fa-check-circle"></i>`;

        mailIcon.style.color = "#07ac07"

        mailErr.style.display = "none";

        email.style.border = "none";

    } else if (email.value == "") {

        mailIcon.style.display = "none";

        mailErr.style.display = "none";

        email.style.border = "none";

    } else {

        mailIcon.innerHTML = `<i class="fas fa-exclamation-circle"></i>`;

        mailIcon.style.color = "#FF2851"

        mailErr.style.display = "block";

        email.style.border = "2px solid #FF2851";

    };


};

// todo: EMAIL VALIDATION CHECK END;

// todo: SHOW PASSWORD START;

let state = false;

let showHideIcons = document.querySelector(".passShowIcon");

let ShowPassBox = document.querySelector(".hideShowPass");

showHideIcons.onclick = function() {

    if (state) {

        ShowPassBox.setAttribute("type", "password");

        showHideIcons.innerHTML = `<i class="far fa-eye"></i>`;

        state = false;

    } else {

        ShowPassBox.setAttribute("type", "text");

        showHideIcons.innerHTML = `<i class="far fa-eye-slash"></i>`;
        state = true;

    };

};


// todo: SHOW PASSWORD END;



// todo: PASSWORD === CONFIRM PASSWORD START;


let password = document.querySelector(".pass");

let conPassword = document.querySelector(".conPass");

let passErr = document.querySelector(".conPassError");

let conBtn = document.querySelector(".conPassButton");


conPassword.oninput = function() {

    if (password.value == conPassword.value) {

        passErr.style.display = "inline-block";

        passErr.innerHTML = "passwords match";

        passErr.style.background = "#3AE374";

    } else if (conPassword.value == "") {

        passErr.style.display = "none";

    } else {

        passErr.style.display = "inline-block";

        passErr.innerHTML = "passwords don't match";

        passErr.style.background = "#FF4D4D";

    };

};


conBtn.onclick = function() {

    if (password.value.length != 0) {

        if (password.value == conPassword.value) {

            alert(" It's demo bro !!! It will not submit ");

        } else {

            alert(" Password And Confirm Password are not same !!! ");

        };


    } else {

        alert(" Password can't be empty !!! ");

    };

};





// todo: PASSWORD === CONFIRM PASSWORD END;


// todo: CURRENT DATE START;


let todayDate = document.querySelector(".date");


let dateDays = document.querySelector(".dateDay");

let today = new Date();

let weekDays = [

    "sunday",

    "monday",

    "tuesday",

    "wednesday",

    "thursday",

    "friday",

    "saturday"
];

dateDays.innerHTML = weekDays[today.getDay()];

let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;

// ! MONTHS ARE COUNTED FROM 0 ;

let month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() + 1}`;

let year = today.getFullYear();

todayDate.innerHTML = `${day} / ${month} / ${year}`;




// todo: CURRENT DATE END;


// todo: CURRENT TIME START;



let timeClock = document.querySelector(".time");

let apm = document.querySelector(".midday");



let clock = setInterval(

    function calcTime() {

        let time = new Date();

        let hr = time.getHours();

        let min = time.getMinutes();

        let sec = time.getSeconds();

        if (hr == 0) {

            hr = 12;

            apm.innerHTML = "AM";

        } else if (hr > 12) {

            hr -= 12;

            apm.innerHTML = "PM";

        } else if (hr == 12) {

            apm.innerHTML = "PM";

        } else {

            apm.innerHTML = "AM";

        };


        // ! if (0-9) add 0 in front;


        hr = (hr < 10) ? "0" + hr : hr;

        min = (min < 10) ? "0" + min : min;

        sec = (sec < 10) ? "0" + sec : sec;



        timeClock.innerHTML = `${hr} : ${min} : ${sec}`;



    }, 1000

);


// todo: CURRENT TIME END;


// todo: COUNT UP START;

let UpCount = document.querySelector(".countUp");

function conUp() {

    let from = 50;

    let to = 100;

    let step = to > from ? 1 : -1;

    if (from == to) {

        UpCount.innerHTML = from;

        return;

    };

    let counter = setInterval(function() {

        from += step;

        UpCount.innerHTML = from;

        if (from == to) {

            clearInterval(counter);

        };

    }, 30);

};

conUp();


// todo: COUNT UP END;


// todo: COUNT DOWN START;

let DownCount = document.querySelector(".countDown");

function conDown() {

    let from = 20;

    let to = -30;

    let step = to > from ? 1 : -1;

    if (from == to) {

        DownCount.innerHTML = from;

        return;

    };

    let counter = setInterval(function() {

        from += step;

        DownCount.innerHTML = from;

        if (from == to) {

            clearInterval(counter);

        };

    }, 30);

};

conDown();


// todo: COUNT UP END;



// todo: PASSWORD STRENGTH START;


let state2 = false;

let strPass = document.querySelector(".strPass");

let strShowIcon = document.querySelector("#strShowIcon");

let passStrength = document.querySelector(".str");

let strMsg = document.querySelector(".strErr");

let paraMeters = {

    count: false,
    letters: false,
    numbers: false,
    special: false

};

// ! FOR SHOW & HIDE PASSWORD ;

strShowIcon.onclick = function() {

    if (state2) {

        strPass.setAttribute("type", "password");

        strShowIcon.style.color = `#000000`;

        state2 = false;

    } else {

        strPass.setAttribute("type", "text");

        strShowIcon.style.color = `#1e72f0`;

        state2 = true;

    };

};

// ! FOR PASS STRENGTH ;

strPass.oninput = function() {

    paraMeters.letters = (/[A-Za-z]+/.test(strPass.value)) ? true : false;

    paraMeters.numbers = (/[0-9]+/.test(strPass.value)) ? true : false;

    paraMeters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(strPass.value)) ? true : false;

    paraMeters.count = (strPass.value.length > 6) ? true : false;

    let scaleLength = Object.values(paraMeters).filter(value => value);

    passStrength.innerHTML = "";

    for (let i in scaleLength) {

        let span = document.createElement("span");

        span.classList.add("strength");

        passStrength.appendChild(span);

    };

    // ! FOR CHANGE COLOR BASED ON PASS STRENGTH ;

    let spanRef = document.getElementsByClassName("strength"); // ? document.querySelector is not working in here;

    for (let i = 0; i < spanRef.length; i++) {

        switch (spanRef.length - 1) {

            case 0:
                spanRef[i].style.background = `#FF3E36`;

                strMsg.innerHTML = `Password is very weak`;

                strMsg.style.background = `#FF3E36`;

                break;

            case 1:
                spanRef[i].style.background = `#FF691F`;

                strMsg.innerHTML = `Password is weak`;

                strMsg.style.background = `#FF691F`;

                break;

            case 2:
                spanRef[i].style.background = `#FFDA36`;

                strMsg.innerHTML = `Password is good`;

                strMsg.style.background = `#FFDA36`;

                break;

            case 3:
                spanRef[i].style.background = `#0BE881`;

                strMsg.innerHTML = `Password is strong`;

                strMsg.style.background = `#0BE881`;

                break;


        };

    };

};


// todo: PASSWORD STRENGTH END;



// todo: TIMER / COUNTDOWN START;


let timerDate = new Date("jan 25,2022 00:00:00").getTime();

let countdownReason = document.querySelector(".reason");

// ! FOR SHOW REASON START ;

countdownReason.innerHTML = "my next birthday will come after";

// ! FOR SHOW REASON END ;

let tD = document.querySelector(".tDay");

let tH = document.querySelector(".tHr");

let tM = document.querySelector(".tMin");

let tS = document.querySelector(".tSec");

function timer() {

    let now = new Date().getTime();

    gap = timerDate - now;

    let tSec = 1000;
    let tMin = tSec * 60;
    let tHour = tMin * 60;
    let tDay = tHour * 24;

    let da = Math.floor(gap / (tDay));

    let hr = Math.floor((gap % (tDay)) / (tHour));

    let mn = Math.floor((gap % (tHour)) / (tMin));

    let sc = Math.floor((gap % (tMin)) / (tSec));

    // ! if (0-9) add 0 in front;

    da = (da < 10) ? "0" + da : da;

    hr = (hr < 10) ? "0" + hr : hr;

    mn = (mn < 10) ? "0" + mn : mn;

    sc = (sc < 10) ? "0" + sc : sc;

    tD.innerHTML = da + `<br/>` + `days`;

    tH.innerHTML = hr + `<br/>` + `hours`;

    tM.innerHTML = mn + `<br/>` + `minutes`;

    tS.innerHTML = sc + `<br/>` + `seconds`;


    /*tD.innerHTML = "00" + `<br/>` + `days`;

    tH.innerHTML = "00" + `<br/>` + `hours`;

    tM.innerHTML = "00" + `<br/>` + `minutes`;

    tS.innerHTML = "00" + `<br/>` + `seconds`;*/

};

setInterval(function() {

    timer();

}, 1000);


// todo: TIMER / COUNTDOWN END;



// todo: CUSTOM RANGE SLIDER START;


let cSlider = document.querySelector(".rS");

let sliderValue = document.querySelector(".rSValue");


cSlider.oninput = function() {

    let per = (cSlider.value / cSlider.max) * 100;

    cSlider.style.background = `linear-gradient(to right, #F03353 ${per}%, #D5D5D5 ${per}%)`;

    sliderValue.innerHTML = cSlider.value;

};

cSlider.oninput();


// todo: CUSTOM RANGE SLIDER END;



// todo: RANDOM PASSWORD START;


let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.\';:+=^*_-'0123456789";

let passOutPut = document.querySelector(".randomPass");

let passLength = document.querySelector("#ranPassRange");

let passLengthOutput = document.querySelector(".randomPassValue");

let randomPassIcon = document.querySelector("#randomIcon");

let copyPassIcon = document.querySelector("#copyIcon");

let copyMsgDiv = document.querySelector("#copyMsg");

let copyMsg = document.querySelector(".ranPassErr");

function randomValue(value) {

    return Math.floor(Math.random() * value);

};

// ! FOR RANGE BUTTON ONINPUT INCREASE or DECRISE PASSWORD LENGTH ;

passLength.oninput = function() {

    let per1 = (passLength.value / passLength.max) * 100;

    passLength.style.background = `linear-gradient(to right, #07EEA1 ${per1}%, #D5D5D5 ${per1}%)`;

    passLengthOutput.innerHTML = passLength.value;

    // ! FOR ONCLICK CHANGE PASSWORD ;

    randomPassIcon.onclick = function() {

        let srt = "";

        for (let i = 0; i < passLength.value; i++) {

            let random = randomValue(characters.length);

            srt += characters.charAt(random);

            copyMsgDiv.style.display = "none";

        };

        passOutPut.value = srt;

        if (passOutPut.value.length < 6) {

            passOutPut.value = "";

            copyMsgDiv.style.display = "block";

            copyMsg.innerHTML = `SORRY! Password is not available for less than 6 digits `;

        };

    };

    randomPassIcon.onclick();

};

// ! PASSWORD COPY TO CLIPBOARD ;

passLength.oninput();

copyPassIcon.onclick = function() {

    passOutPut.select();

    document.execCommand("copy");

    copyMsgDiv.style.display = "block";

    copyMsg.innerHTML = "password copied !!!";

};


// todo: RANDOM PASSWORD END;



// todo: TRIGGER WITH ENTER BUTTON START;


let trgTxt = document.querySelector(".trgInput");

let trgButton = document.querySelector(".triggerBtn");

trgTxt.addEventListener("keyup", e => {

    e.preventDefault();

    if (e.keyCode === 13) {

        trgButton.click();

    };

});

trgButton.addEventListener("click", () => {

    alert("Submitted Successfully !!!");

});


// todo: TRIGGER WITH ENTER BUTTON END;



// todo: PHONE NUMBER FIELD START;


let code = document.querySelector("#countryCode");

let pNumber = document.querySelector("#phone");

code.onchange = function() {

    if (code.value == "bd") {

        pNumber.value = "+880";

    } else if (code.value == "pakistan") {

        pNumber.value = "+92";

    } else if (code.value == "saudi arabia") {

        pNumber.value = "+966";

    } else if (code.value == "us") {

        pNumber.value = "+1";

    } else {

        pNumber.value = "";

    };


};


// todo: PHONE NUMBER FIELD END;



// todo: AGE CALCULATOR START;


const ageCalcMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let datePicker = document.querySelector(".age");

let ageCalBtn = document.querySelector(".calc");

let ageYears = document.querySelector("#ageYear");

let ageMonths = document.querySelector("#ageMon");

let ageDays = document.querySelector("#ageDay");

ageCalBtn.onclick = function() {

    let today = new Date();

    let inputDate = new Date(datePicker.value);

    let birthDetails = {

        day: inputDate.getDate(),
        month: inputDate.getMonth() + 1, // ! months are counts from " 0 " thets why we need to +1 ;
        year: inputDate.getFullYear()

    };

    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1; // ! months are counts from " 0 " thets why we need to +1 ;
    let currentYear = today.getFullYear();


    leapChecker(currentYear);


    // ! If given date is Future ;

    if (

        birthDetails.year > currentYear ||

        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||

        (birthDetails.day > currentDay && birthDetails.month == currentMonth && birthDetails.year == currentYear)

    ) {

        alert("Not Born Yet !!!");

        displayResult("-", "-", "-");

        return;

    };


    // ! FOR CALCULATE AGE ;

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {

        birthMonth = currentMonth - birthDetails.month;

    } else {

        birthYear--;

        birthMonth = 12 + currentMonth - birthDetails.month;

    };

    if (currentDay >= birthDetails.day) {

        birthDay = currentDay - birthDetails.day;

    } else {

        birthMonth--;

        let days = ageCalcMonths[currentMonth - 2];

        birthDay = days + currentDay - birthDetails.day;


        if (birthMonth < 0) {

            birthMonth = 11;

            birthYear--;

        };

    };

    birthDay = (birthDay < 10) ? "0" + birthDay : birthDay;

    birthMonth = (birthMonth < 10) ? "0" + birthMonth : birthMonth;

    birthYear = (birthYear < 10) ? "0" + birthYear : birthYear;

    // ! FOR DISPLAY RESULT ;

    displayResult(birthDay, birthMonth, birthYear);



};

// ! FOR CHECK LEAP YEAR ;

function leapChecker(year) {

    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {

        ageCalcMonths[1] = 29;

    } else {

        ageCalcMonths[1] = 28;

    };

};


// ! FOR DISPLAY RESULT ;

function displayResult(bDay, bMon, bYrs) {

    ageYears.innerHTML = bYrs;

    ageMonths.innerHTML = bMon;

    ageDays.innerHTML = bDay;

};

// ! FOR TRIGGER WITH ENTER BUTTON ;

datePicker.addEventListener("keyup", e => {

    e.preventDefault();

    if (e.keyCode === 13) {

        ageCalBtn.click();

    };

});



// todo: AGE CALCULATOR END;



// todo: ANALOGUE WATCH START;


let analogueHr = document.querySelector("#angHour");

let analogueMn = document.querySelector("#angMinute");

let analogueSc = document.querySelector("#angSeconds");

let analogueAmPm = document.querySelector(".angAmPm");

let angClock = setInterval(() => {

    let dateNow = new Date();

    let angHr = dateNow.getHours();

    let angMn = dateNow.getMinutes();

    let angSc = dateNow.getSeconds();


    let calc_hr = (angHr * 30) + (angMn / 2);

    let calc_min = (angMn * 6) + (angSc / 10);

    let calc_sec = angSc * 6;

    // ! FOR MOVING CLOCK ;

    analogueHr.style.transform = `rotate(${calc_hr}deg)`;

    analogueMn.style.transform = `rotate(${calc_min}deg)`;

    analogueSc.style.transform = `rotate(${calc_sec}deg)`;


    if (angHr > 12) {

        analogueAmPm.innerHTML = "PM";

    } else {

        analogueAmPm.innerHTML = "AM";

    };

}, 1000);


// todo: ANALOGUE WATCH END;



// todo: ROUND PROGRESS BAR START;


let roundNumber = document.querySelector("#roundPrgNmb");

function rndCount() {

    let from = 0;

    let to = 80;

    let step = to > from ? 1 : -1;

    if (from == to) {

        roundNumber.innerHTML = from + "%";

        return;

    };

    let counter = setInterval(function() {

        from += step;

        roundNumber.innerHTML = from + "%";

        if (from == to) {

            clearInterval(counter);

        };

    }, 25);

};

rndCount();


// todo: ROUND PROGRESS BAR END;



// todo: LIMIT CHARACTER START;


let limInput = document.querySelector(".limit");

let limRes = document.querySelector(".limitResult");

let limitation = 60;

limRes.innerHTML = "00" + " / " + limitation;

limInput.addEventListener("input", function() {

    let limLength = limInput.value.length;

    limLength = (limLength < 10) ? "0" + limLength : limLength;

    limRes.innerHTML = limLength + " / " + limitation;

    if (limLength > limitation) {

        limInput.style.borderColor = "#ff2851";

        limRes.style.color = "#ff2851";

    } else {

        limInput.style.borderColor = "#b2b2b2";

        limRes.style.color = "#FFFFFF";

    }
});


// todo: LIMIT CHARACTER END;



// todo: RELOAD AFTER "x" SECONDS START;


/*setTimeout(function() {

    window.location.reload(1);

}, 30000);*/


// todo: RELOAD AFTER "x" SECONDS END;



// todo: AUTO RESIZE TEXTAREA START;


let resizeTxtArea = document.querySelector(".resize");

resizeTxtArea.style.cssText = `height: ${resizeTxtArea.scrollHeight}px; overflow-y: hidden`;

resizeTxtArea.addEventListener("input", function() {

    this.style.height = "auto";

    this.style.height = `${this.scrollHeight}px`;

});


// todo: AUTO RESIZE TEXTAREA END;



// todo: HIGHLIGHT TEXT START;


let highlightBtn = document.querySelector(".highlightBtn");

highlightBtn.onclick = function() {

    let textToSearch = document.querySelector(".highlightInput");

    let paragraph = document.querySelector(".highlightPara");

    textToSearch.value = textToSearch.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    let pattern = new RegExp(`${textToSearch.value}`, "gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`) // ? textContent is must. innerHTML is not allowed ;

};


// todo: HIGHLIGHT TEXT END;



// todo: GOOGLE TRANSLATE START;


function page() {

    new google.translate.TranslateElement({

        pageLanguage: "en"

    }, "translate");

};


// todo: GOOGLE TRANSLATE END;



// todo: LIVE WORD AND CHARACTER COUNTER START;


let liveCountInput = document.querySelector(".input_textarea");

let characCount = document.querySelector("#charac_count");

let wordsCount = document.querySelector("#word_count");

liveCountInput.addEventListener("input", () => {

    characCount.innerHTML = liveCountInput.value.length;

    let txt = liveCountInput.value.trim();

    wordsCount.innerHTML = txt.split(/\s+/).filter((item) => item).length; // ? item == any; 

});

// ! FOR AUTO RESIZE ;

liveCountInput.style.cssText = `height: ${liveCountInput.scrollHeight}px; overflow-y: hidden`;

liveCountInput.addEventListener("input", function() {

    this.style.height = "auto";

    this.style.height = `${this.scrollHeight}px`;

});


// todo: LIVE WORD AND CHARACTER COUNTER END;



// todo: MULTIPLE READ MORE / READ LESS START;


let noOfCharac = 150;

let contents = document.querySelectorAll(".content");

contents.forEach(content => {

    // ! If text length is less that noOfCharac... then hide the read more button ;

    if (content.textContent.length < noOfCharac) {

        content.nextElementSibling.style.display = "none";

    } else {

        let displayText = content.textContent.slice(0, noOfCharac);

        let moreText = content.textContent.slice(noOfCharac);

        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;

    };

});


function readMore(btn) {

    // ? btn == any ;

    let post = btn.parentElement;

    post.querySelector(".dots").classList.toggle("hide");

    post.querySelector(".more").classList.toggle("hide");

    btn.textContent == " read more " ? btn.textContent = "read less" : btn.textContent = " read more ";
};


// todo: MULTIPLE READ MORE / READ LESS END;



// todo: CALCULATOR START;


let calCulator = document.querySelector(".calculate");

let clean = document.querySelector(".clear");

let del = document.querySelector(".del");

let devided = document.querySelector(".devide");

let multiplicate = document.querySelector(".multiplication");

let seven = document.querySelector(".num7");

let eight = document.querySelector(".num8");

let nine = document.querySelector(".num9");

let reduce = document.querySelector(".minus");

let four = document.querySelector(".num4");

let five = document.querySelector(".num5");

let six = document.querySelector(".num6");

let adding = document.querySelector(".plus");

let one = document.querySelector(".num1");

let two = document.querySelector(".num2");

let three = document.querySelector(".num3");

let zero = document.querySelector(".num0");

let zero_zero = document.querySelector(".num00");

let point = document.querySelector(".dot");

let equal = document.querySelector(".eql");


// ! FOR C ;

clean.onclick = function() {

    calc.cal.value = "";


};


// ! FOR del ;

del.onclick = function() {

    calc.cal.value = calc.cal.value.substr(0, calc.cal.value.length - 1);


};


// ! FOR / ;

devided.onclick = function() {

    document.calc.cal.value += "/";


};


// ! FOR * ;

multiplicate.onclick = function() {

    document.calc.cal.value += "*";


};


// ! FOR 7 ;

seven.onclick = function() {

    document.calc.cal.value += 7;


};


// ! FOR 8 ;

eight.onclick = function() {

    document.calc.cal.value += 8;


};


// ! FOR 9 ;

nine.onclick = function() {

    document.calc.cal.value += 9;


};


// ! FOR - ;

reduce.onclick = function() {

    document.calc.cal.value += "-";


};


// ! FOR 4 ;

four.onclick = function() {

    document.calc.cal.value += 4;


};


// ! FOR 5 ;

five.onclick = function() {

    document.calc.cal.value += 5;


};


// ! FOR 6 ;

six.onclick = function() {

    document.calc.cal.value += 6;


};


// ! FOR + ;

adding.onclick = function() {

    document.calc.cal.value += "+";


};


// ! FOR 1 ;

one.onclick = function() {

    document.calc.cal.value += 1;


};


// ! FOR 2 ;

two.onclick = function() {

    document.calc.cal.value += 2;


};


// ! FOR 3 ;

three.onclick = function() {

    document.calc.cal.value += 3;


};


// ! FOR 0 ;

zero.onclick = function() {

    document.calc.cal.value += 0;


};


// ! FOR 00 ;

zero_zero.onclick = function() {

    document.calc.cal.value += "00";


};


// ! FOR . ;

point.onclick = function() {

    document.calc.cal.value += ".";


};


// ! FOR = ;

equal.onclick = function() {

    document.calc.cal.value = eval(calc.cal.value);


};



// todo: CALCULATOR END;



// todo: LIVE WEBSITE VISIT COUNT START;


let visitor = document.querySelector(".visitPage");

function visitList() {

    fetch('https://api.countapi.xyz/update/any/any/?amount=1')

    .then((res) => res.json())

    .then((res) => {

        visitor.innerHTML = res.value;

    });

};

visitList();


// todo: LIVE WEBSITE VISIT COUNT END;



// todo: CAPTCHA FIELD START;


let captcha = document.querySelector(".captcha");

let capCngBtn = document.querySelector(".captcha_btn");

let capInputField = document.querySelector(".captcha_input input");

let capCheckBtn = document.querySelector(".check_btn");

let capStatusTxt = document.querySelector(".status_text");

// ! storing all captcha characters in array ;

let capCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];


function getCaptcha() {

    for (let i = 0; i < 6; i++) {

        // ! getting 6 random characters from the array;

        let randomCharacter = capCharacters[Math.floor(Math.random() * capCharacters.length)];

        // ! passing 6 random characters inside captcha innerText ;

        captcha.innerText += ` ${randomCharacter}`;
    };
};

getCaptcha();

// ! calling getCaptcha & removeContent on the reload btn click ;

capCngBtn.addEventListener("click", () => {

    removeContent();

    getCaptcha();

});


capCheckBtn.addEventListener("click", e => {

    // ! preventing button from it's default behaviour ;

    e.preventDefault();

    capStatusTxt.style.display = "block";

    // ! adding space after each character of user entered values because I've added spaces while generating captcha ;

    let inputVal = capInputField.value.split('').join(' ');

    if (inputVal == captcha.innerText) {

        // ! if captcha matched ;

        capStatusTxt.style.color = "#4db2ec";

        capStatusTxt.innerText = "Nice! You don't appear to be a robot.";

        setTimeout(() => {

            // ! calling removeContent & getCaptcha after 2 seconds ;

            removeContent();

            getCaptcha();

        }, 2000);

    } else {

        capStatusTxt.style.color = "#ff0000";

        capStatusTxt.innerText = "Captcha not matched. Please try again!";
    }
});


function removeContent() {

    capInputField.value = "";

    captcha.innerText = "";

    capStatusTxt.style.display = "none";

};


// todo: CAPTCHA FIELD END;



// todo: AUTOMATIC POP UP START;

let pop = document.querySelector(".popup");

let popIcon = document.querySelector("#popClose");


window.addEventListener("load", function() {

    setTimeout(

        function open() {

            pop.style.display = "block";

        }, 500);
});

popIcon.addEventListener("click", function() {

    pop.style.display = "none";

});


// todo: AUTOMATIC POP UP END;



// todo: GET USER LOCATION START;


let locationBtn = document.querySelector(".lctn");


locationBtn.addEventListener("click", () => {

    if (navigator.geolocation) {

        // ! if browser support geolocation api ;

        locationBtn.innerText = "Allow to detect location";

        // ! geolocation.getCurrentPosition method is used to get current position of the device ;
        // ! it takes three paramaters success, error, options. If everything is right then success ;
        // ! callback function will call else error callback function will call. We don't need third paramater for this project ;


        navigator.geolocation.getCurrentPosition(onSuccess, onError);


    } else {

        locationBtn.innerText = "Your browser not support";

    }

});


function onSuccess(position) {

    let { latitude, longitude } = position.coords;

    // ? api get from = https://opencagedata.com/api ;

    // ! https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=YOUR-API-KEY ;

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=728b2f7cc58a40ac88e71d4b96e98bd3`)

    // ! parsing json data into javascript object and returning it and in another then function receiving the object that is sent by the api ;

    .then(response => response.json()).then(result => {

        let allDetails = result.results[0].components;

        // ! passing components object to allDetails variable ;

        // ? get road, postcode, country, state_district,state by { .then(response => console.log(response.json())) } ;

        let { road, postcode, country, state_district, state } = allDetails;

        // ! getting country, postcode, country properties value from allDetails obj

        locationBtn.innerText = `${road}, ${postcode}, ${state_district}, ${state}, ${country}`;

        // ! passing these value to the button innerText ;

    }).catch(() => {

        // ! if error any error occured ;

        locationBtn.innerText = "Something went wrong";

    });



};



function onError(error) {

    if (error.code == 1) {

        // ? this code = 1 you will get by doing { console.log(error); } ;

        // ! if user denied the request ;

        locationBtn.innerText = "You denied the request";

    } else if (error.code == 2) {

        // ! if location in not available ;

        locationBtn.innerText = "Location is unavailable";

    } else {

        // ! if other error occured ;

        locationBtn.innerText = "Something went wrong";

    };

    locationBtn.setAttribute("disabled", "true");

    // ! disbaled the button if any error occured ;

};


// todo: GET USER LOCATION END;



// todo: PAGINATION UI DESIGN START;


let ulTag = document.querySelector(".pagination ul");

let totalPages = 20;


function pages(totalPages, currentPage) {

    let liTag = "";

    let activeLi;

    let beforePages = currentPage - 1;

    let afterPages = currentPage + 1;

    if (currentPage > 1) {

        liTag += `<li class="page pgPrev" onclick="pages(totalPages, ${currentPage - 1})"> <span> <i class="fas fa-angle-left"></i> prev </span> </li>`;

    };

    if (currentPage > 2) {

        liTag += `<li class="pageNumb" onclick="pages(totalPages, 1)"> <span> 1 </span> </li>`;

        if (currentPage > 3) {

            liTag += `<li class="pageDots"> <span> ... </span> </li>`;

        };
    };

    // ! how many pages or li show before the current li ;


    if (currentPage == totalPages) {

        beforePages = beforePages - 2;

    } else if (page == totalPages - 1) {

        beforePages = beforePages - 1;

    };


    // ! how many pages or li show after the current li ;


    if (currentPage == 1) {

        afterPages = afterPages + 2;

    } else if (currentPage == 2) {

        afterPages = afterPages + 1;

    };

    for (let i = beforePages; i <= afterPages; i++) {

        if (i > totalPages) {

            continue;

        };
        if (i == 0) {

            i += 1;

        };

        if (currentPage == i) {

            activeLi = "numActive";

        } else {

            activeLi = "";

        };

        liTag += `<li class="pageNumb ${activeLi}" onclick="pages(totalPages, ${i})"> <span> ${i} </span> </li>`;

    };

    if (currentPage < totalPages - 1) {

        if (currentPage < totalPages - 2) {

            liTag += `<li class="pageDots"> <span> ... </span> </li>`;

        };

        liTag += `<li class="pageNumb" onclick="pages(totalPages, ${totalPages})"> <span> ${totalPages} </span> </li>`;

        // ? eta nichei dite hobe ;
    };

    if (currentPage < totalPages) {

        liTag += `<li class="page pgNext" onclick="pages(totalPages, ${currentPage + 1})"> <span> next <i class="fas fa-angle-right"></i></span> </li>`;

    };

    ulTag.innerHTML = liTag;

};

pages(totalPages, 1);


// todo: PAGINATION UI DESIGN END;