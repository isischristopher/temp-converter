printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

const convertButton = document.getElementById('convert');
const clearButton = document.getElementById('');
const fahRadio = document.getElementById('fahrenheit');
const celRadio = document.getElementById('celsius');
let inputTemp = document.getElementById("input-temp").value;
let icon = '';
let newTemp = '';

const toCelsius = (cel) => {
    let newCel = Math.round(((cel - 32) * 5) / 9);
    newTemp = newCel;
    let hotC = 32;
    let coldC = 0;
    let tempType = 'C';
    changeColor(newTemp, hotC, coldC, tempType);
};

const toFahrenheit = (fah) => {
    let newFah = Math.round(((fah * 9) / 5) + 32);
    newTemp = newFah;
    let hotF = 90;
    let coldF = 32;
    let tempType = 'F';
    changeColor(newTemp, hotF, coldF, tempType);
};

const determineConverter = (e) => {
    let inputTemp = document.getElementById("input-temp").value;
    let buttonType = e.target.id;
    let keyType = e.key;
    if (buttonType === 'convert' || keyType === 'Enter') {
        console.log('fahrenheit button ', fahRadio.checked)
        console.log('celsius button ', celRadio.checked)
        if (fahRadio.checked === true) {
            toFahrenheit(inputTemp);
        } else if (celRadio.checked === true) {
            toCelsius(inputTemp);
        } else {
            alert('Please make a selection!');
        }
    } else if (buttonType === 'clear') {
        $('#output').empty();
        $('#input-temp').val('');
    }
  }  


const changeColor = (temp, hotTemp, coldTemp, tempT) => {
    if (temp <= coldTemp) {
        let color = 'cold'; 
        icon = '<i class="fas fa-snowflake"></i>';
        outputBuilder(icon, newTemp, tempT, color);
    } else if (temp >= hotTemp) {
        color = 'hot'; 
        icon = '<i class="fas fa-fire"></i>';
        outputBuilder(icon, newTemp, tempT, color);
    } else {
        color = 'normal';
        icon = '<i class="fas fa-thermometer-half"></i>';
        outputBuilder(icon, newTemp, tempT, color);
    }
}

const outputBuilder = (icon, newTemp, tempType, cardColor) => {
    domString = `
    <div class="temp-card" id="${cardColor}">
        <div class="row temp-row">
            <div>
            ${icon}
            </div>
            <div class="text-center">
                <h2 class="card-text">${newTemp}° ${tempType}</h2>
            </div>
        </div>
    </div>
    `
    printToDom('output', domString);
}
document.getElementById('convert').addEventListener('click', determineConverter);
document.getElementById('body').addEventListener('keypress', determineConverter);
document.getElementById('clear').addEventListener('click', determineConverter);
