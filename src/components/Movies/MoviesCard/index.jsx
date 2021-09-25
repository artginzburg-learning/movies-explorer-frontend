import { classNames } from '../../../utils/toClassNames';

import './MoviesCard.scss';

const moviesListType = 'add';

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

export default function MoviesCard({ card }) {
  const buttonClassNames = ['moviescard__button', `moviescard__button_type_${moviesListType}`];

  return (
    <li className="moviescard">
      <figure className="moviescard__figure">
        <div className="moviescard__text-container">
          <figcaption className="moviescard__title">{card.name}</figcaption>
          <p className="moviescard__duration">{durationDeclension(card.duration)}</p>
        </div>

        <img className="moviescard__image" src={card.img} alt={card.name} />
      </figure>

      <input type="checkbox" defaultChecked={card.added} {...classNames(buttonClassNames)} />
    </li>
  );
}
