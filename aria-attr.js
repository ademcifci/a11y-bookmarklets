(function(){

	var v = "1.9.0";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
		 $("strong").remove(".closeSpan");
    var el, attr, i, j, arr = [],
        reg = new RegExp('^aria-', 'i'),                //case insensitive mce_ pattern
        els = document.body.getElementsByTagName('*'); //get all tags in body

    for (i = 0; i < els.length; i++) {                 //loop through all tags
        el = els[i]                                    //our current element
        attr = el.attributes;                          //its attributes
        dance: for (j = 0; j < attr.length; j++) {     //loop through all attributes
            if (reg.test(attr[j].name)) {              //if an attribute starts with mce_
                //arr.push(el);                          //push to collection
				$(el).append("<strong class=\"aria-attr\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;\">"+attr[j].name+"<br /></strong>");
               // break dance;                           //break this loop
            }
			else
			{
				
			}
        }
    }

		})();
	}
	
})();
