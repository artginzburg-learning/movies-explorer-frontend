import { useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { pathNames } from '../../utils/constants';

import Footer from '../Footer';
import Header from '../Header';

import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';

export default function Movies({ cards = [], savedCards = [], type = 'add', loggedIn, ...props }) {
  useTitle(type === 'add' ? pathNames.search.title : pathNames.saved.title);

  const filterShortState = useState(false);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm filterShortState={filterShortState} />
        <MoviesCardList
          {...props}
          filterShort={filterShortState[0]}
          type={type}
          cards={cards}
          savedCards={savedCards}
        />
      </main>
      <Footer />
    </>
  );
}
