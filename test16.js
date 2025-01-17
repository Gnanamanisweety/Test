function formatString(inputString) {
    if (typeof inputString !== 'string') {
        return "Invalid input";
    }
    const upperCase = inputString.toUpperCase();
    const lowerCase = inputString.toLowerCase();
    const substring = inputString.substring(2, 5);
    return {
        upperCase: upperCase,
        lowerCase: lowerCase,
        substring: substring
    };
}

const result = formatString("Hello World");
console.log(result);
