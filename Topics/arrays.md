# Arrays

```javascript
let names = ['albert', 'beatrice', 'chris'];
let values = [true, 2, [], {}, 'string'];
```

## When to Use Arrays

- When you need ordered data.
- When you need fast access, insertion, and removal.
- `.push()` and `.pop()` are faster than `.shift()` and `.unshift()`.

## Array Creation

**Space Complexity:** O(n)

Creating an array with n elements typically has a space complexity of O(n), where n is the number of elements.

### Insertion: Big O (Depends on Position)

- If we are inserting data at the end of the array, it is O(1).
- If we are inserting data at the beginning of the array, it is O(n).

**Time Complexity:** O(1)

- Using `.push()` to insert an element at the end of an array has constant time complexity on average. In some cases, the operation might be O(n) if the underlying array needs to be resized.

**Space Complexity:** O(1)

- Inserting an element at the end using `.push()` usually does not require additional space, except when the underlying array needs to be resized.

### Removal: Big O (Depends on Position)

**Time Complexity:** O(n)

Removing the first element from an array using methods like `.shift()` has linear time complexity due to the need to shift remaining elements.

**Space Complexity:** O(1)

Removing an element at the end using `.pop()` typically does not increase the space requirement.

### Searching: O(n)

**Time Complexity:** O(n)

Searching for an element in an array may require iterating through the array, resulting in linear time complexity in the worst case.

### Access: O(1)

- Accessing an element at a specific index in an array has a constant time complexity of O(1) because it directly retrieves the value at the given index.

**Space Complexity:** O(1)

- Removing an element at the end using `.pop()` typically does not increase the space requirement.

## Big O of Array Operations

- push O(1)
- pop O(1)
- shift O(n)
- unshift O(n)
- concat O(n)
- slice O(n)
- spliceO(n)
- sort O(n \* log n)
- forEach, map, filter, reduce. etc.. O(n)
