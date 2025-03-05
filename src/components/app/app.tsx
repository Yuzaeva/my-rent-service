import MainPage from "../../pages/main-page/main-page";
import Favorites from "../../pages/favorites/favorites";
import Login from "../../pages/login/login";
import Offer from "../../pages/offer/offer";
import { PrivateRoute } from "../private-route/private-route";
import PageNotFound from "../../pages/page-not-found/page-not-found";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AppRoute } from "../../const";
import { AuthorizationStatus } from "../../const";
import {JSX} from 'react';
import { FullOffer, OffersList } from "../../types/offer";

type AppMainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
    offers: FullOffer[];
}

function App({rentalOffersCount, offers, offersList}: AppMainPageProps): JSX.Element{
    return (
        <BrowserRouter>
        <Routes>
            <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList}/>}/>
            
            <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute
                authorizationStatus={ AuthorizationStatus.Auth}
              >
                <Favorites offers={offers}/>

              </PrivateRoute>
            }
          />
            
            <Route
            path={`${AppRoute.Offer}/:id`}
            element={<Offer offers={offers}/>}/>
            
            <Route
            path={AppRoute.Login}
            element={<Login/>}/>
            
            <Route
            path="*"
            element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
