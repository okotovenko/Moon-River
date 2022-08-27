let arrLang = {
	'en': {
		'ring': 'ring',
		'whiteGold': 'White gold, brilliants',
		'show': 'See collection',
		'new': 'New collection',
		'seeCol': 'See collection',
		'phone': 'Hotline phone',
		'subscribe': 'Subscribe for news',
		'jewelry': 'Jewelry',
		'for': 'For whom',
		'forweman': 'For woman',
		'forman': 'For man',
		'forchildren': 'For children',
		'categories': 'Categories',
		'rings': 'Rings',
		'bracelets': 'Bracelets',
		'necklace': 'Necklace',
		'earrings': 'Earrings',
		'brooches': 'Brooches',
		'material': 'material',
		'withbrilliants': 'Products with diamonds',
		'yellowgold': 'Yellow gold',
		'whitegold': 'White gold',
		'pinkgold': 'Pink gold',
		'brand': 'Brand',
		'swowbrands': 'Show all brands',
		'watch': 'Watches',
		'flavors': 'Flavors',
		'brands': 'Brands',
		'leather': 'Leather products',
		'weeding': 'Wedding decorations',
		'other': 'Other',
		'go': 'Go to section',
		'find': 'Find a boutique near you',
		'enter': 'Enter your address and find out about the closest boutiques to',
		'yellowWhite': 'Yellow, White, Pink gold',
		'sapphire': 'Yellow gold, sapphire',
		'pearl': 'Yellow gold, pearl',
		'social': 'We are in social networks',
		'phone_shop': 'flagship store phone',


	},
	'ru': {
		'ring': 'кольцо',
		'whiteGold': 'Белое золото, бриллианты',
		'show': 'Смотреть коллекцию',
		'new': 'Новая коллекция',
		'seeCol': 'Cмотреть коллекцию',
		'phone': 'телефон горячей линии',
		'subscribe': 'подпишитесь на новости',
		'jewelry': 'Ювелирные изделия',
		'for': 'для кого',
		'forweman': 'Для женщин',
		'forman': 'Для мужчин',
		'forchildren': 'Для детей',
		'categories': 'Категории',
		'rings': 'Кольца',
		'bracelets': 'Браслеты',
		'necklace': 'Колье',
		'earrings': 'Серьги',
		'brooches': 'Броши',
		'material': 'Материал',
		'withbrilliants': 'Изделия с бриллиантами',
		'yellowgold': 'Желтое золото',
		'whitegold': 'Белое золото',
		'pinkgold': 'Розовое золото',
		'brand': 'бренд',
		'swowbrands': 'Показать все бренды',
		'watch': 'часы',
		'flavors': 'ароматы',
		'brands': 'бренды',
		'leather': 'изделия из кожи',
		'weeding': 'cвадебные украшени',
		'other': 'другое',
		'go': 'Перейти в раздел',
		'find': 'Найди бутик около себя',
		'enter': 'Введите свой адрес и узнайте о самых ближайших бутиках к вам',
		'yellowWhite': 'Желтое, белое, розовое золото',
		'sapphire': 'Желтое золото, сапфир',
		'pearl': 'Желтое золото, жемчуг',
		'social': 'Мы в социальных сетях',
		'phone_shop': 'телефон флагманского магазина',

	}
}

$(function () {
	$('.translate').click(function () {
		let lang = $(this).attr('id');

		$('.input-email').attr("placeholder", "Enter E-mail");
		$('.input-search').attr("placeholder", "Search");
		$('.lang').each(function (index, item) {
			$(this).text(arrLang[lang][$(this).attr('key')]);
		});
	});
});

// $('button').on('click', function() {
// 	$('input').attr("placeholder", "e-mail");
// });

