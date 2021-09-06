const wrong = new Audio('../mediaFiles/wrong.mp3');

const validateForm = () => {
	let name = document.forms['myForm']['name'].value;
	let email = document.forms['myForm']['email'].value;
	let contact = document.forms['myForm']['contact'].value;
	let password = document.forms['myForm']['schoolPassword'].value;
	let rePassword = document.forms['myForm']['rePassword'].value;

	const contactRegex = /\d{10}/g;
	const passwordRegex = /[^0-9a-zA-Z][0-9]{4}[A-Z]/g;

	if (name == '' || name.split(' ').length != 2) {
		wrong.play();
		alert('Please enter correct name');
		return false;
	}
	if (email.search('@gmail.com') == -1 || email.length == 10) {
		wrong.play();
		alert('Please correct enter gmail');
		return false;
	}
	if (contact.match(contactRegex) == null) {
		wrong.play();
		alert('Please enter correct form of contact no');
		return false;
	}
	if (password.match(passwordRegex) == null) {
		wrong.play();
		alert(
			'Please enter correct form of password i.e. special symbol 4 numbers 1 letter[capital]'
		);
		return false;
	}
	if (rePassword != password) {
		wrong.play();
		alert('Both passwords are not same');
		return false;
	}
};
