<div align="center">

# ✦ Vivek Rajput — Portfolio

**Designer & Developer · Crafting Seamless Experiences and Bold Visuals**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-thevivekrajput--techportfolio.vercel.app-000?style=for-the-badge&logo=vercel&logoColor=white)](https://thevivekrajput-techportfolio.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Featured Projects](#-featured-projects)
- [License](#-license)

---

## About

A modern, responsive portfolio website built to showcase my work as a designer and developer. The site features smooth scroll animations, a dark/light theme toggle, a blog section with MDX support, and a curated showcase of projects — all wrapped in a premium, grid-textured design.

> _"I thrive on transforming problems into solutions, ideas into reality — whether it's crafting digital interfaces, designing immersive visuals, or building websites that feel effortless to use."_

---

## ✨ Features

| Feature | Description |
|---|---|
| **🌗 Dark / Light Theme** | Persistent theme toggle with system preference detection and `localStorage` sync |
| **🎞️ Smooth Scrolling** | Locomotive Scroll integration for silky-smooth page transitions |
| **✍️ MDX Blog** | Write blog posts in MDX with syntax highlighting via `rehype-pretty-code` and frontmatter support |
| **📱 Fully Responsive** | Mobile-first design that adapts gracefully across all screen sizes |
| **🎨 Grid Background** | CSS grid-line texture background with themed color variables |
| **📧 Contact Form** | Integrated contact form powered by Web3Forms / EmailJS |
| **📊 Analytics** | Microsoft Clarity integration with GDPR-friendly consent management |
| **🚀 Instant Deploys** | Vercel-hosted with SPA rewrites for client-side routing |
| **🔀 Client-Side Routing** | React Router DOM with pages for Home, Projects, Blogs, and individual blog posts |
| **🏷️ Dynamic Project Cards** | Data-driven project showcase with tech-stack icons, live links, and GitHub links |

---

## 🛠️ Tech Stack

### Core

| Technology | Purpose |
|---|---|
| **React 19** | UI component library |
| **Vite 7** | Build tool & dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **React Router DOM 7** | Client-side routing |

### Animation & UX

| Technology | Purpose |
|---|---|
| **GSAP 3** | Advanced timeline animations |
| **Framer Motion** (`motion`) | Declarative React animations |
| **Locomotive Scroll 5** | Smooth scroll effects |

### Blog & Content

| Technology | Purpose |
|---|---|
| **MDX** (`@mdx-js/rollup`) | Markdown + JSX blog posts |
| **rehype-pretty-code** | Code syntax highlighting |
| **remark-frontmatter** | YAML frontmatter parsing |

### Utilities & Services

| Technology | Purpose |
|---|---|
| **EmailJS / Web3Forms** | Contact form backend |
| **Lucide React & React Icons** | Icon libraries |
| **class-variance-authority** | Component variant management |
| **tailwind-merge** | Tailwind class deduplication |
| **Microsoft Clarity** | Session analytics (consent-gated) |

---

## 📁 Project Structure

```
my_portfolio/
├── public/
│   ├── assets/
│   │   ├── SS/                  # Project screenshots
│   │   ├── icons/               # Custom icon assets
│   │   ├── vr_pfp.png           # Profile picture
│   │   └── *.png                # Organization/company logos
│   ├── favicon-*.png            # Favicon variants
│   └── site.webmanifest         # PWA manifest
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── HeroSection.jsx      # Landing hero with name & role
│   │   │   ├── About.jsx            # About me section
│   │   │   ├── ProjectsSection.jsx  # Featured projects carousel
│   │   │   ├── TechStackSection.jsx # Skills & technologies
│   │   │   ├── WorkExperience.jsx   # Professional experience
│   │   │   ├── IconsFlow.jsx        # Animated icon marquee
│   │   │   ├── InfiniteFlow.jsx     # Infinite scroll animation
│   │   │   └── GetInTouch.jsx       # Contact form
│   │   ├── projects/
│   │   │   ├── ProjectCard.jsx      # Individual project card
│   │   │   └── Phone.jsx            # Mobile mockup component
│   │   ├── blogs/
│   │   │   ├── BlogCard.jsx         # Blog post card
│   │   │   └── BlogLayout.jsx       # MDX blog layout wrapper
│   │   ├── ui/
│   │   │   └── badge.jsx            # Reusable badge component
│   │   ├── Navbar.jsx               # Site navigation
│   │   ├── Footer.jsx               # Site footer
│   │   ├── ThemeToggle.jsx          # Dark/light mode toggle
│   │   └── ShinyText.jsx            # Animated shiny text effect
│   ├── data/
│   │   ├── HomeData.json        # Home page content & projects
│   │   ├── ProjectsData.json    # Full project details
│   │   ├── BlogsData.json       # Blog post metadata
│   │   ├── TechStackData.js     # Tech stack categories & icons
│   │   └── blogs/               # MDX blog post files
│   ├── lib/
│   │   └── utils.js             # Utility functions (cn helper)
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── Projects.jsx         # Projects listing page
│   │   ├── Blogs.jsx            # Blog listing page
│   │   ├── Blog.jsx             # Individual blog post page
│   │   └── NotFound.jsx         # 404 page
│   ├── App.jsx                  # Root app with routing & theme
│   ├── App.css                  # Global app styles
│   ├── index.css                # Tailwind base imports
│   └── main.jsx                 # React DOM entry point
├── index.html                   # HTML template with Clarity analytics
├── vite.config.js               # Vite + React + Tailwind + MDX config
├── vercel.json                  # Vercel SPA rewrite rules
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies & scripts
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or use `pnpm` / `yarn`)

### Installation

```bash
# Clone the repository
git clone https://github.com/TheVivekRajput002/VivekRajput_Portfolio.git
cd VivekRajput_Portfolio/my_portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## 🔐 Environment Variables

Create a `.env.local` file in the `my_portfolio/` root with the following:

```env
REACT_APP_WEB3FORMS_KEY=your_web3forms_access_key
```

| Variable | Description |
|---|---|
| `REACT_APP_WEB3FORMS_KEY` | Access key for the [Web3Forms](https://web3forms.com) contact form API |

> **Note:** Never commit `.env.local` to version control. It is already included in `.gitignore`.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code quality issues |

---

## 🌍 Deployment

The site is deployed on **Vercel** with automatic deploys from the `main` branch.

### Vercel Configuration

The [`vercel.json`](vercel.json) includes SPA rewrite rules to support client-side routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deploy Your Own

1. Fork this repository
2. Import the project into [Vercel](https://vercel.com/new)
3. Set the **Root Directory** to `my_portfolio`
4. Add the environment variables listed above
5. Deploy 🚀

---

## 🏆 Featured Projects

| Project | Description | Tech |
|---|---|---|
| **[Hire But Smarter](https://hire-but-smarter.vercel.app)** | Talent intelligence platform — extracts verified developer skills from GitHub with AI agent evaluation. *Won 2nd Prize at IIT Kanpur Techkriti '26 × Eightfold AI Hackathon* | Next.js, Supabase, Gemini AI |
| **[Smart Invoice System](https://hisabkitab1.vercel.app)** | AI-powered invoicing platform that reduces invoice creation time by 60% for small businesses | Next.js, Supabase, PostgreSQL |
| **[FuturEstate AI](https://codekumbh.vercel.app)** | AI-powered real estate intelligence with dual AI models and real-time property valuations | Next.js, Supabase, Gemini AI, Groq |
| **[VoiceScribe](https://voice-scribe-lake.vercel.app)** | Browser-based live speech transcription supporting 11 languages with no API required | HTML, CSS, Vanilla JS |
| **[OCHI Design](https://ochi-design-animated-website.vercel.app)** | Modern animated website with GSAP-powered fluid animations and cursor-tracking effects | React, Tailwind CSS, GSAP |

---

## 📄 License

This project is open source and available for reference and learning purposes. If you'd like to use any significant portion of this code, please provide attribution.

---

<div align="center">

**Built with ❤️ by [Vivek Rajput](https://thevivekrajput-techportfolio.vercel.app)**

[![GitHub](https://img.shields.io/badge/GitHub-TheVivekRajput002-181717?style=flat-square&logo=github)](https://github.com/TheVivekRajput002)

</div>
