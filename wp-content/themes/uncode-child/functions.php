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


add_theme_support('post-thumbnails');
add_post_type_support( 'events', 'thumbnail' );
function create_events() {
	register_post_type('events', array(
		'labels' => array(
			'name' => __('Events'),
			'singular_name' => __('Event')
		),

		'public' => true,
		'has_archive' => false,
		'exclude_from_search' => true,
		'publicly_queryable' => false,
		'menu_icon' => 'dashicons-calendar-alt'
	));
}
function event_meta_box() {

    add_meta_box(
        'event-metabox', // Metabox ID
        'Event Details', // Metabox Title
        'event_meta_box_callback', // Function to call that contains the metabox content
        'events', // Post type to display metabox on
        'normal' // Where to put it (normal = main colum, side = sidebar, etc.)
    );
}

function event_meta_box_callback( $event ) {

	// Add a nonce field so we can check for it later.
    wp_nonce_field( 'event_nonce', 'event_nonce' );

    $event_date = get_post_meta( $event->ID, '_event_date', true );
    $event_location = get_post_meta( $event->ID, '_event_location', true );
    $event_address = get_post_meta( $event->ID, '_event_address', true );
    $event_link = get_post_meta( $event->ID, '_event_link', true );
echo $event_date." ".$event_location;
    ?>
    <table>
		<tr>
			<td style="padding-bottom: 40px;"><strong>Date</strong></td>
			<td style="padding-bottom: 40px;"><input type="text" style="width:350px" id="event_date" name="event_date" placeholder="January 21-24, 2020" value="<?php echo esc_attr( $event_date ) ?>"></td>
		</tr>
		<tr>
			<td style="padding-bottom: 40px;"><strong>Location</strong></td>
			<td style="padding-bottom: 40px;"><input type="text" style="width:350px" id="event_location" name="event_location" placeholder="Santa Clara Convention Center" value="<?php echo esc_attr( $event_location ) ?>"></td>
		</tr>
		<tr>
			<td style="padding-bottom: 40px;"><strong>Address</strong></td>
			<td style="padding-bottom: 40px;"><input type="text" style="width:350px" id="event_address" name="event_address" placeholder="Silicon Valley, CA" value="<?php echo esc_attr( $event_address ) ?>"></td>
		</tr>
		<tr>
			<td style="padding-bottom: 40px;"><strong>Event URL</strong></td>
			<td style="padding-bottom: 40px;"><input type="text" style="width:350px" id="event_link" name="event_link" value="<?php echo esc_attr( $event_link ) ?>"></td>
			<td style="padding-bottom: 40px;"><strong>Current URL:</strong><br><a href="event_link" target="_blank"><?php echo $event_link ?></a></td>
		</tr>
	</table>
    <?php
}

function save_event_meta_box_data( $post_id ) {
    // Check if our nonce is set.
    if ( ! isset( $_POST['event_nonce'] ) ) {
        return;
    }
    // Verify that the nonce is valid.
    if ( ! wp_verify_nonce( $_POST['event_nonce'], 'event_nonce' ) ) {
        return;
    }
    // If this is an autosave, our form has not been submitted, so we don't want to do anything.
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }
    
    // Update the meta field in the database.
    update_post_meta( $post_id, '_event_date', sanitize_text_field($_POST['event_date']) );
    update_post_meta( $post_id, '_event_location', sanitize_text_field($_POST['event_location']) );
    update_post_meta( $post_id, '_event_address', sanitize_text_field($_POST['event_address']) );
    update_post_meta( $post_id, '_event_link', sanitize_text_field($_POST['event_link']) );  
}

function get_events() {
    $args = array(
        'numberposts'      => -1,
        'orderby'          => 'title',
        'order'            => 'ASC',
        'post_type'        => 'events',
    );
    $event_list = new WP_Query($args);
    $events = [];

    if (isset($event_list->posts)) {
        foreach ($event_list->posts as $row) {
        	if ($row->post_status == 'publish') {
	            $events[] = [
	                "id" => $row->ID,
	                "title" => $row->post_title,
	                "date" => get_post_meta($row->ID, '_event_date', true),
	                "location" => get_post_meta($row->ID, '_event_location', true),
	                "address" => get_post_meta($row->ID, '_event_address', true),
	                "link" => get_post_meta($row->ID, '_event_link', true),
	                "featured_image" => get_the_post_thumbnail_url($row->ID)
	            ];
	        }
        }
    }
    // Sort array by sort field
    /*
    usort($service_cards, function($a, $b) {
        return $a['sort'] - $b['sort'];
    });*/

    return $events;
}

function events_shortcode($atts, $content = null) {
    ob_start();
    $events = get_events();
    include('events.php');
    $events_content = ob_get_contents();
    ob_end_clean();

    return $events_content;
}

add_action( 'init', 'create_events' );
add_action( 'add_meta_boxes', 'event_meta_box' );
add_action( 'save_post', 'save_event_meta_box_data' );
add_shortcode('events', 'events_shortcode');


add_action('wp_enqueue_scripts', 'theme_enqueue_styles', 100);
add_action( 'wp_enqueue_scripts', 'add_custom_scripts' );
