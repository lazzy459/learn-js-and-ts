// 5. Cek palindrome
function isPalindrome(str: string): boolean {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(`"madam" is palindrome: ${isPalindrome("madam")}`);

export {}