const screenWidth = window.screen.width;
if (screenWidth >= 426) {
	let navSecondOne = document.querySelector('.nav__second-one');
	let navSecondTwo = document.querySelector('.nav__second-two');
	let navSecondThree = document.querySelector('.nav__second-three');
	let navSecondFour = document.querySelector('.nav__second-four');
	let navSecondFive = document.querySelector('.nav__second-five');
	let navSecondSix = document.querySelector('.nav__second-six');
	let navSecondSeven = document.querySelector('.nav__second-seven');

	let navSecondOneId = document.querySelector('#nav__second-one');
	let navSecondTwoId = document.querySelector('#nav__second-two');
	let navSecondThreeId = document.querySelector('#nav__second-three');
	let navSecondFourId = document.querySelector('#nav__second-four');
	let navSecondFiveId = document.querySelector('#nav__second-five');
	let navSecondSixId = document.querySelector('#nav__second-six');
	let navSecondSevenId = document.querySelector('#nav__second-seven');

	navSecondOneId.addEventListener('click', function () {
		navSecondOne.classList.toggle('active');
		navSecondTwo.classList.remove('active');
		navSecondThree.classList.remove('active');
		navSecondFour.classList.remove('active');
		navSecondFive.classList.remove('active');
		navSecondSix.classList.remove('active');
		navSecondSeven.classList.remove('active');
	})

	navSecondTwoId.addEventListener('click', function () {
		navSecondOne.classList.remove('active');
		navSecondTwo.classList.toggle('active');
		navSecondThree.classList.remove('active');
		navSecondFour.classList.remove('active');
		navSecondFive.classList.remove('active');
		navSecondSix.classList.remove('active');
		navSecondSeven.classList.remove('active');
	})

	navSecondThreeId.addEventListener('click', function () {
		navSecondOne.classList.remove('active');
		navSecondTwo.classList.remove('active');
		navSecondThree.classList.toggle('active');
		navSecondFour.classList.remove('active');
		navSecondFive.classList.remove('active');
		navSecondSix.classList.remove('active');
		navSecondSeven.classList.remove('active');
	})

	navSecondFourId.addEventListener('click', function () {
		navSecondOne.classList.remove('active');
		navSecondTwo.classList.remove('active');
		navSecondThree.classList.remove('active');
		navSecondFour.classList.toggle('active');
		navSecondFive.classList.remove('active');
		navSecondSix.classList.remove('active');
		navSecondSeven.classList.remove('active');
	})

	navSecondFiveId.addEventListener('click', function () {
		navSecondOne.classList.remove('active');
		navSecondTwo.classList.remove('active');
		navSecondThree.classList.remove('active');
		navSecondFour.classList.remove('active');
		navSecondFive.classList.toggle('active');
		navSecondSix.classList.remove('active');
		navSecondSeven.classList.remove('active');
	})

	navSecondSixId.addEventListener('click', function () {
		navSecondOne.classList.remove('active');
		navSecondTwo.classList.remove('active');
		navSecondThree.classList.remove('active');
		navSecondFour.classList.remove('active');
		navSecondFive.classList.remove('active');
		navSecondSix.classList.toggle('active');
		navSecondSeven.classList.remove('active');
	})

	navSecondSevenId.addEventListener('click', function () {
		navSecondOne.classList.remove('active');
		navSecondTwo.classList.remove('active');
		navSecondThree.classList.remove('active');
		navSecondFour.classList.remove('active');
		navSecondFive.classList.remove('active');
		navSecondSix.classList.remove('active');
		navSecondSeven.classList.toggle('active');
	})
}

let burger = document.querySelector('.header__burger > span');
let short = document.querySelector('.short');
let headerShort = document.querySelector('.header__short');
let headerRight = document.querySelector('.header__right');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	short.classList.toggle('active');
	headerShort.classList.toggle('active');
	headerRight.classList.toggle('active');
})

//----------------------------



