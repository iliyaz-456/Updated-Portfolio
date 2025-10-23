# Design Guidelines for Syed Iliyaz Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern tech portfolios with dark themes and neon aesthetics, creating a unique, visually striking experience that stands apart from generic portfolio templates.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary**:
- Background Base: #121212 and #1e1e1e
- Neon Accents: Electric blue (210 100% 60%), Neon green (140 100% 55%), Purple (270 80% 65%)
- Text: White/off-white for primary content, muted grays for secondary

### B. Typography
- Primary Font: Poppins or Inter or Montserrat
- Varied font weights for hierarchy (300, 400, 600, 700)
- Large, bold hero text for name "Syed Iliyaz"
- Clean, readable body text for descriptions

### C. Layout System
- Asymmetrical sections with overlapping cards
- Layered backgrounds and elements for depth
- Spacing: Use Tailwind units of 4, 8, 12, 16, 24 for consistent rhythm

### D. Component Specifications

**Hero Section**:
- Full-screen dark background (#121212/#1e1e1e)
- NO animated particles or moving stars
- Name: "Syed Iliyaz" prominently displayed
- Tagline: "Founder of Aternity | AI & Full-Stack Developer"
- Glowing CTA button with hover effects
- Smooth scroll indicators

**About Section**:
- Professional bio mentioning founder of Aternity
- Skills showcase: HTML, CSS, JavaScript, React, Node.js, MongoDB, SQL
- Scroll-triggered fade-in animations
- Optional profile picture/avatar

**Projects Section** (Interactive Cards):
- Virtual Shopping AI (https://iliyaz-456.github.io/virrtualshopAI/)
- Telemedicine SIH 2025 (https://github.com/iliyaz-456/Telemedicine-)
- Each card: title, description, tech stack, clickable links
- Hover animations with neon outlines
- Interactive card effects on hover

**Experience Section** (Timeline/Cards):
- Aternity – Founder & CEO, Aug 2024 – Present
- Dive Money – Student Campus Ambassador, Jan 2025 – Present
- GDG VJIT – Open Source Team Member, Oct 2025 – Present
- Slide-in animations from left/right on scroll

**Skills Section**:
- Animated circular progress bars or glowing indicators
- Categories: Programming, AI/ML, Tools
- Hover tooltips with skill descriptions
- Visual representation of proficiency levels

**Contact Section**:
- Dark-themed form: Name, Email, Message fields
- LinkedIn: https://www.linkedin.com/in/syediliyaz18
- GitHub: https://github.com/iliyaz-456
- Glowing/animated submit button
- Clean, minimal design

### E. Animations & Interactions
- Framer Motion for scroll-triggered animations
- Smooth fade-in/fade-out effects
- Glowing hover effects on buttons and links
- Subtle card lift animations on hover
- Micro-interactions for all interactive elements
- NO particle backgrounds or moving stars

## Technical Requirements
- React.js or Next.js implementation
- Fully responsive (mobile, tablet, desktop)
- Optimized for performance and SEO
- Hosting-ready for Vercel/Netlify/GitHub Pages
- Clean component structure

## Images
No large hero background images required. Focus on project screenshots/GIFs in the Projects section to showcase work visually.