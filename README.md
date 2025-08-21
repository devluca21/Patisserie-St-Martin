# Clinique Dentaire Dr Georgette Elias - Website

Modern bilingual dental clinic website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Bilingual Support**: French and English versions
- **Modern Design**: Responsive design with Tailwind CSS
- **Performance Optimized**: Next.js 14 with App Router
- **SEO Ready**: Meta tags, structured data, and sitemap
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Image Optimization**: Next.js Image component with WebP/AVIF support

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.32
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Carousel**: Embla Carousel
- **Deployment**: Vercel (optimized)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🌐 Deployment on Vercel

### Automatic Deployment

1. **Connect Repository**: Push your code to GitHub/GitLab/Bitbucket
2. **Import Project**: In Vercel dashboard, click "New Project"
3. **Select Repository**: Choose your dental clinic repository
4. **Configure Build**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
5. **Environment Variables**: Add any required environment variables
6. **Deploy**: Click "Deploy"

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Vercel Optimizations

The project includes:
- `vercel.json` with optimized configuration
- `.vercelignore` for clean deployments
- Production build optimizations
- Security headers
- CDN-friendly redirects
- Edge function configurations

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── en/               # English routes
│   ├── contact/          # Contact page
│   ├── services/         # Services page
│   ├── equipe/           # Team page
│   ├── financement/      # Financing page
│   └── cdcp/            # CDCP page
├── components/            # Reusable components
│   ├── ui/              # UI components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   └── Hero.tsx         # Hero section
├── lib/                  # Utility functions
└── messages/             # Internationalization files
```

## 🌍 Internationalization

- **French**: Default language (`/`)
- **English**: English version (`/en`)
- **Automatic routing** based on URL structure
- **Shared components** with language-specific content

## 🎨 Customization

### Colors
The design uses a custom dental color palette defined in `tailwind.config.js`:
- `dental-primary`: Primary brand color
- `dental-dark`: Dark accents
- `dental-light`: Light backgrounds
- `dental-accent`: Accent highlights

### Fonts
- Modern, clean typography optimized for readability
- Responsive font sizing for all devices

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** navigation and interactions
- **Optimized images** for all screen sizes

## 🔧 Build Configuration

### Next.js Config
- Image optimization with WebP/AVIF support
- Production optimizations enabled
- Security headers configured
- Webpack optimizations for production

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*`)
- Next.js types included

## 🚀 Performance Features

- **Static Generation**: Pages pre-rendered at build time
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic chunk optimization
- **Tree Shaking**: Unused code removed in production
- **CDN Ready**: Optimized for Vercel's global CDN

## 📊 Analytics & SEO

- **Meta Tags**: Comprehensive meta information
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Search engine crawling configuration
- **Open Graph**: Social media sharing optimization

## 🔒 Security

- **Content Security Policy**: Configured for security
- **Security Headers**: XSS protection, frame options
- **Input Validation**: Zod schema validation
- **HTTPS Only**: Production deployment security

## 📈 Monitoring

- **Build Analytics**: Vercel build performance metrics
- **Runtime Monitoring**: Function execution monitoring
- **Error Tracking**: Automatic error reporting
- **Performance Metrics**: Core Web Vitals tracking

## 🆘 Troubleshooting

### Common Issues

1. **Build Failures**: Check TypeScript errors with `npm run type-check`
2. **Image Issues**: Verify image paths and formats
3. **Styling Problems**: Ensure Tailwind CSS is properly configured
4. **Deployment Issues**: Check Vercel build logs

### Performance Issues

1. **Large Bundle Size**: Check for unused dependencies
2. **Slow Loading**: Optimize images and use Next.js Image component
3. **SEO Problems**: Verify meta tags and structured data

## 📞 Support

For technical support or questions about the website:
- **Email**: admin@dentistegeorgetteelias.com
- **Phone**: (514) 722-6575

## 📄 License

© 2024 Dr Georgette Elias Dental Clinic. All rights reserved.

---

**Built with ❤️ for modern dental care**
