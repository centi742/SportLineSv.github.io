$(document).ready(function(){
 
    $('.btn').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.btn').removeClass('active');
		$(this).addClass('active');

		// OCULTANDO PRODUCTOS =========================
		$('.card').css('transform', 'scale(0)');
		function hideProduct(){
			$('.card').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.card[category="'+catProduct+'"]').show();
			$('.card[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

    $('.btn[category="all-gender"]').click(function(){
		function showAll(){
			$('.card').show();
			$('.card').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});

});