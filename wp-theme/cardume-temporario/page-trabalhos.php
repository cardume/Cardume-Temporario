<?php query_posts('post_type=projeto&posts_per_page=-1'); ?>
<?php if(have_posts()) : ?>

	<ul>

	<?php while(have_posts()) : the_post(); ?>

		<li>
			<?php the_post_thumbnail('projeto-thumb'); ?>
		</li>

	<?php endwhile; ?>

	</ul>

<?php endif; ?>
