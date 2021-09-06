const wrong = new Audio('../mediaFiles/wrong.mp3');

const validateForm = () => {
	let email = document.forms['myForm']['email'].value;
	let password = document.forms['myForm']['password'].value;

	const passwordRegex = /[^0-9a-zA-Z][0-9]{4}[A-Z]/g;

	if (email.search('@gmail.com') == -1 || email.length == 10) {
		wrong.play();
		alert('Please correct enter gmail');
		return false;
	}
	if (password.match(passwordRegex) == null) {
		wrong.play();
		alert(
			'Please enter correct form of password i.e. special symbol 4 numbers 1 letter[capital]'
		);
		return false;
	}
};
