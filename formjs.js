/**
 * Takes an input ID and returns the value as a number, or NaN if invalid.
 * @param {string} inputID The ID of the HTML input element.
 * @returns {number} The numeric value of the input.
 */
function getInputValueAsNumber(inputID) {
    const element = document.getElementById(inputID);
    if (element) {
        return Number(element.value);
    }
    return NaN;
}

// Input getter functions
function getRowsDesired() {
    return getInputValueAsNumber('rows');
}

function getColumnsDesired() {
    return getInputValueAsNumber('cols');
}

function getHighlightedValue() {
    return getInputValueAsNumber('highlight');
}


/**
 * Generates and displays a multiplication table using nested DIVs styled with Flexbox.
 * @param {number} r The number of rows.
 * @param {number} c The number of columns.
 * @param {number} h The row/column index to highlight the squared cell (h x h).
 */
function createWithFlexboxGrid(r, c, h) {
    // 1. Input Validation
    if (!Number.isInteger(r) || r <= 0 || !Number.isInteger(c) || c <= 0) {
        document.getElementById("output").innerHTML = '<h3>Please provide valid, positive integer inputs for rows and columns.</h3>';
        return;
    }

    // 2. Build the Flexbox grid (nested DIVs)
    let gridHtml = "<div class='multiplication-grid'>\n";

    for (let row = 1; row <= r; row++) {
        // Start a grid-row
        gridHtml += `<div class='grid-row'>\n`;

        for (let col = 1; col <= c; col++) {
            let cellClass = 'grid-cell';

            // Check for the squared cell to highlight (h x h)
            if (row === h && col === h && h <= r && h <= c) {
                cellClass += ' highlight';
            }

            // Create the cell DIV
            gridHtml += `<div class='${cellClass}'>${row * col}</div>\n`;
        }
        gridHtml += "</div>\n"; // Close grid-row
    }
    gridHtml += "</div>\n"; // Close multiplication-grid

    // 3. Render the output
    document.getElementById("output").innerHTML = gridHtml;
}


// --- CRITICAL FIX: The Event Listener ---
// This code resolves the 'nothing is happening' issue by attaching the function
// to the button's click event when the page loads.
document.getElementById('generate').addEventListener('click', function() {
    const rows = getRowsDesired();
    const cols = getColumnsDesired();
    const highlight = getHighlightedValue();

    // Call the Flexbox function
    createWithFlexboxGrid(rows, cols, highlight);
});