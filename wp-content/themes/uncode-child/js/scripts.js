(function($) {
	let screenWidth = window.innerWidth;
	let aux = 0;
	let pdfUrlArray = [];

	if ($('#chart').length) {
		$('#chart').mousemove(function(event) {
			let x = event.screenX;
			let y = event.screenY-150;
			let svg1 = document.getElementById("chart");
			let blueText = document.getElementsByClassName("blue-text");
			let greenText = document.getElementsByClassName("green-text");
			let redText = document.getElementsByClassName("red-text");
			svgP1 = svgPoint(svg1, x, y);

			blueText[0].y.baseVal.value = svgP1.y + 30;
			blueText[0].x.baseVal.value = svgP1.x + 20;
			greenText[0].y.baseVal.value = svgP1.y + 30;
			greenText[0].x.baseVal.value = svgP1.x + 20;
			redText[0].y.baseVal.value = svgP1.y + 30;
			redText[0].x.baseVal.value = svgP1.x + 20;
		});
	}

	if ($('#chart1').length) {
		$('#chart1').mousemove(function(event) {
			let x = event.screenX;
			let y = event.screenY-150;
			let svg2 = document.getElementById("chart1");
			svgP2 = svgPoint(svg2, x, y);

			let blueTextUcsf = document.getElementsByClassName("blue-text-ucsf");
			let greenTextUcsf = document.getElementsByClassName("green-text-ucsf");
			let redTextUcsf = document.getElementsByClassName("red-text-ucsf");
								
			blueTextUcsf[0].y.baseVal.value = svgP2.y + 30;
			blueTextUcsf[0].x.baseVal.value = svgP2.x + 20;
			greenTextUcsf[0].y.baseVal.value = svgP2.y + 30;
			greenTextUcsf[0].x.baseVal.value = svgP2.x + 20;
			redTextUcsf[0].y.baseVal.value = svgP2.y + 30;
			redTextUcsf[0].x.baseVal.value = svgP2.x + 20;
		});
	}

	function svgPoint(element, x, y) {
		if (element && x && y) {
			var pt = element.createSVGPoint();
			pt.x = x;
			pt.y = y;
			return pt.matrixTransform(element.getScreenCTM().inverse());
		}
	}


	$(document).ready(function(){

		if ( $('#homeVideo').length ) {
			$('#homeVideo').trigger('play');
		}

		if ( $('.pdfemb-viewer').length ) {
			let count = 0;
			$('.pdfemb-viewer').each(function(event, index) {
				pdfUrlArray.push($(this).attr('href'));
				let thisClass = 'pdfemb-viewer--' + count;
				$(this).addClass(thisClass);
				count++;
			});
		}
		setTimeout(function() {
			for (let i = 0; i < pdfUrlArray.length; i++) {
				$('.pdfemb-viewer--' + i).append(`<a class="download-button" href="${pdfUrlArray[i]}">Download</a>`);
			}
		}, 2000);

		$('.blue-line').mouseenter(function(){
			console.log("entered to the blue line");
		}).mouseleave(function(){
			console.log("exited to the blue line");
		});

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

			let scrollToTarget = window.location.href.split('#')[1];
			if (scrollToTarget) {
				scrollToTarget = '.' + scrollToTarget;
				if ($(scrollToTarget).length) {
					const scrollSpeed = ($(scrollToTarget).offset().top / 300) * 150;
					$('html, body').animate({scrollTop: $(scrollToTarget).offset().top - 50}, scrollSpeed);
				}
			}
		}
		/* END LEADERSHIP PAGE */

		/* DETERMA DX PAGE */
		if ($('.determa-dx--section-1').length) {
			$('.determa-dx--section-1').append(`
			<div class="grey-bg"></div>
			<div class="purple-bg"></div>
			<div class="white-bg"></div>
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
			<div class="rounded-icons rounded-icons-type-4">
				<div class="rounded-icon-1 purple"></div>
				<div class="rounded-icon-2 purple"></div>
				<div class="rounded-icon-3 purple"></div>
			</div>
			`);
			setDetermaDxSection1Heights();
		}
		if ($('.determa-dx--section-2').length) {
			$('.determa-dx--section-2').append(`
			<div class="grey-bg"></div>
			<div class="purple-bg"></div>
			<div class="rounded-icons rounded-icons-type-1">
				<div class="rounded-icon purple"></div>
				<div class="rounded-icon purple"></div>
				<div class="rounded-icon purple"></div>
			</div>`);
			$('.determa-dx--section-2 .section-2--icon-container').append(`
				<svg version="1.1" class="icon-arrow arrow-1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.666 298.666" style="enable-background:new 0 0 298.666 298.666;" xml:space="preserve"><polygon points="249,83.333 214.333,83.333 251.352,133.333 0,133.333 0,166.333 251.822,166.333 214.333,215.333 249,215.333,298.666,150.416 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
				<svg version="1.1" class="icon-arrow arrow-2" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.666 298.666" style="enable-background:new 0 0 298.666 298.666;" xml:space="preserve"><polygon points="249,83.333 214.333,83.333 251.352,133.333 0,133.333 0,166.333 251.822,166.333 214.333,215.333 249,215.333,298.666,150.416 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
				<svg version="1.1" class="icon-arrow arrow-3" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.666 298.666" style="enable-background:new 0 0 298.666 298.666;" xml:space="preserve"><polygon points="249,83.333 214.333,83.333 251.352,133.333 0,133.333 0,166.333 251.822,166.333 214.333,215.333 249,215.333,298.666,150.416 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
			`);
			setDetermaDxSection2Heights();
		}
		if ($('.determa-dx--section-3').length) {
			$('.determa-dx--section-3').append(`<div class="grey-bg"></div>`);
			setDetermaDxSection3Heights();
		}
		if ($('.determa-dx--section-4').length) {
			$('.determa-dx--section-4').append(`
			<div class="grey-bg"></div>
			<div class="purple-bg"></div>
			<div class="rounded-icons rounded-icons-type-1">
				<div class="rounded-icon purple mirrored"></div>
				<div class="rounded-icon purple mirrored"></div>
				<div class="rounded-icon purple mirrored"></div>
			</div>`);
			setDetermaDxSection4Heights();
		}
		if ($('.determa-dx--section-5').length) {
			$('.determa-dx--section-5').append(`
			<div class="grey-bg"></div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 white"></div>
				<div class="rounded-icon-2 white"></div>
				<div class="rounded-icon-3 white"></div>
			</div>`);
			setDetermaDxSection5Heights();
		}
		/* END DETERMA DX PAGE */


		/* DETERMA RX PAGE */
		if ($('.determa-rx--section-1').length) {
			$('.determa-rx--section-1').append(`
			<div class="grey-bg"></div>
			<div class="green-bg"></div>
			<div class="white-bg"></div>
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
			<div class="rounded-icons rounded-icons-type-4">
				<div class="rounded-icon-1 green"></div>
				<div class="rounded-icon-2 green"></div>
				<div class="rounded-icon-3 green"></div>
			</div>
			`);
			setDetermaRxSection1Heights();
		}
		if ($('.determa-rx--section-2').length) {
			$('.determa-rx--section-2').append(`
			<div class="grey-bg"></div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 purple"></div>
				<div class="rounded-icon-2 purple"></div>
				<div class="rounded-icon-3 purple"></div>
			</div>`);
			setDetermaRxSection2Heights();
		}
		if ($('.determa-rx--section-3').length) {
			$('.determa-rx--section-3').append(`<div class="grey-bg"></div>`);
			setDetermaRxSection3Heights();
		}
		if ($('.determa-rx--section-4').length) {
			$('.determa-rx--section-4').append(`
			<div class="grey-bg"></div>
			<div class="green-bg"></div>
			<div class="white-bg white-bg-1"></div>
			<div class="white-bg white-bg-2"></div>
			<div class="rounded-icons rounded-icons-type-1">
				<div class="rounded-icon green"></div>
				<div class="rounded-icon green"></div>
				<div class="rounded-icon green"></div>
			</div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 white"></div>
				<div class="rounded-icon-2 white"></div>
				<div class="rounded-icon-3 white"></div>
			</div>`);
			setDetermaRxSection4Heights();
		}
		if ($('.determa-rx--section-5').length) {
			$('.determa-rx--section-5').append(`
			<div class="grey-bg"></div>
			<div class="rounded-icons rounded-icons-type-1">
				<div class="rounded-icon green"></div>
				<div class="rounded-icon green"></div>
				<div class="rounded-icon green"></div>
			</div>`);
			setDetermaRxSection5Heights();
		}
		/* END DETERMA RX PAGE */

		/* HOMEPAGE */
		if ($('.homepage--section-1').length) {
			$('.homepage--section-1').append(`
			<div class="grey-bg"></div>
			<div class="blue-bg"></div>
			<div class="white-bg"></div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 white"></div>
				<div class="rounded-icon-2 white"></div>
				<div class="rounded-icon-3 white"></div>
			</div>
			`);

			if ($('.homepage--section-1 .section-1--video-container video').length) {

				let videoCount = $('.homepage--section-1 .section-1--video-container video').length - 1;
				let random = Math.floor(Math.random() * (videoCount - 0 + 1)) + 0;
				console.log(random);
				$('.homepage--section-1 .section-1--video-container video').each(function(index,element) {
					if (random === index) {
						$(this).css({display: "block"});
					}
				})
			}
			setHomepageSection1Heights();
		}
		if ($('.homepage--section-2').length) {
			$('.homepage--section-2').append(`
			<div class="grey-bg"></div>
			<div class="purple-bg"></div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 white"></div>
				<div class="rounded-icon-2 white"></div>
				<div class="rounded-icon-3 white"></div>
			</div>
			<div class="rounded-icons rounded-icons-type-4">
				<div class="rounded-icon-1 blue mirrored"></div>
				<div class="rounded-icon-2 blue mirrored"></div>
				<div class="rounded-icon-3 blue mirrored"></div>
			</div>`);
			setHomepageSection2Heights();
		}
		if ($('.homepage--section-3').length) {
			$('.homepage--section-3').append(`
			<div class="grey-bg-first"></div>
			<div class="grey-bg-second"></div>
			<div class="rounded-icons rounded-icons-type-2 type-2-first">
				<div class="rounded-icon-1 event_blue"></div>
				<div class="rounded-icon-2 event_blue"></div>
				<div class="rounded-icon-3 event_blue"></div>
			</div>
			<div class="rounded-icons rounded-icons-type-2 type-2-second">
				<div class="rounded-icon-1 purple"></div>
				<div class="rounded-icon-2 purple"></div>
				<div class="rounded-icon-3 purple"></div>
			</div>`);
			setHomepageSection2Heights();
		}
		if ($('.homepage--section-4').length) {
			$('.homepage--section-4').append(`
			<div class="grey-bg"></div>
			<div class="blue-bg"></div>
			<div class="rounded-icons rounded-icons-type-1">
				<div class="rounded-icon white"></div>
				<div class="rounded-icon white"></div>
				<div class="rounded-icon white"></div>
			</div>`);
			setHomepageSection4Heights();
		}
		if ($('.homepage--section-5').length) {
			$('.homepage--section-5').append(`
			<div class="grey-bg"></div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 purple"></div>
				<div class="rounded-icon-2 purple"></div>
				<div class="rounded-icon-3 purple"></div>
			</div>`);
			setHomepageSection4Heights();
		}
		if ($('.homepage--section-6').length) {
			$('.homepage--section-6').append(`
			<div class="grey-bg"></div>
			<div class="orange-bg"></div>
			<div class="rounded-icons rounded-icons-type-1">
				<div class="rounded-icon event_blue"></div>
				<div class="rounded-icon event_blue"></div>
				<div class="rounded-icon event_blue"></div>
			</div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 white"></div>
				<div class="rounded-icon-2 white"></div>
				<div class="rounded-icon-3 white"></div>
			</div>`);
			setHomepageSection6Heights();
		}
		/* END HOMEPAGE */

		/* TEMPLATE PAGE*/
		if ($('.template-page--section-1').length) {
			$('.template-page--section-1').append(`
			<div class="blue-bg"></div>
			<div class="rounded-icons rounded-icons-type-2">
				<div class="rounded-icon-1 white"></div>
				<div class="rounded-icon-2 white"></div>
				<div class="rounded-icon-3 white"></div>
			</div>`);
			setTemplatePageSection1Heights();
		}
		/* END TEMPLATE PAGE */

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

		$('.scroll-to').click(function(e) {
			e.preventDefault();
			const target = $(this).attr('data-target');
			const scrollSpeed = ($(target).offset().top / 300) * 150;
			$('html, body').animate({scrollTop: $(target).offset().top - 50}, scrollSpeed);
		});

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
			/* END ABOUT US PAGE */

			/* LEADERSHIP PAGE */
			if ($('.leadership--section-1').length) {
				setLeadershipSection1Heights();
			}
			if ($('.leadership-page--member').length) {
				setLeadershipPageMemberHeights();
			}
			/* END LEADERSHIP PAGE */


			/* DETERMA DX PAGE */
			if ($('.determa-dx--section-1').length) {
				setDetermaDxSection1Heights();
			}
			if ($('.determa-dx--section-2').length) {
				setDetermaDxSection2Heights();
			}
			if ($('.determa-dx--section-3').length) {
				setDetermaDxSection3Heights();
				aux = 0;
				$('.determa-dx--section-3 .section-3--object').each(function(index, element) {
					if (aux % 2 === 1) {
						$(this).addClass('even');
					}
					aux++;
				});
			}
			if ($('.determa-dx--section-4').length) {
				setDetermaDxSection4Heights();
			}
			if ($('.determa-dx--section-5').length) {
				setDetermaDxSection5Heights();
			}
			/* END DETERMA DX PAGE */


			/* DETERMA RX PAGE */
			if ($('.determa-rx--section-1').length) {
				setDetermaRxSection1Heights();
			}
			if ($('.determa-rx--section-2').length) {
				setDetermaRxSection2Heights();
			}
			if ($('.determa-rx--section-3').length) {
				setDetermaRxSection3Heights();
				aux = 0;
				$('.determa-rx--section-3 .section-3--object').each(function(index, element) {
					if (aux % 2 === 1) {
						$(this).addClass('even');
					}
					aux++;
				});
			}
			if ($('.determa-rx--section-4').length) {
				setDetermaRxSection4Heights();
			}
			if ($('.determa-rx--section-5').length) {
				setDetermaRxSection5Heights();
				aux = 0;
				$('.determa-rx--section-5 .section-5--object').each(function(index, element) {
					if (aux % 2 === 1) {
						$(this).addClass('even');
					}
					aux++;
				});
			}
			/* END DETERMA RX PAGE */

			/* HOMEPAGE */
			if ($('.homepage--section-1').length) {
				setHomepageSection1Heights();
			}
			if ($('.homepage--section-2').length) {
				setHomepageSection2Heights();
			}
			if ($('.homepage--section-4').length) {
				setHomepageSection4Heights();
			}
			if ($('.homepage--section-6').length) {
				setHomepageSection6Heights();
			}
			/* END HOMEPAGE */

			/* TEMPLATE PAGE*/
			if ($('.template-page--section-1').length) {
				setTemplatePageSection1Heights();
			}
			/* END TEMPLATE PAGE*/

			if ($('.custom-contact-form').length) {
				setContactHeights();
			}
		});
	})

	function setAboutUsSection1Heights() {
		const headingMobileTop = 80;
		const headingDesktopTop = 50;

		let blueBgHeight = (screenWidth < 768 ? headingMobileTop : headingDesktopTop) + $('.about-us-first-section--heading').outerHeight() + 42 + $('.about-us-first-section--paragraph').outerHeight() + 50;
		let greyBgHeight = blueBgHeight + 85 + 80;
		let firstSectionHeight = greyBgHeight + 46;
		let greyBgTop = 46;
		let blueBgTop = greyBgTop + 86;
		let headingTop = blueBgTop + headingDesktopTop;
		let paragraphTop = blueBgTop + 50 + 42 + $('.about-us-first-section--heading').outerHeight();

		if (screenWidth < 768) {
			blueBgTop = 40;
			headingTop = blueBgTop + headingMobileTop;
			firstSectionHeight = blueBgHeight + 46;
			paragraphTop = headingTop + $('.about-us-first-section--heading').outerHeight() + 20;
		}

		$('.about-us-first-section').outerHeight(firstSectionHeight);
		$('.about-us-first-section--image').css({"height": `${firstSectionHeight - 30}px`});
		$('.about-us-first-section--grey-bg').outerHeight((blueBgHeight + 86 + 80)).css({top: `${greyBgTop}px`});
		$('.about-us-first-section--blue-bg').outerHeight(blueBgHeight).css({top: `${blueBgTop}px`});
		$('.about-us-first-section--heading').css({top: `${headingTop}px`})
		$('.about-us-first-section--paragraph').css({top: `${paragraphTop}px`})
	}

	function setAboutUsSection2Heights() {
		let blueBgHeight = 90 + $('.about-us-second-section--heading').outerHeight() + 32 + $('.about-us-second-section--content').outerHeight() + 60;
		let greyBgHeight = (blueBgHeight / 100) * 90;
		let secondSectionHeight = blueBgHeight + 150;
		let greyBgTop = 40;
		let blueBgTop = greyBgTop + 100;
		let imageHeight = secondSectionHeight / 7 * 4;
		let contentTop = blueBgTop + 80 + 32 + $('.about-us-second-section--heading').outerHeight();
		let headingTop = blueBgTop + 80;

		if (screenWidth < 768) {
			blueBgTop = greyBgTop;
			imageHeight = 160;
			greyBgHeight = blueBgHeight + 60;
			secondSectionHeight = greyBgHeight;
			headingTop = blueBgTop + 80;
			contentTop = headingTop + $('.about-us-second-section--heading').outerHeight() + 20;
		}

		$('.about-us-second-section').outerHeight(secondSectionHeight);
		$('.about-us-second-section--image').css({"height": `${imageHeight}px`});
		$('.about-us-second-section--grey-bg').outerHeight(greyBgHeight).css({top: `${greyBgTop}px`});
		$('.about-us-second-section--blue-bg').outerHeight(blueBgHeight).css({top: `${blueBgTop}px`});
		$('.about-us-second-section .rounded-icons.second').css({top: `${blueBgTop - 20}px`});
		$('.about-us-second-section--heading').css({top: `${headingTop}px`})
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
		let paddingTop = 45;
		if (screenWidth < 768) {
			paddingTop = 85;
		}
		let blueBgHeight = 35 + $('.about-us-fourth-section--heading').outerHeight() + 32 + $('.about-us-fourth-section--content').outerHeight() + paddingTop;
		let greyBgHeight = blueBgHeight + paddingTop + 80;
		let containerHeight = greyBgHeight;

		let headingTop = paddingTop + 35;
		let contentTop = headingTop + $('.about-us-fourth-section--heading').outerHeight() + 32;

		if (screenWidth < 768) {
			containerHeight = blueBgHeight + 45;
			contentTop =  headingTop + $('.about-us-fourth-section--heading').outerHeight() + 20;
		}

		$('.about-us-fourth-section').outerHeight(containerHeight);
		$('.about-us-fourth-section--image').find('img').css({"height": `${greyBgHeight / 100 * 70}px`});
		$('.about-us-fourth-section--grey-bg').outerHeight(greyBgHeight);
		$('.about-us-fourth-section--blue-bg').outerHeight(blueBgHeight);
		$('.about-us-fourth-section--heading').css({top: `${headingTop}px`})
		$('.about-us-fourth-section--content').css({top: `${contentTop}px`})
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
		$('.leadership--section-1 .section-1-image img').css({'height': `${imageMaxHeight}px`});
	}
	function setLeadershipPageMemberHeights() {
		let countAux = 1;
		$('.leadership-page--member').each(function(index,element) {
			switch (countAux) {
				case 1:
					$(this).addClass('ronald-andrews');
					break;
				case 2:
					$(this).addClass('mitch-levine');
					break;
				case 3:
					$(this).addClass('al-parker');
					break;
				case 4:
					$(this).addClass('lyndal-hesterberg-phd');
					break;
				case 5:
					$(this).addClass('padma-sundar');
					break;
				case 6:
					$(this).addClass('dr-kim-dickinson');
					break;
				case 7:
					$(this).addClass('david-r-gandara');
					break;
				case 8:
					$(this).addClass('thomas-bauer');
					break;
				case 9:
					$(this).addClass('d-kyle-hogarth');
					break;
				case 10:
					$(this).addClass('edward-f-patz');
					break;
				case 11:
					$(this).addClass('anil-vachani');
					break;
				default:
					break;
			}
			let greyBgHeight = $(this).find('.leader--name').outerHeight() + 10 + $(this).find('.leader--title').outerHeight() + 10 + $(this).find('.leader--bio').outerHeight();
			let imageHeight = ( greyBgHeight - 200 > 500 ? greyBgHeight - 200 : 500 );
			let imageWidth = 400 * imageHeight / 600;

			if (imageWidth > $(this).find('.leader--image').outerWidth()) {
				imageWidth = $(this).find('.leader--image').outerWidth();
				imageHeight = imageWidth * 600 / 400;
			}

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
				imageHeight = 200;
				imageWidth = $(this).find('.leader--image').outerWidth();

			} else {
				if ($(this).find('.leader--image img').attr('width') < imageWidth && $(this).find('.leader--image img').attr('height') < imageHeight) {
					if ($(this).find('.leader--image img').attr('width') == $(this).find('.leader--image img').attr('height')) {
						imageWidth = $(this).find('.leader--image img').attr('width') / 10 * 12;
						imageHeight = $(this).find('.leader--image img').attr('height') / 10 * 12;
					}
					/* else {
						imageWidth = imageWidth / 10 * 8;
						imageHeight = imageHeight / 10 * 8;
					}*/
				}
			}

			$(this).css({height: `${containerHeight}px`});
			$(this).find('.grey-bg').css({height: `${greyBgHeight}px`});
			$(this).find('.leader--image img').css({'height': `${imageHeight}px`, width: `${imageWidth}px`});
			countAux++;
		});
	}

	function setDetermaDxSection1Heights() {
		let textBlockSecondHeight = $('.determa-dx--section-1 .text-block-second').outerHeight();
		let purpleBgTop = 20 + 25 + $('.determa-dx--section-1 .heading-first').outerHeight() + $('.determa-dx--section-1 .heading-second').outerHeight() + 32;

		let purpleBgHeight = 60 + $('.determa-dx--section-1 .heading-third').outerHeight() + 30 + $('.determa-dx--section-1 .text-block-first').outerHeight() + 65;

		const whiteBgHeight = 50 + textBlockSecondHeight + 80;

		let greyBgHeight = purpleBgTop + purpleBgHeight + $('.determa-dx--section-1 .text-block-second').outerHeight();
		const secondImageMaxHeight = $('.determa-dx--section-1').outerWidth() / 100 * 16.66;
		let secondImageHeight = textBlockSecondHeight + 30;
		if (secondImageHeight > secondImageMaxHeight) {
			secondImageHeight = secondImageMaxHeight;
		}

		let containerHeight = greyBgHeight + 30;
		const imageHeight = containerHeight - whiteBgHeight;
		let imageSecondTop = purpleBgTop + purpleBgHeight - 40;
		let textBlockSecondTop = 10;
		let iconType2Bottom = -80;

		if (screenWidth < 768) {
			greyBgHeight = $('.determa-dx--section-1 .heading-third').outerHeight() + 30;
			purpleBgHeight = $('.determa-dx--section-1 .heading-first').outerHeight() + $('.determa-dx--section-1 .heading-third').outerHeight() + 30 + $('.determa-dx--section-1 .text-block-first').outerHeight();
			purpleBgTop = 0;
			textBlockSecondHeight = 110;
			imageSecondTop = purpleBgTop + purpleBgHeight - 20;
			textBlockSecondTop = 10 + textBlockSecondHeight + 40;
			secondImageHeight = 140;
			containerHeight = purpleBgTop + purpleBgHeight + textBlockSecondTop + $('.determa-dx--section-1 .text-block-second').outerHeight();
			iconType2Bottom = $('.determa-dx--section-1 .text-block-second').outerHeight() - 80;
		}

		$('.determa-dx--section-1').css({height: `${containerHeight}px`});
		$('.determa-dx--section-1 .grey-bg').css({height: `${greyBgHeight}px`});
		$('.determa-dx--section-1 .purple-bg').css({height: `${purpleBgHeight}px`, top: `${purpleBgTop}px`});
		$('.determa-dx--section-1 .white-bg').css({height: `${whiteBgHeight}px`});
		$('.determa-dx--section-1 .rounded-icons.rounded-icons-type-1').css({top: `${purpleBgTop + 45}px`});
		$('.determa-dx--section-1 .section-1-image-first img').css({'height': `${imageHeight}px`});
		$('.determa-dx--section-1 .section-1-image-second').css({top:`${imageSecondTop}px`});
		$('.determa-dx--section-1 .text-block-second').css({'margin-top': `${textBlockSecondTop}px`});
		$('.determa-dx--section-1 .section-1-image-second img').css({height: `${secondImageHeight}px`, width: `${secondImageHeight}px`});
		$('.determa-dx--section-1 .rounded-icons.rounded-icons-type-4').css({bottom: `${iconType2Bottom}px`});
	}

	function setDetermaDxSection2Heights() {
		headingFirstPaddingBottom = 0;
		if (screenWidth < 768) {
			headingFirstPaddingBottom = 80 - ($('.determa-dx--section-2 .section-2--heading').height());
		}
		$('.determa-dx--section-2 .section-2--heading').css('padding-bottom', `${headingFirstPaddingBottom}px`);


		const headingHeight = $('.determa-dx--section-2 .section-2--heading').length ? $('.determa-dx--section-2 .section-2--heading').outerHeight() : 0;
		const textBlockHeight = $('.determa-dx--section-2 .section-2--text-block').length ? $('.determa-dx--section-2 .section-2--text-block').outerHeight() : 0;

		let maxLabelHeight = 0;

		$('.determa-dx--section-2 .section-2--icon-container .section-2--label').each(function(index, element) {
			maxLabelHeight = $(this).outerHeight() > maxLabelHeight ? $(this).outerHeight() : maxLabelHeight;
		});

		let iconConteinerHeight = 80 + maxLabelHeight;
		let purpleBgHeight = 65 + headingHeight + 15 + textBlockHeight + 30 + iconConteinerHeight + 75;
		let greyBgHeight = 75 + purpleBgHeight + 75;
		let containerHeight = 35 + greyBgHeight;
		let imageHeight = (containerHeight / 10) * 6;

		if (screenWidth < 768) {
			imageHeight = 160;
			containerHeight = purpleBgHeight;
		}

		$('.determa-dx--section-2 .section-2--icon-container').css({height: `${iconConteinerHeight}px`});
		$('.determa-dx--section-2').css({height: `${containerHeight}px`});
		$('.determa-dx--section-2 .grey-bg').css({height: `${greyBgHeight}px`});
		$('.determa-dx--section-2 .purple-bg').css({height: `${purpleBgHeight}px`});
		$('.determa-dx--section-2 .section-2--image img').css({'height': `${imageHeight}px`})
	}
	function setDetermaDxSection3Heights() {
		let greyBgHeight = $('.determa-dx--section-3').outerHeight();
		let greyBgTop = 0;

		if (screenWidth < 768) {
			greyBgHeight = greyBgHeight - ($('.determa-dx--section-3 .section-3--heading').outerHeight() + 30);
			greyBgTop = ($('.determa-dx--section-3 .section-3--heading').outerHeight() + 30);
		}

		$('.determa-dx--section-3 .grey-bg').css({height: `${greyBgHeight}px`, top: `${greyBgTop}px`});
	}

	function setDetermaDxSection4Heights() {
		const headingHeight = $('.determa-dx--section-4 .section-4--heading').length ? $('.determa-dx--section-4 .section-4--heading').outerHeight() : 0;
		const textBlockHeight = $('.determa-dx--section-4 .section-4--text-block').length ? $('.determa-dx--section-4 .section-4--text-block').outerHeight() : 0;

		let purpleBgHeight = 65 + headingHeight + 40 + textBlockHeight + 70;
		let greyBgHeight = 75 + purpleBgHeight + 75;
		let containerHeight = 35 + greyBgHeight;
		const imageMaxHeight = (containerHeight / 10) * 6;

		if (screenWidth < 768) {
			containerHeight = purpleBgHeight + 50;
		}

		$('.determa-dx--section-4').css({height: `${containerHeight}px`});
		$('.determa-dx--section-4 .grey-bg').css({height: `${greyBgHeight}px`});
		$('.determa-dx--section-4 .purple-bg').css({height: `${purpleBgHeight}px`});
		$('.determa-dx--section-4 .section-4--image img').css({'height': `${imageMaxHeight}px`})
	}
	function setDetermaDxSection5Heights() {
		const containerHeight = $('.determa-dx--section-5').outerHeight();
		$('.determa-dx--section-5 .grey-bg').css({height: `${containerHeight}px`});
	}

	function setDetermaRxSection1Heights() {
		const textBlockSecondHeight = $('.determa-rx--section-1 .text-block-second').outerHeight();
		let greenBgTop = 20 + 25 + $('.determa-rx--section-1 .heading-first').outerHeight() + $('.determa-rx--section-1 .heading-second').outerHeight() + 32;

		let greenBgHeight = 60 + $('.determa-rx--section-1 .heading-third').outerHeight() + 30 + $('.determa-rx--section-1 .text-block-first').outerHeight() + 65;

		const whiteBgHeight = 50 + textBlockSecondHeight + 80;

		let greyBgHeight = greenBgTop + greenBgHeight + $('.determa-rx--section-1 .text-block-second').outerHeight();
		const secondImageMaxHeight = $('.determa-rx--section-1').outerWidth() / 100 * 16.66;
		let secondImageHeight = textBlockSecondHeight + 30;
		if (secondImageHeight > secondImageMaxHeight) {
			secondImageHeight = secondImageMaxHeight;
		}


		let containerHeight = greyBgHeight + 30;
		let iconsType4Bottom = 0;
		let imageHeight = containerHeight - whiteBgHeight;

		if (screenWidth < 768) {
			greyBgHeight = $('.determa-rx--section-1 .heading-third').outerHeight() + 30;
			greenBgHeight = $('.determa-rx--section-1 .heading-first').outerHeight() + $('.determa-rx--section-1 .heading-third').outerHeight() + 30 + $('.determa-rx--section-1 .text-block-first').outerHeight();
			greenBgTop = 0;
			containerHeight = greenBgHeight + 80 + textBlockSecondHeight - 30;
			iconsType4Bottom = textBlockSecondHeight - 140;
			imageHeight = 150;
			secondImageHeight = 140;
		}

		$('.determa-rx--section-1').css({height: `${containerHeight}px`});
		$('.determa-rx--section-1 .grey-bg').css({height: `${greyBgHeight}px`});
		$('.determa-rx--section-1 .green-bg').css({height: `${greenBgHeight}px`, top: `${greenBgTop}px`});
		$('.determa-rx--section-1 .white-bg').css({height: `${whiteBgHeight}px`});
		$('.determa-rx--section-1 .scroll-to-menu-container').css({top: `${greenBgTop + 45}px`});
		$('.determa-rx--section-1 .section-1-image-first img').css({'height': `${imageHeight}px`});
		$('.determa-rx--section-1 .section-1-image-second').css({top:`${greenBgTop + greenBgHeight - 40}px`})
		$('.determa-rx--section-1 .section-1-image-second img').css({width: `${secondImageHeight}px`, 'height': `${secondImageHeight}px`});
		$('.determa-rx--section-1 .rounded-icons-type-4').css({'margin-bottom': `${iconsType4Bottom}px`});
	}

	function setDetermaRxSection2Heights() {
		const imageHeight = $('.determa-rx--section-2 .section-2--image').length ? $('.determa-rx--section-2 .section-2--image').outerHeight() : 0;
		let greyBgHeight = imageHeight + 50;
		let containerHeight = greyBgHeight;

		//$('.determa-rx--section-2').css({height: `${containerHeight}px`});
		//$('.determa-rx--section-2 .grey-bg').css({height: `${greyBgHeight}px`});
	}
	function setDetermaRxSection3Heights() {
		let containerHeight = $('.determa-rx--section-3').outerHeight();
		let greyBgTop = 0;
		const headingFirstHeight = $('.determa-rx--section-3 .section-3--heading-first').length ? $('.determa-rx--section-3 .section-3--heading-first').outerHeight() : 0;
		const headingSecondHeight = $('.determa-rx--section-3 .section-3--heading-second').length ? $('.determa-rx--section-3 .section-3--heading-second').outerHeight() : 0;

		if (screenWidth < 768) {
			containerHeight = containerHeight - headingFirstHeight - headingSecondHeight - 30;
			greyBgTop = headingFirstHeight + headingSecondHeight + 30;
		}

		$('.determa-rx--section-3 .grey-bg').css({height: `${
			containerHeight}px`, top: `${greyBgTop}px`});
	}

	function setDetermaRxSection4Heights() {
		const headingHeight = $('.determa-rx--section-4 .section-4--heading').length ? $('.determa-rx--section-4 .section-4--heading').outerHeight() : 0;
		const textBlockFirstHeight = $('.determa-rx--section-4 .section-4--text-block-first').length ? $('.determa-rx--section-4 .section-4--text-block-first').outerHeight() : 0;
		const textBlockSecondHeight = $('.determa-rx--section-4 .section-4--text-block-second').length ? $('.determa-rx--section-4 .section-4--text-block-second').outerHeight() : 0;

		const imageTitleFirstHeight = $('.determa-rx--section-4 .section-4--image-title-first').length ? $('.determa-rx--section-4 .section-4--image-title-first').outerHeight() : 0;
		const imageFirstHeight = $('.determa-rx--section-4 .section-4--image-first').length ? $('.determa-rx--section-4 .section-4--image-first').outerHeight() : 0;
		let imageTitleFirstTop = 90 + 35;
		let imageFirstTop = imageTitleFirstTop + imageTitleFirstHeight;
		let viewImageFirstTop = imageFirstTop + imageFirstHeight + 10;

		const imageTitleSecondHeight = $('.determa-rx--section-4 .section-4--image-title-second').length ? $('.determa-rx--section-4 .section-4--image-title-second').outerHeight() : 0;
		const imageSecondHeight = $('.determa-rx--section-4 .section-4--image-second').length ? $('.determa-rx--section-4 .section-4--image-second').outerHeight() : 0;

		const whiteBg1Height = 35 + imageFirstHeight + imageTitleFirstHeight + 70;
		const whiteBg2Height = 25 + imageSecondHeight + imageTitleSecondHeight + 50;
		let whiteBg1Top = 90;

		let greenBgHeight = 70 + headingHeight + 15 + textBlockFirstHeight + textBlockSecondHeight + 140;
		let containerHeight = 145 + greenBgHeight + whiteBg2Height - 80;
		const greyBgHeight = containerHeight / 2;
		
		let imageTitleSecondTop = 145 + greenBgHeight - 80;
		let imageSecondTop = imageTitleSecondTop + imageTitleSecondHeight;
		let viewImageSecondTop = imageSecondTop + imageSecondHeight;
		let textBlockSecondTop = 0;

		if (screenWidth < 768) {
			whiteBg1Top = headingHeight + textBlockFirstHeight + 30;
			imageTitleFirstTop = whiteBg1Top + 30;
			imageFirstTop = imageTitleFirstTop + imageTitleFirstHeight;
			viewImageFirstTop = imageFirstTop + imageFirstHeight + 10;
			textBlockSecondTop = 30 + whiteBg1Height + 40;
			greenBgHeight = headingHeight + 15 + textBlockFirstHeight + 30 + whiteBg1Height + 40 + textBlockSecondHeight + 30;
			containerHeight = greenBgHeight + whiteBg2Height;
			//whiteBg2Top = 
			imageTitleSecondTop = greenBgHeight + 30;
			imageSecondTop = imageTitleSecondTop + imageTitleSecondHeight;
			viewImageSecondTop = imageSecondTop + imageSecondHeight;
		}


		$('.determa-rx--section-4').css({height: `${containerHeight}px`});
		$('.determa-rx--section-4 .grey-bg').css({height: `${greyBgHeight}px`});
		$('.determa-rx--section-4 .green-bg').css({height: `${greenBgHeight}px`});
		$('.determa-rx--section-4 .white-bg.white-bg-1').css({height: `${whiteBg1Height}px`, top: `${whiteBg1Top}px`});
		$('.determa-rx--section-4 .white-bg.white-bg-2').css({height: `${whiteBg2Height}px`});

		$('.determa-rx--section-4 .section-4--image-title-first').css({top: `${imageTitleFirstTop}px`});
		$('.determa-rx--section-4 .section-4--image-first').css({top: `${imageFirstTop}px`});
		$('.determa-rx--section-4 .view-image-link-1').css({top: `${viewImageFirstTop}px`});

		$('.determa-rx--section-4 .section-4--image-title-second').css({top: `${imageTitleSecondTop}px`});
		$('.determa-rx--section-4 .section-4--image-second').css({top: `${imageSecondTop}px`});
		$('.determa-rx--section-4 .view-image-link-2').css({top: `${viewImageSecondTop}px`});
		$('.determa-rx--section-4 .rounded-icons.rounded-icons-type-1').css({bottom: `${10 + whiteBg2Height}px`});
		$('.determa-rx--section-4 .section-4--text-block-second').css({'margin-top': `${textBlockSecondTop}px`});
	}


	function setDetermaRxSection5Heights() {
		const headingFirstHeight = $('.determa-rx--section-5 .section-5--heading-first').length ? $('.determa-rx--section-5 .section-5--heading-first').outerHeight() : 0;
		const headingSecondHeight = $('.determa-rx--section-5 .section-5--heading-second').length ? $('.determa-rx--section-5 .section-5--heading-second').outerHeight() : 0;
		const textBlockFirstHeight = $('.determa-rx--section-5 .section-5--text-block-first').length ? $('.determa-rx--section-5 .section-5--text-block-first').outerHeight() : 0;
		let containerHeight = $('.determa-rx--section-5').outerHeight();
		let greyBgTop = 0;

		const roundedIconTop = 55 + headingFirstHeight + 10 + headingSecondHeight;

		if (screenWidth < 768) {
			containerHeight = containerHeight - headingFirstHeight - headingSecondHeight - textBlockFirstHeight - 10;
			greyBgTop = headingFirstHeight + headingSecondHeight + textBlockFirstHeight;
		}

		$('.determa-rx--section-5 .grey-bg').css({height: `${containerHeight}px`, top: `${greyBgTop}px`});
		$('.determa-rx--section-5 .rounded-icons-type-1').css({top: `${roundedIconTop}px`});

	}

	function setHomepageSection1Heights() {
		const textBlockSecondHeight = $('.homepage--section-1 .text-block-second').outerHeight();
		let blueBgTop = 110;

		let blueBgHeight = 30 + $('.homepage--section-1 .heading').outerHeight() + 40 + $('.homepage--section-1 .text-block-first').outerHeight() + 100;

		const whiteBgHeight = 50 + textBlockSecondHeight + 80;

		let imageFirstHeight = blueBgHeight - 60;
		const secondImageMaxHeight = whiteBgHeight / 10 * 6;
		let textBlockSecondTop = blueBgHeight - 60 + 30;
		let secondImageTop = (blueBgHeight - 60) + (whiteBgHeight / 6 * 2);
		let greyBgHeight = imageFirstHeight + whiteBgHeight - 45;
		let containerHeight = greyBgHeight + 30;
		let image2Height = $('.homepage--section-2').outerWidth() / 6 > (secondImageMaxHeight + 30) ? (secondImageMaxHeight + 30) : $('.homepage--section-2').outerWidth() / 6;
		let headingFirstPaddingTop = 0;
		let type2Top = blueBgTop + 45;

		$('.homepage--section-1 .heading').css('padding-top', 0);
		if (screenWidth < 768) {
			headingFirstPaddingTop = 140 - $('.homepage--section-1 .heading').outerHeight();
			$('.homepage--section-1 .heading').css('padding-top', `${headingFirstPaddingTop > 80 ? headingFirstPaddingTop : 80}px`);
			blueBgHeight = $('.homepage--section-1 .heading').outerHeight() + $('.homepage--section-1 .text-block-first').outerHeight() + 30;
			greyBgHeight = blueBgHeight + $('.homepage--section-1 .text-block-second').outerHeight() + 40;
			blueBgTop = 40;
			imageFirstHeight = 200;
			type2Top = 20;
			containerHeight = greyBgHeight + 40;
		}

		$('.homepage--section-1').css({height: `${containerHeight}px`});
		$('.homepage--section-1 .grey-bg').css({height: `${greyBgHeight}px`});
		$('.homepage--section-1 .blue-bg').css({height: `${blueBgHeight}px`, top: `${blueBgTop}px`});
		$('.homepage--section-1 .white-bg').css({height: `${whiteBgHeight}px`, top: `${blueBgHeight - 60}px`});
		$('.homepage--section-1 .text-block-second').css({top: `${textBlockSecondTop}px`})
		$('.homepage--section-1 .rounded-icons.rounded-icons-type-2').css({top: `${type2Top}px`});
		$('.homepage--section-1 .section-1-image-first img').css({'height': `${imageFirstHeight}px`});
		$('.homepage--section-1 .section-1-image-second').css({top:`${secondImageTop}px`});
		$('.homepage--section-1 .section-1-image-second img').css({width: `${image2Height}px`, height: `${image2Height}px`});
		if ($('.homepage--section-1 .section-1--video-container video').length) {
			$('.homepage--section-1 .section-1--video-container').css({'height': `${imageFirstHeight}px`});
			$('.homepage--section-1 .section-1--video-container video').each(function(index,element) {
				$(this).css({'height': `${imageFirstHeight}px`});				
			})
		}
	}

	function setHomepageSection2Heights() {
		let headingFirstPaddingBottom = 0;
		if (screenWidth < 768) {
			headingFirstPaddingBottom = 160 - ($('.homepage--section-2 .section-2--heading-first').outerHeight() + $('.homepage--section-2 .section-2--heading-second').height());

			if (headingFirstPaddingBottom < 0) {
				headingFirstPaddingBottom = 0;
			}
		}
		$('.homepage--section-2 .section-2--heading-second').css('padding-bottom', `${headingFirstPaddingBottom}px`);

		const headingFirstHeight = $('.homepage--section-2 .section-2--heading-first').length ? $('.homepage--section-2 .section-2--heading-first').outerHeight() : 0;
		const headingSecondHeight = $('.homepage--section-2 .section-2--heading-second').length ? $('.homepage--section-2 .section-2--heading-second').outerHeight() : 0;
		const textBlockHeight = $('.homepage--section-2 .section-2--text-block').length ? $('.homepage--section-2 .section-2--text-block').outerHeight() : 0;

		let purpleBgHeight = 55 + headingFirstHeight + headingSecondHeight + 20 + textBlockHeight + 100;
		let greyBgHeight = 100 + purpleBgHeight + 80;
		let containerHeight = 40 + greyBgHeight;
		let imageMaxHeight = (containerHeight / 10) * 7;
		let image2Height = $('.homepage--section-2').outerWidth() / 6;

		if (screenWidth < 768) {
			purpleBgHeight = headingFirstHeight + headingSecondHeight + textBlockHeight + 60;
			containerHeight = purpleBgHeight;
			imageMaxHeight = 200;
		}

		$('.homepage--section-2').css({height: `${containerHeight}px`});
		$('.homepage--section-2 .grey-bg').css({height: `${greyBgHeight}px`});
		$('.homepage--section-2 .purple-bg').css({height: `${purpleBgHeight}px`});
		$('.homepage--section-2 .section-2--image-first img').css({'height': `${imageMaxHeight}px`})
		$('.homepage--section-2 .section-2--image-second').css({top: `${containerHeight - 120 - image2Height}px`, 'height': `${image2Height}px`})
		$('.homepage--section-2 .section-2--image-second img').css({'height': `${image2Height}px`})
	}

	function setHomepageSection4Heights() {
		let headingFirstPaddingBottom = 0;
		if (screenWidth < 768) {
			headingFirstPaddingBottom = 160 - ($('.homepage--section-4 .section-4--heading-first').outerHeight() + $('.homepage--section-4 .section-4--heading-second').height());

			if (headingFirstPaddingBottom < 0) {
				headingFirstPaddingBottom = 0;
			}
		}
		$('.homepage--section-4 .section-4--heading-second').css('padding-bottom', `${headingFirstPaddingBottom}px`);

		const headingFirstHeight = $('.homepage--section-4 .section-4--heading-first').length ? $('.homepage--section-4 .section-4--heading-first').outerHeight() : 0;
		const headingSecondHeight = $('.homepage--section-4 .section-4--heading-second').length ? $('.homepage--section-4 .section-4--heading-second').outerHeight() : 0;
		const textBlockHeight = $('.homepage--section-4 .section-4--text-block').length ? $('.homepage--section-4 .section-4--text-block').outerHeight() : 0;

		let blueBgHeight = 55 + headingFirstHeight + headingSecondHeight + 20 + textBlockHeight + 100;
		let greyBgHeight = 100 + blueBgHeight + 80;
		let containerHeight = 40 + greyBgHeight;
		let imageMaxHeight = (containerHeight / 10) * 7;
		let image2Height = $('.homepage--section-4').outerWidth() / 6;

		if (screenWidth < 768) {
			blueBgHeight = headingFirstHeight + headingSecondHeight + textBlockHeight + 60;
			containerHeight = blueBgHeight;
			imageMaxHeight = 200;
		}

		$('.homepage--section-4').css({height: `${containerHeight}px`});
		$('.homepage--section-4 .grey-bg').css({height: `${greyBgHeight}px`});
		$('.homepage--section-4 .blue-bg').css({height: `${blueBgHeight}px`});
		$('.homepage--section-4 .section-4--image-first img').css({'height': `${imageMaxHeight}px`})
		$('.homepage--section-4 .section-4--image-second').css({top: `${containerHeight - 120 - image2Height}px`, 'height': `${image2Height}px`})
		$('.homepage--section-4 .section-4--image-second img').css({'height': `${image2Height}px`})
	}

	function setHomepageSection6Heights() {
		let headingFirstPaddingBottom = 0;
		if (screenWidth < 768) {
			headingFirstPaddingBottom = 160 - ($('.homepage--section-6 .section-6--heading-first').outerHeight() + $('.homepage--section-6 .section-6--heading-second').height());

			if (headingFirstPaddingBottom < 0) {
				headingFirstPaddingBottom = 0;
			}
		}
		$('.homepage--section-6 .section-6--heading-second').css('padding-bottom', `${headingFirstPaddingBottom}px`);

		const headingFirstHeight = $('.homepage--section-6 .section-6--heading-first').length ? $('.homepage--section-6 .section-6--heading-first').outerHeight() : 0;
		const headingSecondHeight = $('.homepage--section-6 .section-6--heading-second').length ? $('.homepage--section-6 .section-6--heading-second').outerHeight() : 0;
		const textBlockHeight = $('.homepage--section-6 .section-6--text-block').length ? $('.homepage--section-6 .section-6--text-block').outerHeight() : 0;

		let orangeBgHeight = 55 + headingFirstHeight + headingSecondHeight + 20 + textBlockHeight + 100;
		let greyBgHeight = 100 + orangeBgHeight + 100;
		let containerHeight = 40 + greyBgHeight;
		let imageMaxHeight = (containerHeight / 10) * 7;
		let image2Height = $('.homepage--section-6').outerWidth() / 6;

		if (screenWidth < 768) {
			orangeBgHeight = headingFirstHeight + headingSecondHeight + textBlockHeight + 60;
			containerHeight = orangeBgHeight;
			imageMaxHeight = 200;
		}

		$('.homepage--section-6').css({height: `${containerHeight}px`});
		$('.homepage--section-6 .grey-bg').css({height: `${greyBgHeight}px`});
		$('.homepage--section-6 .orange-bg').css({height: `${orangeBgHeight}px`});
		$('.homepage--section-6 .section-6--image-first img').css({'height': `${imageMaxHeight}px`})
		$('.homepage--section-6 .section-6--image-second').css({top: `${containerHeight - 120 - image2Height}px`, 'height': `${image2Height}px`})
		$('.homepage--section-6 .section-6--image-second img').css({'height': `${image2Height}px`})
	}

	function setTemplatePageSection1Heights() {
		const headingFirstHeight = $('.template-page--section-1 .section-1--heading').length ? $('.template-page--section-1 .section-1--heading').outerHeight() : 0;
		const blueBgHeight = headingFirstHeight;
		let imageHeight = headingFirstHeight;

		if (screenWidth < 768) {
			imageHeight = 160;
		}
		$('.template-page--section-1 .blue-bg').css('height', `${blueBgHeight}px`);
		$('.template-page--section-1 .section-1--image img').css('height', `${imageHeight}px`);
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