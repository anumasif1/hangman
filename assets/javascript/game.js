var words = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antarctica", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Botswana", "Brazil", "Burundi", "Cambodia", "Cameroon", "Canada", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guyana", "Haiti", "Latvia", "Lebanon", "Lesotho", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Nicaragua", "Niger", "Nigeria", "Niue", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Qatar", "Reunion", "Romania", "Rwanda", "Samoa", "Senegal", "Seychelles", "Singapore", "Slovenia", "Somalia", "Spain", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];

var guessWord = "";
var allInputs = "";
var wrongInputs = "";
var allAlphabets = "abcdefghijklmnopqrstuvwxyz";
var lives = 10;
var won = false;
window.onload = function () { loadAll(); }

function loadAll() {
    allInputs="";
    wrongInputs="";
    lives=10;
    won=false;
    guessWord = words[Math.floor(Math.random() * words.length)];
    guessWord = guessWord.toLowerCase();
    console.log(guessWord);
    reset();
    displayCountry();
}

window.onkeyup = function () {
    if (lives > 0 && !won) {
        var inputKey = event.key.toLowerCase();
        if (allInputs.indexOf(inputKey) >= 0 || allAlphabets.indexOf(inputKey) == -1) {
            document.getElementById("comment").innerHTML = "Invalid";

        } else if (guessWord.indexOf(inputKey) == -1) {
            wrongInputs += inputKey;
            allInputs += inputKey;
            lives--;
            document.getElementById("hm-9").src = "assets/images/hm-" + (10 - lives) + ".png";
            document.getElementById("comment").innerHTML = "";

            if (lives == 0) {
                document.getElementById("alert").innerHTML = "You Lost!";
                document.getElementById("guessWord").innerHTML = guessWord;
            }
            document.getElementById("wrong").innerHTML = wrongInputs;
            document.getElementById("lives").innerHTML = "You have " + lives + " lives left.";
        }

        else {
            allInputs += inputKey;
            console.log(allInputs);
            displayCountry();
        }
    }
}

function displayCountry() {
    document.getElementById("guessWord").innerHTML = "";
    var correctGuesses = 0;
    for (var i = 0; i < guessWord.length; i++) {
        if (allInputs.indexOf(guessWord[i]) >= 0) {
            correctGuesses++;
            document.getElementById("guessWord").innerHTML += guessWord[i] + " ";
        } else {
            document.getElementById("guessWord").innerHTML += "_ ";
        }
    }
    console.log(correctGuesses);
    if (correctGuesses == guessWord.length) {
        won = true;
        document.getElementById("alert").innerHTML = "You Win!";
    } else {
        document.getElementById("wrong").innerHTML = wrongInputs;
        document.getElementById("lives").innerHTML = "You have " + lives + " lives left.";
    }
}

function reset() {
    document.getElementById("comment").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("hm-9").src = "assets/images/hm-0.png";
    document.getElementById("alert").innerHTML = "";
}

function restart() {
    loadAll();
}
