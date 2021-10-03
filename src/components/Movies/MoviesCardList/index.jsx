import { useCurrentUser } from '../../../contexts/CurrentUserContext';

import MoviesCard from '../MoviesCard';

import './MoviesCardList.scss';

export default function MoviesCardList({ filterShort, cards, savedCards, type, ...props }) {
  const currentUser = useCurrentUser();

  const personalSavedCards = savedCards.filter((card) => {
    if (!card.owner) {
      return true;
    }

    return (card.owner._id ?? card.owner) === currentUser._id;
  });

  const filterShortIfNeeded = (card) => (filterShort ? card.duration <= 40 : true);

  return (
    <section className="moviescards">
      <ul className="moviescards__list">
        {type === 'add'
          ? cards
              .filter(filterShortIfNeeded)
              .map((card) => (
                <MoviesCard
                  {...props}
                  card={card}
                  isSaved={personalSavedCards.some((c) => c.movieId === String(card.id))}
                  type={type}
                  key={card.id ?? Math.random()}
                />
              ))
          : personalSavedCards
              .filter(filterShortIfNeeded)
              .map((card) => (
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
