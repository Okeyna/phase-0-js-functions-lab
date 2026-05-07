calculateTax = (amount) => {
    return amount * 0.10;
}

convertToUpperCase = (text) => {
    return text.toUpperCase();
}

findMaximum = (num1, num2) => {
    return Math.max(num1, num2);
}

isPalindrome = (word) => {
    const cleaned = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };