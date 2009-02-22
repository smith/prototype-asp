/**
 * == lang ==
 * Language extensions.
**/

var Abstract = { };

/** section: lang
 * Try
**/

/**
 *  Try.these(function...) -> ?
 *  - function (Function): A function that may throw an exception.
 *  Accepts an arbitrary number of functions and returns the result of the
 *  first one that doesn't throw an error.
 **/
var Try = {
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

//= require "lang/class"
//= require "lang/object"
//= require "lang/function"
//= require "lang/date"
//= require "lang/regexp"
//= require "lang/string"
//= require "lang/template"
//= require "lang/enumerable"
//= require "lang/array"
//= require "lang/hash"
//= require "lang/number"
//= require "lang/range"
