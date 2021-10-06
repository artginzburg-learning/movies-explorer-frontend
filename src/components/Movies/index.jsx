import { useEffect, useState } from 'react';

import { useCurrentUser } from '../../contexts/CurrentUserContext';

import useStateWithLocalStorage from '../../hooks/useStateWithLocalStorage';
import { useTitle } from '../../hooks/useTitle';

import { pathNames } from '../../utils/constants';
import moviesApi from '../../utils/MoviesApi';
import { moviesConfig } from '../../utils/moviesConfig';

import Footer from '../Footer';
import Header from '../Header';

import MoviesCardList from './MoviesCardList';
import Preloader from './Preloader';
import SearchForm from './SearchForm';

import './Movies.scss';

const defaultType = 'add';

export default function Movies({ savedCards = [], type = defaultType, loggedIn, ...props }) {
  const typeIsDefault = type === defaultType;

  useTitle(typeIsDefault ? pathNames.search.title : pathNames.saved.title);

  const currentUser = useCurrentUser();

  const filterShortState = useState(false);
  const queryState = useState('');

  const query = queryState[0];
  const filterShort = filterShortState[0];

  const [cards, setCards] = useStateWithLocalStorage('cards', []);
  const [lastCardsFetch, setLastCardsFetch] = useStateWithLocalStorage('lastCardsFetch', 0);

  const [errorMessage, setErrorMessage] = useState('');

  const cardsAreOutdated = (Date.now() - lastCardsFetch) / (1000 * 60 * 60 * 24) >= 1;

  useEffect(() => {
    if (query && (cardsAreOutdated || !cards.length)) {
      moviesApi
        .getAllMovies()
        .then((newCards) => {
          setCards(newCards);
          setLastCardsFetch(Date.now());
          setErrorMessage('');
        })
        .catch((err) => {
          setErrorMessage(
            cards.length
              ? 'Обновить список фильмов не удалось, но поиск по сохранённому списку возможен.'
              : 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
          );
          console.log('Couldnt get initial cards from the server', err);
        });
    }
  }, [setCards, query, lastCardsFetch, setLastCardsFetch, cardsAreOutdated, cards]);

  const personalSavedCards = savedCards.filter(
    (card) => !card.owner || (card.owner._id ?? card.owner) === currentUser._id,
  );

  const filterShortIfNeeded = (card) => !filterShort || card.duration <= moviesConfig.shortDuration;
  const filterSearch = (card) =>
    !query ||
    card.nameRU?.toLowerCase().includes(query.toLowerCase()) ||
    card.nameEN?.toLowerCase().includes(query.toLowerCase());

  const filteredCards = cards.filter(filterShortIfNeeded).filter(filterSearch);
  const filteredSavedCards = personalSavedCards.filter(filterShortIfNeeded).filter(filterSearch);

  const nothingFound = typeIsDefault ? !filteredCards.length : !filteredSavedCards.length;

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm filterShortState={filterShortState} queryState={queryState} />
        {cards.length && nothingFound ? (
          <p className="movies__status">Ничего не найдено</p>
        ) : !query && typeIsDefault ? null : cards.length ? (
          <MoviesCardList
            {...props}
            query={query}
            type={type}
            cards={filteredCards}
            savedCards={filteredSavedCards}
          />
        ) : (
          <Preloader />
        )}
        {errorMessage && <p className="movies__status movies__status_type_error">{errorMessage}</p>}
      </main>
      <Footer />
    </>
  );
}
