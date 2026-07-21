// Convert Fahrenheit to Celsius
function fahrenheitToCelsius() {

    let f = Number(document.getElementById("temp").value);

    let c = (f - 32) * 5 / 9;

    updatePage(c.toFixed(2) + " °C");
}


// Convert Celsius to Fahrenheit
function celsiusToFahrenheit() {

    let c = Number(document.getElementById("temp").value);

    let f = (c * 9 / 5) + 32;

    updatePage(f.toFixed(2) + " °F");
}


// Display the answer
function updatePage(result) {

    document.getElementById("result").innerHTML = result;

}