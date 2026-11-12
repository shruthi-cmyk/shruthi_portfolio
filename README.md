# 🎓 Kothamale Shruthi | Portfolio - B.Tech AI & Data Science
### Sanjay Godawat University, Kolhapur, Maharashtra, India

A modern, responsive developer portfolio website for **Kothamale Shruthi**, a **first-year B.Tech Artificial Intelligence and Data Science (AI & DS)** student at **Sanjay Godawat University, Kolhapur, Maharashtra**.

---

## 🌟 Key Features
- **Aesthetic**: Deep dark navy background (`#070B19`) with purple (`#A855F7`) and electric-blue (`#38BDF8`) neon gradients.
- **Glassmorphism & Glow Effects**: Semi-transparent frosted glass cards, subtle neon glows, and smooth hover micro-animations.
- **Personalized Hero Visual**: Features your circular profile photo (`profile.jpg`) framed with subtle purple and electric-blue glowing borders, rotating orbital rings, and floating status badges.
- **Direct GitHub Integration**: Dedicated interactive buttons and links connecting to [`github.com/shruthi-cmyk`](https://github.com/shruthi-cmyk) in the navbar, hero section, contact section, and footer.
- **Fully Responsive**: Adapts seamlessly to smartphones, tablets, and laptops.
- **Accessible & Clean**: High contrast ratios (WCAG AA), keyboard navigation support, and semantic HTML5.
- **Beginner-Friendly**: Zero complex build systems; pure HTML, CSS, and Vanilla JavaScript with helpful inline comments.

---

## 📁 File Structure
```text
student-portfolio/
│
├── index.html     # Semantic page structure, text, links, and all content sections
├── style.css      # Design tokens, gradients, animations, glassmorphism, responsive styles
├── script.js      # Mobile navigation, active section highlighting, form validation
├── profile.jpg    # Your circular profile photo in the hero section
└── README.md      # Beginner guide on running and customizing your portfolio
```

---

## 🚀 How to Run the Website Locally

You can run this website on your computer in any of the following three ways:

### Option 1: Direct Double-Click (Easiest)
1. Open File Explorer and navigate to `c:\Users\Jagdish\OneDrive\Desktop\student portfolio`.
2. Double-click **`index.html`**.
3. It will open instantly in your default web browser (Chrome, Edge, Firefox, Brave, etc.).

### Option 2: Using VS Code Live Server (Recommended for Editing)
1. Open the `student portfolio` folder in **Visual Studio Code**.
2. If you don't have it yet, install the **Live Server** extension (by Ritwick Dey) from the VS Code Extensions tab (`Ctrl + Shift + X`).
3. Right-click anywhere in `index.html` and choose **"Open with Live Server"**.
4. The page will open at `http://127.0.0.1:5500` and automatically refresh whenever you save changes.

### Option 3: Python Built-in HTTP Server
1. Open PowerShell or Terminal in the project folder:
   ```bash
   python -m http.server 3000
   ```
2. Open your browser and go to: `http://localhost:3000`

---

## ✏️ How to Customize Your Portfolio

### 1. Your Name & Header Logo
- Configured as **Kothamale Shruthi** (`<span class="logo-text">Shruthi<span class="gradient-text">.Portfolio</span></span>`).

### 2. Contact Information
- **Email**: Configured to [`shruthikothamale@gmail.com`](mailto:shruthikothamale@gmail.com).
- **GitHub**: Configured to [`https://github.com/shruthi-cmyk`](https://github.com/shruthi-cmyk).
- **LinkedIn**: Configured to [`https://www.linkedin.com/in/kothamale-shruthi`](https://www.linkedin.com/in/kothamale-shruthi).

### 3. Adding Real Projects Later ("My Projects Journey")
- Scroll to `<!-- 5. MY PROJECTS JOURNEY SECTION -->` in `index.html`.
- Currently, this section honestly presents your journey as a first-year student with the message: *"I'm currently learning and building my first projects. Stay tuned!"*.
- Once you finish your first semester mini-projects or Python tools, you can easily replace the planned project cards with your real GitHub repository links and live demos!

### 4. Updating Your "Learning Journey" Goals
- Scroll to `<!-- 6. LEARNING JOURNEY & GOALS SECTION -->` in `index.html`.
- This section showcases your current technical learning milestones (Python programming, Web fundamentals, Mathematics for AI & DS, Data exploration, and Git workflow).
- As you progress through college semesters, you can add new academic milestones and completed course goals.

### 5. Receiving Real Messages from the Contact Form
Currently, the form includes instant client-side validation and a confirmation message. To receive actual emails sent from the form directly into your inbox for free:
1. Go to [Formspree.io](https://formspree.io) and create a free account.
2. Click **"New Form"**, enter your email, and copy your unique form endpoint URL (e.g., `https://formspree.io/f/xbjwpnla`).
3. In `index.html`, find `<form class="contact-form" id="contactForm" novalidate>` and add:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🌐 How to Host Your Website for Free

### Method A: GitHub Pages (Recommended for Students)
1. Create a GitHub account at [github.com](https://github.com).
2. Create a new repository named `portfolio` (or `yourusername.github.io`).
3. Push your files (`index.html`, `style.css`, `script.js`) to GitHub.
4. Go to repository **Settings** -> **Pages** -> Select the `main` branch -> Click **Save**.
5. Your portfolio is now live on the internet at `https://yourusername.github.io/portfolio`!

### Method B: Vercel / Netlify
1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
2. Sign in with GitHub and click **"Add New Project"**.
3. Select your repository and click **Deploy**. It will deploy in under 30 seconds.

---

## 🔒 Requirements & Safety
- Built using **pure standard HTML5, CSS3, and JavaScript**.
- Does **not** expose sensitive data or depend on paid subscriptions.
- Does **not** deploy or publish automatically; publishing requires your explicit step as described above.
