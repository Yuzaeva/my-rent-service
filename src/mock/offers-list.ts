import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
    {
        'id': '1',
        'title': 'Комната в хостеле',
        'type': 'room',
        'price': 100,
        'previewImage': '../../img/1.1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.23,
                'longitude': 4.54,
                'zoom': 8
            }
        },
        'location': {
                'latitude': 52.3909553943508,
                'longitude': 4.85309666406198,
                'zoom': 13
        },
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.2, 
    },
    {
        'id': '2',
        'title': 'Дом у моря',
        'type': 'house',
        'price': 700,
        'previewImage':'../../img/2.2.jpg',
        'city': {
            'name': 'Amsterdam',
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
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.5,
    },
    {
        'id': '3',
        'title': 'Квартира в центре города',
        'type': 'apartment',
        'price': 500,
        'previewImage': '../../img/3.1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.23,
                'longitude': 4.54,
                'zoom': 8
            }
        },
        'location': {
                'latitude': 52.3909553943508,
                'longitude':  4.929309666406198,
                'zoom': 8
        },
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.7,
    },
    {
        'id': '4',
        'title': 'Семейный отель',
        'type': 'hotel',
        'price': 700,
        'previewImage': '../../img/4.1.jpg',
        'city': {
            'name': 'Amsterdam',
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
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.9, 
    },

    {
        'id': '5',
        'title': 'Романтическая квартира у Эйфелевой башни',
        'type': 'apartment',
        'price': 1200,
        'previewImage': '../../img/paris-01.png',
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
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.9,
    },

    {
        'id': '6',
        'title': 'Современный лофт в районе Митте',
        'type': 'apartment',
        'price': 850,
        'previewImage': 
            '../../img/cologne-01.png',
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
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.5,
    },

    {
        'id': '7',
        'title': 'Апартаменты в историческом центре',
        'type': 'apartment',
        'price': 950,
        'previewImage': '../../img/brussel-01.png',
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
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.8,
    },

    {
        'id': '8',
        'title': 'Роскошный пентхаус',
        'type': 'apartment',
        'price': 1500,
        'previewImage':'../../img/hamburg-03.png',
        'city': {
            'name': 'Hamburg',
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
        "isFavorite": false,
        "isPremium": true,
        "rating": 4.9, 
    },

    {
        'id': '9',
        'title': 'Деревянный коттедж в стиле шале',
        'type': 'house',
        'price': 650,
        'previewImage':'../../img/dusseldorf-01.png',
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
        "isFavorite": true,
        "isPremium": false,
        "rating": 4.7,  
    }
] 
