(function() {
  var output = (function() {
    var output = {};
    // CODE
    // CODE
    // CODE
    // CODE
    // CODE
    // CODE
    return output;
  })();
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
   module.exports = output;
  }
  else {
  	window.output = output;
  }
})();

var SimpleMatcher = {};

/**
 * @name for
 * @parameter text {string} Text to be used in the matchings.
 * @return {object} Matcher
 */
SimpleMatcher.for = function (text) {

	var _ = this;

	_.text = text;

	/**
	 * @name first
	 * @parameter pattern {any}
	 * @parameter offset {integer} Offset to start matching from the text. By default, 0.
	 * @return {integer} Number of positions advanced by the matching.
	 */
	_.first = function(pattern, offset=0) {

		// As a string:

		if(typeof pattern === "string") {
			for(var iPattern = 0, iText = offset; iPattern < pattern.length; iPattern++, iText++) {
				if(text[iText] !== pattern[iPattern]) {
					return {
						type: "error",
						error: "String not matched at " + iText + " offset",
						index: -1
					};
				}
			}
			return {
				type: "text",
				found: pattern,
				index: offset + pattern.length
			};
		}
		
		// As a function:

		else if(typeof pattern === "function") {
			var output = pattern(text, offset);
			return Object.assign({
				type: "function"
			},output);
		}

		// As an object:

		else if(typeof pattern === "object" && pattern instanceof RegExp) {
			if(pattern.source.indexOf("^") !== 0) {
			 pattern = new RegExp("^" + pattern.source, pattern.flags.replace(/g/g, ""))
			} else {
				pattern = new RegExp(pattern.source, pattern.flags.replace(/g/g, ""))
			}
			var output = pattern.exec(text.substr(offset));
			if(output) {
				return {
					type: "regexp",
					found: output[0],
					index: offset + output[0].length
				};
			} else {
				return {
					type: "error",
					error: "Regular Expression not matched at " + offset + " offset",
					index: -1
				};
			}
		}

		// Other thing:

		else {
			throw {
				name: "MatcherNodeNotRecognized",
				message: "Matcher node was not recognized."
			};
		}

	};

	return _;

};

(function() {
  var output = SimpleMatcher;
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = output;
  } else if (typeof define === "function" && typeof define.amd !== "undefined") {
    define([], () => output);
  } else {
    window[arguments[0]] = output;
  }
})("SimpleMatcher");


