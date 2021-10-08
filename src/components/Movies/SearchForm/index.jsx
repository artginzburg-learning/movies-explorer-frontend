import { MOVIES_CONFIG } from '../../../utils/constants';

import './SearchForm.scss';

export default function SearchForm({ updateQuery, filterShortState, queryState }) {
  const [filterShort, setFilterShort] = filterShortState;
  const [query] = queryState;

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
              defaultValue={query}
              name="search"
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
