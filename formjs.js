

function getRowsDesired(rows) {
    console.log(Number(document.querySelector('rows input').value))
}

function getColsDesired(cols) {
    console.log(Number(document.querySelector('cols input').value))
}




let timestable = (to) => {
    console.log('here\'s a times table to ' + to + '\n')
}

function createWithHtmlTable(rows, cols) {
    let string
    if (rows && cols) {
        string = "<table>/n"

        for (let row = 1; row <= rows; row++) {
            string += "<tr>/n"

            for (let col = 1; col <= cols; col++) {
                string += "<td>"
                string += row * col
                string += "<td>/n"
            }
            string += "</tr>/n"
        }
        string += "</table>/n"
    } else {
        string = 'provide inputs'
    }


    document.getElementById("output").innerHTML = string;
}