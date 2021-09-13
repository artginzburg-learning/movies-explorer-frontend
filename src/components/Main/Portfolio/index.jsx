import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://artginzburg.github.io/how-to-learn/">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://artginzburg.github.io/russian-travel/">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://artginzburg.github.io/react-mesto-auth/">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
