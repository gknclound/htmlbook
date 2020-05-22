$.ajax({ 
	    type: "get",
	    url:'https://gknclound.github.io/co/g.json',
	    cache: false,
	    dataType: "json",
	    jsonp: "callback",
	    complete:function(a){
	    	var strJSON =a.responseText
			var obj = new Function("return" + strJSON)();//转换后的JSON对象
			console.log(obj);
        },
})	
