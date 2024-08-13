class Title extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Get the title attribute value or default to "Default Title"
    const title = this.getAttribute("title") || "Title";
    this.innerHTML = `        
      <h1 class="card-body text-center shadow mb-0 py-3 bg-primary bg-opacity-25 border border-primary border-start-0 border-end-0 border-5 border-opacity-50 d-flex align-items-center justify-content-center" style="font-weight: 900">${title}</h1>
    `;
  }
}

customElements.define("title-component", Title);
