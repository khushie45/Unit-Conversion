/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNumber = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")
let lengthId = document.getElementById("length")
let volumeId = document.getElementById("volume")
let massId = document.getElementById("mass")

convertBtn.addEventListener("click", () => {
    lengthFunc()
    volumeFunc()
    massFunc()
})

function lengthFunc() {
    let length = inputNumber.value
    //meter to feet
    feet = (length * 3.281).toFixed(3)
    //feet to meter
    meter = (length / 3.281).toFixed(3)
    lengthId.innerHTML += `<p>${inputNumber.value} meters = ${feet} feet | ${inputNumber.value} feet = ${meter} meters</p>`
    //console.log(feet)
    //console.log(meter)
}

function volumeFunc() {
    let volume = inputNumber.value
    //liters to gallons
    gallons = (volume * 0.264).toFixed(3)
    //gallons to liter
    liter = (volume / 0.264).toFixed(3)
    volumeId.innerHTML += `<p>${inputNumber.value} liters = ${gallons} gallons | ${inputNumber.value} gallons = ${liter} liters</p>`
    //console.log(gallons)
    //console.log(liter)
}

function massFunc() {
    let mass = inputNumber.value
    //kilos to pounds
    pounds = (mass * 2.204).toFixed(3)
    //pounds to kilos
    kilos = (mass / 2.204).toFixed(3)
    massId.innerHTML += `<p>${inputNumber.value} kilos = ${pounds} pounds | ${inputNumber.value} pounds = ${kilos} kilos</p>`
    //console.log(pounds)
    //console.log(kilos)
}