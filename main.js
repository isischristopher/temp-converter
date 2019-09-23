printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
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