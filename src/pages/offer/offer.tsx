import { JSX } from 'react';
import { FullOffer } from '../../types/offer';
import { Logo } from '../../components/logo/logo';
import { useParams } from 'react-router-dom';
import PageNotFound from '../page-not-found/page-not-found';
import ReviewForm from '../../components/review-form/review-form';

type OfferProps = {
  offers: FullOffer[]; 
};

function Offer({ offers }: OfferProps): JSX.Element {
    const params = useParams();
    const offer = offers.find((item) => item.id === params.id);
    if (!offer){
        return <PageNotFound/>;
    }
    return (
    <div className ="page page--gray page--main">
        <header className ="header">
            <div className ="container">
            <div className ="header__wrapper">
                <div className ="header__left">
                <Logo/>
                </div>
                <nav className ="header__nav">
                <ul className ="header__nav-list">
                    <li className ="header__nav-item user">
                    <a className ="header__nav-link header__nav-link--profile" href="#">
                        <div className ="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className ="header__user-name user__name">Myemail@gmail.com</span>
                        <span className ="header__favorite-count">{offers.length}</span>
                    </a>
                    </li>
                    <li className ="header__nav-item">
                    <a className ="header__nav-link" href="#">
                        <span className ="header__signout">Sign out</span>
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
                    <div key={image} className='offer__image-wrapper'>
                        <img className='offer__image' src={image} alt='Photo'/>
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
                  <span style={{width: `${(offer.rating/5)*100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (
                    <li className="offer__inside-item">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src="../../img/avatar-max.jpg" width="74" height="74" alt="Host avatar"></img>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar" src="/img/avatar-angelina.jpg" width="54" height="54" alt="Reviews avatar"></img>
                      </div>
                      <span className="reviews__user-name">
                        Ангелина
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{width: "80%"}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        Супер-дупер!
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul>
                <section className="offer__reviews reviews">
              <ul className="reviews__list">
                {}
              </ul>
              <ReviewForm /> {}
            </section>
                </section>
                </div>
                </div>
                </section>
                <section className="offer__map map"></section>
                </main>
                </div>

        );
    }

export default Offer;
