//14. Longest Common Prefix
//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i); // Return the prefix found so far
            }
        }
    }
    
    return strs[0]; // If all strings are the same, return any of them
}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // Output: ""
