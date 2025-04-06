import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        'id': '1',
        'title': 'Комната в хостеле',
        'description': 'Удобная комната в общем хостеле рядом с центральным проспектом.',
        'type': 'room',
        'price': 100,
        'images': [
            '../../img/1.1.jpg',
            '../../img/1.2.jpg',
            '../../img/1.3.jpg'
        ],
        'city': {
            'name': 'Amsterdan',
            'location': {
                'latitude': 52.23,
                'longitude': 4.54,
                'zoom': 8
            }
        },
        'location': {
                'latitude': 52.3909553943508,
                'longitude': 4.85309666406198,
                'zoom': 8
        },
        'goods': [
            'Wi-Fi',
            'Общий холодильник',
            'Кухня'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': '../../img/avatar-angelina.jpg',
            'name': 'Ангелина'
        },
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.2,
        "bedrooms": 1,
        "maxAdults": 1   
    },
    {
        'id': '2',
        'title': 'Дом у моря',
        'description': 'Дом с бассейном и выходом к пляжу, идеален для семейного отдыха',
        'type': 'house',
        'price': 700,
        'images': [
            '../../img/2.1.jpg',
            '../../img/2.2.jpg',
            '../../img/2.3.jpg'
        ],
        'city': {
            'name': 'Amsterdan',
            'location': {
                'latitude': 52.23,
                'longitude': 4.54,
                'zoom': 8
            }
        },
        'location': {
                'latitude': 52.3609553943508,
                'longitude': 4.85309666406198,
                'zoom': 8
        },
        'goods': [
            'Wi-Fi',
            'Бассейн',
            'Кондиционер',
            'Барбекю'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': '../../img/avatar-angelina.jpg',
            'name': 'Ангелина'
        },
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.5,
        "bedrooms": 3,
        "maxAdults": 3   
    },
    {
        'id': '3',
        'title': 'Квартира в центре города',
        'description': 'Квартира с видом на достопремечательности города',
        'type': 'apartment',
        'price': 500,
        'images': [
            '../../img/3.1.jpg',
            '../../img/3.2.jpg',
            '../../img/3.3.jpg'
        ],
        'city': {
            'name': 'Amsterdan',
            'location': {
                'latitude': 52.23,
                'longitude': 4.54,
                'zoom': 8
            }
        },
        'location': {
                'latitude': 52.3909553943508,
                'longitude': 4.929309666406198,
                'zoom': 8
        },
        'goods': [
            'Wi-Fi',
            'Телефизор',
            'Холодильник',
            'Стиральная машина'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': '../../img/avatar-angelina.jpg',
            'name': 'Ангелина'
        },
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.7,
        "bedrooms": 2,
        "maxAdults": 4   
    },
    {
        'id': '4',
        'title': 'Семейный отель',
        'description': 'Современный отель с отличным сервисом и удобствами, рядом с главными достопримечательностями',
        'type': 'hotel',
        'price': 700,
        'images': [
            '../../img/4.1.jpg',
            '../../img/4.2.jpg',
            '../../img/4.3.jpg'
        ],
        'city': {
            'name': 'Amsterdan',
            'location': {
                'latitude': 52.23,
                'longitude': 4.54,
                'zoom': 8
            }
        },
        'location': {
                'latitude': 52.3809553943508,
                'longitude': 4.939309666406198,
                'zoom': 8
        },
        'goods': [
            'Wi-Fi',
            'Ресторан',
            'Фитнес-зал',
            'Детская комната'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': '../../img/avatar-angelina.jpg',
            'name': 'Ангелина'
        },
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.9,
        "bedrooms": 2,
        "maxAdults": 2   
    },

    {
        'id': '5',
        'title': 'Романтическая квартира у Эйфелевой башни',
        'description': 'Уютная студия с панорамным видом на Эйфелеву башню',
        'type': 'apartment',
        'price': 1200,
        'images': [
            '../../img/paris-01.png',
            '../../img/paris-02.png',
            '../../img/paris-03.png'
        ],
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.8566,
                'longitude': 2.3522,
                'zoom': 8
            }
        },
        'location': {
            'latitude': 48.8588,
            'longitude': 2.2945,
            'zoom': 8
        },
        'goods': [
            'Wi-Fi',
            'Кондиционер',
            'Кофемашина',
            'Джакузи'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': '../../img/avatar-angelina.jpg',
            'name': 'Ангелина'
        },
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.9,
        "bedrooms": 1,
        "maxAdults": 2   
    },

    {
        'id': '6',
        'title': 'Современный лофт в районе Митте',
        'description': 'Просторный лофт с индустриальным дизайном в самом центре',
        'type': 'apartment',
        'price': 850,
        'images': [
            '../../img/cologne-01.png',
            '../../img/cologne-02.png',
            '../../img/cologne-03.png'
        ],
        'city': {
            'name': 'Cologne',
            'location': {
                'latitude': 50.93,
                'longitude': 6.96,
                'zoom': 8
            }
        },
        'location': {
            'latitude': 50.93574,
            'longitude': 6.9606,
            'zoom': 8
        },
        'goods': ['Wi-Fi', 'Рабочая зона', 'Стиральная машина', 'Парковка'],
        'host': {
            'isPro': false,
            'avatarUrl': '../../img/avatar-angelina.jpg',
            'name': 'Ангелина'
        },
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.5,
        "bedrooms": 1,
        "maxAdults": 3   
    },

    {
        'id': '7',
        'title': 'Апартаменты в историческом центре',
        'description': 'Очаровательная квартира в старинном здании',
        'type': 'apartment',
        'price': 950,
        'images': [
            '../../img/brussel-01.png',
            '../../img/brussel-02.png',
            '../../img/brussel-03.png'
        ],
        'city': {
            'name': 'Brussels',
            'location': {
                'latitude': 50.85,
                'longitude': 4.35,
                'zoom': 8
            }
        },
        'location': {
            'latitude': 50.8503,
            'longitude': 4.3517,
            'zoom': 8
        },
        'goods': [
            'Wi-Fi',
            'Кондиционер',
            'Чайник',
            'Фен'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': '../../img/avatar-angelina.jpg',
            'name': 'Ангелина'
        },
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.8,
        "bedrooms": 2,
        "maxAdults": 4   
    },

    {
        'id': '8',
        'title': 'Роскошный пентхаус',
        'description': 'Просторный пентхаус с частной террасой и бассейном',
        'type': 'apartment',
        'price': 1500,
        'images': [
            '../../img/hamburg-01.png',
            '../../img/hamburg-02.png',
            '../../img/hamburg-03.png'
        ],
        'city': {
            'name': 'Hamburg ',
            'location': {
                'latitude': 53.55,
                'longitude': 9.99,
                'zoom': 8
            }
        },
        'location': {
            'latitude': 53.5511,
            'longitude': 9.9937,
            'zoom': 8
        },
        'goods': [
            'Wi-Fi',
            'Бассейн',
            'Кондиционер',
            'Джакузи',
            'Парковка'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': '../../img/avatar-angelina.jpg',
            'name': 'Ангелина'
        },
        "isFavorite": false,
        "isPremium": true,
        "rating": 4.9,
        "bedrooms": 3,
        "maxAdults": 6   
    },

    {
        'id': '9',
        'title': 'Деревянный коттедж в стиле шале',
        'description': 'Уютный домик с камином в живописном районе',
        'type': 'house',
        'price': 650,
        'images': [
            '../../img/dusseldorf-01.png',
            '../../img/dusseldorf-02.png',
            '../../img/dusseldorf-03.png'
        ],
        'city': {
            'name': 'Dusseldorf',
            'location': {
                'latitude': 51.22,
                'longitude': 6.77,
                'zoom': 8
            }
        },
        'location': {
            'latitude': 51.2277,
            'longitude': 6.7735,
            'zoom': 8
        },
        'goods': ['Wi-Fi', 'Камин', 'Кухня', 'Сад'],
        'host': {
            'isPro': false,
            'avatarUrl': '../../img/avatar-angelina.jpg',
            'name': 'Ангелина'
        },
        "isFavorite": true,
        "isPremium": false,
        "rating": 4.7,
        "bedrooms": 2,
        "maxAdults": 4   
    }

]

export {offers};
