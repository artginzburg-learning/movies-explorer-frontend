function AboutProjectColumn({ heading, children }) {
  return (
    <li className="aboutproject__column">
      <h3 className="aboutproject__heading">{heading}</h3>
      <p className="aboutproject__text">{children}</p>
    </li>
  );
}

function AboutProject() {
  return (
    <section className="aboutproject" id="about">
      <article className="aboutproject__content">
        <h2 className="aboutproject__title">О проекте</h2>

        <ul className="aboutproject__columns">
          <AboutProjectColumn heading="Дипломный проект включал 5 этапов">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </AboutProjectColumn>
          <AboutProjectColumn heading="На выполнение диплома ушло < 5 недель">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </AboutProjectColumn>
        </ul>

        <ul className="aboutproject__plan">
          <li className="aboutproject__plan-segment">
            <p>3 дня</p>
            <p>Back-end</p>
          </li>
          <li>
            <p>4 недели</p>
            <p>Front-end</p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default AboutProject;
