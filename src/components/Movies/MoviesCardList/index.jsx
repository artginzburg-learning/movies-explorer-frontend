import { useCurrentUser } from '../../../contexts/CurrentUserContext';

import { moviesConfig } from '../../../utils/moviesConfig';

import MoviesCard from '../MoviesCard';

import './MoviesCardList.scss';

export default function MoviesCardList({ query, filterShort, cards, savedCards, type, ...props }) {
  const currentUser = useCurrentUser();

  const personalSavedCards = savedCards.filter((card) => {
    if (!card.owner) {
      return true;
    }

    return (card.owner._id ?? card.owner) === currentUser._id;
  });

  const filterShortIfNeeded = (card) =>
    filterShort ? card.duration <= moviesConfig.shortDuration : true;
  const filterSearch = (card) =>
    query
      ? card.nameRU?.toLowerCase().includes(query.toLowerCase()) ||
        card.nameEN?.toLowerCase().includes(query.toLowerCase())
      : true;

  return (
    <section className="moviescards">
      <ul className="moviescards__list">
        {type === 'add'
          ? cards
              .filter(filterShortIfNeeded)
              .filter(filterSearch)
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
              .filter(filterSearch)
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
