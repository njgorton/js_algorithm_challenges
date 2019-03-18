function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("Different length strings!");
        return false;
    }

    let strCount1 = {};
    let strCount2 = {};

    for (let val of str1) {
        strCount1[val] = (strCount1[val] || 0) + 1;
    }

    for (let val of str2) {
        strCount2[val] = (strCount2[val] || 0) + 1;
    }

    for (let key in strCount2) {
        if (strCount1[key] != strCount2[key]) {
            console.log("NOT an anagram!");
            return false;
        }
    }

    console.log("That's a valid anagram!");
    return true;
}

// change string inputs to see if they are an anagram or not: 
validAnagram("aaz", "zza");