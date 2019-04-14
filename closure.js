// Playing around with closures... 

const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
    function closure(i) {
        setTimeout(function () {
            console.log("I am array item " + array[i]);
        }, 3000);
    }
    closure(i);
}