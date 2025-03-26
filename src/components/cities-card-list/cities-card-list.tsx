import { OffersList } from '../../types/offer';
import CitiesCard from '../cities-card/cities-card';

type CitiesCardListProps = {
    offersList: OffersList[];
    onCardHover?: (id: string | null) => void;
    onListItemHover?: (offerId: string) => void;
};

function CitiesCardList({offersList, onCardHover}: CitiesCardListProps){
    return(
        <div className="cities__places-list places__list tabs__content">
            {Array.from(offersList, (item) => 
            <CitiesCard key={item.id} id={item.id} title={item.title} type={item.type} price={item.price}
                previewImage={item.previewImage} isPremium={item.isPremium} rating={item.rating}
                onMouseEnter={() => onCardHover?.(item.id)}
                onMouseLeave={() => onCardHover?.(null)} onHover={function (title: string): void {
                    throw new Error('Function not implemented.');
                } }/>)}
        </div>
        );
}

export {CitiesCardList};
