/*
64-Comparisons-with-the-Logical-Or-Operator.js

The logical or operator (||) returns true if either of the
operands is true. Otherwise, it returns false.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return "Yes" only if num is between 5 and 10 (5 and 10 included).
The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Instructions
Combine the two if statements into one statement which returns "Outside"
if val is not between 10 and 20, inclusive. Otherwise, return "Inside".

*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20  || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
