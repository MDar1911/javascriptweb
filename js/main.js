	var x=10,y=10;
	$(function(event){
		$(".big").mouseover(function(event){
			var path=$(this).attr("href");
			var title=$(this).attr("title");
			var $div=$("<div id=\"tip\" ><img src="+path+" alt=\"\"><div>"+title+"</div></div>");
			$("body").append($div);
			$("#tip").css("left",event.pageX+x+"px");
			$("#tip").css("top",event.pageY+y+"px");
			$("#tip").show();
		}).mouseout(function(event){
			$("#tip").remove();
		}).mousemove(function(event){
			$("#tip").css("left",event.pageX+x+"px");
			$("#tip").css("top",event.pageY+y+"px");

		}).click(function(event){
			return false;
		});;
	});
	
window.onload=init;


function init(){


	
	var arr=$("#div3 img");
	arr[0].onmouseover=function(){
		move(0);
	};
	arr[1].onmouseover=function(){
		move(-500);
	};
	arr[2].onmouseover=function(){
		move(-1000);
	};
	arr[3].onmouseover=function(){
		move(-1500);
	};


	var arr1=$("#div6 img");
	arr1[0].onmouseover=function(){
		move1(0);
	};
	arr1[1].onmouseover=function(){
		move1(-500);
	};
	arr1[2].onmouseover=function(){
		move1(-1000);
	};
	arr1[3].onmouseover=function(){
		move1(-1500);
	};



}
var step=10;
var direction=-1;
var time=null;
function move(endx){
	window.clearTimeout(time);
	var div2=document.getElementById("div2");
	var x=parseInt(div2.style.left);	
	if(x>endx){
		direction=-1;
		x=x-Math.ceil(Math.abs(x-endx)/5);
	}
	if(x<endx){
		direction=1;
		x=x+Math.ceil(Math.abs(x-endx)/5);
	}
	if(direction==-1&&x<endx||direction==1&&x>endx){
		return;
	}
	div2.style.left=x+"px";
	time=window.setTimeout("move("+endx+")",50);
}
function move1(endx){
	window.clearTimeout(time);
	var div5=document.getElementById("div5");
	var x=parseInt(div5.style.left);	
	if(x>endx){
		direction=-1;
		x=x-Math.ceil(Math.abs(x-endx)/5);
	}
	if(x<endx){
		direction=1;
		x=x+Math.ceil(Math.abs(x-endx)/5);
	}
	if(direction==-1&&x<endx||direction==1&&x>endx){
		return;
	}
	div5.style.left=x+"px";
	time=window.setTimeout("move1("+endx+")",50);
}

