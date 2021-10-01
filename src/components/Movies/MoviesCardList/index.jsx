import MoviesCard from '../MoviesCard';

import './MoviesCardList.scss';

export default function MoviesCardList({ cards, type }) {
  return (
    <section className="moviescards">
      <ul className="moviescards__list">
        {cards.map((card) => (
          <MoviesCard card={card} type={type} key={card.movieId ?? Math.random()} />
        ))}
      </ul>
    </section>
  );
}
