import { Link } from 'react-router-dom';
import { PATHS } from '../../utils/constants';

import './NotFound.scss';

export default function NotFound() {
  return (
    <main className="notfound">
      <h1 className="notfound__title">404</h1>
      <h2 className="notfound__subtitle">Страница не найдена</h2>
      <nav className="notfound__navigation">
        <Link to={PATHS.main} className="notfound__link">
          Назад
        </Link>
      </nav>
    </main>
  );
}
