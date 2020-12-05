var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');
// var numfield1 ="heydev";
// console.log(numfield1);
var resultfield1 = document.getElementById('resultfield');
// numfield1.value ="dev";
// resultfield1.innerText = "dev";
var form = document.getElementById('x_mod_y');
form.addEventListener('submit',function(){
	// alert("cickedclackedsomething");
	if(!numfield1 || !numfield2){
		alert("you need to add values")
	}else{
		var x=parseFloat(numfield1.value);
		var y= parseFloat(numfield2.value);
		// alert(x+y);
		var result = x/y;
		var percent =result*100;
		resultfield1.innerText = "Answer" + percent + "%";
		event.preventDefault();

	}
});