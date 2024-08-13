class Pricing extends HTMLElement {
  constructor() {
    super();
    this.state = {
      active: 0,
    };
  }

  connectedCallback() {
    this.render();
  }

  clickHandler(e) {
    this.state.active = parseInt(e.currentTarget.getAttribute("num"));
    this.render();
  }

  render() {
    const tabs = [
      {
        label: "Monthly",
        data: [
          {
            title: "Enterprise",
            price: "$29",
            features: [
              "30 users included",
              "15 GB of storage",
              "Phone and email support",
              "Help center access",
            ],
            buttonLabel: "Get started",
          },
          {
            title: "Basic",
            price: "$19",
            features: [
              "10 users included",
              "5 GB of storage",
              "Email support",
              "Help center access",
            ],
            buttonLabel: "Get started",
          },
        ],
      },
      {
        label: "Semester",
        data: [
          {
            title: "Pro",
            price: "$15",
            features: [
              "20 users included",
              "10 GB of storage",
              "Priority email support",
              "Help center access",
            ],
            buttonLabel: "Get started",
          },
          {
            title: "Free",
            price: "$0",
            features: [
              "10 users included",
              "2 GB of storage",
              "Email support",
              "Help center access",
            ],
            buttonLabel: "Get started",
          },
        ],
      },
    ];

    const activeData = tabs[this.state.active].data;
    let content = activeData
      .map(
        (data, index) => `
          <div class="col-md-6" key="${index}">
            <div class="card shadow text-center mb-4 border-primary">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">${data.title}</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  ${data.price}
                  <small class="text-muted fw-light">/mo</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  ${data.features
                    .map((feature) => `<li>${feature}</li>`)
                    .join("")}
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary shadow">
                  ${data.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        `
      )
      .join("");

    const buttons = tabs
      .map(({ label }, i) => {
        return `<button
                class="${
                  this.state.active === i
                    ? "btn btn-primary rounded-pill m-1 shadow"
                    : "btn btn-outline-primary rounded-pill m-1 shadow"
                }"
                num="${i}"
              >
                ${label}
              </button>`;
      })
      .join("");

    this.innerHTML = `
      <section class="pricing-section bg-primary bg-opacity-10">
        <title-component title="Pricing"></title-component> 
        <div class="container text-center py-5">
          <div class="mb-4">${buttons}</div> 
          <div class="row">${content}</div>
        </div>
      </section>
    `;

    // Attach click event listeners to the buttons
    tabs.forEach((_, i) => {
      const button = this.querySelector(`button[num="${i}"]`);
      if (button) {
        button.addEventListener("click", (e) => this.clickHandler(e));
      }
    });
  }
}

customElements.define("pricing-component", Pricing);
