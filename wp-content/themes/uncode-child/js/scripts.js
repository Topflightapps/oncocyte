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
			<div class="about-us-first-section--rounded-icon-1-3 white"></div>
			<div class="about-us-first-section--rounded-icon-1-3 white"></div>
			<div class="about-us-first-section--rounded-icon-1-3 white"></div>`);

			setSection1Heights();
		}

		$(window).resize(function() {
			setSection1Heights();
		});
	})

	function setSection1Heights() {

		var section1Image = $('.about-us-first-section--image').find('img');
		var section1ImageHeight = section1Image.outerHeight();
		var blueBgHeight = 100 + $('.about-us-first-section--heading').outerHeight() + $('.about-us-first-section--paragraph').outerHeight() + 50;

		$('.about-us-first-section').outerHeight((section1ImageHeight / 100 * 110));
		$('.about-us-first-section--grey-bg').outerHeight(section1ImageHeight);
		$('.about-us-first-section--blue-bg').outerHeight(blueBgHeight).css({top: `${(section1ImageHeight / 3) - 50}px`});
		$('.about-us-first-section--heading').css({top: `${section1ImageHeight / 3}px`})
		$('.about-us-first-section--paragraph').css({top: `${section1ImageHeight / 3 + 42 + $('.about-us-first-section--heading').outerHeight()}px`})

	}
})(jQuery);