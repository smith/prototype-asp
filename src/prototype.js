/*  Prototype JavaScript framework, version <%= PROTOTYPE_VERSION %>
 *  (c) 2005-2009 Sam Stephenson
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://www.prototypejs.org/
 *
 *--------------------------------------------------------------------------*/

/* This is a modified version of Prototype made to run in ASP and other 
 * DOM-less environments
 *--------------------------------------------------------------------------*/

var Prototype = {
  Version: '<%= PROTOTYPE_VERSION %>',

  ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,

  emptyFunction: function() { },
  K: function(x) { return x }
};

//= require "lang"
//= require "ajax"
