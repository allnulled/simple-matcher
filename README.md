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
var data = SimpleMatcher.for("This is some text").first("This is");
console.log(data.index === 7 ? "Property 'index' is working" : "Yep, something is wrong with the index property...");
console.log(data.type === "text" ? "Property 'type' is working" : "Yep, something is wrong with the type property...");
console.log(data.found === "This is" ? "Property 'found' is working" : "Yep, something is wrong with the found property...");

```

# 3. API

The object SimpleMatcher exposes all the API.

#### `SimpleMatcher.for(String:text) => SimpleMatcherInstance`

The `text` parameter (a `String`) is the text to be matched.

#### `SimpleMatcherObject.first(...) => SimpleMatcherMatchData | SimpleMatcherMatchError`

This method will give info about the first (string/regexp/functional) match in the text.

Optionally, we have a second parameter, an offset (integer) of the text from which to start matching.

#### `SimpleMatcherObject.first(String:text[, Integer:offset]) => SimpleMatcherMatchData | SimpleMatcherMatchError`

This version will compare string against string, crudely.

#### `SimpleMatcherObject.first(RegExp:pattern[, Integer:offset]) => SimpleMatcherMatchData | SimpleMatcherMatchError`

This version will compare regexp against strnig.

#### `SimpleMatcherObject.first(Function:matcher[, Integer:offset]) => SimpleMatcherMatchData | SimpleMatcherMatchError`

This version will use the provided function as matcher. That function receives 2 parameters:

	1. text(:String): base text.
	
	2. offset(:Integer): position of the text from which to start working on.

#### `SimpleMatcherMatchData (~Object~)`

Depending on the context, this type of objects will have:

`type`:  (String) "text" | "regexp" | "function"

`index`: (Integer) positions advanced by the index,

`found`: (String) text matched,

#### `SimpleMatcherMatchError (~Object~)`

Depending on the context, this type of objects will have:

`type`:  (String) "error"

`index`: (Integer) -1

`error`: (String) message of the error, typically.

# 4. Conclusion

It is not very complex right now, but I felt that I had to start some project to shorten this topic...