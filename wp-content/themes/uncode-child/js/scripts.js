(function($) {
	let screenWidth = window.innerWidth;
	$(document).ready(function(){

		/* ABOUT US PAGE */
		if ($('.about-us-first-section').length) {
			$('.about-us-first-section').append(`
			<div class="about-us-first-section--grey-bg"></div>
			<div class="about-us-first-section--blue-bg"></div>
			<div class="rounded-icons rounded-icons-type-1">
				<div class="rounded-icon white"></div>
				<div class="rounded-icon white"></div>
				<div class="rounded-icon white"></div>
			</div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 white"></div>
				<div class="rounded-icon-2 white"></div>
				<div class="rounded-icon-3 white"></div>
			</div>
			<div class="rounded-icons rounded-icons-type-3">
				<div class="rounded-icon-1 white"></div>
				<div class="rounded-icon-2 white"></div>
				<div class="rounded-icon-3 white"></div>
			</div>
			`);

			setAboutUsSection1Heights();
		}

		if ($('.about-us-second-section').length) {
			$('.about-us-second-section').append(`
				<div class="about-us-second-section--grey-bg"></div>
				<div class="about-us-second-section--blue-bg"></div>
				<div class="rounded-icons rounded-icons-type-2 first">
					<div class="rounded-icon-1 white"></div>
					<div class="rounded-icon-2 white"></div>
					<div class="rounded-icon-3 white"></div>
				</div>
				<div class="rounded-icons rounded-icons-type-2 second">
					<div class="rounded-icon-1 white"></div>
					<div class="rounded-icon-2 white"></div>
					<div class="rounded-icon-3 white"></div>
				</div>
			`);
			setAboutUsSection2Heights();
		}

		if ($('.about-us-leadership').length) {
			var count = 1;
			$('.about-us-leadership .leadership-member').each(function(index, element) {
				$(this).addClass(`leadership-member-${count}`);
				count++;
			})
			$('.about-us-leadership').append(`
			<div class="leadership--grey-bg-large"></div>
			<div class="leadership--grey-bg-small"></div>
			<div class="rounded-icons rounded-icons-type-1">
				<div class="rounded-icon white"></div>
				<div class="rounded-icon white"></div>
				<div class="rounded-icon white"></div>
			</div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 blue"></div>
				<div class="rounded-icon-2 blue"></div>
				<div class="rounded-icon-3 blue"></div>
			</div>
			`);
			setAboutUsLeadershipHeights();
		}

		if ($('.about-us-fourth-section').length) {
			var greyBg = document.createElement("div");
			var blueBg = document.createElement("div");
			greyBg.classList.add("about-us-fourth-section--grey-bg");
			blueBg.classList.add("about-us-fourth-section--blue-bg");
			$('.about-us-fourth-section').append(greyBg).append(blueBg).append(`
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 white"></div>
				<div class="rounded-icon-2 white"></div>
				<div class="rounded-icon-3 white"></div>
			</div>
			`);
			setAboutUsSection4Heights();
		}

		if ($('.about-us-science-members').length) {
			var count = 1;
			$('.about-us-science-members .science-member').each(function(index, element) {
				$(this).addClass(`science-member-${count}`);
				count++;
			})
			$('.about-us-science-members').append(`<div class="science--grey-bg-large"></div><div class="science--grey-bg-small"></div>`);

			$('.about-us-science-members').append(`
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 blue"></div>
				<div class="rounded-icon-2 blue"></div>
				<div class="rounded-icon-3 blue"></div>
			</div>
			`);
			setAboutUsScienceHeights();
		}

		if ($('.about-us--section-6').length) {
			$('.about-us--section-6').append(`
			<div class="section-6--grey-bg"></div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 blue"></div>
				<div class="rounded-icon-2 blue"></div>
				<div class="rounded-icon-3 blue"></div>
			</div>
			`);
			setAboutUsSection6Heights();
		}

		if ($('.about-us--upcoming-events').length) {

			$('.about-us--upcoming-events').append(`
				<div class="upcoming-events--grey-bg"></div>
				<div class="rounded-icons rounded-icons-type-2">
					<div class="rounded-icon-1 blue"></div>
					<div class="rounded-icon-2 blue"></div>
					<div class="rounded-icon-3 blue"></div>
				</div>
			`);
		}
		/* END ABOUT US PAGE */

		/* LEADERSHIP PAGE */
		if ($('.leadership--section-1').length) {
			$('.leadership--section-1').append(`
			<div class="grey-bg"></div>
			<div class="blue-bg"></div>
			<div class="rounded-icons rounded-icons-type-1">
				<div class="rounded-icon white"></div>
				<div class="rounded-icon white"></div>
				<div class="rounded-icon white"></div>
			</div>
			`);
			setLeadershipSection1Heights();
		}

		if ($('.leadership-page--member').length) {
			$('.leadership-page--member').each(function(index,element) {
				$(this).append(`
					<div class="grey-bg"></div>
					<div class="rounded-icons rounded-icons-type-2">
						<div class="rounded-icon-1"></div>
						<div class="rounded-icon-2"></div>
						<div class="rounded-icon-3"></div>
					</div>
				`)
			});
			setLeadershipPageMemberHeights();
		}
		
		/* END LEADERSHIP PAGE */

		if ($('.custom-contact-form').length) {
			$('.custom-contact-form').append(`
				<div class="contact-form--grey-bg"></div>
				<div class="contact-form--color-bg"></div>
				<div class="rounded-icons rounded-icons-type-2">
					<div class="rounded-icon-1 white"></div>
					<div class="rounded-icon-2 white"></div>
					<div class="rounded-icon-3 white"></div>
				</div>
			`);

			setContactHeights();
		}

		$(window).resize(function() {
			screenWidth = window.innerWidth;
			/* ABOUT US PAGE */
			if ($('.about-us-first-section').length) {
				setAboutUsSection1Heights();
			}
			if ($('.about-us-second-section').length) {
				setAboutUsSection2Heights();
			}
			if ($('.about-us-leadership').length) {
				setAboutUsLeadershipHeights();
			}
			if ($('.about-us-fourth-section').length) {
				setAboutUsSection4Heights();
			}
			if ($('.about-us-science-members').length) {
				setAboutUsScienceHeights();
			}
			if ($('.about-us--section-6').length) {
				setAboutUsSection6Heights();
			}
			if ($('.custom-contact-form').length) {
				setContactHeights();
			}
			/* END ABOUT US PAGE */

			/* LEADERSHIP PAGE */
			if ($('.leadership--section-1').length) {
				setLeadershipSection1Heights();
			}
			if ($('.leadership-page--member').length) {
				setLeadershipPageMemberHeights();
			}
			/* END LEADERSHIP PAGE */
		});
	})

	function setAboutUsSection1Heights() {
		const headingMobileTop = 80;
		const headingDesktopTop = 50;

		var blueBgHeight = (screenWidth < 768 ? headingMobileTop : headingDesktopTop) + $('.about-us-first-section--heading').outerHeight() + 42 + $('.about-us-first-section--paragraph').outerHeight() + 50;
		var greyBgHeight = blueBgHeight + 85 + 80;
		var firstSectionHeight = greyBgHeight + 46;
		var greyBgTop = 46;
		var blueBgTop = greyBgTop + 86;

		if (screenWidth < 768) {
			blueBgTop = 40;
			firstSectionHeight = blueBgHeight + 46;
		}

		$('.about-us-first-section').outerHeight(firstSectionHeight);
		$('.about-us-first-section--image').css({"height": `${firstSectionHeight - 30}px`});
		$('.about-us-first-section--grey-bg').outerHeight((blueBgHeight + 86 + 80)).css({top: `${greyBgTop}px`});
		$('.about-us-first-section--blue-bg').outerHeight(blueBgHeight).css({top: `${blueBgTop}px`});
		$('.about-us-first-section--heading').css({top: `${blueBgTop + (screenWidth < 768 ? headingMobileTop : headingDesktopTop)}px`})
		$('.about-us-first-section--paragraph').css({top: `${blueBgTop + 50 + 42 + $('.about-us-first-section--heading').outerHeight()}px`})
	}

	function setAboutUsSection2Heights() {
		var blueBgHeight = 60 + $('.about-us-second-section--heading').outerHeight() + 32 + $('.about-us-second-section--content').outerHeight() + 60;
		var greyBgHeight = (blueBgHeight / 100) * 90;
		var secondSectionHeight = blueBgHeight + 150;
		var greyBgTop = 40;
		var blueBgTop = greyBgTop + 100;
		var imageHeight = secondSectionHeight / 7 * 4;
		var contentTop = blueBgTop + 50 + 32 + $('.about-us-second-section--heading').outerHeight();

		if (screenWidth < 768) {
			blueBgTop = greyBgTop;
			imageHeight = $('.about-us-second-section').outerWidth() / 3;
			greyBgHeight = blueBgHeight + 60;
			secondSectionHeight = greyBgHeight;
			const aux = (50 + 32 + $('.about-us-second-section--heading').outerHeight())
			contentTop = aux > (imageHeight + 10) ? aux : imageHeight + 10;
		}

		$('.about-us-second-section').outerHeight(secondSectionHeight);
		$('.about-us-second-section--image').css({"height": `${imageHeight}px`});
		$('.about-us-second-section--grey-bg').outerHeight(greyBgHeight).css({top: `${greyBgTop}px`});
		$('.about-us-second-section--blue-bg').outerHeight(blueBgHeight).css({top: `${blueBgTop}px`});
		$('.about-us-second-section .rounded-icons.second').css({top: `${blueBgTop - 20}px`});
		$('.about-us-second-section--heading').css({top: `${blueBgTop + 50}px`})
		$('.about-us-second-section--content').css({top: `${contentTop}px`})
	}

	function setAboutUsLeadershipHeights() {
		$('.about-us-leadership .leadership-member').each(function(index, element) {
			var top = $(this).find('.leadership-member--name').outerHeight();
			$(this).find('.leadership-member--title').css('top', `${top + 2}px`);
		})

		let greyBgLargeHeight = (4 * (200 + 60) + 60 + 50);

		if (screenWidth < 768) {
			greyBgLargeHeight = $('.about-us-leadership').outerHeight() - $('.about-us-leadership .leadership--title-small').outerHeight() - $('.about-us-leadership .leadership--title').outerHeight()
		}
		
		$('.about-us-leadership .rounded-icons.rounded-icons-type-1').css('top', `${200 + 60 + 60}px`);
		$('.about-us-leadership .rounded-icons.rounded-icons-type-2').css('top', `${3 * (200 + 60) + 60}px`);
		$('.leadership--grey-bg-small').outerHeight((200 / 100 * 155));
		$('.leadership--grey-bg-large').css('height', `${greyBgLargeHeight}px`);
	}

	function setAboutUsSection4Heights() {
		var paddingTop = 45;
		if (screenWidth < 768) {
			paddingTop = 85;
		}
		var blueBgHeight = 35 + $('.about-us-fourth-section--heading').outerHeight() + 32 + $('.about-us-fourth-section--content').outerHeight() + paddingTop;
		var greyBgHeight = blueBgHeight + paddingTop + 80;

		$('.about-us-fourth-section').outerHeight(greyBgHeight);
		$('.about-us-fourth-section--image').find('img').css({"max-height": `${greyBgHeight / 100 * 70}px`});
		$('.about-us-fourth-section--grey-bg').outerHeight(greyBgHeight);
		$('.about-us-fourth-section--blue-bg').outerHeight(blueBgHeight);
		$('.about-us-fourth-section--heading').css({top: `${paddingTop + 35}px`})
		$('.about-us-fourth-section--content').css({top: `${paddingTop + 35 + $('.about-us-fourth-section--heading').outerHeight() + 32}px`})
	}

	function setAboutUsScienceHeights() {
		$('.about-us-science-members .science-member').each(function(index, element) {
			var top = $(this).find('.science-member--name').outerHeight();
			$(this).find('.science-member--title').css('top', `${top + 2}px`);
		})

		let greyBgLargeHeight = (3 * (200 + 60) + 60 + 50);

		if (screenWidth < 768) {
			greyBgLargeHeight = $('.about-us-science-members').outerHeight() - $('.about-us-science-members .science--title-small').outerHeight() - $('.about-us-science-members .science--title').outerHeight()
		}

		$('.science--grey-bg-small').outerHeight((200 / 100 * 155));
		$('.science--grey-bg-large').css('height', `${greyBgLargeHeight}px`);
	}

	function setAboutUsSection6Heights() {
		const leftHeight = $('.about-us--section-6 .about-us-section-6-heading').outerHeight() + parseInt($('.about-us--section-6 .about-us-section-6-heading').css('margin-bottom')) + $('.about-us--section-6 .about-us-section-6-content').outerHeight();
		const rightHeight = $('.about-us--section-6 .about-us--section-6-image').outerHeight();
		let sectionHeight = (leftHeight > (rightHeight + 100) ? leftHeight : (rightHeight + 170));

		if (screenWidth < 768) {
			sectionHeight = leftHeight;
		}
		$('.about-us--section-6').css('height', `${parseInt($('.about-us--section-6').css('padding-top')) + parseInt($('.about-us--section-6').css('padding-bottom')) + sectionHeight}px`);
	}

	function setLeadershipSection1Heights() {
		const blueBgHeight = 40 + $('.leadership--section-1 .heading-second').outerHeight() + $('.leadership--section-1 .heading-third').outerHeight() + 50;
		const blueBgTop = 20 + $('.leadership--section-1 .heading-first').outerHeight() + 20;
		let greyBgHeight = blueBgTop + blueBgHeight + 75;
		const imageMaxHeight = greyBgHeight - 60;

		if (screenWidth < 768) {
			greyBgHeight = $('.leadership--section-1 .heading-third').outerHeight() + 30;
		}

		$('.leadership--section-1').css({height: `${greyBgHeight}px`});
		$('.leadership--section-1 .grey-bg').css({height: `${greyBgHeight}px`});
		$('.leadership--section-1 .blue-bg').css({height: `${blueBgHeight}px`, top: `${blueBgTop}px`});
		$('.leadership--section-1 .rounded-icons').css({top: `${blueBgTop - 10}px`});
		$('.leadership--section-1 .section-1-image img').css({'max-height': `${imageMaxHeight}px`});
	}
	function setLeadershipPageMemberHeights() {
		$('.leadership-page--member').each(function(index,element) {
			let greyBgHeight = $(this).find('.leader--name').outerHeight() + 10 + $(this).find('.leader--title').outerHeight() + 10 + $(this).find('.leader--bio').outerHeight();
			let imageMaxHeight = ( greyBgHeight - 200 > 500 ? greyBgHeight - 200 : 500 );

			greyBgHeight = 60 + greyBgHeight + 120;
			if (greyBgHeight < 800) {
				greyBgHeight = 800;
			}
			let containerHeight = greyBgHeight;

			if (screenWidth < 768) {
				const nameLeft = $(this).find('.leader--image').outerWidth();
				const nameHeight =  $(this).find('.leader--name').outerHeight();
				const titleHeight =  $(this).find('.leader--title').outerHeight();

				let top = 200 - nameHeight - 10 - titleHeight;

				$(this).find('.leader--name').css({left: `${nameLeft}px`, top: `${top}px`});
				$(this).find('.leader--title').css({left: `${nameLeft}px`, top: `${top + 10 + nameHeight}px`});

				greyBgHeight = 220 + $(this).find('.leader--bio').outerHeight();
				containerHeight = greyBgHeight + 60 + 60;
			}

			$(this).css({height: `${containerHeight}px`});
			$(this).find('.grey-bg').css({height: `${greyBgHeight}px`});
			$(this).find('.leader--image img').css({'max-height': `${imageMaxHeight}px`});
		});
	}

	function setContactHeights() {
		const headingHeight = ($('.contact-form--heading').length ? $('.contact-form--heading').outerHeight() + 35 : 0);
		const addressHeight = ($('.contact-form--address').length ? $('.contact-form--address').outerHeight() + 20 : 0);
		const contactDataHeight = ($('.contact-form--contact-data').length ? $('.contact-form--contact-data').outerHeight() + 20 : 0);


		var colorBgHeight = 65 + headingHeight + addressHeight + contactDataHeight + $('.custom-contact-form .wpcf7').outerHeight() + 45;
		var greyBgHeight = colorBgHeight - 35;

		var headingTop = 0;
		var addressTop = 0;
		var contactDataTop = 0;
		var formTop = 0;

		if (screenWidth < 768) {
			colorBgHeight = $('.contact-form--image').outerHeight() - parseInt($('.contact-form--color-bg').css('top')) + headingHeight + addressHeight + contactDataHeight + $('.custom-contact-form .wpcf7').outerHeight() + 45;

			headingTop = $('.contact-form--image').outerHeight() + 30;

		} else {
			headingTop = 200;
		}
		addressTop = headingTop + headingHeight;
		contactDataTop = addressTop + addressHeight;
		formTop = contactDataTop + contactDataHeight;

		$('.contact-form--heading').css('top', `${headingTop }px`);
		if ($('.contact-form--address').length) {
			$('.contact-form--address').css('top', `${addressTop}px`);
		}
		if ($('.contact-form--contact-data').length) {
			$('.contact-form--contact-data').css('top', `${contactDataTop}px`);
		}
		$('.custom-contact-form .wpcf7').css('top', `${formTop}px`);

		$('.custom-contact-form').outerHeight((colorBgHeight + ( screenWidth < 768 ? 40 : 140)));
		$('.contact-form--image').find('img').css({"max-height": `${colorBgHeight / 100 * 85}px`});
		$('.contact-form--grey-bg').outerHeight(greyBgHeight);
		$('.contact-form--color-bg').outerHeight(colorBgHeight);
	}
})(jQuery);