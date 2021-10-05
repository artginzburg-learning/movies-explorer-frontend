import MoviesCard from '../MoviesCard';

import './MoviesCardList.scss';

export default function MoviesCardList({ query, filterShort, cards, savedCards, type, ...props }) {
  return (
    <section className="moviescards">
      <ul className="moviescards__list">
        {type === 'add'
          ? cards.map((card) => (
              <MoviesCard
                {...props}
                card={card}
                isSaved={savedCards.some((c) => c.movieId === String(card.id))}
                type={type}
                key={card.id ?? Math.random()}
              />
            ))
          : savedCards.map((card) => (
              <MoviesCard
                {...props}
                card={card}
                isSaved={true}
                type={type}
                key={card.movieId ?? Math.random()}
              />
            ))}
      </ul>
    </section>
  );
}
