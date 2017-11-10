# Harmless Ransom Note

This is a function that takes two blocks of text. The first block of text is a string that we want to write, the second block of text is where we have to pull words from to be able to make the first block. The function should return true if there are enough words in the second block to write the first block, or false if not. Each word in the second block can only be used once.

## Time Complexity and Big O Notation

### Big O

How scalable a algorithm or function is based on size and speed.

**Constant Runtime**
_Big O Notation: "0 (1)"_

``` js
function log(array) {
    console.log(array[0]);
    console.log(array[1]);
}
```

This example would be written as "0 (1)" in Big O notation. It is a constant. No matter how large the input gets, the process stays the same. 

**Linear Runtime**
_Big O Notations: "0 (n)"_

``` js
function logAll(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    };
}
```

This example would be written as "0 (n)". The runtime is proportional to the input, making this a linear runtime. *0* stands for the function and *n* is the size of the input.


**Exponential Runtime**
_Big O Notations: "0 (n^2)"_

``` js
function logAll(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i] + array [j]);
        };
    };
}
```

This gets exponentially larger with each element. It doubles the work load because it adds a number that must be added every time.

**Logarithmic Runtime**
_Big O Notations: "0 (log n)"_

``` js
function binarySearch(array, key) {
    let low = 0;
    let high = array.length - 1;
    let mid;
    let element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid -1;
        } else {
            return mid
        }
    }
    return -1;
}
```

This function is able to run to the middle of an array and throw away half of the array that it knows it's key isn't in,repeatedly, until it finds it's element.