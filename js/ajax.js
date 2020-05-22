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
		var html=obj.html
		for(var i=0;i<html.length;i++){
			let t=html[i].name
			let s=html[i].img
			let o='<li class="mui-table-view-cell mui-media"><a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" src="'+s+'"><div class="mui-media-body">'+t+'<p class="mui-ellipsis">'+t+'</p></div></a></li>'
			$('#tabbar1').append(o)
		}
    },
})	
