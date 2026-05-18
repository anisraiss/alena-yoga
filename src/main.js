import "./style.css";
import { animate, stagger, inView } from "motion";

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="site-header">
    <a class="brand hero-reveal" href="#" aria-label="Alyona Tikhonova">
      <span class="brand-line">ALYONA</span>
      <span class="brand-line">TIKHONOVA</span>
    </a>
    <nav class="site-nav hero-reveal">
      <a class="nav-link" href="#regisration">Регистрация</a>
    </nav>
  </header>

  <section class="hero" aria-labelledby="hero-headline">
    <div class="hero-text">
      <h1 class="hero-headline hero-reveal" id="hero-headline">
        <span class="hero-headline__line">Йога,</span>
        <span class="hero-headline__line">основанная на <em>изучении</em> тела.</span>
      </h1>

      <p class="hero-sub hero-reveal">
        Практика, построенная на 20 годах изучения, научных знаниях
        и работе с лучшими учителями мира — от Дживамукти до Идо Портала.
      </p>

      <a class="hero-cta hero-reveal" href="#regisration">
        Получить три урока бесплатно
      </a>

      <p class="hero-authority hero-reveal">
        Тренер: Олег Тиньков · Диана Арбенина · Екатерина Андреева
      </p>
    </div>

    <div class="hero-media hero-photo-reveal">
      <div class="hero-media__frame">
        <img
          class="hero-media__image"
          src="/alyona-hero.jpg.jpeg"
          alt="Алёна Тихонова"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </section>

  <section class="authority-section" aria-labelledby="authority-headline">
    <div class="authority-intro">
      <p class="authority-eyebrow authority-reveal">Путь обучения</p>
      <h2 class="authority-headline authority-reveal" id="authority-headline">
        <span class="authority-headline__line">Двадцать лет —</span>
        <span class="authority-headline__line">у <em>лучших</em> учителей мира.</span>
      </h2>
      <p class="authority-intro__body authority-reveal">
        Серьёзная практика требует серьёзного обучения.
        Каждый этап моего пути — это работа с учителями,
        которые сформировали современное понимание тела и движения.
      </p>
    </div>

    <ol class="timeline">
      <li class="timeline__entry">
        <div class="timeline__period">Начало</div>
        <div class="timeline__content">
          <h3 class="timeline__title">Универсальная Йога</h3>
          <p class="timeline__body">
            Освоение четырёх уровней Универсальной Йоги под руководством
            Андрея Лаппы — фундамент всей последующей практики.
          </p>
        </div>
      </li>
      <li class="timeline__entry">
        <div class="timeline__period">Нью-Йорк</div>
        <div class="timeline__content">
          <h3 class="timeline__title">Дживамукти</h3>
          <p class="timeline__body">
            Обучение у основателей Дживамукти йоги — Шерон Геннон и Дэвида Лайфа.
            Школа, соединяющая физическую практику с философией и музыкой.
          </p>
        </div>
      </li>
      <li class="timeline__entry">
        <div class="timeline__period">Движение</div>
        <div class="timeline__content">
          <h3 class="timeline__title">Идо Портал и Райан Минц</h3>
          <p class="timeline__body">
            Работа с профессиональными движенческими практиками —
            изучение тела не как набора асан, а как системы взаимосвязей.
            Здесь практика выходит за пределы йоги.
          </p>
        </div>
      </li>
      <li class="timeline__entry">
        <div class="timeline__period">Анатомия</div>
        <div class="timeline__content">
          <h3 class="timeline__title">Анатомические поезда</h3>
          <p class="timeline__body">
            Изучение работы Томаса Майерса о миофасциальных линиях —
            научный фундамент для понимания того,
            как движение организовано в теле.
          </p>
        </div>
      </li>
    </ol>

    <p class="authority-closing">
      Это не курсы — это десятилетия наблюдения, изучения
      и проверки на собственном теле.
    </p>
  </section>

  <section class="testimonials" aria-labelledby="testimonials-headline">
    <div class="testimonials-intro">
      <p class="testimonials-eyebrow testimonials-reveal">Их выбор</p>
      <h2 class="testimonials-headline testimonials-reveal" id="testimonials-headline">
        <span class="testimonials-headline__line">Тренер тех,</span>
        <span class="testimonials-headline__line">у кого нет времени на <em>ошибки</em>.</span>
      </h2>
    </div>

    <figure class="testimonial testimonial--hero">
      <div class="testimonial__photo testimonial__photo--tinkov">
        <img
          src="/tinkov.jpg.jpg"
          alt="Олег Тиньков"
          loading="lazy"
          decoding="async"
        />
      </div>
      <blockquote class="testimonial__pull">
        Алёна — настоящий профессионал своего дела.
      </blockquote>
      <p class="testimonial__quote">
        Не помню, занимался ли я йогой до Алёны, но на первом же занятии
        она меня реально зацепила — это был и некий вызов, и в то же время
        ощущалось, что она понимает, что делает. В том числе с её помощью
        мне удаётся справляться с различными болями, а у меня, как спортсмена,
        их достаточно.
      </p>
      <hr class="testimonial__divider" />
      <figcaption class="testimonial__attribution">
        <span class="testimonial__name">Олег Тиньков</span>
        <span class="testimonial__role">Предприниматель, основатель Тинькофф Банка</span>
      </figcaption>
    </figure>

    <hr class="testimonials-rule" />

    <div class="testimonials-row">
      <figure class="testimonial testimonial--compact">
        <div class="testimonial__photo testimonial__photo--arbenina">
          <img
            src="/arbenina.jpg"
            alt="Диана Арбенина"
            loading="lazy"
            decoding="async"
          />
        </div>
        <blockquote class="testimonial__pull">
          Лучший преподаватель йоги.
        </blockquote>
        <p class="testimonial__quote">
          В любом деле нужен проводник. Мне повезло: я его нашла сразу.
          Алёна — это невероятной силы духа и красоты. С ней можно пускаться
          в любые эксперименты и знать, что в любой момент ты защищён
          её профессиональностью и глубоким знанием предмета.
        </p>
        <hr class="testimonial__divider" />
        <figcaption class="testimonial__attribution">
          <span class="testimonial__name">Диана Арбенина</span>
          <span class="testimonial__role">Музыкант, поэт, лидер группы «Ночные снайперы»</span>
        </figcaption>
      </figure>

      <figure class="testimonial testimonial--compact">
        <div class="testimonial__photo testimonial__photo--andreeva">
          <img
            src="/andreeva.jpg.jpg"
            alt="Екатерина Андреева"
            loading="lazy"
            decoding="async"
          />
        </div>
        <blockquote class="testimonial__pull">
          Голос Алёны вводит меня в состояние медитации.
        </blockquote>
        <p class="testimonial__quote">
          Занятия с Алёной помогают мне достигать желаемого результата:
          увеличивается гибкость тела, асаны плавно перетекают из одной в другую.
          С тех пор, как я начала с ней заниматься, моё внутреннее состояние
          стало гораздо более уравновешенно — и это для меня очень важно.
        </p>
        <hr class="testimonial__divider" />
        <figcaption class="testimonial__attribution">
          <span class="testimonial__name">Екатерина Андреева</span>
          <span class="testimonial__role">Телеведущая программы «Время», Первый канал</span>
        </figcaption>
      </figure>
    </div>
  </section>

  <section class="courses" aria-labelledby="courses-headline">
    <div class="courses-intro">
      <p class="courses-eyebrow courses-reveal">С чего начать</p>
      <h2 class="courses-headline courses-reveal" id="courses-headline">
        <span class="courses-headline__line">Сначала —</span>
        <span class="courses-headline__line">три урока. <em>Бесплатно</em>.</span>
      </h2>
      <p class="courses-intro__body courses-reveal">
        Без обязательств и подписок. Доступ к трём базовым видеоурокам
        в течение месяца — чтобы почувствовать практику и понять,
        подходит ли она вам.
      </p>
    </div>

    <div class="primary-offer">
      <div class="primary-offer__lessons">
        <p class="primary-offer__label">В комплекте</p>
        <ol class="lessons">
          <li class="lesson">
            <span class="lesson__number">01</span>
            <div class="lesson__info">
              <h3 class="lesson__title">Утренний комплекс</h3>
              <p class="lesson__duration">30 минут</p>
            </div>
          </li>
          <li class="lesson">
            <span class="lesson__number">02</span>
            <div class="lesson__info">
              <h3 class="lesson__title">Активная тренировка</h3>
              <p class="lesson__duration">75 минут</p>
            </div>
          </li>
          <li class="lesson">
            <span class="lesson__number">03</span>
            <div class="lesson__info">
              <h3 class="lesson__title">Медитация и пранаяма</h3>
              <p class="lesson__duration">30 минут</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="primary-offer__pitch">
        <p class="primary-offer__label">Бесплатный доступ</p>
        <p class="primary-offer__statement">
          Месяц практики, чтобы понять — ваше это или нет.
        </p>
        <p class="primary-offer__reassurance">
          Регистрация занимает минуту. Доступ открывается сразу.
        </p>
        <a class="primary-offer__cta" href="#register">Зарегистрироваться</a>
      </div>
    </div>

    <p class="courses-break-eyebrow">Для тех, кто готов идти дальше</p>

    <div class="course-cards">
      <article class="course-card">
        <p class="course-card__tag">Флагман</p>
        <h3 class="course-card__name">Здоровая гибкость</h3>
        <p class="course-card__description">
          Шпагаты и прогибы 2.0 — система для тех, кто хочет работать
          с гибкостью осознанно и без травм.
        </p>
        <a class="course-card__link" href="#flexibility">Узнать больше →</a>
      </article>

      <article class="course-card">
        <p class="course-card__tag">21 день</p>
        <h3 class="course-card__name">Точка сборки</h3>
        <p class="course-card__description">
          Марафон, который возвращает контакт с телом. Короткие ежедневные
          практики в течение трёх недель.
        </p>
        <a class="course-card__link" href="#marathon">Узнать больше →</a>
      </article>

      <article class="course-card">
        <p class="course-card__tag">Базовый курс</p>
        <h3 class="course-card__name">Умное тело 2.0</h3>
        <p class="course-card__description">
          Полное переосмысление того, как работает тело в практике.
          Для тех, кто хочет понимать, а не копировать.
        </p>
        <a class="course-card__link" href="#smart-body">Узнать больше →</a>
      </article>
    </div>
  </section>

  <footer class="site-footer" aria-labelledby="footer-statement">
    <p class="site-footer__statement footer-reveal" id="footer-statement">
      Школа Йоги Алёны Тихоновой
    </p>

    <div class="site-footer__columns footer-reveal">
      <div class="footer-column">
        <h3 class="footer-column__heading">Информация</h3>
        <ul class="footer-column__links">
          <li><a href="#about">Обо мне</a></li>
          <li><a href="#lessons">Все видеоуроки</a></li>
          <li><a href="#faq">Часто задаваемые вопросы</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-column__heading">Программы</h3>
        <ul class="footer-column__links">
          <li><a href="#courses">Курсы</a></li>
          <li><a href="#video-catalog">Каталог видеоуроков</a></li>
          <li><a href="#free">Бесплатные уроки</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-column__heading">Контакты</h3>
        <ul class="footer-column__links">
          <li><a href="tel:+380954306366">+380 95 430 63 66</a></li>
          <li><a href="mailto:info@yogatikhonova.com">info@yogatikhonova.com</a></li>
        </ul>
        <div class="footer-column__social">
          <a href="#vk">VK</a>
          <a href="#youtube">YouTube</a>
        </div>
      </div>
    </div>

    <hr class="site-footer__divider footer-reveal" />

    <div class="site-footer__bottom footer-reveal">
      <p class="site-footer__copyright">© 2026 Alyona Tikhonova. Все права защищены.</p>
      <p class="site-footer__legal">
        <a href="#offer">Договор-оферта</a>
        <span class="site-footer__dot" aria-hidden="true">·</span>
        <a href="#privacy">Политика конфиденциальности</a>
      </p>
    </div>
  </footer>
`;

animate(
  ".hero-reveal",
  { opacity: 1, transform: "translateY(0)" },
  { duration: 0.7, delay: stagger(0.08), easing: "ease-out" }
);

animate(
  ".hero-photo-reveal",
  { opacity: 1, transform: "translateY(0)" },
  { duration: 0.9, delay: 0.48, easing: "ease-out" }
);

let authoritySectionAnimated = false;
inView(
  ".authority-section",
  () => {
    if (authoritySectionAnimated) return;
    authoritySectionAnimated = true;

    animate(
      ".authority-intro .authority-reveal",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.8, delay: stagger(0.08), easing: "ease-out" }
    );

    animate(
      ".timeline__entry",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.7, delay: stagger(0.12, { start: 0.4 }), easing: "ease-out" }
    );

    animate(
      ".authority-closing",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.8, delay: 1.0, easing: "ease-out" }
    );
  },
  { amount: 0.2 }
);

let testimonialsAnimated = false;
inView(
  ".testimonials",
  () => {
    if (testimonialsAnimated) return;
    testimonialsAnimated = true;

    animate(
      ".testimonials-intro .testimonials-reveal",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.8, delay: stagger(0.08), easing: "ease-out" }
    );

    animate(
      ".testimonial--hero",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.8, delay: 0.5, easing: "ease-out" }
    );

    animate(
      ".testimonial--compact",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.8, delay: 1.0, easing: "ease-out" }
    );
  },
  { amount: 0.2 }
);

let coursesAnimated = false;
inView(
  ".courses",
  () => {
    if (coursesAnimated) return;
    coursesAnimated = true;

    animate(
      ".courses-intro .courses-reveal",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.8, delay: stagger(0.08), easing: "ease-out" }
    );

    animate(
      ".primary-offer",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.8, delay: 0.5, easing: "ease-out" }
    );

    animate(
      ".courses-break-eyebrow",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.8, delay: 0.9, easing: "ease-out" }
    );

    animate(
      ".course-card",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.8, delay: stagger(0.12, { start: 1.0 }), easing: "ease-out" }
    );
  },
  { amount: 0.2 }
);

let footerAnimated = false;
inView(
  ".site-footer",
  () => {
    if (footerAnimated) return;
    footerAnimated = true;

    animate(
      ".footer-reveal",
      { opacity: 1, transform: "translateY(0)" },
      { duration: 0.8, easing: "ease-out" }
    );
  },
  { amount: 0.3 }
);
