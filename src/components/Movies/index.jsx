import { useTitle } from '../../hooks/useTitle';

import Footer from '../Footer';
import Header from '../Header';

import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';

export default function Movies({ cards = [], type = 'add' }) {
  useTitle(type === 'add' ? 'Фильмы' : 'Сохранённые фильмы');

  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList type={type} cards={cards} />
      </main>
      <Footer />
    </>
  );
}
