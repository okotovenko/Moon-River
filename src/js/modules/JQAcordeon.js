//! Функція написана на JQuery спочатку треба підключити в index.htmi
//! Треба додати цю функцію до стартової збірки
// Функція робить "акордеон". До заголовка, по якому йде клік
//	додаємо клас '.acordeon__title'
//'..nav__first' - батьківський клас всіх елементів (спойлерів)
//'only' - дає спойлерам функціонал АКОРДЕОНА (лише одне поле меню активне)
//'.acordeon__body' - тіло спойлера (закривається)
//'active' - клас, по якому відбуваються зміни

let navFirst = document.querySelectorAll('.nav__first>li>a');
let navSecond = document.querySelectorAll('.nav__second');
const screenWidth = window.screen.width;
console.log(navFirst);
console.log(navSecond);

if (screenWidth <= 426) {
	navFirst.forEach(element => {
		element.classList.toggle('acordeon__title');
	});
	navSecond.forEach(element => {
		element.classList.toggle('acordeon__body');
	});
	console.log(navFirst);
	console.log(navSecond);
}

//! На всіх розширеннях
$(document).ready(function () {
	$('.acordeon__title').click(function (event) {
		if ($('.nav__first').hasClass('only')) {
			$('.acordeon__title').not($(this)).removeClass('active');
			$('.acordeon__body').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

//! Якщо ширина вікна менша ніж 426рх - тільки тоді виконуємо функцію

// function AcordeonWindowSize() {
// 	if ($(window).width() <= 426) {
// 		$(document).ready(function () {
// 			$('.acordeon__title').click(function (event) {
// 				if ($('.footer').hasClass('only')) {
// 					$('.acordeon__title').not($(this)).removeClass('active');
// 					$('.acordeon__body').not($(this).next()).slideUp(300);
// 				}
// 				$(this).toggleClass('active').next().slideToggle(300);
// 			});
// 		});
// 	};
// };
// // $(window).load(AcordeonWindowSize); // при завантаженні
// // $(window).resize(AcordeonWindowSize); // при зміні розмірів
// // або "два-в-одному", замість двох останніх рядків:
// $(window).on('load resize', AcordeonWindowSize);