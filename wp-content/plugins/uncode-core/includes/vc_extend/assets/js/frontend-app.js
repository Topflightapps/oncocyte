(function($) {
	"use strict";

	var setVcFrontend,
		setSortStop;
	clearRequestTimeout(setVcFrontend);
	UNCODE.initVCfront = function() {
		var wfl_check = false, wfl_request, waypoint_request;
		UNCODE.preventDoubleTransition();
		UNCODE.utils();
		UNCODE.menuSystem();
		UNCODE.okvideo();
		UNCODE.tapHover();
		UNCODE.isotopeLayout();
		UNCODE.justifiedGallery();
		UNCODE.lightbox();
		UNCODE.carousel($('body'));
		UNCODE.lettering();
		UNCODE.animations();
		UNCODE.stickyElements();
		UNCODE.twentytwenty();
		UNCODE.disableHoverScroll();
		UNCODE.onePage(UNCODE.isMobile);
		UNCODE.fullPage();
		$(window).on('load',function(){
			clearRequestTimeout(waypoint_request);
			waypoint_request = requestTimeout( function(){
				Waypoint.refreshAll();
			}, 1000);
		});
	}

	var allCids = [];

	var isInViewport = function( $el ) {
		var elementTop = $el.offset().top,
			elementBottom = elementTop + $el.outerHeight(),
			viewportTop = $(window).scrollTop(),
			viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	UNCODE.frontendEditorNavbar = function(){
		var $navBar = $('#vc_navbar', parent.document),
			$addElPanel = $('#vc_ui-panel-add-element', parent.document),
			$sizePreviews = $('#vc_screen-size-control', $navBar);

		$addElPanel.add($navBar).find('a[href="javascript:;"], a[href="#"]').each(function(){
			$(this).removeAttr('href');
		});

		$('ul a', $sizePreviews).on('click', function(){
			if ( $(this).hasClass('vc-c-icon-layout_default') ) {
				$('iframe#vc_inline-frame', parent.document).removeClass('size-previews');
			} else {
				$('iframe#vc_inline-frame', parent.document).addClass('size-previews');
			}
		});
	};

	UNCODE.frontendEditorSidebarSwitch = function(){

		var $navBar = $('#vc_navbar', parent.document),
			$navBarUl = $('ul.vc_navbar-nav', $navBar),
			$updateButton = $('#vc_button-update', $navBar),
			$buttonWrap = $updateButton.closest('li').addClass('vc_button-wrap'),
			$buttonRight = $('> li.vc_pull-right:not(.vc_show-mobile)', $navBarUl),
			$undoLi = $('#vc_navbar-undo', $navBarUl).closest('li').addClass('vc_undo-li'),
			$redoLi = $('#vc_navbar-redo', $navBarUl).closest('li').addClass('vc_redo-li'),
			button_length = $('> button', $buttonWrap).length;

		$buttonWrap.addClass( 'button-lenght-' + button_length );

		$('#vc_add-new-element', $navBarUl).closest('li').addClass('do_not_show_if_sided');
		$('#vc_templates-editor-button', $navBarUl).closest('li').addClass('do_not_show_if_sided');

		var _frontendEditorSidebarSwitch = function( switched ){

			if ( switched === true ) {
				$('#vc_navbar-sidebar-switch', $navBar).find('.fa-minimize').removeClass('fa-minimize').addClass('fa-maximize');
				$buttonWrap.after('<li class="hidden" id="vc_frontend-sidebar-switch-placeholder-li" />');
				var $placeholder = $('#vc_frontend-sidebar-switch-placeholder-li', $navBarUl).after($buttonWrap);
				$navBarUl.append($buttonWrap);
				$buttonRight = $('> li.vc_pull-right:not(.vc_show-mobile)', $navBarUl);
				$buttonRight.each(function(){
					if ( $(this).is( $undoLi ) || $(this).is( $redoLi ) ) {
						$navBarUl.prepend($(this));
					} else {
						$placeholder.after($(this));
					}
				});
			} else {
				$('#vc_navbar-sidebar-switch', $navBar).find('.fa-maximize').removeClass('fa-maximize').addClass('fa-minimize');
				var $placeholder = $('#vc_frontend-sidebar-switch-placeholder-li', $navBarUl).after($buttonWrap);
				$buttonRight = $('> li.vc_pull-right:not(.vc_show-mobile)', $navBarUl);
				$buttonRight.each(function(){
					$buttonWrap.after($(this));
				});
				$placeholder.remove();
			}

			window.parent.jQuery( window.parent.document ).trigger( 'vc_frontend-sidebar-switch', switched );
			Waypoint.refreshAll();

		};

		var _vcFocusAfterAddElementWindow = function(){

			if ( window.localStorage['vc_frontend-sidebar-switch'] === 'on' ) {

				var _add_view = window.parent.vc.add_element_block_view,
					$add_view_cid = _add_view.cid,
					_edit_view = window.parent.vc.edit_element_block_view;

				_add_view.on('render', function(){
					var $el = _add_view.$el;
					_edit_view.hide();
					if ( typeof window.parent.vc.row_layout_editor !== 'undefined' && window.parent.vc.row_layout_editor.$el.hasClass('vc_active') ) {
						window.parent.vc.row_layout_editor.hide();
					} else {
						$('ul.wpb-content-layouts > li:visible', $el).removeClass('vc_add_element_anim');
						$.each($('ul.wpb-content-layouts > li:visible', $el), function(index, val) {
							setTimeout(function(){
								$(val).addClass('vc_add_element_anim');
							}, ( ( 15 * (index+1) ) - 15 ) );
						});
					}
				});

				_edit_view.on('render', function(){
					if ( $add_view_cid !== _add_view.cid ) {
						_add_view.hide();
						$add_view_cid = _add_view.cid;
					}
					if ( typeof window.parent.vc.row_layout_editor !== 'undefined' && window.parent.vc.row_layout_editor.$el.hasClass('vc_active') ) {
						window.parent.vc.row_layout_editor.hide();
					}
				});

			}

		};

		if ( window.localStorage['vc_frontend-sidebar-switch'] === 'on' ) {
			$('body', parent.document).addClass('vc-sidebar-switch');
			_frontendEditorSidebarSwitch( true );
			window.parent.vc.add_element_block_view.render(!1);
			window.parent.jQuery( window.parent.document ).trigger( 'vc_frontend-sidebar-switch', true );
		}

		_vcFocusAfterAddElementWindow();
		var $sidebarswitch = $( '#vc_navbar-sidebar-switch', parent.document );

		$sidebarswitch.on( 'click', function(e){

			e.preventDefault();

			$('body', parent.document).toggleClass('vc-sidebar-switch');

			if ( window.localStorage['vc_frontend-sidebar-switch'] === 'on' ) {
				window.localStorage.removeItem('vc_frontend-sidebar-switch');

				if ( $('#vc_ui-panel-add-element', parent.document ).hasClass( 'vc_active' ) ) {
					window.parent.vc.add_element_block_view.hide();
				}
			} else {
				window.localStorage['vc_frontend-sidebar-switch'] = 'on';
				_vcFocusAfterAddElementWindow();
				if ( ! $('#vc_ui-panel-edit-element', parent.document ).hasClass( 'vc_active' ) ) {
					window.parent.vc.add_element_block_view.render(!1);
				}
			}
			_frontendEditorSidebarSwitch( window.localStorage['vc_frontend-sidebar-switch'] === 'on' );

		});

		window.parent.vc.events.on('shortcodeView:destroy', function(model) {
			if ( window.localStorage['vc_frontend-sidebar-switch'] === 'on' ) {
				window.parent.vc.add_element_block_view.render(!1);
			}
		});

		$( '.vc_ui-close-button', parent.document ).on( 'click', function(){
			if ( $( 'body', parent.document ).hasClass( 'vc-sidebar-switch' ) ) {
				window.parent.vc.add_element_block_view.render(!1);
			}
		});

		$( '.vc_control-btn-layout', parent.document ).on( 'click', function(){
			if ( $( 'body', parent.document ).hasClass( 'vc-sidebar-switch' ) ) {
				window.parent.vc.add_element_block_view.hide();
			}
		});

	};

	UNCODE.frontendEditorSafeMode = function(){
		var $navBar = $('#vc_navbar', parent.document);

		if ( window.localStorage['vc_frontend-safe-mode'] === 'on' ) {
			$('body').addClass('vc-safe-mode');
			$('#vc_navbar-safe-mode', $navBar).find('.fa-marquee-plus').removeClass('fa-marquee-plus').addClass('fa-marquee-minus');
		}

		var $safemode = $( '#vc_navbar-safe-mode', parent.document );
		$safemode.on( 'click', function(e){
			e.preventDefault();
			$('body').toggleClass('vc-safe-mode');
			if ( window.localStorage['vc_frontend-safe-mode'] === 'on' ) {
				$('#vc_navbar-safe-mode', $navBar).find('.fa-marquee-minus').removeClass('fa-marquee-minus').addClass('fa-marquee-plus');
				window.localStorage.removeItem('vc_frontend-safe-mode');
			} else {
				$('#vc_navbar-safe-mode', $navBar).find('.fa-marquee-plus').removeClass('fa-marquee-plus').addClass('fa-marquee-minus');
				window.localStorage['vc_frontend-safe-mode'] = 'on';
			}
			Waypoint.refreshAll();
		});
	};

	UNCODE.vcFrontendMoveControls = function(model){
		if ( typeof model.view !== 'undefined' ) {
			var $el = model.view.$el,
				shortcode = model.attributes.shortcode,
				$controls = model.view.$controls;
		} else {
			var $el = model.closest('.boomapps_vccolumn'),
				shortcode = 'vc_column',
				$controls = model;
		}

		if ( typeof $el !== 'undefined' && ( shortcode === 'vc_column' || shortcode === 'vc_column_inner' || shortcode === 'vc_section' ) ) {
			var $controls = $controls.addClass('moved_controls'),
				uncol_class = $('.uncol', $el).attr('class');
			$el.prepend( $controls );

			if ( typeof uncol_class !== 'undefined' && uncol_class.match(/shift_x(.*?)[^\s]+/g) ) {
				var class_shift_x = uncol_class.match(/shift_x(.*?)[^\s]+/g);
				$('.vc_controls-out-tl', $controls).addClass( class_shift_x[0] );
			}

			if ( typeof uncol_class !== 'undefined' && uncol_class.match(/shift_y(.*?)[^\s]+/g) ) {
				var class_shift_y = uncol_class.match(/shift_y(.*?)[^\s]+/g);
				$('.vc_controls-out-tl', $controls).addClass( class_shift_y[0] );
			}
		}
	};

	if ( typeof window.parent.vc !== 'undefined' ) {

		window.parent.vc.events.on("app.render", function() {

			$('html, body', parent.document).css({
				'overflow':'hidden'
			});

			UNCODE.frontendEditorNavbar();
			UNCODE.frontendEditorSidebarSwitch();
			UNCODE.frontendEditorSafeMode();

			$('.added-owl-item').removeClass('added-owl-item');
			$('.vc_welcome-header').add('.vc_welcome-brand').add('#vc_no-content-add-text-block').remove();
			$('#vc_no-content-helper .vc_ui-help-block a').attr('href','https://support.undsgn.com/hc/en-us');
			if (SiteParameters.wireframes_plugin_active) {
				appendWireframesButton();
			}

			UNCODE.initVCfront();

			window.parent.vc.removePreLoader();
			window.parent.vc.removeOverlaySpinner();

			var setCTA;

			window.parent.vc.events.on('vc_column:render', function($col) {
				clearRequestTimeout(setCTA);
				setCTA = requestTimeout(function(){
					window.dispatchEvent(new CustomEvent('resize'));
				},10);
			});

		});

		document.addEventListener('keydown', function(e) {
			window.parent.listenKeyboardEvents(e, window.parent, false);
		});

		$(window).on("all_shortcodes:ready", function() {

			$(document).on('mouseout', '.vc_el_just_added', function(){
				$(this).removeClass('vc_el_just_added');
			});

			window.parent.vc.events.on('shortcodeView:ready', function(model) {
				requestTimeout(function(){
					var $el = model.view.$el,
						cid = model.cid,
						shortcode = model.attributes.shortcode;

					if ( shortcode === 'vc_custom_heading' && typeof $el !== 'undefined' ) {
						var $parent_row = $el.closest('.row');
						requestTimeout(function(){
							UNCODE.initRow($parent_row[0]);
						}, 250);
					}

					setTimeout(function(){
						$el.closest('.vc_row[data-parent]').removeClass('vc_el_just_added');
					}, 5000);

					if ( shortcode === 'vc_row' && typeof $el !== 'undefined' && ! isInViewport( $el ) ) {
						var el_offset = $el.offset();
						el_offset.top -= 20;

						$('html, body').animate({
							scrollTop: el_offset.top,
						}, 150);
					}

					UNCODE.lightbox();

				}, 100);

				var $el = model.view.$el,
					row = $el.parents('.row-parent').eq(0)[0],
					shortcode = model.attributes.shortcode,
					$isotope = $('.isotope-layout', $el).eq(0),
					$closest_carousel = $el.closest('.owl-carousel').attr('data-front-edited','true'),
					$inner_carousel = $('.owl-carousel', $el);

				if ( $closest_carousel.length || $inner_carousel.length ) {
					$( window ).trigger( 'frontend:carousel_updated' );
				}
			});
		});

		$(document).on('mouseover', '.vc_row[data-parent], [data-tag="vc_section"]', function(){
			var $row = $(this),
				$controls = $row.find('[data-tag="vc_column"] >.vc_controls-column.vc_controls:not(.moved_controls)', '[data-tag="vc_column_inner"] >.vc_controls-column.vc_controls:not(.moved_controls), >.vc_controls-container.vc_controls:not(.moved_controls)');

			if ( $controls.length ) {
				$controls.each(function(){
					var $control = $(this);
					UNCODE.vcFrontendMoveControls($control);
				})
			}
		});

		var item_to_add = false;
		window.parent.vc.events.on('added-owl-item', function(model) {
			item_to_add = true;
			window.parent.vc.events.on('changeLayout', function(model) {
				if ( item_to_add === true ) {
					var $slider = model.view.$el.closest('.uncode-slider'),
						carousel_id = $('.owl-carousel', $slider).attr('id'),
						$new_slide = $('.added-owl-item', $slider).removeClass('added-owl-item').closest('.vc_element.vc_row').last();

					if ( $new_slide.length ) {
						var randID = Math.round(new Date().getTime() + (Math.random() * 100));
						$( document.body ).trigger( 'added-owl-item', [ carousel_id, $new_slide, randID ] );
					}

					UNCODE.vcFrontendMoveControls( model );
					item_to_add = false;
				}
			});

		});

		window.parent.vc.events.on("undoredo:lock", function() {
			window.parent.vc.createPreLoader();
			window.parent.vc.createOverlaySpinner();
		});

		window.parent.vc.events.on("undoredo:unlock", function() {
			window.dispatchEvent(new CustomEvent('resize'));
			window.parent.vc.removePreLoader();
			window.parent.vc.removeOverlaySpinner();
		});

		window.parent.vc.events.on( "vc.update-slider", function(model) {
			var $slider_cont = model.view.$el.find('.uncode-slider'),
				$slider = $slider_cont.find(' > .owl-carousel'),
				$slider_dots = $slider_cont.find('.owl-dots'),
				slider_dots_class = $slider_dots.attr('class'),
				carousel_id = $slider.attr('id'),
				params = model.changed.params,
				old_params = model._previousAttributes.params;

			var $carousel = $('#' + carousel_id).data('owl.carousel');
			$carousel.destroy();

			for (var p in params) {
				if( params.hasOwnProperty(p) && ( ! old_params.hasOwnProperty(p) || ( params[p] !== old_params[p] ) ) ) {
					switch( p ) {
						case 'slider_type':
							if ( params[p] !== '' ) {
								$slider.attr( 'data-fade', params[p].toString() );
								$carousel.settings.animateIn = 'fadeIn';
								$carousel.settings.animateOut = 'fadeOut';
							} else {
								$slider.removeAttr( 'data-fade' );
								$carousel.settings.animateIn = null;
								$carousel.settings.animateOut = null;
							}

							break;
						case 'slider_hide_dots':
							$slider.attr( 'data-dotsmobile', params[p].toString() ).attr( 'data-dots', params[p].toString() );

							$carousel.settings.dotsmobile = !params[p];
							$carousel.settings.dots = !params[p];
							break;
						case 'slider_dot_position':
							var old_param = old_params[p] === '' ? 'center' : old_params[p],
								param = params[p] === '' ? 'center' : params[p];
							$slider_cont.removeClass('owl-dots-align-' + old_param).addClass('owl-dots-align-' + param);
							break;
						case 'slider_hide_arrows':
							$slider.attr( 'data-nav', params[p].toString() );

							$carousel.settings.nav = !params[p];
							break;
						case 'slider_dots_space':
							if ( params[p] !== '' ) {
								$slider_cont.addClass('owl-dots-db-space');
							} else {
								$slider_cont.removeClass('owl-dots-db-space');
							}
							break;
						case 'slider_dot_width':
							if ( params[p] !== '' ) {
								if ( slider_dots_class.indexOf('limit-width') == -1 ) {
									slider_dots_class += ' limit-width';
								}
							} else {
								if ( slider_dots_class.indexOf('limit-width') != -1 ) {
									slider_dots_class = slider_dots_class.replace(" limit-width", "");
									slider_dots_class = slider_dots_class.replace("limit-width ", "");
									slider_dots_class = slider_dots_class.replace("limit-width", "");
								}
							}
							break;
						case 'h_padding':
							if ( params[p] != old_params[p] ) {
								switch (old_params[p]) {
									case '0':
										slider_dots_class = slider_dots_class.replace(" no-h-padding", "");
										slider_dots_class = slider_dots_class.replace("no-h-padding", "");
										break;
									case '1':
										slider_dots_class = slider_dots_class.replace(" one-h-padding", "");
										slider_dots_class = slider_dots_class.replace("one-h-padding", "");
										break;
									case '3':
										slider_dots_class = slider_dots_class.replace(" double-h-padding", "");
										slider_dots_class = slider_dots_class.replace("double-h-padding", "");
										break;
									case '4':
										slider_dots_class = slider_dots_class.replace(" triple-h-padding", "");
										slider_dots_class = slider_dots_class.replace("triple-h-padding", "");
										break;
									case '5':
										slider_dots_class = slider_dots_class.replace(" quad-h-padding", "");
										slider_dots_class = slider_dots_class.replace("quad-h-padding", "");
										break;
									case '6':
										slider_dots_class = slider_dots_class.replace(" penta-h-padding", "");
										slider_dots_class = slider_dots_class.replace("penta-h-padding", "");
										break;
									case '7':
										slider_dots_class = slider_dots_class.replace(" exa-h-padding", "");
										slider_dots_class = slider_dots_class.replace("exa-h-padding", "");
										break;
									case '2':
									default:
										slider_dots_class = slider_dots_class.replace(" single-h-padding", "");
										slider_dots_class = slider_dots_class.replace("single-h-padding", "");
										break;
								}
								switch (params[p]) {
									case '0':
										slider_dots_class += " no-h-padding";
										break;
									case '1':
										slider_dots_class += " one-h-padding";
										break;
									case '3':
										slider_dots_class += " double-h-padding";
										break;
									case '4':
										slider_dots_class += " triple-h-padding";
										break;
									case '5':
										slider_dots_class += " quad-h-padding";
										break;
									case '6':
										slider_dots_class += " penta-h-padding";
										break;
									case '7':
										slider_dots_class += " exa-h-padding";
										break;
									case '2':
									default:
										slider_dots_class += " single-h-padding";
										break;
								}
							}
							break;
					}
				}
			}
			$('#' + carousel_id).owlCarousel($carousel.settings);
			$('#' + carousel_id).find('.owl-dots').attr('class', slider_dots_class);
		});

		var setShortcodeReady_cta;

		window.parent.vc.events.on('shortcodeView:ready', function(model) {

			uncode_progress_bar();

			var $el = model.view.$el,
				row = $el.parents('.row-parent').eq(0)[0],
				cid = model.cid,
				shortcode = model.attributes.shortcode;

			if ( allCids.indexOf( cid ) == -1 ) {
				allCids.push( cid );
				if ( $('body').data('all-shortcode-ready') === 'true' ) {
					$el.closest('.vc_row[data-parent]').addClass('vc_el_just_added');
				}
			}

			if ( shortcode !== 'uncode_slider' ) {
				UNCODE.carousel( $el );
			}

			if ( shortcode === 'vc_row' && typeof $el !== 'undefined' ) {
				UNCODE.initRow($el[0]);
			}

			if ( ( shortcode === 'vc_row' || shortcode === 'vc_row_inner' ) ) {
				if ( model.attributes.cloned ) {
					window.dispatchEvent(new CustomEvent('resize'));
				}
			}

			if ( shortcode === 'uncode_index' || shortcode === 'vc_gallery' ) {
				requestTimeout(function(){
					UNCODE.isotopeLayout();
					UNCODE.justifiedGallery();
				}, 250);
			}

			if ( ( shortcode === 'uncode_twentytwenty' ) ) {
				var $uncode_twentytwenty_before_img = $el.find('.twentytwenty-container > img')[0];
				if ( typeof $uncode_twentytwenty_before_img !== 'undefined' ) {
					$uncode_twentytwenty_before_img.addEventListener( 'load', UNCODE.twentytwenty, false );
				}
			}

			UNCODE.utils();

			UNCODE.vcFrontendMoveControls( model );

			clearRequestTimeout(setShortcodeReady_cta);
			setShortcodeReady_cta = requestTimeout(function(){
				$(window).trigger('all_shortcodes:ready');
				$('body').data('all-shortcode-ready', 'true');
			}, 2500);

		});

		window.parent.vc.events.on('shortcodeView:destroy', function(model) {
			var cid_index = allCids.indexOf( model.cid );
			if ( cid_index > -1 ) {
				allCids.splice(cid_index, 1);
			}
			window.dispatchEvent(new CustomEvent('resize'));
		});

		window.parent.vc.events.on('shortcodeView:updated', function(model) {

			var $el = model.view.$el,
				row = $el.parents('.row-parent').eq(0)[0],
				shortcode = model.attributes.shortcode,
				$isotope = $('.isotope-layout', $el).eq(0),
				$closest_carousel = $el.closest('.owl-carousel').attr('data-front-edited','true'),
				$inner_carousel = $('.owl-carousel', $el);

			if ( $closest_carousel.length || $inner_carousel.length ) {
				$( window ).trigger( 'frontend:carousel_updated' );
			}

			if ( typeof row !== 'undefined' ) {
				row.dispatchEvent(new CustomEvent('vc-shortcodeView-updated'));
			}

			if ( ( shortcode === 'vc_row' || shortcode === 'vc_row_inner' || shortcode === 'vc_column' || shortcode === 'vc_column_inner' || shortcode === 'vc_gallery' || shortcode === 'uncode_index' ) && typeof $el !== 'undefined' ) {
				var $parent = $el.closest('.row-parent').length ? $el.closest('.row-parent') : $el;
				$parent.find('.cols-md-responsive, .cols-sm-responsive').removeClass('cols-md-responsive').removeClass('cols-sm-responsive');
				UNCODE.initRow($parent[0]);
				document.dispatchEvent(new CustomEvent('DOMContentLoaded'));
				window.dispatchEvent(new CustomEvent('resize'));
				UNCODE.okvideo();
			}

			// if ( ( shortcode === 'vc_row_inner' || shortcode === 'vc_custom_heading' ) && typeof $el !== 'undefined' ) {
				window.dispatchEvent(new CustomEvent('vc-resize'));
			// }

			if ( shortcode === 'vc_single_image' || shortcode === 'vc_gallery' ) {
				UNCODE.adaptive();
			}

			requestTimeout(function(){
				UNCODE.isotopeLayout();
				UNCODE.justifiedGallery();
				$( document.body ).trigger('isotope-shortcodeView-updated');
			}, 250);

			if ( ( shortcode === 'uncode_twentytwenty' ) ) {
				var $uncode_twentytwenty_before_img = $el.find('.twentytwenty-container > img')[0];
				if ( typeof $uncode_twentytwenty_before_img !== 'undefined' ) {
					$uncode_twentytwenty_before_img.addEventListener( 'load', UNCODE.twentytwenty, false );
				}
			}

			if ( typeof $el !== 'undefined' && ( shortcode === 'vc_row' ) && $el.find('.row-slider').length && $el.find('.owl-carousel').length ) {
				var current_height = model.changed.params.row_height_percent,
					previous_height = model._previousAttributes.params.row_height_percent;

				if ( current_height !== previous_height ) {
					if ( current_height == 0 ) {
						$el.find('.owl-carousel').removeClass('owl-height-forced').addClass('owl-height-auto');
					} else {
						$el.find('.owl-carousel').removeClass('owl-height-auto').addClass('owl-height-forced');
					}
					window.dispatchEvent(new CustomEvent('resize'));
				}
			}

			if ( shortcode === 'uncode_slider' ) {
				UNCODE.carousel( $el );
			}

			UNCODE.utils();

			UNCODE.vcFrontendMoveControls( model );

		});

		var footer_Controls_position = function(){
			if ( SiteParameters.is_frontend_editor ) {
				var $colophon = $('#colophon'),
					$credits = $('.footer-last', $colophon),
					creditsH,
					$controls = $('.vc_controls-content_block .vc_controls-cc', $colophon);

				if ( $credits.length && $controls.length ) {
					creditsH = $credits.outerHeight();
					$controls.css({
						'margin-top': creditsH * -0.5
					})
				}
			}
		}

		window.parent.vc.events.on("app.render", footer_Controls_position);

		var setTO_footer_ctrls;
		$(window).on( 'resize', function(){
			clearRequestTimeout(setTO_footer_ctrls);
			setTO_footer_ctrls = requestTimeout( footer_Controls_position, 100 );
		});

		function appendWireframesButton() {
			var addElementButton = $('#vc_not-empty-add-element');

			if (addElementButton.length > 0) {
				addElementButton.parent().append('<a id="vc_templates-more-layouts" class="vc_add-element-not-empty-button" ><i class="fa fa-layout"></i></a>');
			}
		}
	}

})(jQuery);
