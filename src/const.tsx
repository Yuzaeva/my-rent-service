import PageNotFound from "./pages/page-not-found/page-not-found";
import Favorites from "./pages/favorites/favorites";
import Login from "./pages/login/login";
import Offer from "./pages/offer/offer";

const Setting = {
    rentOffersCount: 312,
} as const;

const AppRoute = {
    Main: '/',
    Login: '/login',
    Favorites: '/favorites',
    Offer: '/offer/:id',
} as const;

const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
}
export {Setting, AppRoute, AuthorizationStatus};
