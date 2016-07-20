// http://stackoverflow.com/a/15479354
function naturalCompare(a, b) {
    let ax = [], bx = [];

    a.replace(/(\d+)|(\D+)/g, (_, $1, $2) => ax.push([$1 || Infinity, $2 || ""]));
    b.replace(/(\d+)|(\D+)/g, (_, $1, $2) => bx.push([$1 || Infinity, $2 || ""]));
    
    while(ax.length && bx.length) {
            let an = ax.shift();
            let bn = bx.shift();
            let nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
            if(nn) return nn;
        }

    return ax.length - bx.length;
}

let locationSetter = (number, rowLength) => {
    let numRows = Math.ceil(number / rowLength);
    let rows = 'abcdefghijklmnopqrstuvwxyz'.split('').slice(0, numRows);
    let locations = [];

    for (let i = 1; i <= rowLength; i++) {
        rows.forEach((row, index) => {
            let length = number % rowLength;
            let lastRow = numRows - index === 1;
            let lastRowFull = length === 0;
            let withinNumber = length >= i;

            if (!lastRow || lastRowFull || (lastRow && withinNumber)) {
                locations.push(`${row}${i}`)
            }
        });
    }

    return locations.sort(naturalCompare);
};

module.exports = locationSetter;
