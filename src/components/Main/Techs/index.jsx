import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <article className="techs__content">
        <h3 className="techs__heading">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__list">
          {['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'].map((item) => (
            <li className="techs__list-item">{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Techs;
