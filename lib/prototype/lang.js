/**
 * == Language ==
 * Additions to JavaScript's "standard library" and extensions to
 * built-in JavaScript objects.
**/

global.Abstract = { };

/** section: Language
 * Try
**/

/**
 *  Try.these(function...) -> ?
 *  - function (Function): A function that may throw an exception.
 *
 *  Accepts an arbitrary number of functions and returns the result of the
 *  first one that doesn't throw an error.
 **/
global.Try = {
  these: function() {
    var returnValue;

    for (var i = 0, length = arguments.length; i < length; i++) {
      var lambda = arguments[i];
      try {
        returnValue = lambda();
        break;
      } catch (e) { }
    }

    return returnValue;
  }
};

require("prototype/object");
require("prototype/enumerable");
require("prototype/array");
require("prototype/class");
require("prototype/function");
require("prototype/date");
require("prototype/regexp");
require("prototype/string");
require("prototype/template");
require("prototype/hash");
require("prototype/number");
require("prototype/range");
