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
			let n=html[i].list.length
			let o='<li class="mui-table-view-cell mui-media"><a href="./examples/card.html" class="mui-navigate-right"><img class="mui-media-object mui-pull-left" src="'+s+'" style="border-radius: 5px;"><div class="mui-media-body">'+t+'<p class="mui-ellipsis">html</p></div><span class="mui-badge mui-badge-warning">'+n+'</span></a></li>'
			$('#tabbar1').append(o)
		}
    },
})	
