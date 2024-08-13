---
title: "Usage Guide"
date: 2024-08-13
description: "Detailed instructions on how to use the project, including command options and troubleshooting tips."
---

# Usage Guide

This guide provides detailed instructions on how to interact with the project and utilize its features.

## Basic Usage

To start the project, run the following command:
```bash
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const frontMatter = require('front-matter');

// Directories
const docsDir = path.join(__dirname, 'contents', 'docs');
const blogDir = path.join(__dirname, 'contents', 'blog');
const publicDir = path.join(__dirname, 'docs');
const assetsDir = path.join(__dirname, 'assets');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Create directories in publicDir based on folders in docsDir
function createDirectoriesFromDocs(docsDir, publicDir) {
    const folders = fs.readdirSync(docsDir).filter(file => fs.statSync(path.join(docsDir, file)).isDirectory());

    folders.forEach(folder => {
        const publicFolderPath = path.join(publicDir, folder);

        if (!fs.existsSync(publicFolderPath)) {
            fs.mkdirSync(publicFolderPath);
        }
    });
}

// Create directories in publicDir
createDirectoriesFromDocs(docsDir, publicDir);

// Function to copy static assets
function copyAssets(sourceDir, targetDir) {
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const items = fs.readdirSync(sourceDir);

    items.forEach(item => {
        const sourcePath = path.join(sourceDir, item);
        const targetPath = path.join(targetDir, item);

        if (fs.statSync(sourcePath).isDirectory()) {
            copyAssets(sourcePath, targetPath);
        } else {
            fs.copyFileSync(sourcePath, targetPath);
        }
    });
}

// Copy static assets
copyAssets(path.join(assetsDir, 'css'), path.join(publicDir, 'css'));
copyAssets(path.join(assetsDir, 'js'), path.join(publicDir, 'js'));
copyAssets(path.join(assetsDir, 'images'), path.join(publicDir, 'images'));



// Bootstrap Navbar HTML
const navbar = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">MyWebsite</a>        
        <button class="btn btn-outline-light d-lg-none me-auto" id="toggle-sidebar">
            <i class="bi bi-list"></i> Sidebar
        </button>
        <button class="btn btn-outline-light d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-list"></i> Menu
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
                    <a class="nav-link" href="tags.html">Tags</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="archives.html">Archives</a>
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

// Bootstrap Footer HTML
const footer = `
<footer class="bg-dark text-white text-center py-4 mt-auto">
    <div class="container">
        <p class="mb-2">&copy; ${new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <p class="mb-2">
            <a href="contact.html" class="text-white me-3">Contact Us</a> |
            <a href="about.html" class="text-white ms-3">About Us</a>
        </p>
        <div class="mb-3">
            <a href="https://facebook.com" class="text-white me-2" target="_blank">
                <i class="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" class="text-white me-2" target="_blank">
                <i class="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" class="text-white me-2" target="_blank">
                <i class="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com" class="text-white" target="_blank">
                <i class="bi bi-linkedin"></i>
            </a>
        </div>
    </div>
</footer>
`;

// Function to convert markdown to HTML with front matter
function convertMarkdownToBlogHTML(dir, outputDir, isDocumentation) {
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

// Function to convert Markdown to HTML and save it
function convertMarkdownToHTML() {
    const docsDir = path.join(__dirname, 'contents', 'docs');
    const publicDir = path.join(__dirname, 'docs');

    // Read all directories in the docsDir
    fs.readdir(docsDir, (err, folders) => {
        if (err) throw err;

        folders.forEach(folder => {
            const folderPath = path.join(docsDir, folder);
            const publicFolderPath = path.join(publicDir, folder);

            // Create folder in publicDir if it doesn't exist
            if (!fs.existsSync(publicFolderPath)) {
                fs.mkdirSync(publicFolderPath, { recursive: true });
            }

            // Read all Markdown files in the folder
            fs.readdir(folderPath, (err, files) => {
                if (err) throw err;

                files.forEach(file => {
                    if (path.extname(file) === '.md') {
                        const filePath = path.join(folderPath, file);
                        const publicFilePath = path.join(publicFolderPath, path.basename(file, '.md') + '.html');

                        // Read Markdown file
                        fs.readFile(filePath, 'utf8', (err, data) => {
                            if (err) throw err;

                            // Convert Markdown to HTML
                            const html = marked(data);

                            // Write HTML to the publicDir
                            fs.writeFile(publicFilePath, html, (err) => {
                                if (err) throw err;
                            });
                        });
                    }
                });
            });
        });
    });
}

// Convert docs and blog markdown to HTML
convertMarkdownToHTML(docsDir, publicDir, true); // true for documentation
convertMarkdownToBlogHTML(blogDir, publicDir, false); // false for blog posts

// Generate the documentation page with a left sidebar and a content area
function generateDocumentationPage(docsDir, outputFilePath) {
    const folders = fs.readdirSync(docsDir).filter(file => fs.statSync(path.join(docsDir, file)).isDirectory());

    let sidebarItems = folders.map(folder => {
        const folderPath = path.join(docsDir, folder);
        const files = fs.readdirSync(folderPath);

        let fileItems = files.map(file => {
            if (path.extname(file) === '.md') {
                const filePath = path.join(folderPath, file);
                const content = fs.readFileSync(filePath, 'utf-8');
                const { attributes } = frontMatter(content);
                const link = path.join(folder, file.replace('.md', '.html'));
                return `<li><a href="${link}" class="doc-link" data-file="${link}">${attributes.title}</a></li>`;
            }
            return '';
        }).join('');

        return `
            <li>
                <span>${folder}</span>
                <ul>
                    ${fileItems}
                </ul>
            </li>
        `;
    }).join('');

    const html = `
        <html>
        <head>
            <title>Documentation</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
            <style>
                .docs-container-fluid {
                    display: flex;
                }
                .sidebar {
                    width: 25%;
                    padding: 15px;
                    position: sticky;
                    top: 0;
                    overflow-y: auto;
                    background-color: #f8f9fa;
                    border-right: 1px solid #dee2e6;
                }
                .content {
                    width: 75%;
                    padding: 15px;
                }
                .tree ul {
                    list-style-type: none;
                    padding-left: 1em;
                    position: relative;
                }
                .tree li {
                    margin: 0.5em 0;
                    position: relative;
                }
                .tree li:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -1em;
                    width: 0.8em;
                    height: 100%;
                    border-left: 1px solid #000;
                }
                .tree li span {
                    position: relative;
                    padding-left: 1em;
                }
                .tree li ul {
                    margin-left: 1em;
                }
                @media (max-width: 992px) {
                    .sidebar {
                        display: none;
                        width: 100%;
                        padding: 15px;
                    }
                    .docs-container-fluid {
                        flex-direction: column;
                    }
                    .content {
                        width: 100%;
                    }
                }
                .sidebar.show {
                    display: block;
                }
            </style>
        </head>
        <body class="d-flex flex-column min-vh-100">
            ${navbar}
            <div class="docs-container-fluid mt-4">
                <div class="sidebar tree" id="sidebar">
                    <h2>Documentation</h2>
                    <ul>
                        ${sidebarItems}
                    </ul>
                </div>
                <div class="content">
                    <div class="content-area">
                        <p>Select a file to view its content.</p>
                    </div>
                </div>
            </div>
            ${footer}
            <script src="js/bootstrap.bundle.min.js"></script>
            <script>
                document.addEventListener('DOMContentLoaded', function () {
                    const docLinks = document.querySelectorAll('.doc-link');
                    const contentArea = document.querySelector('.content-area');

                    docLinks.forEach(link => {
                        link.addEventListener('click', function (event) {
                            event.preventDefault();
                            const file = this.getAttribute('data-file');

                            fetch(file)
                                .then(response => response.text())
                                .then(data => {
                                    contentArea.innerHTML = new DOMParser().parseFromString(data, 'text/html').body.innerHTML;
                                });
                        });
                    });

                    document.getElementById('toggle-sidebar').addEventListener('click', function () {
                        document.getElementById('sidebar').classList.toggle('show');
                    });
                });
            </script>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}

// Generate the blog page with a list of cards for each blog post
function generateBlogPage(dir, outputFilePath, title) {
    const files = fs.readdirSync(dir);

    let listItems = files.map(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes } = frontMatter(content);
        const link = file.replace('.md', '.html');

        const date = attributes.date ? `<small class="text-muted">Published on: ${new Date(attributes.date).toLocaleDateString()}</small>` : '';
        const tags = attributes.tags ? `<small class="text-muted">Tags: ${attributes.tags.join(', ')}</small>` : '';
        const description = attributes.description ? `<p class="card-text">${attributes.description}</p>` : '';

        return `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title"><a href="${link}">${attributes.title}</a></h5>
                        ${date}
                        ${tags}
                        ${description}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const html = `
        <html>
        <head>
            <title>${title}</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
            <style>
                .card { border: 1px solid #ddd; border-radius: 8px; }
                .card-title a { text-decoration: none; color: #007bff; }
                .card-title a:hover { text-decoration: underline; }
                .card-body { padding: 20px; }
                .card-text { font-size: 0.9rem; }
            </style>
        </head>
        <body class="d-flex flex-column min-vh-100">
            ${navbar}
            <div class="container mt-4">
                <h1>${title}</h1>
                <div class="row">
                    ${listItems}
                </div>
            </div>
            ${footer}
            <script src="js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}


// Generate the tags page
function generateTagsPage(dir, outputFilePath) {
    const files = fs.readdirSync(dir);
    let tagsMap = {};

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes } = frontMatter(content);

        if (attributes.tags) {
            attributes.tags.forEach(tag => {
                if (!tagsMap[tag]) {
                    tagsMap[tag] = [];
                }
                tagsMap[tag].push({
                    title: attributes.title,
                    link: file.replace('.md', '.html')
                });
            });
        }
    });

    let tagListItems = Object.keys(tagsMap).map(tag => {
        const posts = tagsMap[tag].map(post => `<a href="${post.link}">${post.title}</a>`).join('<br>');
        return `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${tag}</h5>
                    <p class="card-text">${posts || 'No posts available.'}</p>
                </div>
            </div>
        `;
    }).join('');

    const html = `
        <html>
        <head>
            <title>Tags</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
            <style>
                .card { border: 1px solid #ddd; border-radius: 8px; }
                .card-title { font-weight: bold; }
                .card-text a { text-decoration: none; }
            </style>
        </head>
        <body class="d-flex flex-column min-vh-100">
            ${navbar}
            <div class="container mt-4">
                <h1>Tags</h1>
                <div class="row">
                    <div class="col-md-12">
                        ${tagListItems || '<p>No tags available.</p>'}
                    </div>
                </div>
            </div>
            ${footer}
            <script src="js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}

// Generate the archives page
function generateArchivesPage(dir, outputFilePath) {
    const files = fs.readdirSync(dir);
    let archivesMap = {};

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes } = frontMatter(content);

        if (attributes.date) {
            const dateString = attributes.date.toString();
            const yearMonth = dateString.substring(0, 7);
            if (!archivesMap[yearMonth]) {
                archivesMap[yearMonth] = [];
            }
            archivesMap[yearMonth].push({
                title: attributes.title,
                link: file.replace('.md', '.html')
            });
        }
    });

    let archiveListItems = Object.keys(archivesMap).sort().map(yearMonth => {
        const [year, month] = yearMonth.split('-');
        const monthName = new Date(`${year}-${month}-01`).toLocaleString('default', { month: 'long' });
        const monthYearFormatted = `${monthName} ${year}`;

        const posts = archivesMap[yearMonth].map(post => `<a href="${post.link}">${post.title}</a>`).join('<br>');
        return `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${monthYearFormatted}</h5>
                    <p class="card-text">${posts || 'No posts available.'}</p>
                </div>
            </div>
        `;
    }).join('');

    const html = `
        <html>
        <head>
            <title>Archives</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
            <style>
                .card { border: 1px solid #ddd; border-radius: 8px; }
                .card-title { font-weight: bold; }
                .card-text a { text-decoration: none; }
            </style>
        </head>
        <body class="d-flex flex-column min-vh-100">
            ${navbar}
            <div class="container mt-4">
                <h1>Archives</h1>
                <div class="row">
                    <div class="col-md-12">
                        ${archiveListItems || '<p>No archives available.</p>'}
                    </div>
                </div>
            </div>
            ${footer}
            <script src="js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}

// Function to generate static pages with larger content
function generateStaticPage(title, contentPath, outputFilePath) {
    let content;

    // Check if contentPath is a file
    if (fs.existsSync(contentPath)) {
        content = fs.readFileSync(contentPath, 'utf-8');
    } else {
        content = contentPath; // Use the content directly if it's not a file
    }

    const html = `
        <html>
        <head>
            <title>${title}</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body class="d-flex flex-column min-vh-100">
            ${navbar}
            <div class="container mt-4">
                <h1>${title}</h1>
                <div>${content}</div>
            </div>
            ${footer}
            <script src="js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}

// Paths to the content files (adjust paths as needed)
const homeContentPath = path.join(__dirname, 'contents', 'index.html');
const aboutContentPath = path.join(__dirname, 'contents', 'about.html');
const contactContentPath = path.join(__dirname, 'contents', 'contact.html');

// Create About and Contact pages
generateStaticPage('Home', homeContentPath, path.join(publicDir, 'index.html'));
generateStaticPage('About Us', aboutContentPath, path.join(publicDir, 'about.html'));
generateStaticPage('Contact Us', contactContentPath, path.join(publicDir, 'contact.html'));


// Generate pages
generateDocumentationPage(docsDir, path.join(publicDir, 'documentation.html'), 'Documentation');
generateBlogPage(blogDir, path.join(publicDir, 'blog.html'), 'Blog');
generateTagsPage(blogDir, path.join(publicDir, 'tags.html'), 'Tags');
generateArchivesPage(blogDir, path.join(publicDir, 'archives.html'), 'Archives');
```