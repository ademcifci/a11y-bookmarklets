(function(){

var a='';a+="<html><head><title>Link List</title></head><body>",a+="<strong>Page URL: </strong>"+window.location.href+"\n",a+="<h1>Link List</h1>\n",a+="<ol>\n";for(var ln=0;ln<document.links.length;ln++){var lk=document.links[ln];a+="<li><a href='"+lk+"'>"+lk.text+"</a></li>\n"}a+="</ol>\n",a+="</body></html>",w=window.open("","Links","scrollbars,resizable,width=400,height=600"),w.document.write(a);
	


})();