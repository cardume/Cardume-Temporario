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

add_action( 'init', 'register_taxonomy_categoria_de_projeto' );

function register_taxonomy_categoria_de_projeto() {

    $labels = array( 
        'name' => _x( 'Categorias de Projeto', 'categoria de projeto' ),
        'singular_name' => _x( 'Categoria de Projeto', 'categoria de projeto' ),
        'search_items' => _x( 'Search Categorias de Projeto', 'categoria de projeto' ),
        'popular_items' => _x( 'Popular Categorias de Projeto', 'categoria de projeto' ),
        'all_items' => _x( 'All Categorias de Projeto', 'categoria de projeto' ),
        'parent_item' => _x( 'Parent Categoria de Projeto', 'categoria de projeto' ),
        'parent_item_colon' => _x( 'Parent Categoria de Projeto:', 'categoria de projeto' ),
        'edit_item' => _x( 'Edit Categoria de Projeto', 'categoria de projeto' ),
        'update_item' => _x( 'Update Categoria de Projeto', 'categoria de projeto' ),
        'add_new_item' => _x( 'Add New Categoria de Projeto', 'categoria de projeto' ),
        'new_item_name' => _x( 'New Categoria de Projeto Name', 'categoria de projeto' ),
        'separate_items_with_commas' => _x( 'Separate categorias de projeto with commas', 'categoria de projeto' ),
        'add_or_remove_items' => _x( 'Add or remove categorias de projeto', 'categoria de projeto' ),
        'choose_from_most_used' => _x( 'Choose from the most used categorias de projeto', 'categoria de projeto' ),
        'menu_name' => _x( 'Categorias de Projeto', 'categoria de projeto' ),
    );

    $args = array( 
        'labels' => $labels,
        'public' => true,
        'show_in_nav_menus' => true,
        'show_ui' => true,
        'show_tagcloud' => true,
        'hierarchical' => false,

        'rewrite' => true,
        'query_var' => true
    );

    register_taxonomy( 'categoria_de_projeto', array('projeto'), $args );
}

?>
