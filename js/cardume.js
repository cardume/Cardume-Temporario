$(document).ready(function() {

	if($.browser.msie) {

		$("p.msie").fadeIn('fast');

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

			if($.browser.msie) {

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
			}, 'fast');

			$("#home p span").animate({
				opacity: '1'
			}, 'fast');

			$("img.bg").animate({
				opacity: '1'
			}, 'fast');

			$('.bg, h1, p.info').removeClass('close');

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

		//	goHome();

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
