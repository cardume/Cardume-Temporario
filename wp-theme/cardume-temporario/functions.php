<?php

if ( function_exists( 'add_theme_support' ) ) {

	add_theme_support( 'post-thumbnails' ); 

}

add_image_size( 'projeto-thumb', 632, null, true );

add_action( 'init', 'register_cpt_projeto' );

function register_cpt_projeto() {

    $labels = array( 
        'name' => _x( 'Projetos', 'projeto' ),
        'singular_name' => _x( 'Projeto', 'projeto' ),
        'add_new' => _x( 'Adicionar novo', 'projeto' ),
        'add_new_item' => _x( 'Adicionar novo projeto', 'projeto' ),
        'edit_item' => _x( 'Editar projeto', 'projeto' ),
        'new_item' => _x( 'Novo projeto', 'projeto' ),
        'view_item' => _x( 'Ver projeto', 'projeto' ),
        'search_items' => _x( 'Pesquisar projetos', 'projeto' ),
        'not_found' => _x( 'Nenhum projeto foi encontrado', 'projeto' ),
        'not_found_in_trash' => _x( 'Nenhum projeto foi encontrado na lixeira', 'projeto' ),
        'parent_item_colon' => _x( 'Parent Projeto:', 'projeto' ),
        'menu_name' => _x( 'Projetos', 'projeto' ),
    );

    $args = array( 
        'labels' => $labels,
        'hierarchical' => false,
        
        'supports' => array( 'title', 'editor', 'excerpt', 'thumbnail' ),
        'taxonomies' => array( 'category', 'post_tag' ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'has_archive' => true,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => true,
        'capability_type' => 'post'
    );

    register_post_type( 'projeto', $args );
}

?>
