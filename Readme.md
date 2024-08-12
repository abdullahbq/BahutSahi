const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const frontMatter = require('front-matter');

// Directories
const docsDir = path.join(__dirname, 'contents', 'docs');
const blogDir = path.join(__dirname, 'contents', 'blog');
const publicDir = path.join(__dirname, 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Bootstrap Navbar HTML
const navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">MyWebsite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="documentation.html">Documentation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="blog.html">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

// Function to convert markdown to HTML with front matter
function convertMarkdownToHTML(dir, outputDir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const outputFilePath = path.join(outputDir, file.replace('.md', '.html'));

        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes, body } = frontMatter(content);

        const htmlContent = marked(body);

        const html = `
            <html>
            <head>
                <title>${attributes.title}</title>
                <link href="css/bootstrap.min.css" rel="stylesheet">
            </head>
            <body>
                ${navbar}
                <div class="container mt-4">
                    <h1>${attributes.title}</h1>
                    <div>${htmlContent}</div>
                </div>
                <script src="js/bootstrap.bundle.min.js"></script>
            </body>
            </html>
        `;

        fs.writeFileSync(outputFilePath, html);
    });
}

// Convert docs and blog markdown to HTML
convertMarkdownToHTML(docsDir, publicDir);
convertMarkdownToHTML(blogDir, publicDir);

// Generate the documentation and blog page with a list of links, dates, tags, and descriptions
function generateListingPage(dir, outputFilePath, title) {
    const files = fs.readdirSync(dir);

    let listItems = files.map(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes } = frontMatter(content);
        const link = file.replace('.md', '.html');

        const date = attributes.date ? `<small class="text-muted">Published on: ${attributes.date}</small><br>` : '';
        const tags = attributes.tags ? `<small class="text-muted">Tags: ${attributes.tags.join(', ')}</small><br>` : '';
        const description = attributes.description ? `<p>${attributes.description}</p>` : '';

        return `
            <li class="mb-4">
                <a href="${link}">${attributes.title}</a><br>
                ${date}
                ${tags}
                ${description}
            </li>
        `;
    }).join('');

    const html = `
        <html>
        <head>
            <title>${title}</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            ${navbar}
            <div class="container mt-4">
                <h1>${title}</h1>
                <ul>
                    ${listItems}
                </ul>
            </div>
            <script src="js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}

generateListingPage(docsDir, path.join(publicDir, 'documentation.html'), 'Documentation');
generateListingPage(blogDir, path.join(publicDir, 'blog.html'), 'Blog');

























const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const frontMatter = require('front-matter');

// Directories
const docsDir = path.join(__dirname, 'contents', 'docs');
const blogDir = path.join(__dirname, 'contents', 'blog');
const publicDir = path.join(__dirname, 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Bootstrap Navbar HTML
const navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">MyWebsite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="documentation.html">Documentation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="blog.html">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

// Function to convert markdown to HTML with front matter
function convertMarkdownToHTML(dir, outputDir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const outputFilePath = path.join(outputDir, file.replace('.md', '.html'));

        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes, body } = frontMatter(content);

        const htmlContent = marked(body);

        const html = `
            <html>
            <head>
                <title>${attributes.title}</title>
                <link href="css/bootstrap.min.css" rel="stylesheet">
            </head>
            <body>
                ${navbar}
                <div class="container mt-4">
                    <h1>${attributes.title}</h1>
                    <div>${htmlContent}</div>
                </div>
                <script src="js/bootstrap.bundle.min.js"></script>
            </body>
            </html>
        `;

        fs.writeFileSync(outputFilePath, html);
    });
}

// Convert docs and blog markdown to HTML
convertMarkdownToHTML(docsDir, publicDir);
convertMarkdownToHTML(blogDir, publicDir);

// Generate the documentation page with left and right sidebars
function generateDocumentationPage(dir, outputFilePath) {
    const files = fs.readdirSync(dir);

    let listItems = files.map(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes } = frontMatter(content);
        const link = file.replace('.md', '.html');

        const date = attributes.date ? `<small class="text-muted">Published on: ${attributes.date}</small><br>` : '';
        const tags = attributes.tags ? `<small class="text-muted">Tags: ${attributes.tags.join(', ')}</small><br>` : '';
        const description = attributes.description ? `<p>${attributes.description}</p>` : '';

        return `
            <li class="mb-4">
                <a href="#" class="doc-link" data-file="${link}">${attributes.title}</a><br>
                ${date}
                ${tags}
                ${description}
            </li>
        `;
    }).join('');

    const firstFile = files.length > 0 ? files[0].replace('.md', '.html') : '';
    const firstContent = firstFile ? marked(frontMatter(fs.readFileSync(path.join(dir, firstFile.replace('.html', '.md')), 'utf-8')).body) : '';

    const html = `
        <html>
        <head>
            <title>Documentation</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
            <style>
                .container-fluid {
                    display: flex;
                }
                .sidebar {
                    width: 25%;
                    border-right: 1px solid #ddd;
                    padding-right: 15px;
                    overflow-y: auto;
                }
                .content {
                    width: 75%;
                    padding-left: 15px;
                }
            </style>
        </head>
        <body>
            ${navbar}
            <div class="container-fluid mt-4">
                <div class="sidebar">
                    <h2>Documents</h2>
                    <ul>
                        ${listItems}
                    </ul>
                </div>
                <div class="content" id="doc-content">
                    ${firstContent}
                </div>
            </div>
            <script src="js/bootstrap.bundle.min.js"></script>
            <script>
                document.querySelectorAll('.doc-link').forEach(link => {
                    link.addEventListener('click', function(event) {
                        event.preventDefault();
                        const file = this.getAttribute('data-file');
                        fetch(file)
                            .then(response => response.text())
                            .then(html => {
                                const content = new DOMParser().parseFromString(html, 'text/html').querySelector('body').innerHTML;
                                document.getElementById('doc-content').innerHTML = content;
                            });
                    });
                });
            </script>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}

// Generate the blog page with a list of links, dates, tags, and descriptions
function generateBlogPage(dir, outputFilePath, title) {
    const files = fs.readdirSync(dir);

    let listItems = files.map(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes } = frontMatter(content);
        const link = file.replace('.md', '.html');

        const date = attributes.date ? `<small class="text-muted">Published on: ${attributes.date}</small><br>` : '';
        const tags = attributes.tags ? `<small class="text-muted">Tags: ${attributes.tags.join(', ')}</small><br>` : '';
        const description = attributes.description ? `<p>${attributes.description}</p>` : '';

        return `
            <li class="mb-4">
                <a href="${link}">${attributes.title}</a><br>
                ${date}
                ${tags}
                ${description}
            </li>
        `;
    }).join('');

    const html = `
        <html>
        <head>
            <title>${title}</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            ${navbar}
            <div class="container mt-4">
                <h1>${title}</h1>
                <ul>
                    ${listItems}
                </ul>
            </div>
            <script src="js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}

generateDocumentationPage(docsDir, path.join(publicDir, 'documentation.html'), 'Documentation');
generateBlogPage(blogDir, path.join(publicDir, 'blog.html'), 'Blog');






























const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const frontMatter = require('front-matter');

// Directories
const docsDir = path.join(__dirname, 'contents', 'docs');
const blogDir = path.join(__dirname, 'contents', 'blog');
const publicDir = path.join(__dirname, 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Bootstrap Navbar HTML
const navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">MyWebsite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="documentation.html">Documentation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="blog.html">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

// Function to convert markdown to HTML with front matter
function convertMarkdownToHTML(dir, outputDir, isDocumentation) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const outputFilePath = path.join(outputDir, file.replace('.md', '.html'));

        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes, body } = frontMatter(content);

        const htmlContent = marked(body);

        const html = isDocumentation ? `
            <html>
            <head>
                <title>${attributes.title}</title>
                <link href="css/bootstrap.min.css" rel="stylesheet">
            </head>
            <body>
                <div>
                    <div>${htmlContent}</div>
                </div>
                <script src="js/bootstrap.bundle.min.js"></script>
            </body>
            </html>
        ` : `
        <html>
            <head>
                <title>${attributes.title}</title>
                <link href="css/bootstrap.min.css" rel="stylesheet">
            </head>
            <body>
                ${navbar}
                <div class="container mt-4">
                    <div>${htmlContent}</div>
                </div>
                <script src="js/bootstrap.bundle.min.js"></script>
            </body>
            </html>
            `;

        fs.writeFileSync(outputFilePath, html);
    });
}

// Convert docs and blog markdown to HTML
convertMarkdownToHTML(docsDir, publicDir, true); // true for documentation
convertMarkdownToHTML(blogDir, publicDir, false); // false for blog posts

// Generate the documentation page with left and right sidebars
function generateDocumentationPage(dir, outputFilePath) {
    const files = fs.readdirSync(dir);

    let listItems = files.map(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes } = frontMatter(content);
        const link = file.replace('.md', '.html');

        const date = attributes.date ? `<small class="text-muted">Published on: ${attributes.date}</small><br>` : '';
        const tags = attributes.tags ? `<small class="text-muted">Tags: ${attributes.tags.join(', ')}</small><br>` : '';
        const description = attributes.description ? `<p>${attributes.description}</p>` : '';

        return `
            <li class="mb-4">
                <a href="#" class="doc-link" data-file="${link}">${attributes.title}</a><br>
                ${date}
                ${tags}
                ${description}
            </li>
        `;
    }).join('');

    const firstFile = files.length > 0 ? files[0].replace('.md', '.html') : '';
    const firstContent = firstFile ? marked(frontMatter(fs.readFileSync(path.join(dir, firstFile.replace('.html', '.md')), 'utf-8')).body) : '';

    const html = `
        <html>
        <head>
            <title>Documentation</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
            <style>
                .container-fluid {
                    display: flex;
                }
                .sidebar {
                    width: 25%;
                    border-right: 1px solid #ddd;
                    padding-right: 15px;
                    overflow-y: auto;
                }
                .content {
                    width: 75%;
                    padding-left: 15px;
                }
            </style>
        </head>
        <body>
            ${navbar}
            <div class="container-fluid mt-4">
                <div class="sidebar">
                    <h2>Documents</h2>
                    <ul>
                        ${listItems}
                    </ul>
                </div>
                <div class="content" id="doc-content">
                    ${firstContent}
                </div>
            </div>
            <script src="js/bootstrap.bundle.min.js"></script>
            <script>
                document.querySelectorAll('.doc-link').forEach(link => {
                    link.addEventListener('click', function(event) {
                        event.preventDefault();
                        const file = this.getAttribute('data-file');
                        fetch(file)
                            .then(response => response.text())
                            .then(html => {
                                const content = new DOMParser().parseFromString(html, 'text/html').querySelector('body').innerHTML;
                                document.getElementById('doc-content').innerHTML = content;
                            });
                    });
                });
            </script>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}

// Generate the blog page with a list of links, dates, tags, and descriptions
function generateBlogPage(dir, outputFilePath, title) {
    const files = fs.readdirSync(dir);

    let listItems = files.map(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes } = frontMatter(content);
        const link = file.replace('.md', '.html');

        const date = attributes.date ? `<small class="text-muted">Published on: ${attributes.date}</small><br>` : '';
        const tags = attributes.tags ? `<small class="text-muted">Tags: ${attributes.tags.join(', ')}</small><br>` : '';
        const description = attributes.description ? `<p>${attributes.description}</p>` : '';

        return `
            <li class="mb-4">
                <a href="${link}">${attributes.title}</a><br>
                ${date}
                ${tags}
                ${description}
            </li>
        `;
    }).join('');

    const html = `
        <html>
        <head>
            <title>${title}</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            ${navbar}
            <div class="container mt-4">
                <h1>${title}</h1>
                <ul>
                    ${listItems}
                </ul>
            </div>
            <script src="js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}

generateDocumentationPage(docsDir, path.join(publicDir, 'documentation.html'), 'Documentation');
generateBlogPage(blogDir, path.join(publicDir, 'blog.html'), 'Blog');
