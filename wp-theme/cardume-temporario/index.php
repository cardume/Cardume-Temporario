<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<title><?php bloginfo('name'); ?></title>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/jquery-1.6.2.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/jquery.ba-hashchange.min.js"></script>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/estilo.css" type="text/css" media="screen" />
<?php wp_head(); ?>
</head>
<body>
<div id="home">

	<img src="<?php bloginfo('template_directory'); ?>/img/bg_.jpg" class="bg" />

	<p class="msie">Ei amigo, tá na hora de baixar um navegador mais bacana, né?<br/>Que tal o <a href="http://www.mozilla.com/en-US/firefox/fx/" target="_blank" title="Mozilla Firefox">Mozilla Firefox</a> ou o <a href="http://www.google.com/chrome?hl=pt-BR" target="_blank" title="Google Chrome">Google Chrome</a>?</p>

	<h1><?php bloginfo('name'); ?><img src="<?php bloginfo('template_directory'); ?>/img/logo_preto.png" /></h1>

	<p class="info">
		<span>Enquanto nosso <del>café</del> site não fica pronto<br/>
		leia um pouco </span><a href="#!/sobre" class="sobre">sobre nós</a><span>,<br/>
		dê uma olhada em alguns dos </span> <a href="#!/trabalhos" class="trabalhos">nossos trabalhos<b class="close"> X</b></a><br/>
		<span>e, se quiser, entre em</span> <a href="#!/contato" class="contato">contato</a><span>!</span>
	</p>

	<div id="sobre" class="tab">

	</div>

	<div id="trabalhos" class="tab">

	</div>

	<div id="contato" class="tab">

	</div>

</div>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/cardume.dimensions.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/cardume.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/cardume.hoverScroll.js"></script>
<!-- Minified version
<script type="text/javascript" src="js/cardume.min.js"></script>
-->
</body>
<?php wp_footer(); ?>
</html>
