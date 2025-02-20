import {JSX} from 'react';

function Error(): JSX.Element {
    return(
        <main className="page__main page__main--error">
    <div className="error-page">
        <img className="error" src="/public/img/err404.svg" alt="error"/>
        <h1>Что-то пошло не так</h1>
    </div>
  </main>
    );
}

export default Error;