(function() {

    var a = '';
    a += "<html><head><title>Image List</title></head><body>", a += "<strong>Page URL: </strong>" + window.location.href + "\n", a += "<h1>Image List</h1>\n", a += "<ol>\n";
    for (var ln = 0; ln < document.images.length; ln++) {
        var lk = document.images[ln];
        a += "<li><img src='" + lk.src + "' alt='" + lk.alt + "' /><br />ALT = " + lk.alt + "<br/> SRC = "+lk.src+"</li>\n"
    }
    a += "</ol>\n", a += "</body></html>", w = window.open("", "Images", "scrollbars,resizable,width=400,height=600"), w.document.write(a);



})();
