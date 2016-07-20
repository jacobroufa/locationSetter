# Location Setter

This is a simple module that exports a function that takes two arguments, `number` and `numRows`. Use it as follows:

```
let locationSetter = require('location-setter');
let location = locationSetter(25,5);
console.log(location);
// => ['a1', 'a2', ..., 'e4', 'e5'];
```

`location` should be an array with 25 items and should have 5 "rows" within. A row is described by the initial alphabetical character of each item in the array, so you have "row a", "row b" and so forth, up through `numRows`.
