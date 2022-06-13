//business logic
function countingBy(countBy, countTo) {
	let countingArray = [ ]
	let total = 0;
	for(let index = 0; total + countBy <= countTo ; index += 1){
		countingArray.push(total += countBy);
	}
	return countingArray;
}




//UI logic
$(document).ready(function() {
$("form#formOne").submit(function(event){
	event.preventDefault();
  $("#results").show();
	const countBy = parseInt($("#countingBy").val());
	const countTo = parseInt($("#countingTo").val());
	const results = countingBy(countBy, countTo);
	$("#results").append(results + "<br>");

	});
});