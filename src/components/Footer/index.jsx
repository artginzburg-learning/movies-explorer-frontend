import { author, repository } from '../../../package.json';
import './Footer.css';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__copyright">
        <a className="footer__link" href={author.url}>
          &copy; {currentYear}
        </a>
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href={repository}>
            GitHub
          </a>
          <a className="footer__link" href="https://t.me/artginzburg">
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
