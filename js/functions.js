(function($){
	"use strict";
	$(function(){

		/***************/
		/*** ON LOAD ***/
		/***************/

		//** Padding top
		paddingTop();

		//** Backstretch
		$('#home').backstretch('images/background.jpg');

		//** Ocupar full screen home y portafolio
		//fullScreen('min-height','#home');
		fullScreen('height','.proyectos');

		//** mapa google
		creaMapa();

		//** navegación contacto
		navContacto();





		/********************/
		/*** INTERACTIONS ***/
		/********************/

		//**Header se hace chico
		scrollPastHeader(setHeaderAlturaMenor);

		//**Portafolio
		filtrosPortafolio();

		//** AJAX para procesar contacto
		procesaContacto();

		//** Flips de servicios y nosotros
		flipsClick();

		//**Scroll to section
		$("nav a").click(function(e) {
			e.preventDefault();
		   	scrollToSeccion($(this))
		});
		// Controla js en movil portrait
		mediaCheck({
		    media: '(max-width: 24.9em)',
		    	entry: function() {
		      		console.log('enter max-width: 24.9em');
		      		// Toggle menu movil
					toggleMenuMovil();
	    		},
		    	exit: function() {
		      		console.log('exit max-width: 24.9em');
		    	}
		});
		// Controla js en movil landscape
		mediaCheck({
		    media: '(min-width: 25em)',
		    	entry: function() {
		      		console.log('enter min-width: 25em');
		      		// Toggle menu movil
					toggleMenuMovil();
	    		},
		    	exit: function() {
		      		console.log('exit min-width: 25em');
		    	}
		});
		// Controla js en pantallas medianas
		mediaCheck({
		    media: '(min-width: 40.063em)',
		    	entry: function() {
		      		console.log('enter min-width: 25em');

					//** Sticky menu
					//menuFijo();
					//Palabras home
					//FadeIn elementos al hacer scroll
					//fadeInSecciones();
					// Flips de servicios y nosotros
					flipsHover();
	    		},
		    	exit: function() {
		      		console.log('exit min-width: 25em');
		    	}
		});
	});
})(jQuery);

// Funciones cuervo
function scrollHeader(){

}

function toggleMenuMovil(){

	$('#btn-movil').on('click', function(e){
		e.preventDefault();
		if($('header nav').css('display')=='none'){
			$('header').css('background', '#00A8AB');
			$('header nav').slideDown('fast');
			$(this).find('i').removeClass('fa-bars');
			$(this).find('i').addClass('fa-chevron-down');
		} else {
			$('header nav').slideUp('fast', function(){$('header').css('background', 'none');});
			$(this).find('i').removeClass('fa-chevron-down');
			$(this).find('i').addClass('fa-bars');
		}
	});
}
function fullScreen(height_property, el){
	var altoWindow = $(window).height();
	$(el).css(height_property, altoWindow);
}
function fadeInSecciones(){
	var invisibles = $('h3, header, .centro');
	invisibles.bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	  if (isInView) {
	    // element is now visible in the viewport
	    $(this).addClass('visible');
		//$(this).find('.card').removeClass('flipped');
	    if (visiblePartY == 'top') {
	      // top part of element is visible
	    } else if (visiblePartY == 'bottom') {
	      // bottom part of element is visible
	    } else {
	      // whole part of element is visible
	    }
	  } else {
	    // element has gone out of viewport
	  }
	});
}

function flipsHover(){
	$('.cardContainer').hover(
		function(){
			cardHeight($(this));
			$(this).find('.card').addClass('flipped');
		},
		function(){
			$(this).find('.card').removeClass('flipped');
		}
	);
	$('.cardContainer').each(function(){
		cardHeight($(this));
	});
}

function flipsClick(){
	$('.cardContainer').on('click', function(){
		$(this).find('.card').toggleClass('flipped');
		cardHeight($(this));
	});

	$('.cardContainer').each(function(){
		cardHeight($(this));
	});
}

function filtrosPortafolio(){

	var $container = $('#isotope');

	$container.isotope({
		itemSelector: '.post',
		layoutMode: 'fitRows'
	});

	$('.tags li').on( 'click', function() {
		var filterValue = $(this).data('filter');
		$container.isotope({
			filter: filterValue
		});
		$('.tags li').removeClass('activo');
		$(this).addClass('activo');
	});
}

function procesaContacto(){
	$('form').submit(function(e){
		e.preventDefault();
		console.log($(this).serializeArray());
		$.post(
			'procesaForma.php',
			$(this).serialize(),
			function(data){
				var x = jQuery.parseJSON(data);
				console.log("Gracias por tu msg " + x.nombre);
			}
		);
	});
}

function cardHeight(card){
	var frontHeight = card.find('.front').height();
	var backHeight = card.find('.back').height();
	if (frontHeight > backHeight) {
		card.height(frontHeight);
	} else if (backHeight > frontHeight) {
		card.height(backHeight);
	} else {
		card.height(backHeight);
	}
}

function navContacto(){
	// toggle checkboxes
	$('.paso div').on('click', function(e){
		$(this).toggleClass('activo');
		servicio = $(this).attr('data-servicio');
		isChecked = $('.paso div input[value="'+servicio+'"]').prop('checked');
		if(isChecked)
			$('.paso div input[value="'+servicio+'"]').prop('checked', false);
		else
			$('.paso div input[value="'+servicio+'"]').prop('checked', true);
	});
	// avance entre preguntas
	$('.paso a').on('click', function(e){
		e.preventDefault();
		var currentStep = $(this).parent().parent().attr('data-paso');
		nextStep(currentStep);

	});
}
function nextStep(current){
	// esconde paso actual
	offsetCurrent = $('.paso[data-paso="'+current+'"]').offset();
	topCurrent = offsetCurrent.top;

	$('.paso[data-paso="'+current+'"]').slideUp('fast');

	//$('.paso[data-paso="'+current+'"]').removeClass('show');
	//$('.paso[data-paso="'+current+'"]').addClass('hide');

	var next = parseInt(current) + 1;

	$('.paso[data-paso="'+next+'"]').show('slow');

	// muestra siguiente paso
	//$('.paso[data-paso="'+next+'"]').removeClass('hide');
	//$('.paso[data-paso="'+next+'"]').addClass('show');
}
function mostrarMsgContacto(nombre){}

function creaMapa (){
	
	var styles = [
		{
		  stylers: [
			{ hue: "#00a8ab" }
		  ]
		}
	];

	function initialize() {
		var notMobile = $(document).width() > 480 ? true : false;
		var centro = new google.maps.LatLng(19.409998, -99.168882);
		var nosotros = new google.maps.LatLng(19.409948, -99.168392);
		var mapOptions = {
			zoom: 16,
			center: nosotros,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: styles,
			scrollwheel: false,
			draggable: notMobile
		}

		var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
		var image = 'images/marker.png';

		var marker = new google.maps.Marker({
			position: nosotros,
			map: map,
			title: 'Pequeño Cuervo',
			icon: image
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);
}

function quitarDragMapa(){}

function mostarContacto(){
	$('.centro a, .comienza a').on('click', function(e){
		$('.forma').slideDown('slow', function(){

		});
		
	});
}

function scrollToSeccion(elemento){
	var id = elemento.attr('href');
	var seccion = $(id);
	var divPosicion = seccion.offset().top;
	//var divPosicion = seccion.scrollTop();

	$('html, body').animate({scrollTop: divPosicion});
}

function scrollPastHeader(funcion){
	$(window).scroll(function(event) {
		var scrolled = $(window).scrollTop();
		if ( scrolled > getAlturaHeader){
			funcion();
		}
	});
}

function paddingTop(){
	$('.home').css('paddingTop', (getAlturaHeader));
}

function getAlturaHeader(){
	var alturaHeader = $('header').outerHeight();
	alturaHeader = alturaHeader + 40;
	return alturaHeader;
}

function setHeaderAlturaMenor(){
	 $('header').addClass('past-header');
}


