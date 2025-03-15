// 5. Cek palindrome
function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log("\"madam\" is palindrome: ".concat(isPalindrome("madam")));
