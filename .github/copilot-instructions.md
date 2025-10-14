# Copilot Instructions for xmasters Repository

## Project Overview

This repository contains **xmasters** - a comprehensive web services guide (Guia Completo de Serviços Web) that catalogs 100+ web platforms and services. The project is a single-page application built with vanilla HTML, CSS (TailwindCSS), and JavaScript.

## Project Structure

- `index.ht` - Main HTML file containing the entire application (note the `.ht` extension)
- The project is a static website with no build process or dependencies

## Language and Localization

- **Content Language**: All user-facing text must be in **Portuguese (pt-BR)**
- **Code Comments**: Use Portuguese for comments when dealing with content or business logic
- **Variable Names**: Can use English for better code readability, but keep consistency

## Technology Stack

- **HTML5**: Semantic markup
- **CSS**: TailwindCSS (loaded via CDN)
- **JavaScript**: Vanilla JS (no frameworks)
- **Charts**: Chart.js (loaded via CDN)
- **Fonts**: Google Fonts (Inter family)

## Design System

### Color Palette
- Background: `#FDFBF8` (warm cream)
- Primary Green: `#86A382` (permanent offers)
- Neutral Brown: `#A39182` (free tier offers)
- Light Beige: `#D4C7B8` (trial offers)
- Medium Beige: `#BFB2A3` (combined offers)

### Typography
- Font Family: 'Inter', sans-serif
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## Coding Standards

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (4 spaces)
- Include appropriate ARIA labels for accessibility
- Keep Portuguese content in `lang="pt-BR"` attribute

### CSS
- Use TailwindCSS utility classes primarily
- Custom CSS only when necessary (in `<style>` block)
- Follow mobile-first responsive design principles
- Maintain custom scrollbar styling for consistency

### JavaScript
- Use modern ES6+ syntax
- Prefer `const` and `let` over `var`
- Use arrow functions where appropriate
- Keep functions pure and modular when possible
- Add comments for complex logic in Portuguese

## Key Features to Maintain

1. **Filtering System**: Category, subcategory, and offer type filters
2. **Search Functionality**: Text-based search across services
3. **Dynamic Charts**: Chart.js integration for visual analytics
4. **Detail View**: Service details appear on selection
5. **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## File Naming Convention

- The main file uses `.ht` extension (not `.html`) - maintain this convention
- If adding new files, follow lowercase-with-hyphens naming

## Browser Compatibility

- Target modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features are acceptable
- No Internet Explorer support needed

## Accessibility Guidelines

- Include proper ARIA labels
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Use semantic HTML for screen readers

## Performance Considerations

- Keep CDN resources up to date
- Minimize inline JavaScript when possible
- Use lazy loading for heavy content if needed
- Optimize images if any are added

## Content Guidelines

- Service descriptions should be clear and concise in Portuguese
- Maintain consistent terminology across the guide
- Keep offer types categorized: Permanent, Free Tier, Trial, Combined
- Include relevant details: pricing, features, limitations

## When Making Changes

1. **Preserve existing functionality** - this is a working application
2. **Test responsiveness** at different breakpoints (mobile, tablet, desktop)
3. **Validate HTML** structure remains semantic
4. **Check JavaScript** for console errors
5. **Ensure Portuguese** content quality and grammar
6. **Maintain visual consistency** with the existing design system

## Common Tasks

### Adding a New Service
- Add to the services data structure in JavaScript
- Include: name, category, subcategory, offer type, description, features
- Update filters to include new categories if needed
- Ensure proper Portuguese translation

### Modifying Styles
- Prefer TailwindCSS utilities
- Add custom CSS only when Tailwind doesn't provide the needed style
- Maintain the warm, professional color scheme
- Test on mobile devices

### Updating Filters
- Update both the HTML select elements and JavaScript filter logic
- Ensure the chart updates dynamically
- Test all filter combinations

## Notes

- This is a single-page application - avoid breaking it into multiple pages
- The project has no build process - changes take effect immediately
- Focus on maintainability and readability
- Keep the Portuguese content natural and professional
