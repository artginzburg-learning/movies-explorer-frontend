import student from '../../../images/student.jpg';
import './AboutMe.scss';

const birthday = new Date(2002, 3, 25);

function getAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const myAge = getAge(birthday);

function AboutMe() {
  return (
    <section className="aboutme" id="student">
      <article>
        <h2 className="aboutme__title">Студент</h2>

        <div className="aboutme__content">
          <img className="aboutme__image" src={student} alt="Арт Гинзбург" />
          <div className="aboutme__student">
            <div className="aboutme__student-article">
              <h3 className="aboutme__heading">Артур</h3>
              <p className="aboutme__subheading">Фронтенд-разработчик, {myAge} лет</p>
              <p className="aboutme__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan volutpat
                sollicitudin. Nullam eget mauris ante. Nullam id mattis sapien. Praesent mollis,
                diam eget dictum semper, velit diam ultrices ante, vitae condimentum lorem eros
                vitae tortor. Etiam elit leo, hendrerit et nisi a, aliquam suscipit tellus.
                Suspendisse pretium tellus ac erat ultrices viverra. Donec placerat dui nibh, vel
                aliquet tellus ultricies et.
              </p>
            </div>
            <div className="aboutme__links">
              <a className="aboutme__link" href="https://t.me/ginzart">
                Telegram
              </a>
              <a className="aboutme__link" href="https://github.com/artginzburg">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
