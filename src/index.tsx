import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const';
import { offers } from './mock/offers';
import { offersList } from './mock/offers-list';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App rentalOffersCount={Setting.rentOffersCount}
    offersList={offersList}
    offers = {offers}/>
    </Provider>
  </React.StrictMode>
);
