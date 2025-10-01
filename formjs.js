let timestable = (to) => {
    console.log('here\'s a times table to ' + to + '\n')

    if (Number.isInteger(to)) {
        for (let i = 0; i <= to; i++) {
            let row = ""
            for (let col = 1; col <= to; col++) {
                row += `${i * col}/t`
            }
            console.log(row)
        }
    } else {
        console.log(`Sorry, ${to} isn't a number!`)
    }
}


function getRowsDesired() {
    return Number(document.getElementById('rows').value)
}

function getColumnsDesired() {
    return Number(document.getElementById('cols').value)
}

function getHighlightedValue() {
    return Number(document.getElementById('highlight').value)
}

function createWithHtmlTable(r, c, h) {
    let string
    if (r && c) {
        string = "<table>\n"

        for (let row = 1; row <= r; row++) {
            if (h === row) {
                string += "<tr class='highlight'>\n"
            } else {
                string += "<tr>\n"
            }

            for (let col = 1; col <= c; col++) {
                string += "<td>"
                string += row * col
                string += "</td>\n"
            }
            string += "</tr>\n"
        }
        string += "</table>\n"
    } else {
        string = 'provide inputs'
    }


    document.getElementById("output").innerHTML = string;
}