function display(num) {
    document.getElementById('input').value += num;

}

function calculate() {
    var num = document.getElementById('input').value;
    var calc = eval(num);
    document.getElementById('in').value = calc;
    document.getElementById('input').value = "";
}

function del() {
    var number = document.getElementById('input').value;
    number = number.substring(0, number.length - 1);
    document.getElementById('input').value = number;

}

function clean() {
    document.getElementById("input").value = "";
    document.getElementById("in").value = "";
}