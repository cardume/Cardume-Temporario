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

}

setDimensions();

$(window).resize(
	function() {
		setDimensions();
	}
);
