	
	 function check(){
    	if(check1()&&check2()){
			return true;
		}else{
			return false;
		}
    }
	function check1() {
    	var doc1=document.form.text1.value;
    	if(doc1!="徐志达"){
    	alert("请输入你的真实姓名");
		return false;	
    	}else{
    		return true;
    	}
    }
	function check2() {
    	var doc2=document.form.text2.value;
    	if(doc2!="07150841"){
    	alert("请输入你的真实学号");
		return false;	
    	}else{
    		return true;
    	}
    }