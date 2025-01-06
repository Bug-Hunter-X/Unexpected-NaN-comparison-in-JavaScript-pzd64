# Unexpected NaN Comparison in JavaScript

This repository demonstrates a common, yet subtle, error in JavaScript related to the comparison of NaN (Not a Number) values.

## The Problem

JavaScript's loose comparison (`==`) and strict comparison (`===`) operators both return `false` when comparing `NaN` to itself.  This is counterintuitive, as one might expect `NaN === NaN` to return `true`. However, this behavior is part of the IEEE 754 standard for floating-point arithmetic.

The provided `bug.js` file contains a function that incorrectly handles `NaN` comparisons.  The `bugSolution.js` file offers a corrected version.

## Solution

To reliably check for `NaN`, use the `isNaN()` function or the `Number.isNaN()` method.  These functions explicitly check for the `NaN` value.