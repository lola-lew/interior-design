// Variables

const btnSend = document.querySelector('#btnSend');

// Field variables

const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

const er =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// Event Listeners

eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', startApp);

}


// Functions

function startApp() {
	btnSend.disabled = true;
	btnSend.classList.add('cursor-not-allowed', 'opacity-50');

  email.addEventListener('blur', validateForm);
	fullName.addEventListener('blur', validateForm);
	message.addEventListener('blur', validateForm);
}

function validateForm(e) {
  if (e.target.type === 'email') {
		if (er.test(e.target.value)) {
			const error = document.querySelector('p.error');
			if (error) {
				error.remove();
			}

			e.target.classList.remove('border', 'border-red-500');
			e.target.classList.add('border', 'border-green-500');
		} else {
			e.target.classList.remove('border', 'border-green-500');
			e.target.classList.add('border', 'border-red-500');
			mostrarError('Email no válido');
		}
	}

	if (er.test(email.value) && fullName.value !== '' && message.value !== '') {
		btnSend.disabled = false;
		btnSend.classList.remove('cursor-not-allowed', 'opacity-50');
	}
}