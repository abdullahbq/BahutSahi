class DocsComponent extends HTMLElement {
  connectedCallback() {
    this.init();
    this.render();
  }

  async init() {
    const [contentFolderPath, sidebarDataURL] = ["content", "sidebar"].map(attr => this.getAttribute(attr));
    const contentName = contentFolderPath.split("/").pop();

    this.innerHTML = `<div class="container-fluid"><div class="row">
      ${this.section("col-lg-3 col-md-5 noscrollbar bg-primary bg-opacity-10 p-1 pb-2", "sidebar", `<h5 class="text-center" style="font-weight: 900">${contentName}</h5><div id="accordionContainer"></div>`)}
      ${this.section("col-lg-9 col-md-7 m-0 p-0", "content", `<title-component title="${contentName}"></title-component><div class="container p-3">Click a topic from the sidebar to start reading the topic.</div>`)}
    </div></div>`;

    this.q = (selector) => this.querySelector(selector);
    this.q("#accordionContainer").addEventListener("click", (event) => {
      const accordionItem = event.target.closest(".accordion-item-header");
      const fileItem = event.target.closest(".file-item");
      accordionItem ? this.toggleAccordion(accordionItem) : fileItem && this.loadContent(fileItem.dataset.folder, fileItem.dataset.file);
    });

    await this.populateDocs(sidebarDataURL);
  }

  section(classes, id, content) {
    return `<div class="${classes}" id="${id}">${content}</div>`;
  }

  async populateDocs(sidebarDataURL) {
    try {
      const data = await (await fetch(sidebarDataURL)).json();
      this.q("#accordionContainer").innerHTML = Object.entries(data)
        .map(([folderName, fileList]) => this.accordion(folderName, fileList)).join('');
    } catch (error) {
      this.handleError(error, "Failed to load file list.");
    }
  }

  accordion(folderName, fileList) {
    return `<div class="accordion-item"><div class="card border border-primary mb-1 shadow rounded-2">
      <div class="accordion-item-header p-2 d-flex align-items-center" style="cursor: pointer;">
        <i1 class="fas fa-folder pe-2"></i1>
        <span class="fw-bold">${folderName}</span>
        <i2 class="fas fa-chevron-down ms-auto ps-2"></i2>
      </div>
      <div class="accordion-item-content py-2 bg-primary bg-opacity-10" style="display: none;">${this.fileList(fileList, folderName).outerHTML}</div>
    </div></div>`;
  }

  fileList(fileList, folderName) {
    const fileListElement = document.createElement("ul");
    fileListElement.classList.add("my-0", "px-3", "file-list");
    fileListElement.innerHTML = fileList.map(fileName => `<li class="file-item" data-folder="${folderName}" data-file="${fileName}" style="cursor: pointer;">${fileName}</li>`).join('');
    return fileListElement;
  }

  async loadContent(folderName, fileName) {
    try {
      const contentPath = `${this.getAttribute("content")}/${folderName}/${fileName}.html`;
      const data = await (await fetch(contentPath)).text();
      this.updateContent(`<title-component title="${fileName}"></title-component><div class="container p-3">${data}</div>`);
    } catch (error) {
      this.updateContent(`<div class="container p-3">${error.message}</div>`);
    }
  }

  updateContent(html) {
    this.querySelector("#content").innerHTML = html;
  }

  
  toggleAccordion(accordionItem) {
    const content = accordionItem.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    accordionItem.classList.toggle('active', content.style.display !== 'none');

    const icon1 = accordionItem.querySelector('i1');
    icon1.classList.toggle('fa-folder', content.style.display === 'none');
    icon1.classList.toggle('fa-folder-open', content.style.display !== 'none');

    const icon2 = accordionItem.querySelector('i2');
    icon2.classList.toggle('fa-chevron-down', content.style.display === 'none');
    icon2.classList.toggle('fa-chevron-up', content.style.display !== 'none');
  }

  isAccordionItemActive(accordionItem) {
    return accordionItem.classList.contains('active');
  }

  handleError(error, message) {
    console.error("Error:", error);
    this.q("#accordionContainer").innerHTML = `<div class="alert alert-danger" role="alert">${message}</div>`;
  }
}

customElements.define("docs-component", DocsComponent);
