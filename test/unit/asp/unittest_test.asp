<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <title>Unit test file | Unittest | default template | 2009-02-22 11:18</title>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <script src="../../../dist/prototype.js" type="text/javascript" charset="utf-8" language="javascript" runat="server"></script>
<script src="assets/unittest.js" type="text/javascript" charset="utf-8" language="javascript" runat="server"></script>
<link rel="stylesheet" href="assets/unittest.css" type="text/css" />
  
  
  <script src="tests/unittest_test.js" type="text/javascript" charset="utf-8" language="javascript" runat="server"></script>
</head>
<body>

<div id="testlog"><%= testResults.toHTML() %></div>

<div id="testlog_2"><%= testResults2.toHTML() %></div>

<!-- Test elements follow -->
<div id="test_1" class="a bbbbbbbbbbbb cccccccccc dddd"> </div>

<div id="test_2"> <span> </span> 



<div><div></div> </div><span> </span>
</div>

<ul id="tlist"><li id="tlist_1">x1</li><li id="tlist_2">x2</li></ul>
<ul id="tlist2"><li class="a" id="tlist2_1">x1</li><li id="tlist2_2">x2</li></ul>

<div id="testmoveby" style="background-color:#333;width:100px;">XXXX</div>

<div id="testcss1">testcss1<span id="testcss1_span" style="display:none;">blah</span></div><div id="testcss2">testcss1</div>

</body>
</html>
