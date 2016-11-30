var info=false ;

$("#settings").on("click",function(){
	if(info==false)	{
		$("#contact").height(230).css({
			"padding":"20px",
			"padding-top":"50px",
			"font-size":"1em",
			"opacity":"1",
			"position":"fixed"
		});
		info=true;
	}
	else {
		$("#contact").height(0).css({
			"padding":"0",
			"font-size":"0",
			"opacity":"0",
			"position":"auto"
		});
		info=false;
	}
});
