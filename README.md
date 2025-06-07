# Suhas Portfolio

A modern, space-themed portfolio website built with React, TypeScript, and Vite.

## 🚀 Features

- **Custom Typography**: Unique mixed-font styling for the name "Suhas"
- **Space Theme**: Beautiful space background with astronaut imagery
- **Responsive Design**: Optimized for all device sizes
- **Performance**: Optimized build with code splitting and asset optimization
- **SEO Ready**: Meta tags, Open Graph, and Twitter Card support
- **Accessibility**: ARIA labels and semantic HTML
- **Production Ready**: Optimized for Cloudflare Pages deployment
- **Error Handling**: Graceful fallbacks and loading states

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Custom Fonts** - Alegreya, SwearDisplay, Marcellus, Silkscreen, Gilroy
- **Cloudflare Pages** - Deployment platform

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Clean build directory
npm run clean
```

## 🚀 Deployment (Cloudflare Pages)

### Cloudflare Pages Configuration

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (project root)
- **Node.js version**: `18` or higher

### Manual Deployment Steps
1. Connect your GitHub repository to Cloudflare Pages
2. Set the build command to `npm run build`
3. Set the build output directory to `dist`
4. Deploy automatically on push to main branch

## 📁 Project Structure

```
src/
├── components/ui/          # Reusable UI components
├── screens/Frame/          # Main portfolio component
├── styles/                 # Global styles and fonts
├── lib/                    # Utility functions
└── index.tsx              # Application entry point

public/
├── fonts/                 # Custom font files
├── imgbg.png             # Background image
└── favicon.ico           # Site favicon

dist/                      # Production build output
wrangler.toml             # Cloudflare configuration
```

## 🎨 Typography

The name "Suhas" uses a unique mixed-font approach:
- **S**: Alegreya Medium Italic (64px, uppercase)
- **u**: SwearDisplay Italic (48px)
- **h**: Marcellus Regular (48px)
- **a**: Marcellus Regular (48px)
- **s**: Silkscreen Regular (40px)

## 🔧 Performance Optimizations

- **Font Loading**: `font-display: swap` for better performance
- **Image Loading**: Lazy loading with fallback gradients
- **Code Splitting**: Vendor and UI chunks separated
- **Asset Optimization**: Compressed and cached assets
- **Responsive Design**: Mobile-first approach

## 🔗 Links

- **Portfolio**: [Live Site](https://suhas-portfolio.pages.dev)
- **Twitter/X**: [@suhasxi](https://x.com/suhasxi)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).