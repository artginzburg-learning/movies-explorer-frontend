import { Link } from 'react-router-dom';

import './NotFound.scss';

export default function NotFound() {
  return (
    <main>
      <section className="notfound">
        <h1 className="notfound__title">404</h1>
        <h2 className="notfound__subtitle">Страница не найдена</h2>
        <nav className="notfound__navigation">
          <Link to="/" className="notfound__link">
            Назад
          </Link>
        </nav>
      </section>
    </main>
  );
}
