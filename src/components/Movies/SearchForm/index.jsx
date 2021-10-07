import { MOVIES_CONFIG } from '../../../utils/constants';

import './SearchForm.scss';

export default function SearchForm({ filterShortState, queryState }) {
  const [filterShort, setFilterShort] = filterShortState;
  const setQuery = queryState[1];

  function updateQuery(e) {
    e.preventDefault();

    setQuery(e.target.value ?? e.target.search.value);
  }

  function toggleFilterShort() {
    setFilterShort(!filterShort);
  }

  return (
    <section className="searchform">
      <form onSubmit={updateQuery} className="searchform__form">
        <fieldset className="searchform__fieldset">
          <label className="searchform__fieldset-container">
            <input
              onBlur={updateQuery}
              name="search"
              required
              className="searchform__input"
              type="search"
              placeholder="Фильм"
            />
            <button className="searchform__submit" type="submit" />
          </label>
        </fieldset>
        <label
          title={`Длительность <= ${MOVIES_CONFIG.shortDuration}`}
          className="searchform__label"
        >
          <input
            checked={filterShort}
            onChange={toggleFilterShort}
            className="searchform__switch"
            type="checkbox"
          />
          Короткометражки
        </label>
      </form>
    </section>
  );
}
