function sameFrequency(num1, num2){
    if(isNaN(num1) || isNaN(num2)) {
        console.log("Numbers Only Please!");
        return false;
    } else { 
        num1 = num1.toString();
        num2 = num2.toString();
    }

    if (num1.length !== num2.length) {
        console.log("Not the same amount of integers!");
        return false;
    } else {
        let numCount1 = {};
        let numCount2 = {};

        for (let val of num1) {
            numCount1[val] = (numCount1[val] || 0) + 1;
        }

        for (let val of num2) {
            numCount2[val] = (numCount2[val] || 0) + 1;
        }

        for (let key in numCount2) {
            if (numCount1[key] != numCount2[key]) {
                console.log("Not the same frequency!");
                return false;
            }
        }
    } 

    console.log("Same Frequency!");
    return true; 
}

// Input two numbers and this function will determine whether or not they have the same frequency of digits:
sameFrequency(182, 281); // should return true

