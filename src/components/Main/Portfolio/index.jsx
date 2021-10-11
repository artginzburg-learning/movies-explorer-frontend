import { EXTERNAL_LINK_PROPS } from '../../../utils/constants';

import './Portfolio.scss';

const baseUrl = 'https://artginzburg-learning.github.io/';
const folio = [
  {
    name: 'Статичный сайт',
    path: 'how-to-learn',
  },
  {
    name: 'Адаптивный сайт',
    path: 'russian-travel',
  },
  {
    name: 'Одностраничное приложение',
    path: 'react-mesto-auth',
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        {folio.map((project, index) => (
          <li className="portfolio__links-item" key={index}>
            <a
              className="portfolio__link"
              href={`${baseUrl}${project.path}/`}
              {...EXTERNAL_LINK_PROPS}
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
