function countUniqueValues(arr) {
    let first = 0;
    let second = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[first] == arr[second]) {
            second++;
        } else {
            first++;
            arr.splice(first, 1, arr[second]);
            second++;
        }
    }

    console.log(first)
}

// Input a SORTED array of numbers and this function will log the amount of unique values:
countUniqueValues([1, 2, 3, 3, 5, 9, 9]);     //should log 5

