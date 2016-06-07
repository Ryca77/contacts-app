$(document).ready(function(){

//create contact object//
$('.add').on('click', function() {
	var contactObj = {
		'FirstName':
		$('[class=first-name]').val(),
		'LastName':
		$('[class=last-name]').val(),
		'Phone':
		$('[class=phone]').val(),
		'Address1':
		$('[class=add1]').val(),
		'Address2':
		$('[class=add2]').val(),
		'County':
		$('[class=county]').val(),
	}
	console.log(contactObj);
	console.log('record');

	//empty input fields//
	$('.first-name').val('');
	$('.last-name').val('');
	$('.phone').val('');
	$('.add1').val('');
	$('.add2').val('');
	$('.county').val('');

//create contact record and contact list from object//
var fName = contactObj.FirstName;
var lName = contactObj.LastName;
var pNumber = contactObj.Phone;
var aOne = contactObj.Address1;
var aTwo = contactObj.Address2;
var county = contactObj.County;
var contactRecord = fName + " " + lName + "<br>" + "First Name: " + fName
	 + "<br>" + "Last Name: " + lName + "<br>" + "Phone: " + " " + pNumber + "<br>"
	  + "Address: " + " " + aOne + ", " + aTwo + ", " + county;
var cList = fName + " " + lName;

$('.contact-record').html(contactRecord);
$('.clist').append(cList + "<br>");

//store contact record//
localStorage.setItem('.contact-record', contactRecord);
var retrieveRecord = localStorage.getItem('.contact-record');
$('.clist').on('click', function() {
console.log(retrieveRecord);
})

//fix... clicking on contacts list console logs both contacts entered//
//write code which displays contact clicked into contact record//

});

});



/*var fName = $('.first-name').val();
var lName = $('.last-name').val();
var pNumber = $('.phone').val();
var aOne = $('.add1').val();
var aTwo = $('.add2').val();
var county = $('.county').val();*/

/*var dataEntered = document.getElementById("first-name").value;
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