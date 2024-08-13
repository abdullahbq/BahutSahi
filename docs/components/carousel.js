class Carousel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // JSON data for carousel content
    const carouselData = [
      {
        image: "01",
        title: "First Slide Title",
        description: "Some description for the first slide.",
      },
      {
        image: "01",
        title: "Second Slide Title",
        description: "Some description for the second slide.",
      },
      {
        image: "01",
        title: "Third Slide Title",
        description: "Some description for the third slide.",
      },
      {
        image: "01",
        title: "Fourth Slide Title",
        description: "Some description for the fourth slide.",
      },
    ];

    // Generate carousel HTML based on JSON data
    this.innerHTML = `
    <section class="carousel-section bg-primary bg-opacity-10">      
      <title-component title="Carousel"></title-component>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            ${carouselData
              .map(
                (_, index) =>
                  `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" ${
                    index === 0 ? 'class="active"' : ""
                  } aria-label="Slide ${index + 1}"></button>`
              )
              .join("")}
          </div>
          <div class="carousel-inner">
            ${carouselData
              .map(
                (item, index) => `
              <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="assets/images/${
                  item.image
                }.jpg" class="img-top d-block w-100" alt="Slide ${index + 1}">
                <div class="carousel-caption d-none d-md-block">
                  <h5>${item.title}</h5>
                  <p>${item.description}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </section>
      `;
  }
}

customElements.define("carousel-component", Carousel);
