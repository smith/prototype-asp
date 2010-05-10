<script runat="server" language="javascript">
  var tests = ["array", "class", "date", "enumerable", "function", "hash",
               "number", "object", "range", "regexp", "string", "unittest"];

  function link(t) {
    return '<a href="' + t + '_test.asp">' + t + '</a><br />';
  }

  for (var i = 0; i < tests.length; i += 1) { Response.write(link(tests[i])); }
</script>
