const unitInputEl = document.getElementById("unit-input");
const unitConverterButtonEl = document.getElementById("unit-converter-button");
const lenghtResultEl = document.getElementById("lenght-result");
const volumeResultEl = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");

const meterToFeet =  3.281;
const literToGallon =  0.264;
const kiloToPound =  2.204;

unitConverterButtonEl.addEventListener("click", (e) => {
    e.preventDefault();
    render();
});

function render() {
    let baseValue = unitInputEl.value;
    
    lenghtResultEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)}`;

    volumeResultEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)}`
    
    massResult.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)}`


};

