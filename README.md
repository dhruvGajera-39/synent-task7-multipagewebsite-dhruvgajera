# AURA // Digital Creative Agency Website

A professional, modern, and highly polished responsive multi-page website for **AURA**, a digital creative agency. This project is built purely using semantic HTML5, Vanilla CSS, and modern vanilla JavaScript with zero external frameworks or Bootstrap.

## Features

- **Responsive Navigation Bar**: Stickily slides and switches transparent color backgrounds on scroll, with active tab indicators and a fully animated slide-in hamburger drawer on mobile.
- **Modern Dark-Mode Aesthetic**: Curated HSL colors, smooth violet/cyan gradients, sleek glowing cards, and custom transitions.
- **Scroll Reveal Animations**: Implements an Intersection Observer to fade and slide up content blocks dynamically as they enter the viewport.
- **Local Address & Name Formatting**: Team names, placeholders, addresses, and phone links localized to Indian formats.
- **Contact Form Validation**: Full client-side javascript validation preventing refresh and displaying inline styling errors and a submission success overlay modal.

## Pages List

1. **Home (`index.html`)**: Features the hero welcome tagline, AI-generated graphic element, client success counters, capabilities, and CTA options.
2. **About (`about.html`)**: Contains company overview, core values card grids, work layout illustrations, and leadership bio details.
3. **Services (`services.html`)**: Lists core agency packages and methodology steps on a vertical progress timeline.
4. **Contact (`contact.html`)**: Interactive inquiry inputs form (validates name, email, selection, text) and local office address details.

## File Structure

```text
d:/Internship/task 7/
│
├── index.html          # Homepage
├── about.html          # About Page
├── services.html       # Services Page
├── contact.html        # Contact Page
├── style.css           # Global Theme Stylesheet
├── script.js           # Interactive Javascript Logic
├── hero-visual.png     # Creative 3D Hero Art Banner
└── about-visual.png    # Collaborative Workspace Vector Illustration
```

## Running Locally

To run the project locally, open the workspace in your terminal and spin up a lightweight static web server:

```bash
# Example using Node.js http-server:
npx http-server -p 8081

# Example using Python:
python -m http.server 8081
```

Once running, navigate to `http://localhost:8081/` in your web browser.
