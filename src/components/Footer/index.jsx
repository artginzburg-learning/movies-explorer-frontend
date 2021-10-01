import { author, repository } from '../../../package.json';
import './Footer.scss';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__copyright">
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a className="footer__link" href={repository} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            className="footer__link"
            href="https://t.me/artginzburg"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </div>
        <a
          className="footer__link footer__link-copyright"
          href={author.url}
          target="_blank"
          rel="noreferrer"
        >
          &copy; {currentYear}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
