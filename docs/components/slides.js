class FullScreenPresentation extends HTMLElement {
  constructor() {
    super();

    this.slideIndex = 1;
    this.totalSlides = 0;
    this.slides = [];
    this.setupEventListeners();
    this.setupNavigationButtons();
    this.fetchSlides();
  }

  connectedCallback() {
    const observer = new MutationObserver(() => {
      if (this.totalSlides > 0) {
        observer.disconnect();
        this.showSlide(this.slideIndex);
        this.updateSlideCounter(); // Add this line to update the slide counter
      }
    });

    observer.observe(this, { childList: true });
  }

  setupEventListeners() {
    document.addEventListener("keydown", (e) => this.handleKeyDown(e));
  }

  handleKeyDown(e) {
    const keyCode = e.keyCode;
    if (keyCode === 39) {
      this.nextSlide();
    } else if (keyCode === 37) {
      this.prevSlide();
    }
  }

  async fetchSlides() {
    try {
      const response = await fetch(this.getAttribute("path"));
      const htmlContent = await response.text();

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;

      const slideElements = tempDiv.querySelectorAll(".myslide");

      slideElements.forEach((slideContent, index) => {
        const newSlide = document.createElement("div");
        newSlide.classList.add("myslide");
        newSlide.innerHTML = slideContent.innerHTML;

        this.slides.push(newSlide);
        this.totalSlides = this.slides.length;
        this.appendChild(newSlide);
      });

      this.showSlide(this.slideIndex);
    } catch (error) {
      console.error("Error fetching slides:", error);
    }
  }

  updateSlideCounter() {
    const slideCounter = this.querySelector(".slide-counter");
    if (slideCounter) {
      const counterText =
        this.totalSlides > 0
          ? `${this.slideIndex} / ${this.totalSlides}`
          : "0 / 0";
      slideCounter.textContent = counterText;
    }
  }

  nextSlide() {
    this.showSlide(this.slideIndex + 1);
    this.updateSlideCounter();
  }

  prevSlide() {
    this.showSlide(this.slideIndex - 1);
    this.updateSlideCounter();
  }

  showSlide(index) {
    if (index > this.totalSlides) {
      this.slideIndex = 1;
    } else if (index < 1) {
      this.slideIndex = this.totalSlides;
    } else {
      this.slideIndex = index;
    }

    this.slides.forEach((slide, i) => {
      slide.style.display = i === this.slideIndex - 1 ? "block" : "none";
    });
  }

  setupNavigationButtons() {
    this.innerHTML = `
      <div style="position: fixed; bottom: 5px; left: 50%; transform: translateX(-50%); display: flex; justify-content: space-between; width: 250px;" class="presentation-container">
        <button style="margin: 0 5px;" class="btn btn-outline-primary px-3 py-1" id="prevButton">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div style="flex: 1; text-align: center; font-weight: bold;" class="btn btn-primary px-3 py-1 slide-counter"></div>
        <button style="margin: 0 5px;" class="btn btn-outline-primary px-3 py-1" id="nextButton">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    `;

    const prevButton = this.querySelector("#prevButton");
    const nextButton = this.querySelector("#nextButton");

    prevButton.addEventListener("click", () => this.prevSlide());
    nextButton.addEventListener("click", () => this.nextSlide());

    this.updateSlideCounter(); // Call the method to set the initial slide counter
  }
}

customElements.define("fullscreen-presentation", FullScreenPresentation);

function openStaticBackdropModal(contentPath) {
  try {
    const template = document.getElementById("staticBackdropModalTemplate");
    const templateContent = template.content;

    const modal = document.createElement("div");
    modal.classList.add("modal-container");
    modal.appendChild(templateContent.cloneNode(true));

    // Extract title from the button's inner text
    const button = document.activeElement;
    const buttonText = button.querySelector('h5').innerText.trim();
    modal.querySelector(".modal-title").textContent = buttonText;

    const modalBody = modal.querySelector(".modal-body");

    // Find the fullscreen-presentation element in the modal
    const presentation = modalBody.querySelector("fullscreen-presentation");

    // Set the path attribute dynamically
    presentation.setAttribute("path", contentPath);

    document.body.appendChild(modal);

    const bootstrapModal = new bootstrap.Modal(modal.querySelector(".modal"), {
      backdrop: "static",
      keyboard: false,
    });
    bootstrapModal.show();
  } catch (error) {
    console.error("Error fetching or displaying modal content:", error);
  }
}
