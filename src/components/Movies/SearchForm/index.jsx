import './SearchForm.scss';

export default function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform__form">
        <fieldset className="searchform__fieldset">
          <label className="searchform__fieldset-container">
            <input required className="searchform__input" type="search" placeholder="Фильм" />
            <button className="searchform__submit" type="submit" />
          </label>
        </fieldset>
        <label className="searchform__label">
          <input className="searchform__switch" type="checkbox" />
          Короткометражки
        </label>
      </form>
    </section>
  );
}
