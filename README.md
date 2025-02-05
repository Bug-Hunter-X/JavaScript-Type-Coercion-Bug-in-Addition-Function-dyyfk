# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion during addition. The `foo` function intends to add two numbers but exhibits unexpected behavior when provided with null or string values.

## Bug Description

The `foo` function in `bug.js` has a flaw in its type handling. When either `a` or `b` is null, it returns 0, which is correct. However, when one of the inputs is a string, it performs string concatenation instead of numeric addition.

## Solution

The `bugSolution.js` file provides a corrected version of the function. It uses `typeof` to check the type of the input and explicitly converts them to numbers using `Number()` before performing the addition.  This ensures that only numeric addition occurs, preventing unexpected string concatenation.