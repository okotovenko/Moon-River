let arrLang = {
	'en': {
		'ring': 'ring',
		'whiteGold': 'White gold, brilliants',
		'show': 'See collection',
		'new': 'New collection',
		'seeCol': 'See collection',
		'phone': 'Hotline phone',
		'subscribe': 'Subscribe for news',
		'email': 'Enter',
		'jewelry': 'Jewelry',
		'for': 'For whom',
		'forweman': 'For weaman',
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
	},
	'ru': {
		'ring': 'кольцо',
		'whiteGold': 'Белое золото, бриллианты',
		'show': 'Смотреть коллекцию',
		'new': 'Новая коллекция',
		'seeCol': 'Cмотреть коллекцию',
		'phone': 'телефон горячей линии',
		'subscribe': 'подпишитесь на новости',
		'email': 'Введите',
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
	}
}

$(function () {
	$('.translate').click(function () {
		let lang = $(this).attr('id');

		$('.lang').each(function (index, item) {
			$(this).text(arrLang[lang][$(this).attr('key')]);
		});
	});
});