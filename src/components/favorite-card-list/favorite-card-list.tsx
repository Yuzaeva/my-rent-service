import { JSX } from "react";
import FavoriteCard from "../favorite-card/favorite-card";
import { FullOffer } from "../../types/offer";

type FavoriteCardListProps = {
  offers: FullOffer[];
};

function FavoriteCardList({ offers }: FavoriteCardListProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <section className="favorites">
      <h2 className="favorites__title">Saved listings</h2>
      <ul className="favorites__list">
        {favoriteOffers.length > 0 ? (
          favoriteOffers.map((offer) => (
            <li key={offer.id} className="favorites__locations-items">
              <FavoriteCard offer={offer} />
            </li>
          ))
        ) : (
          <p className="favorites__status">You have no saved listings.</p>
        )}
      </ul>
    </section>
  );
}

export default FavoriteCardList;
