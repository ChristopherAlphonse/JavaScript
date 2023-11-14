# Big O notation

## Big O Definition

We say that an algorithm is **O(fn(n))** if, for sufficiently large values of **n**, the number of simple operations the computer has to perform is bounded above by a constant times **fn(n)**.

- **fn(n)** could be linear if it's a constant multiple of **n** (e.g., **fn(n) = n**).
- **fn(n)** could be quadratic if it's a constant multiple of **n** squared (e.g., **fn(n) = n^2**).
- **fn(n)** could be constant if the algorithm's runtime is not dependent on the size of **n** (e.g., **fn(n) = 1**).
- **fn(n)** could be something entirely different.

## Big O Shorthands

1. Arithmetic operations are constant.
2. Variable assignment is constant.
3. Accessing elements in an [array] by **_index_** or {object} **_by key_** is constant.
4. in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

## Time Complexity

_**Summary: How many basic steps or operations an algorithm takes to complete its task**_

Time complexity is a measure of the amount of time an algorithm takes to complete, expressed as a function of the size of the input. It's often described using big O notation, where **_O(fn(n))_** represents the upper bound of the growth rate of the running time.

- **O(1):** Constant time complexity. The algorithm's runtime is constant, regardless of the input size.
- **O(log n):** Logarithmic time complexity. Common in algorithms that divide the problem into smaller sub-problems.
- **O(n):** Linear time complexity. The runtime grows linearly with the size of the input.
- **O(n^2):** Quadratic time complexity. Common in algorithms with nested loops.

## Space Complexity

_**Summary: The amount of resources, specifically memory, that an algorithm uses to solve a problem**_

Space complexity is a measure of the amount of memory an algorithm uses, expressed as a function of the size of the input. Similar to time complexity, it's often described using big O notation to represent the upper bound of memory usage.

- **O(1):** Constant space complexity. The amount of memory used is constant, regardless of the input size.
- **O(n):** Linear space complexity. The amount of memory used grows linearly with the size of the input.
- **O(n^2):** Quadratic space complexity. The amount of memory used grows quadratically with the size of the input.

It's crucial to consider both time complexity and space complexity when analyzing algorithms to understand their overall efficiency.

## Space Complexity Rules

- **Primitive Types:**

  - Most primitive types (Boolean, Number, undefined, null) are _**Constant space O(1)**_. They have a fixed size in memory.

- **Strings:**

  - Strings require _**Linear space O(n)**_, where n is the string length. Each character contributes to the overall space complexity.

- **Reference Types (Arrays and Objects):**

  - Reference types generally have _**Linear space O(n)**_, where n is the number of elements in the array or the number of keys in the object.

- **Declared Space (e.g., `let x = 0`):**
  - When space is explicitly declared, as in `let x = 0;`, it is _**Constant space O(1)**_ because the amount of space required is fixed.

Space complexity analysis is crucial for understanding memory usage as input sizes increase.

## Algorithmic Complexity

| Notation   | Description       | Example                                          |
| ---------- | ----------------- | ------------------------------------------------ |
| O(1)       | Constant time     | Accessing an element in an array by index        |
| O(log n)   | Logarithmic time  | Binary search in a sorted array                  |
| O(n)       | Linear time       | Finding the maximum element in an unsorted array |
| O(n log n) | Linearithmic time | Merge sort, heap sort                            |
| O(n^2)     | Quadratic time    | Bubble sort, insertion sort                      |
| O(2^n)     | Exponential time  | Recursive solutions with branching               |
| O(n!)      | Factorial time    | Permutations of a set                            |
