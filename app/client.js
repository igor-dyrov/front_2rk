'use strict';

function serviceWorkerRegister() {
	if ('serviceWorker' in navigator) {
		console.log('SW not found. Trying to install...');
		navigator.serviceWorker.register('/worker.js', { scope: '/' })
			.then((registration) => {
				console.log('success register of SW: ', registration);
				navigator.serviceWorker.addEventListener('message', event => {
  					alert(event.data.msg);
				});
			})
			.catch((error) => {
				console.log('Registration FAILED: ', error);
			});
	}
}

serviceWorkerRegister();

const sendBtn = window.document.getElementsByClassName('send-button')[0];

sendBtn.addEventListener('click', () => {
	fetch('http://localhost:7000/ping');
});

