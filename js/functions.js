(function($){

	"use strict";

	$(function(){
		//Backstretch
		$('#home').backstretch('images/background.jpg');
		// Sticky menu
		menuFijo();
		// Toggle menu movil
		toggleMenuMovil();
		// Ocupar full screen home y portafolio
		fullScreen('min-height','#home');
		fullScreen('height','.proyectos');

		//Palabras home
		rotarPalabras();
		//FadeIn elementos al hacer scroll
		fadeInSecciones();
		// Flips de servicios y nosotros
		flips();
		//Portafolio
		filtrosPortafolio();
		// AJAX para procesar contacto
		procesaContacto();
		// mapa google
		creaMapa();
		// navegación contacto
		navContacto();
		
	});

})(jQuery);

// Funciones cuervo
function menuFijo(){
	var menuFijo = $('#menuFijo');
     
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            //menu.fadeOut('fast', function(){
            //    $(this).removeClass('default').addClass('fixed').fadeIn('fast');
            //});
    		//menuFijo.removeClass('hide');
    		menuFijo.slideDown('fast');
    		menuFijo.addClass('fixed');
        } else if($(this).scrollTop() <= 500){
            //menu.fadeOut('fast', function(){
            //    $(this).removeClass('fixed').addClass('default').fadeIn('fast');
            //});
    		menuFijo.hide();
    		//menuFijo.addClass('hide');
    		menuFijo.removeClass('fixed');
        }
    });
}
function toggleMenuMovil(){
	$('#btn-movil').on('click', function(){
		if($('header nav').css('display')=='none'){ 
			$('header').css('background', '#00A8AB');
			$('header nav').slideDown('fast');
			$(this).find('i').removeClass('fa-bars');
			$(this).find('i').addClass('fa-arrow-down');
		} else {
			$('header nav').slideUp('fast', function(){$('header').css('background', 'none');});
			$(this).find('i').removeClass('fa-arrow-down');
			$(this).find('i').addClass('fa-bars');
			
		}
	});
}
function fullScreen(height_property, el){
	var altoWindow = $(window).height();
	$(el).css(height_property, altoWindow);
}
function fadeInSecciones(){
	var invisibles = $('
		h3,
		header,
		.centro,
		.cardContainer,
		.tags,
		.post,
		.contacto-info,
		.paso
	');
	invisibles.bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	  if (isInView) {
	    // element is now visible in the viewport
	    $(this).addClass('visible');
	    $(this).find('.card').removeClass('flipped');
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

function flips(){
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

function filtrosPortafolio(){
	var $container = $('#isotope');
	$container.isotope({
		itemSelector: '.post'
	});
	$('.tags li').on( 'click', function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({ filter: filterValue });
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
				//mostrarMsgContacto(data);
			}
		);
	});
}

function cardHeight(card){
	frontHeight = card.find('.front').height(),
	backHeight = card.find('.back').height();

	if (frontHeight > backHeight) {
		card.height(frontHeight);
	}
	else if (backHeight > frontHeight) {
		card.height(backHeight);
	}
	else {
		card.height(backHeight);
	}
}

var fixedBox = $('.fixedBox');
function fixMenu (){ fixedBox.addClass('fixed'); }
function unfixMenu (){ fixedBox.removeClass('fixed'); }
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
	$('.paso[data-paso="'+current+'"]').removeClass('show');
	$('.paso[data-paso="'+current+'"]').addClass('hide');
	var next = parseInt(current) + 1;
	// muestra siguiente paso
	$('.paso[data-paso="'+next+'"]').removeClass('hide');
	$('.paso[data-paso="'+next+'"]').addClass('show');
}
function mostrarMsgContacto(nombre){
}

function creaMapa (){
	var styles = [
		{
		  stylers: [
			{ hue: "#00a8ab" }
		  ]
		}
	];

	function initialize() {
		var centro = new google.maps.LatLng(19.409948, -99.169182);
		var nosotros = new google.maps.LatLng(19.409948, -99.168392);
		var mapOptions = {
			zoom: 18,
			center: centro,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: styles,
			scrollwheel: false
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

function rotarPalabras(){ rotarPalabraCodigo(); }

function rotarPalabraDiseno(){
	var diseno = $('h2.diseno span');
	var	palabras_diseno = ['intuitivo', 'eficiente', 'interactivo', 'responsivo', 'funcional', 'lógico', 'eficiente', 'limpio', 'cautivador', 'amigable', 'cuervo', 'innovador'];
	var	length_diseno = palabras_diseno.length;
	var item_diseno;

	setTimeout(function(){
		item_diseno = Math.floor(Math.random() * length_diseno);
		diseno.text(palabras_diseno[item_diseno]);
		rotarPalabraCodigo();
	}, 2000);
}

function rotarPalabraCodigo () {
	var codigo = $('h2.codigo span');
	var palabras_codigo = ['estético', 'impecable', 'mágico', 'bello', 'artesanal', 'dinámico', 'elegante', 'atractivo', 'fresco', 'comprensible', 'cuervo'];
	var	length_codigo = palabras_codigo.length;
	var	item_codigo;

	setTimeout(function(){
		item_codigo = Math.floor(Math.random() * length_codigo);
		codigo.text(palabras_codigo[item_codigo]);
		rotarPalabraDiseno();
	}, 2000);
}
