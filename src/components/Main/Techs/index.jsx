import './Techs.scss';

const technologies = [
  ['HTML'],
  ['CSS'],
  ['JS', 'javascript'],
  ['React'],
  ['Git'],
  ['Express.js', 'express'],
  ['mongoDB'],
];

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
          {technologies.map((item, index) => (
            <li className="techs__list-item" key={index}>
              <a
                className="techs__list-link"
                href={`https://github.com/topics/${(item[1] ?? item[0]).toLowerCase()}`}
              >
                {item[0]}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Techs;
