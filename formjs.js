
let timestable = (to) => {
    console.log('here\'s a times table to ' + to + '\n')

    if(Number.isInteger(to)) {
        for (let i = 0; i <= to; i++) {
            let row=""
            for(let col=1; col <= to; col++) {
                row+= `${i*col}/t`
            }
            console.log(row)
        }
    }
    else{
        console.log(`Sorry, ${to} isn't a number!`)
    }
}




function getRowsDesired() {
    return Number(document.getElementById('rows').value)
}

function getColumnsDesired() {
    return Number(document.getElementById('cols').value)
}

function createWithHtmlTable(rows, cols) {
    let string
    if (rows && cols) {
        string = "<table>\n"

        for (let row = 1; row <= rows; row++) {
            string += "<tr>\n"

            for (let col = 1; col <= cols; col++) {
                string += "<td>"
                string += row * col
                string += "<td>\n"
            }
            string += "</tr>\n"
        }
        string += "</table>\n"
    } else {
        string = 'provide inputs'
    }


    document.getElementById("output").innerHTML = string;
}