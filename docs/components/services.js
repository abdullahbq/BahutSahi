class Services extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="services-section bg-primary bg-opacity-10">      
      <title-component title="Our Services"></title-component>
        <div class="container py-5">
          <div class="row justify-content-center">
            ${this.renderItems()}
          </div>
        </div>
      </section>
    `;
  }

  renderItems() {
    const items = [
      {
        icon: "fas fa-book",
        title: "Course Catalog",
        content:
          "A comprehensive listing of courses offered on the website, including descriptions, prerequisites, course length, and other details.",
      },
      {
        icon: "fas fa-toolbox",
        title: "Customized Projects",
        content:
          "A collection of project ideas or prompts that students can use to create their own projects or to use as a starting point for coursework.",
      },
      {
        icon: "fas fa-certificate",
        title: "Certifications",
        content:
          "Certification programs that recognize the completion of a specific course or series of courses, which can be used to showcase skills to employers or clients.",
      },
      {
        icon: "fas fa-calendar",
        title: "Flexible Scheduling",
        content:
          "Flexible course scheduling options, such as self-paced courses or live online classes, to accommodate the diverse needs of students.",
      },
      {
        icon: "fas fa-user-shield",
        title: "Personalized Learning",
        content:
          "Personalized learning features, such as adaptive learning algorithms, progress tracking, and personalized feedback, to help students learn at their own pace and level.",
      },
      {
        icon: "fas fa-chart-line",
        title: "Feedback and Assessment",
        content:
          "Regular feedback and assessment of student progress, including grades, quizzes, and tests, to ensure that students are learning and retaining the course material.",
      },
    ];

    return items
      .map(
        (item, i) => `
        <div key=${i} class="col-lg-4 col-md-6">
        <div class="card shadow text-center mb-4 border-primary">
          <i class="${item.icon} fa-5x text-center text-primary pt-5"></i>
          <div class="card-body">
            <h4 class="card-title text-primary fw-bold">${item.title}</h4>
            <p class="card-text">${item.content}</p>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }
}

customElements.define("services-component", Services);
