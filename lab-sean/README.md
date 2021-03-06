##  Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.

## Objective
In the lib/ directory create a reader.js module that exports a single function. The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs, it should immediately reject the error using the callback and stop execution.

The file reader module should have the function signature (paths, callback) => undefined
On failure, the file reader module should invoke the callback with an error callback(error)
On success, the file reader module should invoke the callback with null as the first parameter and the result as the second parameter - callback(null, result)

## Explanation

The exported module `fileReader` has method `ReadeFirstCharacterAsync` to read the file passed in by the `filePath` parameter. It returns a `callback` that converts the file into a `string` so it can be displayed by later functions.
