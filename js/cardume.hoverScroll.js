$(document).ready(function() {

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

});
