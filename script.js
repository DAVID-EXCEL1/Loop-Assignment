var tabRow = rowNumber.value;
var tabColumn = colNumber.value;

function displayAll() {
    var sign = selectEval.value
    var tab = "<table>"
    tab += "<tr>"
    for (var i = 1; i <= Number(colNumber.value); i++) {
        tab += "<td>"
        for (var j = 1; j <= Number(rowNumber.value); j++) {
            var calcValue = (eval(i + sign + j))

            if (calcValue % 1 !== 0) {
                var calcValue = parseFloat(eval(i + sign + j)).toFixed(2)
            }
            tab += i + sign + j + "=" + calcValue + "<br>" + "<br>";
        }

    }
    tab += "</table>"
    dispDiv.innerHTML = tab
    dispDiv.style.color = "white"
    document.getElementById("rowNumber").value = ""
    document.getElementById("colNumber").value = ""
}
