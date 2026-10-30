document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }

  const filters = document.querySelectorAll(".filter");
  const items = document.querySelectorAll(".portfolio-item");
  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      filters.forEach((button) => button.classList.remove("active"));
      filter.classList.add("active");
      const category = filter.dataset.filter;
      items.forEach((item) => {
        item.classList.toggle(
          "is-hidden",
          category !== "all" && item.dataset.category !== category,
        );
      });
    });
  });

  const form = document.querySelector("#contact-form");
  const success = document.querySelector(".form-success");
  if (form && success) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.reset();
      success.classList.add("show");
    });
  }

  const orderForm = document.querySelector("#order-form");
  const orderSuccess = document.querySelector("#order-form .form-success");
  if (orderForm && orderSuccess) {
    const serviceChoice = document.querySelector("#service-choice");
    const selectedService = new URLSearchParams(window.location.search).get(
      "service",
    );
    if (
      serviceChoice &&
      selectedService &&
      [...serviceChoice.options].some(
        (option) => option.value === selectedService,
      )
    ) {
      serviceChoice.value = selectedService;
    }
    orderForm.addEventListener("submit", (event) => {
      event.preventDefault();
      orderForm.reset();
      orderSuccess.classList.add("show");
    });
  }

  const articleTitle = document.querySelector("#article-title");
  const articles = {
    code: {
      meta: "Процесс · 12.06.24 · 8 мин",
      title: "Как не утонуть в коде: 5 принципов, которые спасают мои проекты",
      lead: "Чистый код начинается не с идеальной архитектуры, а с умения задавать правильные вопросы.",
      number: "01",
      artTitle: "Как не<br>утонуть<br>в коде",
      visual: "visual-purple",
    },
    design: {
      meta: "Дизайн · 28.05.24 · 6 мин",
      title:
        "Дизайн-система без боли: как начать и не переписать всё через месяц",
      lead: "Дизайн-система должна ускорять команду, а не превращаться в музей компонентов.",
      number: "02",
      artTitle: "Design<br>systems<br>that scale",
      visual: "visual-yellow",
    },
    launch: {
      meta: "Продукт · 04.05.24 · 5 мин",
      title:
        "Идеальный момент для запуска — сегодня: о перфекционизме в разработке",
      lead: "Запуск — это не финальная точка, а самый быстрый способ узнать, что действительно важно пользователям.",
      number: "03",
      artTitle: "Ship<br>it.",
      visual: "visual-blue",
    },
  };
  if (articleTitle) {
    const key = new URLSearchParams(window.location.search).get("article");
    const article = articles[key] || articles.code;
    document.title = `${article.title} | artem.dev`;
    document.querySelector("#article-meta").textContent = article.meta;
    articleTitle.textContent = article.title;
    document.querySelector("#article-lead").textContent = article.lead;
    document.querySelector("#article-number").textContent = article.number;
    document.querySelector("#article-art-title").innerHTML = article.artTitle;
    document.querySelector(".article-art").className =
      `article-art ${article.visual}`;
  }

  const projectDetails = {
    onda: {
      title: "Onda Store — вещи с характером.",
      kicker: "Branding · E-commerce · 2023",
      label: "Onda Store / e-commerce",
      description:
        "Onda — интернет-магазин предметов для медленной и осознанной жизни. Мы собрали тёплый бренд и простой сценарий покупки.",
      client: "Onda Studio",
      time: "8 недель",
      result: "Покупка без лишнего шума.",
      resultText:
        "Сделали магазин, где визуальный язык бренда помогает выбирать, а не отвлекает от выбора.",
      metrics: ["+37%", "−31%", "4.8/5"],
      stack: ["Next.js", "TypeScript", "Shopify API", "Figma", "Vercel"],
      artClass: "detail-art-onda",
    },
    pace: {
      title: "Pace — беги в своём ритме.",
      kicker: "Mobile · iOS · 2024",
      label: "Pace / running app",
      description:
        "Pace превращает тренировку в понятную привычку: показывает прогресс, поддерживает темп и не перегружает пользователя.",
      client: "Pace Athletics",
      time: "10 недель",
      result: "Мотивация, которая остаётся.",
      resultText:
        "Сфокусировались на коротких ежедневных сценариях и сделали данные о тренировках человеческими.",
      metrics: ["+52%", "−24%", "4.9/5"],
      stack: ["React Native", "Node.js", "PostgreSQL", "Figma", "Firebase"],
      artClass: "detail-art-pace",
    },
    quanta: {
      title: "Quanta — инвестируй осознанно.",
      kicker: "Web · Fintech · 2024",
      label: "Quanta / fintech platform",
      description:
        "Quanta помогает инвесторам видеть портфель целиком и принимать решения на основе понятных данных.",
      client: "Quanta Finance",
      time: "14 недель",
      result: "Сложные данные стали ясными.",
      resultText:
        "Упростили путь от первого взгляда на портфель до конкретного решения.",
      metrics: ["+41%", "−46%", "4.7/5"],
      stack: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "AWS"],
      artClass: "detail-art-quanta",
    },
    moodly: {
      title: "Moodly — забота о себе каждый день.",
      kicker: "Mobile · Health · 2024",
      label: "Moodly / wellbeing app",
      description:
        "Moodly помогает замечать своё состояние и выстраивать маленькие привычки заботы о ментальном здоровье.",
      client: "Moodly Health",
      time: "9 недель",
      result: "Небольшие шаги меняют день.",
      resultText:
        "Создали спокойный продукт без давления, сложных графиков и чувства вины.",
      metrics: ["+63%", "−28%", "4.9/5"],
      stack: ["React Native", "TypeScript", "Node.js", "Figma", "Expo"],
      artClass: "detail-art-moodly",
    },
    learnly: {
      title: "Learnly — учиться с интересом.",
      kicker: "Web · EdTech · 2024",
      label: "Learnly / education platform",
      description:
        "Learnly собирает короткие практические курсы в один понятный маршрут для тех, кто учится в своём темпе.",
      client: "Learnly Academy",
      time: "11 недель",
      result: "Знания превращаются в действие.",
      resultText:
        "Сделали путь обучения последовательным, измеримым и достаточно лёгким для каждого дня.",
      metrics: ["+74%", "−39%", "4.8/5"],
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
      artClass: "detail-art-learnly",
    },
  };
  const detail = document.querySelector("#detail-title");
  if (detail) {
    const key = new URLSearchParams(window.location.search).get("project");
    const project = projectDetails[key] || projectDetails.onda;
    document.title = `${project.title} | artem.dev`;
    detail.textContent = project.title;
    document.querySelector("#detail-kicker").textContent = project.kicker;
    document.querySelector("#detail-cover-label").textContent = project.label;
    document.querySelector("#detail-description").textContent =
      project.description;
    document.querySelector("#detail-client").textContent = project.client;
    document.querySelector("#detail-time").textContent = project.time;
    document.querySelector("#detail-result").textContent = project.result;
    document.querySelector("#detail-result-text").textContent =
      project.resultText;
    ["one", "two", "three"].forEach((name, index) => {
      document.querySelector(`#detail-metric-${name}`).textContent =
        project.metrics[index];
    });
    document.querySelector("#detail-stack").innerHTML = project.stack
      .map((item) => `<span>${item}</span>`)
      .join("");
    document.querySelector("#detail-art").className =
      `detail-art ${project.artClass}`;
  }
});
