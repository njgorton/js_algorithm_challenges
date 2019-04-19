// Modify the Array.prototype.map() method to print a map emoji after each item when called:

Array.prototype.map = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i] + ' 🗺️';
    }
    return this;
}

console.log([45, 'alpha', false].map());