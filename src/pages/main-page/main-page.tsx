import { JSX, useMemo, useState } from 'react';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { Logo } from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { getOffersByCity, sortOffersByType } from '../../utils';
import { CitiesList } from '../../components/cities-list/cities-list';
import { SortOffer } from '../../types/sort';
import { SortOptions } from '../../components/sort-options/sort-options';
import { CITIES_LOCATION } from '../../const';

interface Point {
  id: string;
  title: string;
  lat: number;
  lng: number;
}

function MainPage(): JSX.Element {
  const [hoveredPointId, setHoveredPointId] = useState<string | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);

  const selectedCity = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers);

  const selectedCityOffers = selectedCity 
    ? getOffersByCity(selectedCity.name, offersList)
    : [];

    const currentCity = useMemo(() => (
      CITIES_LOCATION.find((city) => city.name === selectedCity?.name)
    ), [selectedCity]);

  const rentalOffersCount = selectedCityOffers.length;

  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');

  const points = useMemo(() => (
    selectedCityOffers.map((offer) => ({
      id: offer.id,
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    }))
  ), [selectedCityOffers]);

  const handleListItemHover = (offerId: string | null) => {
    setHoveredPointId(offerId);
    const currentOffer = offerId 
      ? points.find((point) => point.id === offerId)
      : null;
    setSelectedPoint(currentOffer || null);
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

      <main className="page__main page__main--index">
        <p className="visually-hidden">Cities</p>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity}/>
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <p className="visually-hidden">Places</p>
              <b className="places__found">{rentalOffersCount} places to stay in {selectedCity?.name}</b>
              <SortOptions activeSorting={activeSort} onChange={(newSorting) => setActiveSort(newSorting)}/>
                <CitiesCardList
                  offersList={sortOffersByType(selectedCityOffers,activeSort)}
                  onListItemHover={handleListItemHover}
                />
            </section>

            <div className="cities__right-section">
              <Map
                city={currentCity?.location || CITIES_LOCATION[0].location}
                points={points}
                selectedPoint={selectedPoint?.id || null}
                hoveredPointId={hoveredPointId}
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
