//custom js file

$(document).ready(function() {
	$("button.btn").click(function(event) {
	
	event.preventDefault();
	//$("form#groceries").hide();
	

	//back-end
	var vegetables = $("select#vegetables").val();
	var fruits = $("select#fruits").val();
	var tubers = $("select#tubers").val();
	var arrays = [];
	arrays.push(vegetables, fruits, tubers);
	arrays.map(function(array) {
		arrays.sort();
	});
	for(var i = 0; i < arrays.length; i++) {
		arrays[i] = arrays[i].toUpperCase();
	};
	
	console.log(arrays);
	//console.log(arrays);
		for (var i = 0; i < arrays.length; i++) {
	  $("ul#list").wrap("<li>" + arrays[i] + "</li>");
		 };

	//front-end
	$("form#groceries").hide();
	$("ul#list").slideToggle();	 
	});
});