/*
Implement a function which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
Solve it with either the Frequency Counter pattern, or the Multiple Pointers pattern.

Restrictions:
Time  - O(n)
Space - O(n)

Bonus:
Time  - O(n log n)
Space - O(1)
*/

function areThereDuplicates() {
    let first = 0;
    let second = 1;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[first] = arguments[second]) {
            console.log("true");
            return true;
        } else {
            first++;
            second++;
        }
    }

    console.log("false");
    return false;
}

areThereDuplicates('a', 'b', 'c')


// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true