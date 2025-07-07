/**
 * String Pattern Matching: Count substrings that match the pattern (0 for vowels, 1 for consonants)
 * @param {string} pattern - Pattern to search for (consisting of 0s and 1s)
 * @param {string} source - Source string to search in
 * @return {number} - Number of matching substrings
 */
function countPatternMatches(pattern, source) {
    // Set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    // Function to convert string to pattern of 0s and 1s
    const convertToPattern = (str) => {
        return str.toLowerCase().split('').map(char => 
            vowels.has(char) ? '0' : '1'
        ).join('');
    };
    
    // Convert source string to pattern
    const convertedSource = convertToPattern(source);
    
    // Find matching substrings
    let count = 0;
    const patternLength = pattern.length;
    
    // i <= length - patternLength ensures we don't go beyond valid substring positions
    for (let i = 0; i <= convertedSource.length - patternLength; i++) {
        const substring = convertedSource.slice(i, i + patternLength);
        if (substring === pattern) {
            count++;
        }
    }
    
    return count;
}

// Basic tests
console.log("Basic tests:");
console.log(countPatternMatches("010", "amazing")); // Expected: 2 (ama, azi)
console.log(countPatternMatches("010", "hello world")); // Expected: 0
console.log(countPatternMatches("11", "programming")); // Expected: 4 (pr, gr, mm, ng)

// Additional tests
console.log("\nAdditional tests:");
console.log(countPatternMatches("00", "aeiou")); // Expected: 4 (ae, ei, io, ou)
console.log(countPatternMatches("111", "strength")); // Expected: 3 (str, tre, eng)
console.log(countPatternMatches("101", "python")); // Expected: 1 (yth)
console.log(countPatternMatches("0", "umbrella")); // Expected: 3 (u, e, a)
console.log(countPatternMatches("1111", "mississippi")); // Expected: 0 