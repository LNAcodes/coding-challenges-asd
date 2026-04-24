/*
Generic collection utilities
Write three generic utility functions that work with any object type. Test each one using an array of Book objects.

groupBy<T, K extends keyof T>(items: T[], key: K): Record<string, T[]> takes an array and a property name, then returns an object where each key is a distinct value of that property and each value is an array of matching items. Example: grouping books by author.
*/

//

function groupBy<T, K extends keyof T>(
  items: T[],
  key: K,
): Record<string, T[]> {}

/*
pluck<T, K extends keyof T>(items: T[], key: K): T[K][] takes an array and a property name, then returns an array containing just that property’s value from each item. Example: extracting all book titles.
*/

// go through each item in the array (map)
// return a "key" from each item
// items.map(item => item[key])

function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

/*
merge<T>(base: T, updates: Partial<T>): T takes a base object and a partial update, then returns a new object with the updates applied. Example: applying a BookUpdatePayload to a Book.
*/

// merge:
// take base
// take updates
// merge with spread operator
// return new object

function merge<T>(base: T, update: Partial<T>): T {
  return { ...base, ...update };
}

/*
Each function must be generic, fully annotated, and work with any object type, not just Book.
*/
