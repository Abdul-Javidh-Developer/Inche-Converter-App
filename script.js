
function convert() {

    var inputbox = document.getElementById('input');
    var cmVal = Number(inputbox.value);
    var inchVal = (cmVal / 2.54).toFixed(2);
    var result = document.getElementById('result');
    result.innerHTML = inchVal;

}
