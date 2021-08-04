let current_image_index = 0

let images = [
	'images/slide1.svg',
	'images/slide2.svg',
	'images/slide3.svg',
	'images/slide4.svg',
	'images/slide5.svg',
]

function scrollToTop() {
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth',
	})
}

function returnFirstIndex() {
	current_image_index = 0
	$('.slider-image').attr('src', images[0])
	$('.caption').text(current_image_index + 1)

	if (window.innerWidth >= 320 && window.innerWidth < 768) {
		$('.left').hide()
		$('.right').hide()
	} else {
		$('.left').show()
		$('.right').show()
		$('.left').css({ display: 'flex' })
		$('.right').css({ display: 'flex' })
	}
}

function toggleToTopButton() {
	let maxScroll = document.body.scrollHeight - window.innerHeight

	if (window.scrollY === 0) {
		$('.to-top').hide()
	} else if (maxScroll / 2 <= window.scrollY) {
		$('.to-top').fadeIn('fast')
	} else {
		$('.to-top').fadeOut()
	}
}

function closeOverlayNav() {
	if (window.innerWidth >= 1024) {
		$('.overlay-nav').hide()
	}
}

$(function () {
	toggleToTopButton()

	$('.close').click(function () {
		$('.overlay-nav').hide()
	})

	$('.burger-menu').click(function () {
		$('.overlay-nav').show()
		$('.overlay-nav').css({
			display: 'flex',
		})
	})

	$('.left').click(function () {
		let image_count = 0

		if (window.innerWidth >= 1024) {
			image_count = 5
		} else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
			image_count = 3
		} else if (window.innerWidth >= 320 && window.innerWidth <= 768) {
			image_count = 1
		}

		if (current_image_index === 0) {
			current_image_index = image_count - 1
		} else {
			current_image_index = current_image_index - 1
		}
		$('.slider-image').attr('src', images[current_image_index])
		$('.caption').text(current_image_index + 1)
	})

	$('.right').click(() => {
		if (window.innerWidth >= 1024) {
			image_count = 5
		} else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
			image_count = 3
		} else if (window.innerWidth >= 320 && window.innerWidth <= 768) {
			image_count = 1
		}

		if (current_image_index === image_count - 1) {
			current_image_index = 0
		} else {
			current_image_index = current_image_index + 1
		}
		$('.slider-image').attr('src', images[current_image_index])
		$('.caption').text(current_image_index + 1)
	})
})
