(function($) {
	$(document).ready(function(){
		if ($('.about-us-first-section').length) {
			var greyBg = document.createElement("div");
			var blueBg = document.createElement("div");
			var roundedIcons = document.createElement("div");
			greyBg.classList.add("about-us-first-section--grey-bg");
			blueBg.classList.add("about-us-first-section--blue-bg");
			roundedIcons.classList.add('about-us-first-section--rounded-icons');
			$('.about-us-first-section').append(greyBg).append(blueBg).append(roundedIcons);
			$('.about-us-first-section--rounded-icons').html(`
			<div class="about-us-first-section--rounded-icon white"></div>
			<div class="about-us-first-section--rounded-icon white"></div>
			<div class="about-us-first-section--rounded-icon white"></div>`);

			setSection1Heights();
		}

		if ($('.about-us-second-section').length) {
			var greyBg = document.createElement("div");
			var blueBg = document.createElement("div");
			var roundedIcons1 = document.createElement("div");
			var roundedIcons2 = document.createElement("div");
			greyBg.classList.add("about-us-second-section--grey-bg");
			blueBg.classList.add("about-us-second-section--blue-bg");
			roundedIcons1.classList.add('about-us-second-section--rounded-icons', 'first');
			roundedIcons2.classList.add('about-us-second-section--rounded-icons', 'second');
			$('.about-us-second-section').append(greyBg).append(blueBg).append(roundedIcons1).append(roundedIcons2);
			$('.about-us-second-section--rounded-icons.first').html(`
			<div class="about-us-second-section--rounded-icon-1 white"></div>
			<div class="about-us-second-section--rounded-icon-2 white"></div>
			<div class="about-us-second-section--rounded-icon-3 white"></div>`);
			$('.about-us-second-section--rounded-icons.second').html(`
			<div class="about-us-second-section--rounded-icon-1 white"></div>
			<div class="about-us-second-section--rounded-icon-2 white"></div>
			<div class="about-us-second-section--rounded-icon-3 white"></div>`);

			setSection2Heights();
		}

		if ($('.about-us-leadership').length) {
			var count = 1;
			$('.about-us-leadership .leadership-member').each(function(index, element) {
				$(this).addClass(`leadership-member-${count}`).append(`<span class="view-button">View</span>`)
				if (count === 4) {
					$(this).css('top', `${(($(this).outerHeight() + 60) * 2)}px`)
				}
				if (count === 6) {
					$(this).css('top', `${(($(this).outerHeight() + 60) * 3)}px`)
				}
				count++;
			})
			$('.about-us-leadership').append(`<div class="leadership--grey-bg-large"></div>`);
			$('.leadership--grey-bg-large').outerHeight($('.about-us-leadership').outerHeight());
			setLeadershipHeights();
		}

		$(window).resize(function() {
			if ($('.about-us-first-section').length) {
				setSection1Heights();
			}
			if ($('.about-us-second-section').length) {
				setSection2Heights();
			}
			if ($('.about-us-leadership').length) {
				setLeadershipHeights();
			}
		});
	})

	function setSection1Heights() {
		var blueBgHeight = 50 + $('.about-us-first-section--heading').outerHeight() + 42 + $('.about-us-first-section--paragraph').outerHeight() + 50;
		var greyBgHeight = blueBgHeight + 85 + 80;
		var firstSectionHeight = greyBgHeight + 46;
		var greyBgTop = 46;
		var blueBgTop = greyBgTop + 86;

		$('.about-us-first-section').outerHeight(firstSectionHeight);
		$('.about-us-first-section--image').find('img').css({"max-height": `${firstSectionHeight - 30}px`});
		$('.about-us-first-section--grey-bg').outerHeight((blueBgHeight + 86 + 80)).css({top: `${greyBgTop}px`});
		$('.about-us-first-section--blue-bg').outerHeight(blueBgHeight).css({top: `${blueBgTop}px`});
		$('.about-us-first-section--heading').css({top: `${blueBgTop + 50}px`})
		$('.about-us-first-section--paragraph').css({top: `${blueBgTop + 50 + 42 + $('.about-us-first-section--heading').outerHeight()}px`})
	}

	function setSection2Heights() {
		var blueBgHeight = 60 + $('.about-us-second-section--heading').outerHeight() + 32 + $('.about-us-second-section--content').outerHeight() + 60;
		var greyBgHeight = (blueBgHeight / 100) * 90;
		var firstSectionHeight = blueBgHeight + 150;
		var greyBgTop = 40;
		var blueBgTop = greyBgTop + 100;

		$('.about-us-second-section').outerHeight(firstSectionHeight);
		$('.about-us-second-section--image').find('img').css({"max-height": `${firstSectionHeight - 30}px`});
		$('.about-us-second-section--grey-bg').outerHeight(greyBgHeight).css({top: `${greyBgTop}px`});
		$('.about-us-second-section--blue-bg').outerHeight(blueBgHeight).css({top: `${blueBgTop}px`});
		$('.about-us-second-section--rounded-icons.second').css({top: `${blueBgTop - 20}px`});
		$('.about-us-second-section--heading').css({top: `${blueBgTop + 50}px`})
		$('.about-us-second-section--content').css({top: `${blueBgTop + 50 + 32 + $('.about-us-second-section--heading').outerHeight()}px`})
	}

	function setLeadershipHeights() {
		$('.about-us-leadership .leadership-member').each(function(index, element) {
			var top = $(this).find('.leadership-member--name').outerHeight();
			$(this).find('.leadership-member--title').css('top', `${top + 2}px`);
		})
	}
})(jQuery);