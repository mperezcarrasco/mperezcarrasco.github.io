# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Manuel Pérez Carrasco, hosted on GitHub Pages (mperezcarrasco.github.io). It's a static HTML/CSS/JavaScript site showcasing research projects, academic work, and professional experience in machine learning and data science.

## Site Structure

The website consists of multiple standalone HTML pages:

- **index.html** - Main landing page with featured projects and modals for project details
- **about.html** - Personal bio with photo carousel
- **academia.html** - Academic publications and teaching experience
- **industry.html** - Industry experience and collaborations
- **CV/** - Directory containing CV PDF

Each page includes:
- Fixed sidebar navigation (responsive for mobile)
- Inline CSS styles using CSS custom properties (`:root` variables)
- Bootstrap 5 framework for layout and components
- Font Awesome icons
- Embedded JavaScript for interactivity

## Architecture

**Static Site with No Build Process**: This is a traditional static website with no build tools, bundlers, or package managers. All HTML, CSS, and JavaScript are written directly in the files.

**Styling Approach**:
- Each HTML file contains its own `<style>` block with page-specific CSS
- Common CSS variables defined in `:root` for consistency (colors, transitions)
- External CDN dependencies: Bootstrap 5, Font Awesome, Google Fonts (Poppins)
- Legacy CSS files in `/css/` directory appear unused by main pages

**JavaScript Dependencies**:
- Bootstrap 5 bundle (from CDN) - handles modals, carousels, collapse components
- Custom inline JavaScript in each HTML file for mobile menu toggles and interactions
- Legacy JS libraries in `/js/` directory (jQuery, AOS, etc.) appear unused by main pages

**Responsive Design**:
- Mobile-first with Bootstrap grid system
- Fixed sidebar on desktop (min-width: 992px)
- Collapsible mobile menu with overlay
- Mobile menu toggle handled via custom JavaScript

## Key Design Patterns

**Modal-Based Project Details**: The index.html page uses Bootstrap modals to display detailed project information. Each project card has a button that triggers a modal with full project description, links, and citations.

**Sidebar Navigation**: All pages share a consistent sidebar structure:
- Logo/name at top
- Navigation links (Projects, Academia, Industry, About, CV, Contact)
- Social media links at bottom
- Transforms into mobile hamburger menu on small screens

**Color Scheme**:
- Primary: #004A87 (dark blue)
- Secondary: #6c757d (gray)
- Dark: #343a40
- Light: #f8f9fa

## Common Development Tasks

**Editing Content**: Since there's no build process, directly edit HTML files. Changes are immediately visible when files are served.

**Adding New Projects**:
1. Add project card in the projects section of index.html
2. Create corresponding modal with project details
3. Add project image to `/images/` directory
4. Update modal IDs to maintain uniqueness

**Updating Styles**: Modify inline `<style>` blocks in each HTML file. For site-wide color changes, update CSS custom properties in `:root`.

**Testing Locally**: Open HTML files directly in browser, or use a simple HTTP server:
```bash
python -m http.server 8000
# or
python3 -m http.server 8000
```

**Deploying**: Push changes to GitHub. The site is hosted via GitHub Pages, so commits to the master branch are automatically deployed.

## Asset Management

- **/images/** - Project images, photos, backgrounds, logos
- **/CV/** - PDF curriculum vitae
- **/bib/** - BibTeX citation files for academic papers
- **/fonts/** - Custom font files (Flaticon)
- **/css/** - Legacy CSS files (not actively used by main pages)
- **/js/** - Legacy JavaScript libraries (not actively used by main pages)
- **/scss/** - Source SCSS files (legacy, not part of current build)

## Important Notes

- No package.json, no build tools, no dependencies to install
- Site is deployment-ready as-is - all files are production assets
- CDN resources are loaded from external sources (Bootstrap, Font Awesome, Google Fonts)
- Git repository is set up for GitHub Pages hosting on master branch
- The `/css/` and `/js/` directories contain legacy assets from a previous template that are no longer actively used by the main pages
