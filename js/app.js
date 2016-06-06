$(document).ready(function(){

$('.add').on('click', function() {
	var contactObj = {
		'First Name':
		$('[class=first-name]').val(),
		'Last Name':
		$('[class=last-name]').val(),
		'Phone Number':
		$('[class=phone]').val(),
		'Address 1':
		$('[class=add1]').val(),
		'Address 2':
		$('[class=add2]').val(),
		'County':
		$('[class=county]').val(),
	}
	$('.first-name').val('');
	$('.last-name').val('');
	$('.phone').val('');
	$('.add1').val('');
	$('.add2').val('');
	$('.county').val('');
	console.log(contactObj)
})




});