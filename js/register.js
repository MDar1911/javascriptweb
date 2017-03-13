	 function check(){
	 	
    	if(check1()&&check2()&&check3()&&check4()&&check5()){
    		if($("input[type='checkbox']").is(':checked')){
    			return true;
    		}else{

    			alert("请认真阅读并同意遵守会员协议！");
    			return false;
    		}			
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
    function check3() {
        var myreg=/^(\d{4})-(\d{1,2})-(\d{1,2})$/;
        var doc3=document.form.text3.value;
        var arr= myreg.exec(doc3);
        if(arr==null){
             alert("格式必须为“1980-05-12”或“1980-5-12”"); 
             return false;	
        }else if(arr[1]>2014||arr[1]<1980){
                alert("年份必须在1980-2014之间！");
                return false;	 
        }else{
            return true;
        }
  
    }
    function check4() {
        var myreg=/^[a-zA-Z0-9_]+@([a-zA-Z0-9]+\.)+(com|cn)$/;
        var doc4=document.form.text4.value;
        if(!myreg.test(doc4)){
        alert("请输入正确的邮箱地址！"); 
        return false;	
        }else{
            return true;  
        }
    }
    function check5() {
    	var myreg=/^1\d{10}$/;
    	var doc5=document.form.text5.value;
    	if(!myreg.test(doc5)){
    	alert("必须输入11位数字！");
		return false;	
    	}else{
    		return true;	
    	}
  }