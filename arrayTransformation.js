function solution(a) {
    const n = a.length;
    const b = new Array(n).fill(0); // Create an array of length n filled with 0

    for (let i = 0; i < n; i++) {
        b[i] = a[i]; // Assign current element value

        if (i > 0) {
            b[i] += a[i - 1]; // Add previous element value (when index > 0)
        }

        if (i < n - 1) {
            b[i] += a[i + 1]; // Add next element value (when index < n-1)
        }
    }

    return b;
}

// Test cases
function runTests() {
    // Test case 1: Basic array
    console.log('Test 1:');
    const test1 = [1, 2, 3, 4];
    console.log('Input:', test1);
    console.log('Output:', solution(test1));
    console.log('Expected: [3, 6, 9, 7]');
    
    // Test case 2: Array with single element
    console.log('\nTest 2:');
    const test2 = [5];
    console.log('Input:', test2);
    console.log('Output:', solution(test2));
    console.log('Expected: [5]');
    
    // Test case 3: Array with two elements
    console.log('\nTest 3:');
    const test3 = [1, 2];
    console.log('Input:', test3);
    console.log('Output:', solution(test3));
    console.log('Expected: [3, 3]');
    
    // Test case 4: Array with negative numbers
    console.log('\nTest 4:');
    const test4 = [-1, 0, 1];
    console.log('Input:', test4);
    console.log('Output:', solution(test4));
    console.log('Expected: [-1, 0, 1]');
}

// Run the tests
runTests(); 