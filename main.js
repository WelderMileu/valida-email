(function() {
	'use strict';

	const $ = event => document.querySelector(event);
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	const valida = () => {

		if (!$('.email').value == '') {
			if ($('.email').value.match(regex)) {
				
				$('.info').classList.remove('d-none');
				$('.info').classList.add('sucess-info');
				$('.info').innerText = 'Email valido.';

				$('.fa').classList.remove('d-none');
				$('.fa').classList.remove('error-icon');
				$('.fa').classList.add('sucess-icon');
				$('.fa').classList.remove('fa-close');
				$('.fa').classList.add('fa-check');
			
			} else {
				
				$('.info').classList.remove('d-none');
				$('.info').classList.remove('sucess-info');
				$('.info').classList.add('error-info');
				$('.info').innerText = 'Por favor, preencha um e-mail valido !';
			
				$('.fa').classList.remove('d-none');
				$('.fa').classList.remove('sucess-icon');
				$('.fa').classList.add('error-icon');
				$('.fa').classList.add('fa-close');
			
			}		
		} else {
			
			$('.info').classList.add('d-none');
			$('.fa').classList.add('d-none');
		
		}

	}

	document.addEventListener('input', valida)

})();