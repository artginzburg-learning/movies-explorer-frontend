import { apiDomain } from '../../../utils/constants';
import { classNames } from '../../../utils/toClassNames';

import './MoviesCard.scss';

function declOfNum(number, words) {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];
}

function durationDeclension(duration) {
  return `${duration} ${declOfNum(duration, ['минута', 'минуты', 'минут'])}`;
}

export default function MoviesCard({ card, type }) {
  const buttonClassNames = ['moviescard__button', `moviescard__button_type_${type}`];

  const name = card.nameRU || card.nameEN;

  return (
    <li className="moviescard">
      <a className="moviescard__link" href={card.trailerLink} target="_blank" rel="noreferrer">
        <figure className="moviescard__figure">
          <div className="moviescard__text-container">
            <figcaption className="moviescard__title">{name}</figcaption>
            <p className="moviescard__duration">{durationDeclension(card.duration)}</p>
          </div>

          <img
            className="moviescard__image"
            src={`https://${apiDomain}${card.image.url}`}
            alt={name}
          />
        </figure>
      </a>

      <input
        type="checkbox"
        defaultChecked={type === 'add' ? card.added : !card.added}
        {...classNames(buttonClassNames)}
      />
    </li>
  );
}
