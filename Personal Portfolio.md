# Personal Portfolio Website – PhD Cybersecurity & Innovation Projects

This is a personal portfolio web app built using **React.js**, designed to showcase my professional journey, research, and technical projects. The design is inspired by academic portfolio styles (like the example shared), and the content is based on my experience in **cybersecurity, AI-driven phishing detection, and digital innovation**.

---

## 🧱 Tech Stack

- **Frontend**: React.js, JSX, Tailwind CSS (or styled-components)
- **Routing**: React Router
- **Forms**: React Hook Form or plain HTML
- **Deployment**: Vercel / Netlify / GitHub Pages

---

## 📁 Folder Structure

portfolio-site/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── ProjectCard.jsx
│ │ ├── Timeline.jsx
│ │ ├── PublicationCard.jsx
│ │ └── ContactForm.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Projects.jsx
│ │ ├── Research.jsx
│ │ ├── Publications.jsx
│ │ └── Contact.jsx
│ ├── App.jsx
│ └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md



---

## 🌐 Pages & Routes

### `/` – Home
- Hero section with name, title, and a mission statement
- CTA: View Portfolio / Contact Me

### `/about`
- PhD background
- Startup journey & lessons learned
- Key professional highlights

### `/projects`
- Real projects with title, description, tech stack, and your role
  - Phishing detection app (AI + user-centered)
  - Delivery app from startup pivot
  - Scam alert chat platform with expert volunteers
  - Dashboard for admins with Firebase & image analysis

### `/research`
- Areas: phishing types, LLM classification, scam detection
- Vision: education through AI, scalable detection models
- Tools: GPT-4, OCR, scam-type taxonomy

### `/publications`
- List of academic conference papers (with summary and link)
- Visual thumbnails for posters (optional)

### `/contact`
- Contact info: Email, LinkedIn, Twitter
- Message form with validation

---

## 📦 Install & Run Locally

```bash
git clone https://github.com/yourusername/portfolio-site.git
cd portfolio-site
npm install
npm run dev

Suggestions 
Use react-router-dom for page routing

Use useState and useEffect for loading content

Generate mock data for publications and projects

Use reusable card components for each project/publication

Use Tailwind’s grid layout to ensure mobile responsiveness


###Inspiration###
Based on academic portfolio design and adapted to showcase hybrid expertise in research, AI tools, and startup execution. Design references included screenshots from CodeDesign.ai.