// Variables

const btnSend = document.querySelector('#btnSend');

// Field variables

const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// Event Listeners

eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', startApp);

}


// Functions

function startApp() {
	btnSend.disabled = true;
	btnSend.classList.add('cursor-not-allowed', 'opacity-50');
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
		btnEnviar.disabled = false;
		btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
	}