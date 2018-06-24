// Form blur event *means when the user clicks outside of the are
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('zipcode').addEventListener('blur', validateZip);

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName() {
  const name = document.getElementById('name');
  const regex = /^[a-zA-Z]{2,10}$/;

  if (!regex.test(name.value)) {
	name.classList.add('is-invalid');
  } else {
	name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zipcode = document.getElementById('zipcode');
  const regex = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!regex.test(zipcode.value)) {
	zipcode.classList.add('is-invalid');
  } else {
	zipcode.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!regex.test(email.value)) {
	email.classList.add('is-invalid');
  } else {
	email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  /* the first group has the option of using () hence the ? but also note the \ as an escape char becuase we
   want the () to be literal/actually present and the ? makes it optional */
  const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!regex.test(phone.value)) {
	phone.classList.add('is-invalid');
  } else {
	phone.classList.remove('is-invalid');
  }
}
