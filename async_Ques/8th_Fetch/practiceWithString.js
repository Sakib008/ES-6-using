const cities = ["Berlin", "München", "Hamburg", "Düsseldorf", "Aachen", "Zürich"];

function sortCities(arr) {
    // Your code here
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j].localeCompare(arr[j + 1], 'de-DE') > 0) {
                let text = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = text;

            }
        }
    }
    return arr
}

const sortedCities = sortCities(cities);
// console.log(sortedCities);
// Expected output: ["Aachen", "Berlin", "Düsseldorf", "Hamburg", "München", "Zürich"]





