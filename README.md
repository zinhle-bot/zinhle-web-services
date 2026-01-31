# Zinhle Web Services Portfolio

A modern, fully responsive portfolio website for Zinhle Web Services featuring design and development expertise.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Theme**: Modern dark interface with vibrant accent colors
- **Interactive Elements**: 
  - Portfolio filtering by category
  - Interactive calculator for project estimates
  - Live chat widget
  - Lead magnet modals
  - Before/After slider for case studies

- **Performance Optimized**: 
  - Lightweight HTML, CSS, and JavaScript
  - No external dependencies (vanilla JS)
  - Fast page load times

- **SEO Friendly**:
  - Proper semantic HTML
  - Meta tags for social sharing
  - Schema.org markup for structured data

## Project Structure

```
├── index.html       # Main HTML file with semantic structure
├── styles.css       # All styling and responsive design
├── script.js        # Interactive functionality
├── netlify.toml     # Netlify deployment configuration
├── .gitignore       # Git ignore rules
└── README.md        # This file
```

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd zinhle-portfolio
```

2. Start a local server:
```bash
python -m http.server 8000
```

3. Open in your browser:
```
http://localhost:8000
```

## Deployment

### Deploy on Netlify

The project is configured to deploy directly on Netlify:

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically deploy on push

Or use the Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Customization

### Colors & Variables

Edit the CSS variables in `styles.css`:
```css
:root {
  --primary: #2A4B7C;      /* Trust/tech blue */
  --secondary: #FF6B35;    /* Energy/creativity orange */
  --bg: #0f1726;           /* Dark background */
  --text: #e6eefb;         /* Light text */
  /* ... more variables */
}
```

### Content

Edit text, links, and contact information directly in `index.html`.

### Forms

Contact forms are configured for Netlify Forms. Update form `name` attributes to match your setup.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## Contact

- Email: zinhlepretty75@gmail.com
- Phone: +27 71 455 4414

## License

© 2024 Zinhle Web Services. All rights reserved.
