import { author, repository } from '../../../package.json';

import { EXTERNAL_LINK_PROPS } from '../../utils/constants';

import './Footer.scss';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__copyright">
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru" {...EXTERNAL_LINK_PROPS}>
            Яндекс.Практикум
          </a>
          <a className="footer__link" href={repository} {...EXTERNAL_LINK_PROPS}>
            GitHub
          </a>
          <a className="footer__link" href="https://t.me/artginzburg" {...EXTERNAL_LINK_PROPS}>
            Telegram
          </a>
        </div>
        <a
          className="footer__link footer__link-copyright"
          href={author.url}
          {...EXTERNAL_LINK_PROPS}
        >
          &copy; {currentYear}
        </a>
      </div>
    </footer>
  );
}
