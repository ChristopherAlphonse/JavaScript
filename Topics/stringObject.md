# String Object Methods and Properties

| Method/Property          | Description                                                                     |
| ------------------------ | ------------------------------------------------------------------------------- |
| `length`                 | Returns the length of the string.                                               |
| `toUpperCase()`          | Converts the string to uppercase.                                               |
| `toLowerCase()`          | Converts the string to lowercase.                                               |
| `charAt(index)`          | Returns the character at the specified index.                                   |
| `indexOf(substring)`     | Returns the index of the first occurrence of the specified substring.           |
| `lastIndexOf(substring)` | Returns the index of the last occurrence of the specified substring.            |
| `substring(start, end)`  | Returns a new string containing characters from `start` to `end`.               |
| `split(separator)`       | Splits the string into an array of substrings based on the specified separator. |
| `trim()`                 | Removes whitespace from both ends of the string.                                |
| `replace(old, new)`      | Replaces occurrences of a specified substring with another substring.           |

## Examples

| Example                                   | Result               |
| ----------------------------------------- | -------------------- |
| `"hello world".length`                    | `11`                 |
| `"hello world".toUpperCase()`             | `"HELLO WORLD"`      |
| `"Hello World".toLowerCase()`             | `"hello world"`      |
| `"hello world".charAt(7)`                 | `"o"`                |
| `"hello world".indexOf("world")`          | `6`                  |
| `"hello world".lastIndexOf("l")`          | `9`                  |
| `"hello world".substring(0, 5)`           | `"hello"`            |
| `"hello world".split(" ")`                | `["hello", "world"]` |
| `"   hello world   ".trim()`              | `"hello world"`      |
| `"hello world".replace("world", "there")` | `"hello there"`      |
