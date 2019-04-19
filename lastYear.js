//Add a new prototype method to the Date object which returns the previous year (in YYYY format):

Date.prototype.lastYear = function () {
    let thisYear = new Date(this).getFullYear();
    return thisYear - 1;
}

const whatIsLastYear = new Date('1989-02-15').lastYear();

console.log(whatIsLastYear);
