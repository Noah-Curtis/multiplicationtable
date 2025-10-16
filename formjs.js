function getInputValueAsNumber(inputID) {
    const element = document.getElementById(inputID);
    if (element) {
        return Number(element.value);
    }
    return NaN;
}

function getRowsDesired() {
    return getInputValueAsNumber('rows');
}

function getColumnsDesired() {
    return getInputValueAsNumber('cols');
}

function getHighlightedValue() {
    return getInputValueAsNumber('highlight');
}


function createWithFlexboxGrid(r, c, h) {
    if (!Number.isInteger(r) || r <= 0 || !Number.isInteger(c) || c <= 0) {
        document.getElementById("output").innerHTML = '<h3>Please provide valid, positive integer inputs for rows and columns.</h3>';
        return;
    }

    let gridHtml = "<div class='multiplication-grid'>\n";

    gridHtml += "<div class='grid-row header-row'>\n";
    gridHtml += `<div class='grid-cell corner-cell'></div>\n`;

    for (let col = 1; col <= c; col++) {
        let headerClass = col === h ? ' top-header-highlight' : '';
        gridHtml += `<div class='grid-cell top-header-cell${headerClass}'>${col}</div>\n`;
    }
    gridHtml += "</div>\n";

    for (let row = 1; row <= r; row++) {
        gridHtml += `<div class='grid-row data-row'>\n`;

        let headerClass = row === h ? ' left-header-highlight' : '';
        gridHtml += `<div class='grid-cell left-header-cell${headerClass}'>${row}</div>\n`;

        for (let col = 1; col <= c; col++) {
            let cellClass = 'grid-cell data-cell';

            if (row === h && col === h && h <= r && h <= c) {
                cellClass += ' highlight-center';
            }

            gridHtml += `<div class='${cellClass}'>${row * col}</div>\n`;
        }
        gridHtml += "</div>\n";
    }

    gridHtml += "</div>\n";

    document.getElementById("output").innerHTML = gridHtml;
}

document.getElementById('generate').addEventListener('click', function() {
    const rows = getRowsDesired();
    const cols = getColumnsDesired();
    const highlight = getHighlightedValue();

    createWithFlexboxGrid(rows, cols, highlight);
});