//business logic
function countingBy(countBy, countTo) {
	let total = 0;
	for(let index = 0; index <= countTo; index += 1){
		total += index;
	}
	return total;
}




//UI logic
$(document).ready(function() {
$("form#formOne").submit(function(event){
	event.preventDefault;
  $("#results").show();
	const countBy = parseInt($("#countingBy").val());
	const countTo = parseInt($("#countingTo").val());
	const results = countingBy(countBy, countTo);
	$("#results").append(results + "<br>");
	});
});