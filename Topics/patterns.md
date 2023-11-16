# 10 Common methods of pattern use to solve algorithms

_**Brute Force**_: The simplest approach, tries all possible solutions.

```sh

function bruteForceSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
```

_**Divide and Conquer**_: Breaks down a problem into smaller sub-problems until they become simple enough to solve directly.

```sh

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```

_**Dynamic Programming**_: Solves complex problems by breaking them down into simpler overlapping sub-problems.

```sh
function fibonacci(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

```

_**Greedy Algorithms**_: Makes locally optimal choices at each stage to find a global optimum.

```sh

function coinChange(coins, amount) {
    coins.sort((a, b) => b - a); // Sort coins in descending order
    let count = 0;

    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            count++;
        }
    }
    return count;
}
```

_**Backtracking**_: Systematically searches for a solution by trying all possible options and backtracks when it hits a dead end.

```sh
function solveNQueens(n) {
    const result = [];

    function backtrack(board, row) {
        if (row === n) {
            result.push([...board]);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row][col] = 'Q';
                backtrack(board, row + 1);
                board[row][col] = '.';
            }
        }
    }

    function isSafe(board, row, col) {
        // Check if placing a queen at board[row][col] is safe
        // (Check row, column, and diagonals)
    }

    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    backtrack(board, 0);
    return result;
}

```

_**Depth-First Search (DFS) and Breadth-First Search (BFS)**_: Traversal algorithms used in graphs and trees.

```sh
Depth-First Search (DFS) - Graph Traversal:
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    dfsRecursive(start) {
        const visited = {};
        const result = [];

        const dfs = (vertex) => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        };

        dfs(start);
        return result;
    }

    // Iterative DFS can be implemented using a stack
    dfsIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }
}

// Usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
console.log(graph.dfsRecursive('A'));
console.log(graph.dfsIterative('A'));

```

```sh
Breadth-First Search (BFS) - Graph Traversal:

class Graph {
    // (Same Graph class as above)

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

// Usage:
const graph = new Graph();
// (Add vertices and edges similar to previous example)
console.log(graph.bfs('A'));

```

_**Binary Search**_: Searches a sorted array by repeatedly dividing the search interval in half.

```sh
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

```

_**Sliding Window**_: Solves problems where you maintain a subset (window) of elements within an array or string.

```sh

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}
```

_**Two Pointers**_: Uses two pointers to solve problems, often in arrays, linked lists, or strings.

```sh
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return undefined;
}


```

_**Graph Algorithms**_: Various algorithms like Dijkstra's, Floyd-Warshall, etc., used in graph-related problems.

```sh



function dijkstra(graph, start, end) {
    const distances = {};
    const visited = {};
    const queue = new PriorityQueue();

    for (let vertex in graph) {
        if (vertex === start) {
            distances[vertex] = 0;
            queue.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
            queue.enqueue(vertex, Infinity);
        }
    }

    while (!queue.isEmpty()) {
        const current = queue.dequeue().val;
        if (current === end) {
            // Found the shortest path
            // (Return distances[end] or reconstruct the path)
            break;
        }

        if (!visited[current]) {
            visited[current] = true;
            for (let neighbor in graph[current]) {
                let distance = distances[current] + graph[current][neighbor];
                if (distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                    queue.enqueue(neighbor, distance);
                }
            }
        }
    }

    // Return distances[end] or the shortest path
}
```
