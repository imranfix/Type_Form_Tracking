<script>
window.addEventListener('message', function(event) {
	if(event.origin === 'https://form.typeform.com' && event.data.type === 'form-submit') {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: 'type_form_submit',
			formId: event.data.formId
		});
	}
});
</script>