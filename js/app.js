$(document).ready(function(){

//push inputs to contacts object and call contactList function//
var contactData = {
	contacts: [],
	contactRecord: function() {
		var newContact = {
		FirstName: $('.first-name').val(),
		LastName: $('.last-name').val(),
		Phone: contactData.getPhoneNumbers(),
		Street: $('.add1').val(),
		City: $('.add2').val(),
		County:$ ('.county').val()
		};
	if (contactData.validateForm()) {
		contactData.contacts.push(newContact);
		contactData.contactList();
		}
		console.log(newContact);
	},
	//collect all phone numbers from Phone array//
	getPhoneNumbers: function() {
		var phone = [];
		$.each($('.phone'), function(index, value) {
			if ($(value).val().length) {
			phone.push($(value).val());
			}
		});
		console.log(phone);
		return phone;
	},
	//show contact details after clicking on contact list//
	showContact: function() {
		var id = $(this).attr('id');
		var name = $('.contact-name').html(contactData.contacts[id].FirstName + " " + contactData.contacts[id].LastName);
		var detail = $('.contact-detail').html("<br>" + "First Name: " + contactData.contacts[id].FirstName + "<br>" + "Last Name: " + contactData.contacts[id].LastName +
			  "<br>" + "Phone 1: " + " " + contactData.contacts[id].Phone.join("") + "<br>" + "Address: " + "<br>" + contactData.contacts[id].Street + "<br>" +
			   contactData.contacts[id].City + "<br> " + contactData.contacts[id].County);
		$(name).css('font-size', '20px');
		$(detail).css('font-size', '15px');
	},
	//create contact list//
	contactList: function() {
		$('.clist').html("");
		for (var i = 0; i < contactData.contacts.length; i++) {
			$('.clist').append('<li id=' + i + '>' + contactData.contacts[i].FirstName + " " + contactData.contacts[i].LastName + '</li');
		}
	},
	//add new phone number to the contact record with data-user attributed on line 74//
	updateContact: function(id) {
		var addNewNumber = $('#phone2').attr('data-user');
		var newNumber = $('#phone2').val();
		contactData.contacts[addNewNumber].Phone.push("<br>" + "Phone " + (contactData.contacts[addNewNumber].Phone.length+1) + ": " + newNumber);
		$('.go').click(console.log(newNumber));
	},
	//make first name and phone fields mandatory//
	validateForm: function() {
	var mandatory = ($('.first-name').val() && $('#phone1').val());
	if (mandatory == "" || mandatory == null) {
		alert('Please enter a first name and contact number.');
		return false;
		}
	else {
		return true;
		}
	}
};

//calling functions and creating data-user id for adding phone number//
$('.go').click(contactData.updateContact);
$('.add').click(contactData.contactRecord);
$('body').on('click', '.clist li', contactData.showContact);
$('body').on('click', '.clist li', function() {
	$('#phone2').attr('data-user', $(this).index());
	console.log($('#phone2').attr('data-user'))
	$('.add-phone').show();
	});
//empty input fields//
$('.add').on('click', function() {	
	$('.first-name').val('');
	$('.last-name').val('');
	$('#phone1').val('');
	$('.add1').val('');
	$('.add2').val('');
	$('.county').val('');
});

//show additional phone field on button click and remove on form submit//
$('.add-phone').on('click', function() {
	$('#phone2').show();
	$('.go').show();
	$('.add-phone').hide();
});
$('.go').on('click', function() {
	$('#phone2').hide();
	$('.go').hide();
	$('.add-phone').show();
	$('#phone2').val('');
});
$('.clist').on('click', function() {
	$('#phone2').hide();
	$('.go').hide();
});

});

//add local storage//
/*localStorage.setItem('contacts', contactList.contacts);
var contacts = localStorage.getItem('contacts');*/

//change loop to this for local storage retrieval//
/*for (var i = 0; i < contact.length; i++) {
      $('#list').append('<li id=' + i + '>' + contact[i].name_first + '</li>');*/

//manage additional phone input - first attempt// 
/*var addPhone = {
	updateRecord: function () {
		var updatedContact = {
			Phone2: $('.phone2').val()
		};
	contactData.contacts.push(updatedContact);
	console.log(updatedContact);
	},
	showUpdatedContact: function() {
		var updatedDetail = $('.contact-detail').html("Phone 2: " + " " + addPhone.Phone2);
		$(updatedDetail).css('font-size', '15px');
	},	
}

$('.go').click(addPhone.updateRecord);
$('.go').click(addPhone.showUpdatedContact);*/

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