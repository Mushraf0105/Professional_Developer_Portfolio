# Professional Developer Portfolio

A responsive, lightweight personal portfolio website built with HTML5, CSS3, and vanilla JavaScript according to the project assessment specifications.

---

## 🚀 Deliverables Checklist

- [x] **Responsive Portfolio Website:** Fully responsive design adapting to desktop, tablet, and mobile displays.
- [x] **Home Section:** Introduction, developer title, value statement, call-to-action buttons, and profile photo.
- [x] **About Section:** Professional background, focus areas, and quick details card.
- [x] **Skills Section:** Categorized skills (Frontend, Backend, Databases & Cloud, Tools & Core).
- [x] **Projects Section:** Showcase cards with project descriptions, tech stack tags, and GitHub repository links.
- [x] **Education & Experience Section:** Structured dual-column timeline presenting work history and academic qualifications.
- [x] **Contact Form:** Clean contact form with input validation and feedback messaging.
- [x] **Responsive Navigation:** Sticky header with active scroll highlighting and mobile hamburger menu.
- [x] **README Documentation:** Project overview, layout architecture, deployment, and rollback strategy.

---

## 🎯 Approach & Outcome

### Approach
1. **Semantic HTML5 Structure**: Used meaningful structural tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) to ensure accessibility (a11y), clean code hierarchy, and search engine readability.
2. **Dual Layout System (CSS Grid & Flexbox)**:
   - **CSS Grid** for two-dimensional page structures (About card grid, Skills cards, Projects cards, and Experience & Education timeline).
   - **Flexbox** for one-dimensional alignments (Navigation bar, Hero text & CTA buttons, inline tags, and Footer).
3. **Lightweight Vanilla JavaScript**: Avoided heavy frameworks or build tools. Pure JavaScript handles:
   - Mobile navigation toggle (hamburger to menu).
   - Scroll-based active link indicator.
   - Form input validation and user feedback.
4. **Mobile-First Responsive Design**: Fluid media queries break cleanly at `900px`, `768px`, and `480px`, preventing horizontal scrolling and layout clipping on small devices.

### Outcome
- **Zero Dependencies**: Fast load times with zero third-party scripts or libraries.
- **Cross-Device Compatibility**: Looks and functions identically across desktop, tablet, and mobile screens.
- **Maintainable & Clean Code**: Concise, well-commented code following modern standards and the assessment guidelines.

---

## 📐 Layout Architecture (CSS Grid & Flexbox)

- **CSS Grid (2D Multi-Column Layouts)**:
  - **About Section (`.about-grid`)**: 2-column grid (`1.4fr 1fr`) separating the bio narrative and quick details card.
  - **Skills Section (`.skills-grid`)**: Auto-fit responsive grid (`repeat(auto-fit, minmax(240px, 1fr))`).
  - **Projects Section (`.projects-grid`)**: Auto-fit card grid (`repeat(auto-fit, minmax(260px, 1fr))`).
  - **Experience & Education (`.timeline-container`)**: 2-column comparative layout for work and education.
  - **Contact Section (`.contact-wrapper`)**: 2-column grid pairing contact information with the inquiry form.

- **Flexbox (1D Component Alignment)**:
  - **Navigation (`.navbar` & `.nav-menu`)**: Horizontal alignment, spacing, and mobile vertical column toggle.
  - **Hero Section (`.hero-container` & `.hero-actions`)**: Flex alignment of text, CTA buttons, and profile image.
  - **Project & Skill Cards**: Flexbox for vertical content spacing, tag pills wrap, and button alignment.
  - **Footer (`.footer-container`)**: Flex alignment for copyright text and back-to-top navigation.

---

## 🛠️ Built With

- **HTML5:** Semantic elements with accessible attributes.
- **CSS3:** Flexbox, CSS Grid, custom CSS variables, and responsive media queries.
- **JavaScript (ES6):** Vanilla JavaScript for interactive navigation and form handling.

---

## 📂 Project Structure

```text
Professional_Portfolio/
│
├── index.html       # Semantic HTML5 structure with all required sections
├── style.css        # Clean, modern, responsive styling (Flexbox & Grid)
├── script.js        # Mobile menu toggle & form handling
├── profile.jpg      # Developer profile picture
└── README.md        # Complete project documentation
```

---

## 💻 How to Run Locally

1. Clone or download this project folder.
2. Open `index.html` directly in any web browser (Chrome, Edge, Firefox).
3. Or open the folder in **VS Code** and click **Go Live** with the Live Server extension.

---

## 🚀 Deployment Configuration

Since this project consists of pure static files (`index.html`, `style.css`, `script.js`, `profile.jpg`), it can be hosted instantly without build commands.

### Option 1: GitHub Pages (Recommended)
1. Initialize Git in the project folder and push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete responsive professional portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to your repository **Settings** > **Pages**.
3. Under **Branch**, select `main` and folder `/(root)`.
4. Click **Save**. Your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

### Option 2: Vercel / Netlify
- **Vercel**: Import the GitHub repo $\rightarrow$ Framework Preset: `Other` $\rightarrow$ Root Directory: `./` $\rightarrow$ Click **Deploy**.
- **Netlify**: Drag-and-drop the `Professional_Portfolio` folder directly into the Netlify Dashboard.

---

## 🔄 Rollback Evidence & Strategy

A rollback strategy ensures that if an issue or broken update is deployed, the live website can be quickly and safely restored to the last working version.

### 1. Git Version Control Rollback
Every release is tracked by Git commit hashes. If a deployment fails:
```bash
# Step 1: View recent commit history
git log --oneline -n 5

# Step 2: Revert the breaking commit safely
git revert <commit-hash> --no-edit

# Step 3: Push the fix to production
git push origin main
```
*Outcome: The previous working code is automatically deployed with zero downtime.*

### 2. Platform-Level Instant Rollback
- **GitHub Pages**: Rollback is confirmed by checking the GitHub **Deployments** history tab, showing the exact commit hash currently live.
- **Vercel / Netlify**: Each deployment gets an immutable preview URL. In case of issues, click **Instant Rollback** on the previous successful deployment to immediately redirect production traffic.

### 3. Verification Checklist (Rollback Evidence)
Before and after every release or rollback, verify:
- [x] **Desktop View**: Header displays horizontally; all sections (Hero, About, Skills, Projects, Experience, Contact) render properly.
- [x] **Mobile View**: Hamburger button appears; clicking it opens and closes the menu smoothly without horizontal page scrolling.
- [x] **Form Verification**: Contact form validates required fields and displays feedback correctly.
- [x] **Console Check**: Open browser Developer Tools (`F12`) to verify **0 JavaScript errors**.
