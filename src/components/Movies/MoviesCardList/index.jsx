import MoviesCard from '../MoviesCard';

import './MoviesCardList.scss';

export default function MoviesCardList({ cards, savedCards, type, ...props }) {
  const typeIsDefault = type === 'add';

  const cardsToDisplay = typeIsDefault ? cards : savedCards;

  return (
    <section className="moviescards">
      <ul className="moviescards__list">
        {cardsToDisplay.map((card) => (
          <MoviesCard
            {...props}
            card={card}
            isSaved={typeIsDefault ? savedCards.some((c) => c.movieId === String(card.id)) : true}
            type={type}
            key={(typeIsDefault ? card.id : card.movieId) ?? Math.random()}
          />
        ))}
      </ul>
    </section>
  );
}
