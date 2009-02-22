<%= include 'HEADER' %>

var Prototype = {
  Version: '<%= PROTOTYPE_VERSION %>',
  
  ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,  
  
  emptyFunction: function() { },
  K: function(x) { return x }
};

<%= include 'base.js', 'string.js' %>

<%= include 'enumerable.js', 'array.js', 'number.js', 'hash.js', 'range.js' %>

