# A La Lune Patisserie Website

Modern, responsive website for A La Lune Patisserie built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- ⚡ Fast loading with Vite
- 🐳 Dockerized for easy deployment
- 🚀 Ready for AWS S3 hosting

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Containerization**: Docker + Nginx
- **Deployment**: AWS S3 compatible

## Getting Started

### Prerequisites

- Node.js 18+ 
- Docker (optional, for containerized deployment)

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Docker Deployment

1. Build and run with Docker Compose:
```bash
docker-compose up --build
```

2. Access the application at [http://localhost:3000](http://localhost:3000)

### AWS S3 Deployment

1. Build the application:
```bash
npm run build
```

2. Upload the `dist` folder contents to your S3 bucket

3. Configure S3 bucket for static website hosting:
   - Enable static website hosting
   - Set index document to `index.html`
   - Set error document to `index.html` (for client-side routing)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Menu.tsx        # Menu section
│   ├── Testimonial.tsx # Customer testimonial
│   ├── Contact.tsx     # Contact information
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── index.css           # Global styles with Tailwind
└── main.tsx            # App entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Orange/amber color palette
    50: '#fef7ee',
    500: '#ed731a',
    600: '#de5a10',
    // ... more shades
  }
}
```

### Content

Update the content in respective component files:
- Menu items in `src/components/Menu.tsx`
- Contact information in `src/components/Contact.tsx`
- Company information in `src/components/Footer.tsx`

## Performance

- Optimized images and assets
- Gzip compression enabled
- Static asset caching
- Lazy loading for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.