$(document).ready(function() {

	if($.browser.msie) {
		$("p.msie").fadeIn('fast');
	}

	var tabSize = $("#home .tab").width();

	$("#home .tab").css({
		right: -tabSize
	});

	function setDimensions() {

		var fullWidth = $(window).width();
		var fullHeight = $(window).height();

		$("img.bg").each(
			function() {

				var originalWidth = $(this).width();
				var originalHeight = $(this).height();

				var imgHeight = (originalHeight * fullWidth) / originalWidth;
				var imgWidth = (originalWidth * fullHeight) / originalHeight;

				if(imgHeight < $(window).height()) {

					$(this).width(imgWidth).height(fullHeight);

				} else {

					$(this).width(fullWidth).height(imgHeight);

				}

			}
		);

		$("h1 img").each(
			function() {

				var originalWidth = $(this).width();
				var originalHeight = $(this).height();

				var imgWidth = fullWidth / 6.315;
				var imgHeight = imgWidth / 0.912;

				$(this).width(imgWidth).height(imgHeight);

				if( $(this).width() <= 150) {

					$(this).width(150).height(164);

				}
				

			}
		);

		$("#home p.info").each(
			function() {

				var fontSize = fullWidth * 0.010;
				var fontTop = fullWidth * 0.095;
				var fontLeft = fullWidth * 0.234;

				$(this).css('font-size', fontSize).css('top', fontTop).css('left', fontLeft);

				if(fontSize <= 9) {

					$(this).css('font-size', 9);

					if(fontLeft <= 200) {

						$(this).css('left', 200);

					}

					if(fontTop <= 85) {

						$(this).css('top', 85);

					}

				}
			}
		);

		if($.browser.msie) {

			$("#home p.msie").each(
				function() {

					var fontSize = fullWidth * 0.010;
					var fontMargin = fullWidth / 109.4;

					$(this).css({
						fontSize: fontSize,
						padding: fontMargin
					});

					if(fontSize <= 9) {

						$(this).css('font-size', 9);

					}
				}
			);

		}

		$("#home #sobre").each(
			function() {

				var fontSize = fullWidth * 0.010;
				var fontMargin = fullWidth / 27.35;
				var fontMarginHalf = fullWidth / 54.7;
				var liPadding = fullWidth / 109.4; 

				$(this).css('font-size', fontSize);

				$(this).find('p').css({
					margin: fontMarginHalf + 'px ' + fontMargin + 'px'
				});

				$(this).find('p:first-child').css({
					marginTop: fontMargin
				});

				$(this).find('h2').css({
					margin: '0 ' + fontMargin + 'px'
				});

				$(this).find('li').css({
					padding: liPadding
				});

				$(this).find('ul').css({
					margin: fontMarginHalf + 'px ' + fontMargin + 'px ' + fontMargin + 'px'
				});

				if(fontSize <= 9) {

					$(this).css('font-size', 9);

				}

			}
		);

		$("#home #trabalhos img").each(
			function() {

				var tabWidth = $("#trabalhos").width();

				var originalWidth = $(this).width();
				var originalHeight = $(this).height();

				var imgWidth = tabWidth-80;
				var imgHeight = imgWidth / ( originalWidth / originalHeight );

				$(this).width(imgWidth).height(imgHeight);

			}
		);

		$(".loading").each(
			function() {

				var fontSize = fullWidth * 0.010;

				$(this).css({
					fontSize: fontSize
				});

			}
		);

		$("#home #contato").each(
			function() {

				var fontSize = fullWidth * 0.012;
				var formMargin = fullWidth / 27.35;
				var inputMargin = fullWidth / 54.7;
				var inputPadding = fullWidth / 109.4;
				var textareaHeight = fullHeight / 2.386;

				var inputWidth = $("#contato").width() - ( inputPadding * 2 ) - ( formMargin * 2 );

				$(this).find('form').css({
					margin: formMargin
				});

				$(this).find('input, textarea').css({
					fontSize: fontSize,
					padding: inputPadding,
					marginBottom: inputMargin
				}).width(inputWidth);

				$(this).find('textarea').css({
					height: textareaHeight
				});

				if(fontSize <= 9) {

					$(this).find('input, textarea').css('font-size', 9);

				}

			}
		);

		$(".tab").each(
			function() {

				var tabRight = parseInt($(this).css('right'), 10);
				var tabSize = $(this).width();

				if( tabRight < 0 ) {

					$(this).css({
						right: -tabSize
					});

				}
			}
		);

		hoverScroll("#sobre", "#sobre .content");
		hoverScroll("#trabalhos", "#trabalhos ul");

	}

	setDimensions();

	$(window).resize(
		function() {
			setDimensions();
		}
	);

	$("#home > p > a").addClass('inactive');


	function hideTabs() {

		var itemOffset = $("#home p a.active").position();
		var itemTop = $("#home p a.active").attr('rel');
		var itemLeft = itemOffset.left;
		var tabSize = $('.tab').width();

		if($.browser.msie) {

			$("#home p a.active").css({
				width: 'auto',
				fontSize: '100%',
				borderWidth: '1px',
				top: itemTop,
				left: itemLeft,
				paddingBottom: 0
			}).removeClass('active').addClass('inactive');

		} else {

			$("#home p a.active").animate({
				width: 150,
				fontSize: '100%',
				borderWidth: '1px',
				top: itemTop,
				left: itemLeft,
				paddingBottom: 0
			}, 'fast', function() {
				$("#home p a.active").removeClass('active').addClass('inactive');
			});

		}

		$("#home .tab").animate({
			right: -tabSize
		}, 'fast');

		$("#home p span").animate({
			opacity: '1'
		}, 'fast');

		$("img.bg").animate({
			opacity: '1'
		}, 'fast');

		$('.bg, h1, p.info').removeClass('close');

	}

	function doTab(tabID, tabLink) {

		tabLink = typeof(tabLink) != 'undefined' ? tabLink : '#home p a.' + tabID;

		if($("#home p a.active").length) {

			hideTabs();

		}

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

		$("#home #" + tabID).animate({
			right: 0
		}, 'fast');

		$("#home p span").animate({
			opacity: '0.2'
		}, 'fast');

		$("img.bg").animate({
			opacity: '0.5'
		}, 'fast');

		$('.bg, h1, p.info').addClass('close');

		$('.close').click(function() {

			goHome();

			return false;

		});

	}

	function goHome() {

		hideTabs();

		window.location = '#!/home';

	}

		

	$("#home p a").click(function() {

			if($(this).hasClass('active')) {

				goHome();

				return false;

			}

	});


	function hoverScroll(wrapper, content){

		var wrapper = jQuery(wrapper), content = jQuery(content);

		wrapper.css({overflow: "hidden"});

		content.hide();

		var loading = $('<div class="loading">Carregando...</div>').appendTo(wrapper);

		var interval = setInterval(function () {

			var images = content.find('img');
			var completed = 0;

			// Counts number of images that are succesfully loaded

			images.each(function () {
				if (this.complete) completed++;
			});

			if (completed == images.length) {
				clearInterval(interval);
				// Timeout added to fix problem with Chrome
				setTimeout(function () {

					loading.hide();

					content.slideDown('slow', function () {
						enable(wrapper, content);
					});

				}, 1000);
			}
		}, 100);

	}


	function enable(wrapper, content){

		var inactiveMargin = 200;

		// Cache for performance
		var wrapperWidth = $(wrapper).width();
		var wrapperHeight = $(wrapper).height();

		// Using outer height to include padding too
		var contentHeight = $(content).height() + 2*inactiveMargin;

		// Do not cache wrapperOffset, because it can change when user resizes window
		// We could use onresize event, but it&#39;s just not worth doing that 
		// var wrapperOffset = wrapper.offset();

		//When user move mouse over menu
		$(wrapper).mousemove(function(e){
			var wrapperOffset = $(wrapper).offset();

			// Scroll menu
			var top = (e.pageY -  wrapperOffset.top) * (contentHeight - wrapperHeight) / wrapperHeight - inactiveMargin;

			if (top < 0){
				top = 0;
			}

			$(wrapper).scrollTop(top);
		});
	}

	hoverScroll("#sobre", "#sobre .content");
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


	$(window).hashchange(function() {

		var location = window.location.hash;
		var location = location.split('/');

		if(location[1] != 'home') {
			doTab(location[1]);
		}

	});

	$(window).hashchange();

});
