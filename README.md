# Japheth Kwemoi Taboi: Portfolio

A responsive, accessible, multi-page developer portfolio built with plain HTML, CSS, and JavaScript. It has no build step or runtime dependencies.

## Pages

- `index.html`: home, about summary and contact
- `about.html`: profile, target roles, skills, selected projects and contact links
- `resume.html`: experience, skills, education and certifications
- `services.html`: what I build
- `portfolio.html`: projects from my GitHub
- `contact.html`: call, email and GitHub

## Structure

```
index.html       home and contact details
about.html       skills, education, and certifications
resume.html      experience, skills, and education
services.html    services
portfolio.html   selected projects
contact.html     contact details and email form
main.css         shared styles and design tokens
main.js          copy buttons and email form
favicon.svg      site icon
```

## Run locally

Open `index.html` in a browser, or serve the folder with Python:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`. The contact form opens a message in the visitor's default email application; it does not send or store form submissions.

Keep the terminal running while using the local preview. If you close the server process, the browser will show a connection-refused or failed-to-load error; restart the command above to serve the site again. The site itself uses only local HTML, CSS, JavaScript, and the favicon, so page rendering does not depend on external font or image services.

## Publish with GitHub Pages

1. Create an empty repository on GitHub.
2. From this folder, initialize and push the site (replace the remote URL with your repository URL):

   ```powershell
   git init -b main
   git add .
   git commit -m "Add developer portfolio"
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```

3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/(root)` folder, then save.
5. Wait for the Pages deployment to finish. The repository's Pages settings will show the published URL.

`index.html` is at the repository root, so no build command, framework, or output folder is needed. The same files can also be hosted on Netlify or Vercel as a static site with no build command.

## Git

This is a static site; commit the HTML pages, `main.css`, `main.js`, and `favicon.svg` directly. There is no package manifest or compiled output to commit.

## Customise

Colours are variables at the top of `main.css` (`--ink`, `--paper`, `--lime`, `--gold`). Edit the HTML files to change text and projects.

## Contact

- Phone: +254 719 356 607
- Email: japhethtaboi2@gmail.com
- GitHub: https://github.com/Jeff-201
