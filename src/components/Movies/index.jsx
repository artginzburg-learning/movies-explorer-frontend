import { useEffect, useState } from 'react';

import { useCurrentUser } from '../../contexts/CurrentUserContext';

import useStateWithLocalStorage from '../../hooks/useStateWithLocalStorage';
import { useTitle } from '../../hooks/useTitle';

import { PATHNAMES, MOVIES_CONFIG } from '../../utils/constants';
import moviesApi from '../../utils/MoviesApi';

import Footer from '../Footer';
import Header from '../Header';

import MoviesCardList from './MoviesCardList';
import Preloader from './Preloader';
import SearchForm from './SearchForm';

import './Movies.scss';

export default function Movies({
  savedCards = [],
  type = MOVIES_CONFIG.defaultType,
  loggedIn,
  ...props
}) {
  const typeIsDefault = type === MOVIES_CONFIG.defaultType;

  useTitle(typeIsDefault ? PATHNAMES.search.title : PATHNAMES.saved.title);

  const currentUser = useCurrentUser();

  const filterShortState = useState(false);
  const queryState = useStateWithLocalStorage('query', '');

  const [query, setQuery] = queryState;
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

  const filterShortIfNeeded = (card) =>
    !filterShort || card.duration <= MOVIES_CONFIG.shortDuration;
  const filterSearch = (card) =>
    !query ||
    card.nameRU?.toLowerCase().includes(query.toLowerCase()) ||
    card.nameEN?.toLowerCase().includes(query.toLowerCase());

  const filteredCards = cards.filter(filterShortIfNeeded).filter(filterSearch);
  const filteredSavedCards = personalSavedCards.filter(filterShortIfNeeded).filter(filterSearch);

  const nothingFound =
    query && (typeIsDefault ? !filteredCards.length : !filteredSavedCards.length);

  function updateQuery(e) {
    e.preventDefault();

    const newQuery = e.target.value ?? e.target.search.value;

    if (!newQuery) {
      setErrorMessage('Нужно ввести ключевое слово');
      return;
    }

    setErrorMessage('');
    setQuery(newQuery);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm
          updateQuery={updateQuery}
          filterShortState={filterShortState}
          queryState={queryState}
        />
        {nothingFound ? (
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
