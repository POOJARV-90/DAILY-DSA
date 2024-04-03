// leetcode-Palindrome Number -easy

function isPalindrome(x) {
    // Convert integer to string
    let str = x.toString();
    
    // Iterate from both ends towards the middle
    for (let left = 0, right = str.length - 1; left < right; left++, right--) {
        // Compare characters at left and right positions
        if (str[left] !== str[right]) {
            return false; // If characters are not equal, it's not a palindrome
        }
    }
    
    return true; // If loop completes without returning false, it's a palindrome
}

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
