import MoviesCard from '../MoviesCard';

import './MoviesCardList.scss';

export default function MoviesCardList({ cards, type }) {
  return (
    <section className="moviescards">
      <ul className="moviescards__list">
        {cards.map((card, index) => (
          <MoviesCard card={card} type={type} key={index} />
        ))}
      </ul>
    </section>
  );
}
