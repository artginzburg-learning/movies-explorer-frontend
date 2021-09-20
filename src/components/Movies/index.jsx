import { useTitle } from '../../hooks/useTitle';

import Footer from '../Footer';
import Header from '../Header';
import SearchForm from './SearchForm';

export default function Movies() {
  useTitle('Фильмы');

  return (
    <>
      <Header />
      <main>
        <SearchForm />
      </main>
      <Footer />
    </>
  );
}
