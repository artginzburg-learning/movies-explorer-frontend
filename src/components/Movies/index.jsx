import { useTitle } from '../../hooks/useTitle';
import { pathNames } from '../../utils/constants';

import Footer from '../Footer';
import Header from '../Header';

import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';

export default function Movies({ cards = [], type = 'add', loggedIn }) {
  useTitle(type === 'add' ? pathNames.search.title : pathNames.saved.title);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList type={type} cards={cards} />
      </main>
      <Footer />
    </>
  );
}
