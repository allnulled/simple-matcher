const assert = require("assert");
const SimpleMatcher = require("../src/simple-matcher.js");


// Without offset:

// String example:
assert(9 === SimpleMatcher.for("Some text").first("Some text").index);
// RegExp example:
assert(9 === SimpleMatcher.for("Some text").first(/[Ss]o[Mm]e [Tt][Ee]x[Tt]/g).index);
assert(9 === SimpleMatcher.for("Some text").first(/sOME TEXT/gi).index);
assert(27 === SimpleMatcher.for("Some textsome textsome texT puede haber más cosas y más some textsome textsome text").first(/(sOME TEXT)+/gi).index);
// Functional example:
assert(4 === SimpleMatcher.for("some text").first((text, offset) => text.substr(offset).indexOf("some") === 0 ? {index:offset + "some".length} : {index:-1}).index);
// Error example for string:
assert(-1 === SimpleMatcher.for("Some text").first("some text").index);
// Error example for regexp:
assert(-1 === SimpleMatcher.for("Some text").first(/sOME TEXT/g).index);
// Error example for functions:
assert(-1 === SimpleMatcher.for("Some text").first((text, offset) => text.substr(offset).indexOf("some") === 0 ? {index:offset + "some".length} : {index:-1}).index);
console.log("[Test] SimpleMatcher is working correctly. Thank you.");


// With offset:

// String example:
assert(13 === SimpleMatcher.for("****Some text").first("Some text", 4).index);
// RegExp example:
assert(11 === SimpleMatcher.for("00Some text").first(/[Ss]o[Mm]e [Tt][Ee]x[Tt]/g, 2).index);
assert(10 === SimpleMatcher.for("1Some text").first(/sOME TEXT/gi, 1).index);
assert(29 === SimpleMatcher.for("22Some textsome textsome texT puede haber más cosas y más some textsome textsome text").first(/(sOME TEXT)+/gi, 2).index);
// Functional example:
assert(7 === SimpleMatcher.for("333some text").first((text, offset) => text.substr(offset).indexOf("some") === 0 ? {index:offset + "some".length} : {index:-1}, 3).index);
// Error example for string:
assert(-1 === SimpleMatcher.for("4444Some text").first("some text", 4).index);
// Error example for regexp:
assert(-1 === SimpleMatcher.for("55555Some text").first(/sOME TEXT/g, 5).index);
// Error example for functions:
assert(-1 === SimpleMatcher.for("666666Some text").first((text, offset) => text.substr(offset).indexOf("some") === 0 ? {index:offset + "some".length} : {index:-1}, 6).index);
console.log("[Test] SimpleMatcher is working correctly. Thank you.");