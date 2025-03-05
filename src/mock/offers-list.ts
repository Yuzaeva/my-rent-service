import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
    {
        'id': '1',
        'title': 'Комната в хостеле',
        'type': 'room',
        'price': 100,
        'previewImage': '../../img/1.1.png',
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
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.2, 
    },
    {
        'id': '2',
        'title': 'Дом у моря',
        'type': 'house',
        'price': 700,
        'previewImage':'../../img/2.2.png',
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
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.5,
    },
    {
        'id': '3',
        'title': 'Квартира в центре города',
        'type': 'apartment',
        'price': 500,
        'previewImage': '../../img/3.1.png',
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
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.7,
    },
    {
        'id': '4',
        'title': 'Семейный отель',
        'type': 'hotel',
        'price': 700,
        'previewImage': '../../img/4.1.png',
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
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.9, 
    },
] 
