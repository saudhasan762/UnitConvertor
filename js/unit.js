var input = document.querySelector('#input');
var result = document.querySelector('#result');
var inputType = document.querySelector('#inputType');
var resultType = document.querySelector('#resultType');
var unitType = document.querySelector('#unitType');

input.addEventListener("keyup", typeinput);
result.addEventListener("keyup", typeresult);
inputType.addEventListener("change", typeinput);
resultType.addEventListener("change", typeresult);
unitType.addEventListener("change", myunit);

let units = {
    length: ['Meter', 'Centimeter', 'Kilometer'],
    area: ['Square Meter', 'Square Inch', 'Square Foot'],
    temperature: ['Celcius', 'Fahrenheit', 'Kelvin']
};

window.addEventListener("DOMContentLoaded", function () {    
    myunit();
})

function myunit() {
    // let unitTypeValue = unitType.value;
    // console.log(unitTypeValue);
    let selected_option = units[this.value] || units.length;
    // console.log(selected_option);
    while (inputType.options.length > 0 && resultType.options.length > 0) {  
        inputType.options.remove(0);
        resultType.options.remove(0);
    }

    Array.from(selected_option).forEach(function (element) {
        let option1 = new Option(element, element);
        let option2 = new Option(element, element);
        inputType.appendChild(option1);
        resultType.appendChild(option2);
    })
}

function typeinput(){
    myResult('input',input.value);
    // console.log('at 43');
}

function typeresult(){
    myResult('result',result.value);

}

function myResult(typeofinput, inputvalue) {
    let inputTypeValue = inputType.value;
    let resultTypeValue = resultType.value;
    let option = inputTypeValue + "-" + resultTypeValue;
    // console.log(option);
    // console.log("type of",typeof(unitType.value));
    console.log(unitType.value);
    switch (unitType.value) {
        case "length":
            console.log("into case");
            calculateLength(option,typeofinput, inputvalue);
            break;
        case "area":
            calculateArea(option,typeofinput, inputvalue);
            break;
        case "temperature":
            calculateTemperature(option,typeofinput, inputvalue);
            break;
    }
}

function setResultValue(result1,typeofinput){
    // console.log(result1, result.value, input.value);
    // console.log("at 70",result);
    console.log("setResultValue");
    if( typeofinput === 'input'){
        result.value = result1;
        console.log("after setting",result1,result.value);
    } else if (typeofinput == 'result'){
        input.value = result1;
        console.log("after setting input",input.value, result1);
    }
}

