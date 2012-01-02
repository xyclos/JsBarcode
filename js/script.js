/* Author: 
	Johan Lindell
*/


$(document).ready(function(){
	
	$("#headerBarcode").JsBarcode("JsBarcode",{height:50});
	
	$("#barcode1").JsBarcode("Javascript is awesome!");
	
	$("#barcode2").JsBarcode("9780764576591",{height:25,width:1,format:"EAN"});

	
	setInterval(function(){
		var date = new Date();
		$("#barcode3").JsBarcode(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
	},1000);
	
});




















