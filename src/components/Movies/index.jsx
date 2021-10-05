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

export default function Movies({ savedCards = [], type = 'add', loggedIn, ...props }) {
  useTitle(type === 'add' ? pathNames.search.title : pathNames.saved.title);

  const currentUser = useCurrentUser();

  const filterShortState = useState(false);
  const queryState = useState('');

  const query = queryState[0];
  const filterShort = filterShortState[0];

  const [cards, setCards] = useStateWithLocalStorage('cards', []);
  const [cardsAreFetched, setCardsAreFetched] = useState(false);

  useEffect(() => {
    if (query && !cardsAreFetched) {
      moviesApi
        .getAllMovies()
        .then((newCards) => {
          setCards(newCards);
          setCardsAreFetched(true);
        })
        .catch((err) => console.log('Couldnt get initial cards from the server', err));
    }
  }, [setCards, query, cardsAreFetched]);

  const personalSavedCards = savedCards.filter((card) => {
    if (!card.owner) {
      return true;
    }

    return (card.owner._id ?? card.owner) === currentUser._id;
  });

  const filterShortIfNeeded = (card) =>
    filterShort ? card.duration <= moviesConfig.shortDuration : true;
  const filterSearch = (card) =>
    query
      ? card.nameRU?.toLowerCase().includes(query.toLowerCase()) ||
        card.nameEN?.toLowerCase().includes(query.toLowerCase())
      : true;

  const filteredCards = cards.filter(filterShortIfNeeded).filter(filterSearch);
  const filteredSavedCards = personalSavedCards.filter(filterShortIfNeeded).filter(filterSearch);

  const nothingFound = type === 'add' ? !filteredCards.length : !filteredSavedCards.length;

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm filterShortState={filterShortState} queryState={queryState} />
        {nothingFound ? (
          <p className="movies__status">Ничего не найдено</p>
        ) : !query && type === 'add' ? null : cards ? (
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
      </main>
      <Footer />
    </>
  );
}
