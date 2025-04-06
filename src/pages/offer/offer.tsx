import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Logo } from '../../components/logo/logo';
import Error from "../../pages/error-page/error";
import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/review-list/review-list';
import { FullOffer, OffersList } from '../../types/offer';
import { reviews } from '../../mock/review';
import Map from '../../components/map/map';
import 'leaflet/dist/leaflet.css';
import { JSX } from 'react';
import { NearbyOffersList } from '../../components/near-offer-list/near-offer-list';
import { Link } from 'react-router-dom';


type OfferProps = {
  offers: FullOffer[];
};

const adaptFullOfferToOffersList = (offer: FullOffer): OffersList => ({
  id: offer.id,
  title: offer.title,
  type: offer.type,
  price: offer.price,
  city: offer.city,
  location: offer.location,
  isFavorite: offer.isFavorite,
  isPremium: offer.isPremium,
  rating: offer.rating,
  previewImage: offer.images?.[0] || '/img/default-offer.jpg' 
});

function Offer({ offers }: OfferProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);

  const [reviewsState, setReviewsState] = useState(reviews);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  if (!offer) {
    return <Error />;
  }

  const nearbyOffers = offers
    .filter((item) => item.city.name === offer.city.name && item.id !== offer.id)
    .slice(0, 3)
    .map(adaptFullOfferToOffersList);

  const points = [
    {
      id: offer.id,
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    },
    ...nearbyOffers.map((item) => ({
      id: item.id,
      title: item.title,
      lat: item.location.latitude,
      lng: item.location.longitude,
    })),
  ];

  const addReview = (reviewText: string, rating: number) => {
    const newReview = {
      id: String(reviewsState.length + 1),
      user: { name: 'Гость', avatarUrl: '/img/default-avatar.jpg', isPro: false },
      rating,
      comment: reviewText,
      date: new Date().toISOString(),
    };
    setReviewsState([...reviewsState, newReview]);
  };

  const handleHover = (id: string | null) => {
    setHoveredId(id);
  };

  return (
    <div className="page page--gray page--main">
       <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedroom{offer.bedrooms !== 1 ? 's' : ''}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adult{offer.maxAdults !== 1 ? 's' : ''}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What's inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>

              <ReviewsList reviews={reviewsState} />
              <ReviewForm 
                onSubmit={(reviewText, rating) => {
                  addReview(reviewText, rating);
                }} 
              />
            </div>
          </div>

          <div className="offer__map-container">
            <Map
              city={offer.city.location}
              points={points}
              selectedPoint={points.find((p) => p.id === hoveredId) || null}
              hoveredPointId={hoveredId}
              height="500px"
              width="100%"
            />
          </div>
        </section>

        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighborhood</h2>
          <NearbyOffersList
            offersList={nearbyOffers} 
            onHover={handleHover}
          />
        </section>
      </main>
    </div>
  );
}

export default Offer;
