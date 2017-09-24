(function() {

  var a = '';
  var counter = 1;
    a += "<html><head><title>Heading List</title></head><body>", a += "<strong>Page URL: </strong>" + window.location.href + "<br /><br /><h1>Heading List</h1>\n";
    var all_el = document.getElementsByTagName('*');
    for (var i = 0, n = all_el.length; i < n; i++) {
        if (/^h\d{1}$/gi.test(all_el[i].nodeName)) {
            //arr.push(all_el[i].nodeName);
		
		
			if(check_parents(all_el[i]))
				{
					a += all_el[i].nodeName+" - "+all_el[i].innerHTML+ " (display:none)<br />\n";
				}
			else{
				a += all_el[i].nodeName+" - "+all_el[i].innerHTML+ "<br />\n";
			}
			counter ++;
        }
    }
	counter --;
	a += "<br />"+counter+" headings found<br />\n";
	a += "</body></html>", w = window.open("", "Headings", "scrollbars,resizable,width=600,height=600"), w.document.write(a);
   // return alert(arr);
})();

function check_parents(element) {    // if returns false, display='none' not found in entire parent grandparent, etc hierarchy
var vis = false;   
var par = element; 
//alert("par is " + par + " and element is " + element);
	while (par)
	{
		if (par != '[object]')   // to break loop at no object to call/check
		{
			var dis = par.currentStyle.getPropertyValue('display');
			//alert("dis returned is " + dis);
			if (dis == 'none')
				{
				par = false;  // to break loop
				vis = true;
				}
			else
				{
				par=par.parentNode;  // check up the next parent, until no more to check, but stop at Object Document, otherwise will fail above call
				//alert("par is " + Object.prototype.toString(par));
				if ((par == '[object Document]') || (par == '[object HTMLDocument]'))   // to break loop at last object to call/check
					{
					par=false;
					vis = false;
					}
				}
		}
		else
//			{
//			par=false;
//			vis = false;
//			}
		{
			//if ((par) && (par.type == 1))  // type 1 = attribute
			if (par.style)  // style undefined is root
				{
					//d.document.write("<p>type is " + par.nodeType +  " </p>\n\n");
					if (par.style.getAttribute('display') == 'none')
						{ 
						par = false;  // to break loop
						vis = true;
						}
					par = par.parentNode;  // get parent
				}
			else
				{					
				par=false;
				vis = false;
				}
		}
	}
return vis;
}
