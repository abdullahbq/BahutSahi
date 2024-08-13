class Features extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const items = [
      {
        order: "order-md-0",
        image: "01", // Add your image source here
        title:
          "Igniting curiosity, fueling innovation, and unlocking potential",
        titleinprimary: "Your future, our passion",
        content:
          "Our courses and projects are designed to challenge and inspire you, unlocking your potential and helping you to reach your goals.",
      },
      {
        order: "order-md-1",
        image: "01", // Add your image source here
        title: "Bringing your ideas to life, one project at a time",
        titleinprimary: "Building a brighter tomorrow, today",
        content:
          "Our focus on hands-on learning means that you'll have ample opportunities to apply your skills and knowledge to real-world projects, bringing your ideas to life and making a tangible impact.",
      },
      {
        order: "order-md-0",
        image: "01", // Add your image source here
        title: "Learning without limits",
        titleinprimary: "Learning with purpose, impact, and meaning",
        content:
          "Our online courses and projects provide you with the flexibility and freedom to learn on your own terms, from anywhere in the world, at any time.",
      },
    ];

    this.innerHTML = `
      <section class="features-section bg-primary bg-opacity-10">
        <title-component title="Features"></title-component>
        <div class="container py-5">
          ${items
            .map(
              (item, i, array) => `
          <div class="row justify-content-center align-items-center pb-3 ${
            i === array.length - 1 ? "" : " mb-5"
          }">
            <div class="col-md-7 ${item.order}">
              <h2 class="heading fw-bold">
                ${item.title} <span class="text-primary">${
                item.titleinprimary
              }</span>
              </h2>
              <p>${item.content}</p>
            </div>
            <div class="col-md-5">
              <img src="assets/images/${item.image}.jpg" alt="Image ${
                i + 1
              }" class="img-fluid rounded shadow">
            </div>
          </div>
        `
            )
            .join("")}
        </div>
      </section>
      `;
  }
}

customElements.define("features-component", Features);
