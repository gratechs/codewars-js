"use strict";

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"

// My Solution

function numberToString(num) {
  return String(num);
}

// First Best Pracitices

function numberToString(num) {
  return num.toString();
}
