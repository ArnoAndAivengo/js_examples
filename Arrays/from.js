
function createRange(start, end) {
    const range = Array.from({ length: end - start + 1 }, // 5
        function (item, index) { // 0, 1, 2, 3, 4
            return index + start; // 3, 4, 5, 6, 7 // 0 + 3, 1 + 3 ...
        }
    )
    return range;
}

createRange(3,7); // [3,4,5,6,7]
