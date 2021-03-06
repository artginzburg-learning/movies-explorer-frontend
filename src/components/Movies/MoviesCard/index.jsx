import { API_DOMAIN, EXTERNAL_LINK_PROPS, MOVIES_CONFIG } from '../../../utils/constants';
import { classNames } from '../../../utils/toClassNames';
import { declOfNum } from '../../../utils/declOfNum';

import './MoviesCard.scss';

function durationDeclension(duration) {
  return `${duration} ${declOfNum(duration, ['минута', 'минуты', 'минут'])}`;
}

export default function MoviesCard({ card, isSaved, type, ...props }) {
  const typeIsDefault = type === MOVIES_CONFIG.defaultType;

  const buttonClassNames = ['moviescard__button', `moviescard__button_type_${type}`];

  const name = card.nameRU || card.nameEN;

  function handleSaveOrDeleteClick() {
    isSaved ? props.onCardDelete(card) : props.onCardSave(card);
  }

  return (
    <li className="moviescard">
      <a
        className="moviescard__link"
        href={typeIsDefault ? card.trailerLink : card.trailer}
        {...EXTERNAL_LINK_PROPS}
      >
        <figure className="moviescard__figure">
          <div className="moviescard__text-container">
            <figcaption className="moviescard__title">{name}</figcaption>
            <p className="moviescard__duration">{durationDeclension(card.duration)}</p>
          </div>

          <img
            className="moviescard__image"
            src={typeIsDefault ? `https://${API_DOMAIN}${card.image.url}` : card.image}
            alt={name}
          />
        </figure>
      </a>

      <input
        type="checkbox"
        checked={typeIsDefault ? isSaved : !isSaved}
        onChange={handleSaveOrDeleteClick}
        {...classNames(buttonClassNames)}
      />
    </li>
  );
}
