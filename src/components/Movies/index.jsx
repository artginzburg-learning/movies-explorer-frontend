import { useTitle } from '../../hooks/useTitle';
import { pathNames } from '../../utils/constants';

import Footer from '../Footer';
import Header from '../Header';

import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';

export default function Movies({ cards = [], savedCards = [], type = 'add', loggedIn, ...props }) {
  useTitle(type === 'add' ? pathNames.search.title : pathNames.saved.title);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList {...props} type={type} cards={cards} savedCards={savedCards} />
      </main>
      <Footer />
    </>
  );
}
