import "./style.css";
import { animate, stagger, inView } from "motion";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/styles";

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
    <p class="hero-eyebrow hero-reveal">Йога-школа Алёны Тихоновой</p>

    <h1 class="hero-headline hero-reveal" id="hero-headline">
      <span class="hero-headline__line">Йога,</span>
      <span class="hero-headline__line">основанная на <em>изучении</em> тела.</span>
    </h1>

    <p class="hero-sub hero-reveal">
      Практика, построенная на 20 годах изучения, научных знаниях
      и работе с лучшими учителями мира — от Дживамукти до Идо Портала.
    </p>

    <span class="hero-cta-magnet hero-reveal">
      <a class="hero-cta" href="#regisration">
        Получить три урока бесплатно
      </a>
    </span>

    <p class="hero-authority hero-reveal">
      Тренер: Олег Тиньков · Диана Арбенина · Екатерина Андреева
    </p>

    <div class="hero-image hero-photo-reveal">
      <img
        src="/alena-portrait.jpg"
        alt="Алёна Тихонова"
        loading="eager"
        decoding="async"
      />
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

  <div class="signup-modal" id="signup-modal" hidden>
    <div class="signup-modal__overlay" data-close-modal></div>
    <div class="signup-modal__panel" role="dialog" aria-modal="true" aria-labelledby="signup-modal-title">
      <button class="signup-modal__close" type="button" aria-label="Закрыть" data-close-modal>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
          <path d="M6 6 L18 18 M6 18 L18 6"/>
        </svg>
      </button>

      <div class="signup-modal__photo" aria-hidden="true">
        <img src="/alena-scorpion.jpg" alt="" loading="lazy" decoding="async" />
      </div>

      <div class="signup-modal__content">
        <p class="signup-modal__eyebrow">Бесплатный доступ</p>
        <h2 class="signup-modal__title" id="signup-modal-title">Войдите<br><em>в практику.</em></h2>
        <p class="signup-modal__subtitle">Утренний комплекс · Активная тренировка · Медитация и пранаяма</p>

        <form class="signup-modal__form" id="signup-form" novalidate>
          <div class="signup-field">
            <label for="signup-name">Имя</label>
            <input type="text" id="signup-name" name="name" required autocomplete="given-name" />
            <span class="signup-field__error" data-error-for="name"></span>
          </div>

          <div class="signup-field">
            <label for="signup-email">Email</label>
            <input type="email" id="signup-email" name="email" required autocomplete="email" />
            <span class="signup-field__error" data-error-for="email"></span>
          </div>

          <div class="signup-field">
            <label for="signup-phone">Телефон</label>
            <input type="tel" id="signup-phone" name="phone" required autocomplete="tel" placeholder="+7 ___ ___ __ __" />
            <span class="signup-field__error" data-error-for="phone"></span>
          </div>

          <button type="submit" class="signup-modal__submit">Зарегистрироваться</button>

          <p class="signup-modal__legal">Нажимая кнопку, вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
        </form>

        <div class="signup-modal__success" hidden>
          <p class="signup-modal__success-eyebrow">Готово</p>
          <h3 class="signup-modal__success-title">Спасибо.</h3>
          <p class="signup-modal__success-text">Доступ к трём урокам открыт. Проверьте вашу почту — там подробности и первые шаги.</p>
        </div>
      </div>
    </div>
  </div>
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

const heroCtaMagnet = document.querySelector(".hero-cta-magnet");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (heroCtaMagnet && !prefersReducedMotion) {
  const RADIUS = 140;
  const MAX_PULL = 14;
  const GROW_RADIUS = 300;
  const MAX_GROW = 0.08;
  let active = false;

  window.addEventListener("mousemove", (event) => {
    const rect = heroCtaMagnet.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const clampedX = Math.max(rect.left, Math.min(event.clientX, rect.right));
    const clampedY = Math.max(rect.top, Math.min(event.clientY, rect.bottom));
    const edgeDx = event.clientX - clampedX;
    const edgeDy = event.clientY - clampedY;
    const distToEdge = Math.hypot(edgeDx, edgeDy);

    let tx = 0;
    let ty = 0;
    let growScale = 1;

    if (distToEdge < RADIUS) {
      const magneticStrength = 1 - distToEdge / RADIUS;
      const dirX = event.clientX - cx;
      const dirY = event.clientY - cy;
      const dirLen = Math.hypot(dirX, dirY) || 1;
      tx = (dirX / dirLen) * MAX_PULL * magneticStrength;
      ty = (dirY / dirLen) * MAX_PULL * magneticStrength;
    }

    if (distToEdge < GROW_RADIUS) {
      const growStrength = 1 - distToEdge / GROW_RADIUS;
      growScale = 1 + growStrength * MAX_GROW;
    }

    if (distToEdge < GROW_RADIUS) {
      animate(
        heroCtaMagnet,
        { transform: `translate(${tx}px, ${ty}px) scale(${growScale})` },
        { duration: 0.4, easing: "ease-out" }
      );
      active = true;
    } else if (active) {
      animate(
        heroCtaMagnet,
        { transform: "translate(0px, 0px) scale(1)" },
        { duration: 0.4, easing: "ease-out" }
      );
      active = false;
    }
  });
}

// ===== Signup modal =====

const modal = document.querySelector("#signup-modal");
const modalForm = document.querySelector("#signup-form");
const successView = modal.querySelector(".signup-modal__success");
const nameInput = document.querySelector("#signup-name");
const emailInput = document.querySelector("#signup-email");
const phoneInput = document.querySelector("#signup-phone");
const appShell = document.querySelector("#app");

const iti = intlTelInput(phoneInput, {
  initialCountry: "ru",
  separateDialCode: false,
  countrySearch: true,
  formatAsYouType: true,
  loadUtils: () => import("intl-tel-input/utils"),
});

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

let lastTrigger = null;
let modalOpen = false;

const resetModal = () => {
  modalForm.hidden = false;
  successView.hidden = true;
  modalForm.reset();
  modal
    .querySelectorAll(".signup-field__error")
    .forEach((el) => (el.textContent = ""));
  modal
    .querySelectorAll(".signup-field input")
    .forEach((el) => el.classList.remove("has-error"));
};

const openModal = (trigger) => {
  if (modalOpen) return;
  modalOpen = true;
  lastTrigger = trigger;
  modal.hidden = false;
  // Force reflow so the transition from opacity 0 → 1 actually animates
  void modal.offsetWidth;
  modal.setAttribute("data-open", "true");
  document.body.style.overflow = "hidden";
  // Hide everything else in #app from assistive tech
  for (const child of appShell.children) {
    if (child !== modal) child.setAttribute("aria-hidden", "true");
  }
  // Focus the first input after the transition begins
  window.setTimeout(() => nameInput.focus(), 100);
};

const closeModal = () => {
  if (!modalOpen) return;
  modalOpen = false;
  modal.removeAttribute("data-open");
  document.body.style.overflow = "";
  for (const child of appShell.children) {
    if (child !== modal) child.removeAttribute("aria-hidden");
  }
  if (lastTrigger && typeof lastTrigger.focus === "function") {
    lastTrigger.focus();
  }
  window.setTimeout(() => {
    if (!modalOpen) {
      modal.hidden = true;
      resetModal();
    }
  }, 300);
};

document.querySelectorAll(".hero-cta, .primary-offer__cta").forEach((cta) => {
  cta.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(cta);
  });
});

modal.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (!modalOpen) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeModal();
  }
});

modal.addEventListener("keydown", (event) => {
  if (!modalOpen || event.key !== "Tab") return;
  const focusables = [...modal.querySelectorAll(focusableSelector)].filter(
    (el) => el.offsetParent !== null
  );
  if (focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const countDigits = (s) => (s.match(/\d/g) || []).length;

const validateField = (input) => {
  const value = input.value.trim();
  let error = "";
  if (input.name === "name") {
    if (!value) error = "Введите имя";
    else if (value.length < 2) error = "Имя слишком короткое";
  } else if (input.name === "email") {
    if (!value) error = "Введите email";
    else if (!emailRe.test(value)) error = "Некорректный email";
  } else if (input.name === "phone") {
    if (!value) error = "Введите телефон";
    else if (countDigits(value) < 7) error = "Введите хотя бы 7 цифр";
  }
  const errorEl = modal.querySelector(`[data-error-for="${input.name}"]`);
  if (error) {
    input.classList.add("has-error");
    if (errorEl) errorEl.textContent = error;
    return false;
  }
  input.classList.remove("has-error");
  if (errorEl) errorEl.textContent = "";
  return true;
};

modal.querySelectorAll(".signup-field input").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.classList.contains("has-error")) validateField(input);
  });
});

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = [...modalForm.querySelectorAll("input")];
  const results = inputs.map(validateField);
  if (results.some((ok) => !ok)) {
    const firstInvalid = inputs.find((i) => i.classList.contains("has-error"));
    if (firstInvalid) firstInvalid.focus();
    return;
  }
  const payload = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: iti.getNumber() || phoneInput.value.trim(),
    timestamp: new Date().toISOString(),
  };
  // eslint-disable-next-line no-console
  console.log("[signup]", payload);
  modalForm.hidden = true;
  successView.hidden = false;
});
