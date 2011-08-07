$(document).ready(function() {

	if($.browser.msie) {

		$(".msie").fadeIn('fast');

	}

	var tabSize = $("#home .tab").width();

	$("#home .tab").css({

		right: -tabSize

	});

	$("#home > p > a").addClass('inactive');

	function hideTabs(currentTab) {

		if( !( $("#home p a.active").length ) ) return false;

		$("#home p a.active").each(function() {

			var tabID = $(this).attr('class').split(' ');
			var tabID = tabID[0];

		//	var currentLocation = window.location.hash.split('/');
		//	if( $(this).hasClass(currentLocation[1]) ) return false;

			var itemOffset = $(this).position();
			var itemTop = $(this).attr('rel');
			var itemLeft = itemOffset.left;
			var tabSize = $(this).width();

			if($.browser.msie) { // animate fontSize doesn't work with ie

				$(this).css({
					width: 'auto',
					fontSize: '100%',
					borderWidth: '1px',
					top: itemTop,
					left: itemLeft,
					paddingBottom: 0
				}).removeClass('active').addClass('inactive');

			} else {

				$(this).animate({
					width: 150,
					fontSize: '100%',
					borderWidth: '1px',
					top: itemTop,
					left: itemLeft,
					paddingBottom: 0
				}, 'fast', function() {
					$(this).removeClass('active').addClass('inactive');
				});

			}

			$("#home #" + tabID + ".tab").animate({
				right: -tabSize
			}, 'fast').empty();

			$("#home p span").animate({
				opacity: '1'
			}, 'fast');

			$("img.bg").animate({
				opacity: '1'
			}, 'fast');

			$('.bg, h1').removeClass('close');

		});

	}

	function doTab(tabID, tabLink) {

		tabLink = typeof(tabLink) != 'undefined' ? tabLink : '#home p a.' + tabID;

		hideTabs(tabID); // esconde tabs e envia tab selecionada para evitar bug

		// Começa animacao do clicado

		var itemOffset = $(tabLink).position();
		var itemTop = itemOffset.top;
		var itemLeft = itemOffset.left;

		$(tabLink).attr('rel', itemTop);

		$(tabLink).addClass('active').removeClass('inactive')
		.css({
			top: itemTop,
			left: itemLeft
		});

		if($.browser.msie) {

			$(tabLink).css({
				width: '1920px',
				borderWidth: '4px',
				fontSize: '200%',
				top: '180%',
				left: itemLeft,
				paddingBottom: 10
			}).addClass('active').removeClass('inactive')

		} else {

			$(tabLink).animate({
				width: '1920px',
				borderWidth: '4px',
				fontSize: '200%',
				top: '180%',
				left: itemLeft,
				paddingBottom: 10
			}, 'fast', function() {
				$(tabLink).addClass('active').removeClass('inactive')
			});
		}

		$("#home #" + tabID + ".tab").animate({
			right: 0
		}, 'fast')

		// AJAX!

		.load(tabID, function() { ajaxLoaded(tabID); });

		//

		$("#home p span").animate({
			opacity: '0.2'
		}, 'fast');

		$("img.bg").animate({
			opacity: '0.5'
		}, 'fast');

		$('.bg, h1').addClass('close');

		$('.bg, h1').click(function() {

			if($(this).hasClass('close')) {

				goHome();

			}

		});

	}

	function goHome() {

		if(window.location.hash != '#!/home') window.location = '#!/home';

		hideTabs();

		return false;

	}

		

	$("#home p a").click(function() {

			if($(this).hasClass('active')) {

				goHome();

				return false;

			}

	});

	function ajaxLoaded(tabLoaded) {

		setDimensions();

		if(tabLoaded == 'sobre') {

			hoverScroll("#sobre", "#sobre .content");

		} else if (tabLoaded == 'trabalhos') {

			hoverScroll("#trabalhos", "#trabalhos ul");

			$("#trabalhos img").hover(
				function() {
					$(this).animate({
						opacity: 1
					}, 'fast')
				},
				function() {
					$(this).animate({
						opacity: 0.4
					}, 'fast')
				}
			);

		}

	}

	$(window).hashchange(function() {

		var location = window.location.hash;
		var location = location.split('/');

		if(location[1] != 'home') {

			doTab(location[1]);

		}

		switch(location[1]) {

			case 'trabalhos':

				document.title = 'Nossos trabalhos | Cardume';
				break;

			case 'sobre':

				document.title = 'Sobre nós | Cardume';
				break;

			case 'contato':

				document.title = 'Contato | Cardume';
				break;

			default:

				document.title = 'Cardume';

		}

	});

	$(window).hashchange();

});
