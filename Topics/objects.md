# When to use objects

- When you don't need ordered data.
- When you need fast access, insertion, and removal.

## Big O of Objects

##### Insertion: O(1)

```js
const fastOperationsObject = {
	key1: 'value1',
	key2: 'value2',
	key3: 'value3',
};
```

##### Removal: O(1)

```js
delete fastOperationsObject['key2'];
```

##### Search: O(n)

```js
const searchKey = 'key3';
const isKeyPresent = searchKey in fastOperationsObject;
console.log(isKeyPresent); // Output: true
```

##### Access: O(1)

```js
const accessValue = fastOperationsObject['key3'];
console.log(accessValue); // Output: 'value3'
```

## Big O Of Object Methods

##### Object.keys: O(n)

```js
const keysArray = Object.keys(fastOperationsObject);
console.log(keysArray); // Output: ['key1', 'key4', 'key3']
```

##### Object.values: O(n)

```js
const valuesArray = Object.values(fastOperationsObject);
console.log(valuesArray); // Output: ['value1', 'value4', 'value3']
```

##### Object.entries: O(n)

```js
const entriesArray = Object.entries(fastOperationsObject);
console.log(entriesArray); // Output: [['key1', 'value1'], ['key4', 'value4'], ['key3', 'value3']]
```

##### hasOwnProperty: O(1)

```js
const hasKey = fastOperationsObject.hasOwnProperty('key1');
console.log(hasKey); // Output: true
```
