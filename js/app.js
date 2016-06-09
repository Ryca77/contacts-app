$(document).ready(function(){

//create contacts object and functions//
var contactData = {
	contacts: [],
	contactRecord: function() {
		var newContact = {
		FirstName: $('.first-name').val(),
		LastName: $('.last-name').val(),
		Phone: $('.phone1').val(),
		Address1: $('.add1').val(),
		Address2: $('.add2').val(),
		County:$ ('.county').val()
		};
	contactData.contacts.push(newContact);
	contactData.contactList();

	},
	showContact: function() {
		var id = $(this).attr('id');
		var name = $('.contact-name').html(contactData.contacts[id].FirstName + " " + contactData.contacts[id].LastName);
		var detail = $('.contact-detail').html("<br>" + "First Name: " + contactData.contacts[id].FirstName + "<br>" + "Last Name: " + contactData.contacts[id].LastName +
			  "<br>" + "Phone: " + " " + contactData.contacts[id].Phone + "<br>" + "Address: " + "<br>" + contactData.contacts[id].Address1 + " " +
			   contactData.contacts[id].Address2 + " " + contactData.contacts[id].County);
		$(name).css('font-size', '20px');
		$(detail).css('font-size', '15px');
	},
	contactList: function() {
		$('.clist').html("");
		for (var i = 0; i < contactData.contacts.length; i++) {
			$('.clist').append('<li id=' + i + '>' + contactData.contacts[i].FirstName + " " + contactData.contacts[i].LastName + '</li');
		}
	},
	//fix this... ensure mandatory fields are filled//
	/*validateForm: function() {
		var x = (contactData.contact.FirstName).value;
		if (x == null || x == "") {
			console.log('enter name');
			return false;
		}
	}*/
}

$('.add').click(contactData.contactRecord);
$('body').on('click', '.clist li', contactData.showContact);

//empty input fields//
$('.add').on('click', function() {	
	$('.first-name').val('');
	$('.last-name').val('');
	$('.phone1').val('');
	$('.phone2').val('');
	$('.add1').val('');
	$('.add2').val('');
	$('.county').val('');
});

//show additional phone field on button click and remove on form submit//
$('.add-phone').on('click', function() {
	$('.phone2').show();
})
$('.add').on('click', function() {
	$('.phone2').hide();
})

});

//add local storage//
/*localStorage.setItem('contacts', contactList.contacts);
var contacts = localStorage.getItem('contacts');*/

//change loop to this for local storage retrieval//
/*for (var i = 0; i < contact.length; i++) {
      $('#list').append('<li id=' + i + '>' + contact[i].name_first + '</li>');*/

//next 50 lines = initial attempt//
/*$('.add').on('click', function() {
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
		'UniqueID':
		$('[class=unique-id]').val(),
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
})*/


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