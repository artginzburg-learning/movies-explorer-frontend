import MoviesCard from '../MoviesCard';

import './MoviesCardList.scss';

export default function MoviesCardList({ cards, savedCards, type, ...props }) {
  console.log(savedCards);
  return (
    <section className="moviescards">
      <ul className="moviescards__list">
        {type === 'add'
          ? cards.map((card) => (
              <MoviesCard
                {...props}
                card={card}
                isSaved={savedCards.includes(card)}
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
                key={card.id ?? Math.random()}
              />
            ))}
      </ul>
    </section>
  );
}
