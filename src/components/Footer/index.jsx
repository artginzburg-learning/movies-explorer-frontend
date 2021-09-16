import { author, repository } from '../../../package.json';
import './Footer.scss';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__copyright">
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
        <a className="footer__link footer__link-copyright" href={author.url}>
          &copy; {currentYear}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
