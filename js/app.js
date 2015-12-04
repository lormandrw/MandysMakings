function getContinueShoppingURL(form) {
	// -- Get the href of the currently displayed webpage --
	form.shopping_url.value = window.location.href;
}

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});