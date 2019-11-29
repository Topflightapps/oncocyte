<?php
add_action('after_setup_theme', 'uncode_language_setup');
function uncode_language_setup()
{
	load_child_theme_textdomain('uncode', get_stylesheet_directory() . '/languages');
}

function add_custom_scripts() {
    //wp_enqueue_script('child-script', get_stylesheet_directory_uri() . '/js/scripts.js', array( 'jquery' ));
    wp_enqueue_script('child_theme_script_handle', get_stylesheet_directory_uri().'/js/scripts.js', array('jquery'));
}

function theme_enqueue_styles()
{
	$production_mode = ot_get_option('_uncode_production');
	$resources_version = ($production_mode === 'on') ? null : rand();
	if ( function_exists('get_rocket_option') && ( get_rocket_option( 'remove_query_strings' ) || get_rocket_option( 'minify_css' ) || get_rocket_option( 'minify_js' ) ) ) {
		$resources_version = null;
	}
	$parent_style = 'uncode-style';
	$child_style = array('uncode-style');
	wp_enqueue_style($parent_style, get_template_directory_uri() . '/library/css/style.css', array(), $resources_version);
	wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', $child_style, $resources_version);
	//wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/stylesheets/sass/oncocyte.css', $child_style, $resources_version);
}

add_action('wp_enqueue_scripts', 'theme_enqueue_styles', 100);
add_action( 'wp_enqueue_scripts', 'add_custom_scripts' );
