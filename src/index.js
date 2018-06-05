import Modal from '@10up/modal';

const modalInstance = new TenUp.Modal( '.TenUp__modal', {
	onShow: ( dialogEl, triggerEl ) => {
		console.log( dialogEl );
		console.log( triggerEl );
	}
} );