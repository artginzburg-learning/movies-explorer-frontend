import { useCallback, useState } from 'react';

import { useWindowSize } from '../../../hooks/useWindowSize';
import { useTimeoutLimitedEffect } from '../../../hooks/useTimeoutLimitedEffect';

import { MOVIES_CONFIG } from '../../../utils/constants';

import MoviesCard from '../MoviesCard';

import './MoviesCardList.scss';

const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1280,
};

const layoutConfig = {
  [breakpoints.desktop]: {
    cardsPerRow: 3,
    initialRows: 4,
    addRowsOnDemand: 1,
  },
  [breakpoints.tablet]: {
    cardsPerRow: 2,
    initialRows: 4,
    addRowsOnDemand: 1,
  },
  [breakpoints.mobile]: {
    cardsPerRow: 1,
    initialRows: 5,
    addRowsOnDemand: 2,
  },
};

function getAppropriateLayout(currentWidth) {
  if (currentWidth >= breakpoints.desktop) {
    return layoutConfig[breakpoints.desktop];
  }
  if (currentWidth >= breakpoints.tablet) {
    return layoutConfig[breakpoints.tablet];
  }
  return layoutConfig[breakpoints.mobile];
}

export default function MoviesCardList({ cards, savedCards, type, ...props }) {
  const typeIsDefault = type === MOVIES_CONFIG.defaultType;

  const cardsToDisplay = typeIsDefault ? cards : savedCards;

  const [cardsLimited, setCardsLimited] = useState([]);

  const [cardsOnDemand, setCardsOnDemand] = useState(0);

  const [windowWidth] = useWindowSize();

  function displayMoreCards() {
    setCardsLimited(cardsToDisplay.slice(0, cardsLimited.length + cardsOnDemand));
  }

  const layoutCards = useCallback(() => {
    const appropriateLayout = getAppropriateLayout(windowWidth);

    const initialCardsQuantity = appropriateLayout.cardsPerRow * appropriateLayout.initialRows;

    setCardsOnDemand(appropriateLayout.addRowsOnDemand * appropriateLayout.cardsPerRow);

    if (!cardsLimited.length) {
      return setCardsLimited(cardsToDisplay.slice(0, initialCardsQuantity));
    }

    setCardsLimited(cardsToDisplay.slice(0, cardsLimited.length));
  }, [cardsLimited.length, cardsToDisplay, windowWidth]);

  useTimeoutLimitedEffect(layoutCards);

  return (
    <section className="moviescards">
      <ul className="moviescards__list">
        {cardsLimited.map((card) => (
          <MoviesCard
            {...props}
            card={card}
            isSaved={!typeIsDefault || savedCards.some((c) => c.movieId === String(card.id))}
            type={type}
            key={(typeIsDefault ? card.id : card.movieId) ?? Math.random()}
          />
        ))}
      </ul>
      {cardsLimited.length < cardsToDisplay.length && (
        <button className="moviescards__more" type="button" onClick={displayMoreCards}>
          Ещё
        </button>
      )}
    </section>
  );
}
