// 1.1 Implement an algorithm to determine if a string has all unique characters. 
/// What if you cannot include different data structures

function uniqueChars(string) {
    let map = new Map();
    let lowerCase = string.toLowerCase();

    for(let i = 0; i < lowerCase.length; i++) {
        map.set(lowerCase[i], i);
    }

    console.log(map.size === string.length ? "true" : "false");
}

uniqueChars("True");
uniqueChars("Not True");