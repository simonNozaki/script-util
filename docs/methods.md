# Methods
Methods documents.

## Index
- isNullOrUndefined
- isJson
- appendStdOut
- isDateFormat
- formatYMDWith
- hasItems
- hasNoNull

## isNullOrUndefined
Check the parameter if that is null or undefined.
### Signature
- parameter subject: any
- returns boolean
### Sample
```
const scriptUtil = require("script-util");

// return true
if(scriptUtil.isNullOrUndefined(null)) { // processing }
```

## isJson
Return true if the string is formatted with JSON.
### Signature
- parameter subject: string
- returns boolean
### Sample
```
const scriptUtil = require("script-util");
let data = '{"text" : "message"}';
// return true
if(scriptUtil.isJson(data)) { // processing }
```

## appendStdOut
Return the string for the standard output.
### Signature
- parameter object: string
- returns string for standard output
### Sample
```
console.log(appendStdOut("result"));
// [Trace log start] 
// result
// [Trace log end]
```

## isDateFormat
Return true if the format of the parameter is date.
### Signature
- parameter operand: string
-returns boolean
### Sample
```
if(scriptUtil.isDateFormat("2019-05-31")) { // processing }
```

## formatYMDWith
Reshape string of date for designated format.  
2nd paramter, `symbol` is delimiter of year, month and date.
The delimiter is valid only for `/` or `-`.
### Signature
- parameter operand: Date, symbol: string
- returns date string
### Sample
```
console.log((scriptUtil.formatYMDWith(new Date(), "-"))
// 2019-05-31
```

## hasItems
Return true if an array has more than one element.
### Signature
- paramter t: T[]
- returns boolean
### Sample
```
// return true
if(scriptUtil.hasItems([0, 1, 2])){ // processing }
```

## hasNoNull
Return true if an array has no null elements.
### Signature
- parameter t: T[]
- returns boolean
### Sample
```
// return false
if(scriptUtil.hasNoNull([1, null, null])){ // processing }
```