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

// Function to copy static assets files
function copyAssetsFiles(sourcePath, destinationPath) {
    fs.copyFile(sourcePath, destinationPath, (err) => {
        if (err) {
            throw new Error(`Failed to copy file from ${sourcePath} to ${destinationPath}: ${err.message}`);
        }
    });
}

// Copy static assets
copyAssets(path.join(assetsDir, 'css'), path.join(publicDir, 'assets', 'css'));
copyAssets(path.join(assetsDir, 'js'), path.join(publicDir, 'assets', 'js'));
copyAssets(path.join(assetsDir, 'images'), path.join(publicDir, 'assets', 'images'));
copyAssets(path.join(assetsDir, 'webfonts'), path.join(publicDir, 'assets', 'webfonts'));
copyAssets(path.join(assetsDir, 'slides'), path.join(publicDir, 'assets', 'slides'));
copyAssetsFiles(path.join(assetsDir, 'abdullahbq_resume.pdf'), path.join(publicDir, 'assets', 'abdullahbq_resume.pdf'));
copyAssets(path.join(assetsDir, 'components'), path.join(publicDir, 'components'));

// Function to convert markdown to HTML with front matter
function convertMarkdownToBlogHTML(dir, outputDir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const outputFilePath = path.join(outputDir, file.replace('.md', '.html'));

        const content = fs.readFileSync(filePath, 'utf-8');
        const { attributes, body } = frontMatter(content);

        const htmlContent = marked(body);

        const html = `            
          <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${attributes.title}</title>
      <link href="assets/css/fontawesome.css" rel="stylesheet" type="text/css" />
      <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
      <link href="assets/css/mystyles.css" rel="stylesheet" type="text/css" />
      <script src="assets/js/bootstrap.bundle.min.js" type="text/javascript" defer></script>
      <script src="components/header.js" type="text/javascript" defer></script>
      <script src="components/title.js" type="text/javascript" defer></script>
      <script src="components/footer.js" type="text/javascript" defer></script>
    </head>
            <body>
                <header-component showSearchButton></header-component>
      <section class="blog-section bg-primary bg-opacity-10">
        <title-component title="${attributes.title}"></title-component>
        <div class="container py-5">
                    <div>${htmlContent}</div>
                </div>
                </section>
                <footer-component></footer-component>
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

                            // Extract front matter and Markdown body
                            const { attributes, body } = frontMatter(data);
                            const { title, tags, date, description } = attributes;

                            // Convert Markdown body to HTML
                            const html = marked(body);

                            // Create front matter section
                            const frontMatterHtml = `
                                <div class="front-matter">
                                    <title-component title="${title}"></title-component>
                                    <div class="container-fluid py-3">
                                    <p class="text-muted"><strong>Date:</strong> ${date}</p>
                                    <p class="text-muted"><strong>Tags:</strong> ${tags ? tags.join(', ') : 'No Tags'}</p>
                                    <p class="text-muted"><strong>Description:</strong> ${description}</p>
                                    </div>
                                </div>
                            `;

                            // Wrap the HTML content
                            const wrappedHtml = `
                                        ${frontMatterHtml}
                                        <div class="container-fluid py-3">
                                        ${html}
                                        </div>
                            `;

                            // Write HTML to the publicDir
                            fs.writeFile(publicFilePath, wrappedHtml, (err) => {
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
convertMarkdownToHTML(); // true for documentation
convertMarkdownToBlogHTML(blogDir, publicDir); // false for blog posts

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
                <span class="fw-bold">${folder.toUpperCase()}</span>
                <ul>
                    ${fileItems}
                </ul>
            </li>
        `;
    }).join('');

    const html = `
        <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>InkredibleDoc | Documentation</title>
  <link href="assets/css/fontawesome.css" rel="stylesheet" type="text/css" />
  <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link href="assets/css/mystyles.css" rel="stylesheet" type="text/css" />
  <script src="assets/js/bootstrap.bundle.min.js" type="text/javascript" defer></script>
  <script src="components/header.js" type="text/javascript" defer></script>
  <script src="components/title.js" type="text/javascript" defer></script>
  <script src="components/footer.js" type="text/javascript" defer></script>
</head>
            <style>
                .docs-container-fluid {
                    display: flex;
                }
                .sidebar {
                    width: 25%;
                    position: sticky;
                    top: 0;
                    overflow-y: auto;
                }
                .content {
                    width: 75%;
                }
                .tree ul {
                    list-style-type: none;
                    padding-left: 0.5em;
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
                    border-left: 2px solid #000;
                }
                .tree li span {
                    position: relative;
                    padding-left: 1em;
                }
                .tree li ul {
                    margin-left: 0.5em;
                }
                @media (max-width: 992px) {
                    .sidebar {
                        display: none;
                        width: 100%;
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
        <body>
            <header-component showToggleButton></header-component>
                <section class="faq-section">                        
                    <div class="docs-container-fluid">
                        <div class="sidebar tree bg-info bg-opacity-10" id="sidebar">
                        <title-component title="Topics"></title-component>
                            <ul>
                                ${sidebarItems}
                            </ul>
                        </div>                
                        <div class="content bg-primary bg-opacity-10">
                            <div class="content-area">
                            <title-component title="Select a topic to view its content."></title-component>
                            </div>
                        </div>
                    </div>
            </section>            
            <footer-component></footer-component>
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

                    document.getElementById('toggleSidebarBtn').addEventListener('click', function () {
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
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card shadow border border-primary mb-4 h-100">
                <div class="card-body">
                    <h5 class="card-title fw-bold"><a href="${link}">${attributes.title}</a></h5>
                        ${date}
                        ${tags}
                        ${description}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const html = `
        <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>InkredibleDoc | ${title}</title>
  <link href="assets/css/fontawesome.css" rel="stylesheet" type="text/css" />
  <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link href="assets/css/mystyles.css" rel="stylesheet" type="text/css" />
  <script src="assets/js/bootstrap.bundle.min.js" type="text/javascript" defer></script>
  <script src="components/header.js" type="text/javascript" defer></script>
  <script src="components/title.js" type="text/javascript" defer></script>
  <script src="components/footer.js" type="text/javascript" defer></script>
</head>
        <body>
            <header-component></header-component>
                <section class="faq-section bg-primary bg-opacity-10">
                    <title-component title="${title}"></title-component>
                        <div class="container py-5">
                <div class="row">
                    ${listItems}
                </div>
            </section>            
            <footer-component></footer-component>
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
            <div class="card shadow border border-primary mb-4">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${tag}</h5>
                    <p class="card-text">${posts || 'No posts available.'}</p>
                </div>
            </div>
        `;
    }).join('');

    const html = `
        <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>InkredibleDoc | Archives</title>
  <link href="assets/css/fontawesome.css" rel="stylesheet" type="text/css" />
  <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link href="assets/css/mystyles.css" rel="stylesheet" type="text/css" />
  <script src="assets/js/bootstrap.bundle.min.js" type="text/javascript" defer></script>
  <script src="components/header.js" type="text/javascript" defer></script>
  <script src="components/title.js" type="text/javascript" defer></script>
  <script src="components/footer.js" type="text/javascript" defer></script>
</head>
        <body>
            <header-component></header-component>
                <section class="faq-section bg-primary bg-opacity-10">
                    <title-component title="Tags"></title-component>
                        <div class="container py-5">
                        ${tagListItems || '<p>No tags available.</p>'}
                       </div>
                </section>
            <footer-component></footer-component>
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
            <div class="card shadow border border-primary mb-4">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${monthYearFormatted}</h5>
                    <p class="card-text">${posts || 'No posts available.'}</p>
                </div>
            </div>
        `;
    }).join('');

    const html = `
        <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>InkredibleDoc | Archives</title>
  <link href="assets/css/fontawesome.css" rel="stylesheet" type="text/css" />
  <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link href="assets/css/mystyles.css" rel="stylesheet" type="text/css" />
  <script src="assets/js/bootstrap.bundle.min.js" type="text/javascript" defer></script>
  <script src="components/header.js" type="text/javascript" defer></script>
  <script src="components/title.js" type="text/javascript" defer></script>
  <script src="components/footer.js" type="text/javascript" defer></script>
</head>
        <body>
            <header-component></header-component>
                <section class="faq-section bg-primary bg-opacity-10">
                    <title-component title="Archives"></title-component>
                    <div class="container py-5">
                        ${archiveListItems || '<p>No archives available.</p>'}
                    </div>
                </section>
            <footer-component></footer-component>
        </body>
        </html>
    `;

    fs.writeFileSync(outputFilePath, html);
}

// Function to generate static pages with larger content
function generateStaticPage(contentPath, outputFilePath) {
    let content;

    // Check if contentPath is a file
    if (fs.existsSync(contentPath)) {
        content = fs.readFileSync(contentPath, 'utf-8');
    } else {
        content = contentPath; // Use the content directly if it's not a file
    }

    const html = `${content}`;

    fs.writeFileSync(outputFilePath, html);
}

const paths = [
    { src: 'index.html', dest: 'index.html' },
    { src: 'about.html', dest: 'about.html' },
    { src: 'publications.html', dest: 'publications.html' },
    { src: 'contact.html', dest: 'contact.html' },
    { src: 'gallery.html', dest: 'gallery.html' },
    { src: 'services.html', dest: 'services.html' },
    { src: 'slides.html', dest: 'slides.html' },
    { src: 'wallpaper.html', dest: 'wallpaper.html' }
];

// Generate static pages
paths.forEach(({ src, dest }) => {
    const sourcePath = path.join(__dirname, 'contents', src);
    const destinationPath = path.join(publicDir, dest);
    generateStaticPage(sourcePath, destinationPath);
});


// Generate pages
generateDocumentationPage(docsDir, path.join(publicDir, 'documentation.html'), 'Documentation');
generateBlogPage(blogDir, path.join(publicDir, 'blog.html'), 'Blog');
generateTagsPage(blogDir, path.join(publicDir, 'tags.html'), 'Tags');
generateArchivesPage(blogDir, path.join(publicDir, 'archives.html'), 'Archives');