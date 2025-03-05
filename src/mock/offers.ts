import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        'id': '1',
        'title': 'Комната в хостеле',
        'description': 'Удобная комната в общем хостеле, рядом с центральным проспектом.',
        'type': 'room',
        'price': 100,
        'images': [
            '../../img/1.1.png',
            '../../img/1.2.png',
            '../../img/1.3.png'
        ],
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 59.9343,
                'longitude': 30.3351,
                'zoom': 13
            }
        },
        'location': {
                'latitude': 59.9321,
                'longitude': 30.3361,
                'zoom': 13
        },
        'goods': [
            'Wi-Fi',
            'Общий холодильник',
            'Кухня'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': 'avatar-max.jpg',
            'name': 'Макс'
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
        'description': 'дом с бассейном и выходом к пляжу, идеален для семейного отдыха',
        'type': 'house',
        'price': 700,
        'images': [
            '../../img/2.1.png',
            '../../img/2.2.png',
            '../../img/2.3.png'
        ],
        'city': {
            'name': 'Brussels',
            'location': {
                'latitude': 59.9343,
                'longitude': 30.3351,
                'zoom': 16
            }
        },
        'location': {
                'latitude': 59.9325,
                'longitude': 30.3365,
                'zoom': 13
        },
        'goods': [
            'Wi-Fi',
            'Бассейн',
            'Кондиционер',
            'Барбекю'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': 'avatar-max.jpg',
            'name': 'Макс'
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
            '../../img/3.1.png',
            '../../img/3.2.png',
            '../../img/3.3.png'
        ],
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 55.7558,
                'longitude': 37.6173,
                'zoom': 16
            }
        },
        'location': {
                'latitude': 55.7559,
                'longitude': 37.6123,
                'zoom': 13
        },
        'goods': [
            'Wi-Fi',
            'Телефизор',
            'Холодильник',
            'Стиральная машина'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': 'avatar-max.jpg',
            'name': 'Макс'
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
            '../../img/4.1.png',
            '../../img/4.2.png',
            '../../img/4.3.png'
        ],
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 55.7558,
                'longitude': 37.6173,
                'zoom': 16
            }
        },
        'location': {
                'latitude': 55.7572,
                'longitude': 37.6150,
                'zoom': 13
        },
        'goods': [
            'Wi-Fi',
            'Ресторан',
            'Фитнес-зал',
            'Детская комната'
        ],
        'host': {
            'isPro': true,
            'avatarUrl': 'avatar-max.jpg',
            'name': 'Макс'
        },
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.9,
        "bedrooms": 2,
        "maxAdults": 2   
    },
]

export {offers};
