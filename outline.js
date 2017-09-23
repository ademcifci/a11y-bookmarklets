(function() {

  var a = '';
  var counter = 1;
    a += "<html><head><title>Heading List</title></head><body>", a += "<strong>Page URL: </strong>" + window.location.href + "<br /><br /><h1>Heading List</h1>\n";
    var all_el = document.getElementsByTagName('*');
    for (var i = 0, n = all_el.length; i < n; i++) {
        if (/^h\d{1}$/gi.test(all_el[i].nodeName)) {
            //arr.push(all_el[i].nodeName);
			a += all_el[i].nodeName+" - "+all_el[i].innerHTML+ "<br />\n";
			counter ++;
        }
    }
	counter --;
	a += "<br />"+counter+" headings found<br />\n";
	a += "</body></html>", w = window.open("", "Headings", "scrollbars,resizable,width=600,height=600"), w.document.write(a);
   // return alert(arr);
})();