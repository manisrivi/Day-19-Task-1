let divTag = document.createElement("div");
divTag.innerHTML = `
<div class="container text-center">
        <div class="row justify-content-center">
            <div class="col">
                <h1 id="title">CALCULATOR</h1>
                <p id="description">NORMAL CALCULATOR</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-10 col-sm-9  text-center">
            <div class="calculate">
            <input type="text" placeholder="0" id="result" size="30px"> <br>
            <button class="btn btn-secondary" id="clear" onclick="Clear()">CI</button>
            <button class="btn btn-danger" onclick="del()">DEL</button>
            <button class="btn btn-info" onclick="display('%')">%</button> 
            <button class="btn btn-info" onclick="display('/')">/</button> <br>
            <button class="btn btn-warning" onclick="display('7')">7</button>
            <button class="btn btn-warning" onclick="display('8')">8</button> 
            <button class="btn btn-warning" onclick="display('9')">9</button> 
            <button class="btn btn-info" onclick="display('*')">*</button> <br>
            <button class="btn btn-warning" onclick="display('4')">4</button> 
            <button class="btn btn-warning" onclick="display('5')">5</button>
            <button class="btn btn-warning" onclick="display('6')">6</button> 
            <button class="btn btn-info" id="subtract" onclick="display('-')">-</button> <br>
            <button class="btn btn-warning" id="1" onclick="display('1')">1</button>
            <button class="btn btn-warning" id="2" onclick="display('2')">2</button>
            <button class="btn btn-warning" id="3" onclick="display('3')">3</button> 
            <button class="btn btn-info" id="add" onclick="display('+')">+</button> <br>
            <button class="btn btn-warning" onclick="display('.')">.</button>
            <button class="btn btn-warning" onclick="display('0')">0</button>
            <button class="btn btn-success" onclick="calculate()" id="equal" class="equal">=</button>
        </div>
            </div>
        </div>
            </div>
`
document.body.append(divTag);

// Create the variable
let res = document.getElementById("result");
// Display the numbers
function display(num) {
    res.value += num;
}
// Calculate the values 
function calculate() {
    try {
        res.value = eval(res.value);
    }
    catch (err) {
        alert("Invalid Entry");
    }
}
// Clear the values
function Clear() {
    res.value = "";
}
// Delete the values
function del() {
    res.value = res.value.slice(0, -1);
}

// Keyboard: If enter the unknown values alert comes to screen
document.getElementById("result").onkeypress = function typing(event) {
    let show = document.getElementById("result");
    if (event.key === "Enter") {
        (show.value === "") ? alert("Enter Numbers to CALCULATE") : calculate();
    }
    else if (!(event.charCode >= 48 && event.charCode <= 57 || event.key === "+" || event.key === "-" || event.key === "/" || event.key === "*")) {
        alert("Please Enter The Numbers");
        event.preventDefault();
    }
}

// Keyboard equal function
function dis(val) {
    document.getElementById("result").value += val
}

// Test case
document.querySelector('#clear').calculate();
var one = document.getElementById('1');
var two = document.getElementById('2');
var add = document.getElementById('add');
var result = document.getElementById('result');
one.click();
add.click();
two.click();
document.getElementById('equal').calculate();




