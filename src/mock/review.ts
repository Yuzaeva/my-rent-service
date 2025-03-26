import { Review } from "../types/review";

const reviews: Review[] = [
    {
        'id': 'us1',
        'comment': 'Отличное место! Все понравилось, рекомендую.',
        'date': '2023-06-29T21:00:00.465Z',
        'rating': 4,
        'user': {
            'name': 'Isaac',
            'avatarUrl': '../../img/avatar-max.jpg',
            'isPro': true
        }
    }
];

export { reviews };