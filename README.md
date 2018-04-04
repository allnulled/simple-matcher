# simple-matcher

A very simple tool to work easily with matchings. 

Specifically, string, regular expressions and functional matchings.

# 1. Installation

Simply, run:

**`npm install -s simple-matcher`**

For Node.js, you should:

**`const SimpleMatcher = require("simple-matcher");`**

For browsers, you should import the source code (`src/simple-matcher.js`):

**`<script src="node_modules/simple-matcher/src/simple-matcher.js"></script>`**

...and you will already find the global object exposing all the API at:

**`window.SimpleMatcher`** ` // in browsers` 

**`global.SimpleMatcher`** ` // in node.js` 

# 2 Get started

The SimpleMatcher library is very simple.

Start, for example, with:

```js
const stringMatch = SimpleMatcher.for("This is some text").first("This is");
const regexpMatch = SimpleMatcher.for("This is some text").first(/THIS IS/gi);
const funcMatch = SimpleMatcher.for("This is some text").first((text,offset) => {index:text.substr(0,offset).substr(4) !== "This" ? -1 : 4});
```

If you want to differ between errors and correct data:
```js
if(stringMatch.error) {
  // Handle error
}
if(regexpMatch.error) {
  // Handle error
}
if(funcMatch.error) {
  // Handle error, but this one will depend on the manual implementation of the matcher we provide
}
```

Once we get the data back, we can obtain:

 · `index` integer with the last position of the match, or -1 if failed
 
 · `found` string with the match
 
 · `type` with basically one out of "text", "regexp" and "function"





# 3. API

The object SimpleMatcher exposes all the API.

#### `SimpleMatcher.for(String:text)`

Returns: `SimpleMatcher.classes.Object`

The `text` parameter (a `String`) is the text to be matched.

#### `{SimpleMatcher.classes.Object}.first(...)`

Returns: `SimpleMatcher.classes.Data | SimpleMatcher.classes.Error`

This method will give info about the first (string/regexp/functional) match in the text.

Optionally, we have a second parameter, an offset (integer) of the text from which to start matching.

#### `{SimpleMatcher.classes.Object}.first(String:text[, Integer:offset])`

Returns: `SimpleMatcher.classes.Data | SimpleMatcher.classes.Error`

This version will compare string against string, crudely.

#### `{SimpleMatcher.classes.Object}.first(RegExp:pattern[, Integer:offset])`

Returns: `SimpleMatcher.classes.Data | SimpleMatcher.classes.Error`

This version will compare regexp against strnig.

#### `{SimpleMatcher.classes.Object}.first(Function:matcher[, Integer:offset])`

Returns: `SimpleMatcher.classes.Data | SimpleMatcher.classes.Error`

This version will use the provided function as matcher. That function receives 2 parameters:

 1. `(String:) text`: base text.
 
 2. `(Integer:) offset`: position of the text from which to start working on.

#### `SimpleMatcher.classes.Data (~Object~)`

Depending on the context, this type of objects will have:

`type`:  (String) "text" | "regexp" | "function"

`index`: (Integer) final position of the index

`found`: (String) text matched

#### `SimpleMatcher.classes.Error (~Object~)`

Depending on the context, this type of objects will have:

`type`:  (String) "error"

`index`: (Integer) -1

`error`: (String) message of the error, typically.



# 4. Conclusion

It is not very complex right now, but I felt that I had to start some project to shorten this topic...