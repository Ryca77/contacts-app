$(document).ready(function(){

$('.add').on('click', function() {
	var i = 0;
	var contactObj = {
		'First Name':
		$('[class=first-name]').val(),
		'Last Name':
		$('[class=last-name]').val(),
		'Phone':
		$('[class=phone]').val(),
		'Address 1':
		$('[class=add1]').val(),
		'Address 2':
		$('[class=add2]').val(),
		'County':
		$('[class=county]').val(),
	}
	console.log(contactObj);
	console.log('record');
	generateRecord();

	$('.first-name').val('');
	$('.last-name').val('');
	$('.phone').val('');
	$('.add1').val('');
	$('.add2').val('');
	$('.county').val('');

function generateRecord() {
var fName = $('.first-name').val();
var lName = $('.last-name').val();
	$('.contact-record').html("Name:" + " " + fName + " " + lName);
	console.log("Name:" + " " + fName + " " + lName);
}

});



});

/*var fName = contactObj[i].firstName;
var lName = contactObj[i].lastName;
var pNumber = contactObj[i].phone;
var aOne = contactObj[i].address1;
var aTwo = contactObj[i].address2;
var county = contactObj[i].county;*/


/*function generateRecord() {
	var dataEntered = document.getElementById("first-name").value;
	document.getElementById("fname").innerHTML = dataEntered;
	var dataEntered = document.getElementById("last-name").value;
	document.getElementById("lname").innerHTML = dataEntered;
	var dataEntered = document.getElementById("phone").value;
	document.getElementById("pnumber").innerHTML = dataEntered;
	var dataEntered = document.getElementById("add1").value;
	document.getElementById("aone").innerHTML = dataEntered;
	var dataEntered = document.getElementById("add2").value;
	document.getElementById("atwo").innerHTML = dataEntered;
	var dataEntered = document.getElementById("county").value;
	document.getElementById("count").innerHTML = dataEntered;*/