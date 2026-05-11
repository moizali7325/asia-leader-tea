<div align="center">
  <h1>🍃 Asia Leader Tea</h1>
  <p>Premium Organic Tea E-Commerce Website</p>
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#deployment">Deployment</a> •
    <a href="#live-demo">Live Demo</a>
  </p>
</div>

---

## ✨ Features

- **Premium Tea Collection** - Curated selection of finest teas
- **E-Commerce Ready** - Full shopping cart with WhatsApp integration
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **SEO Optimized** - Meta tags, Open Graph, sitemap, and robots.txt
- **Fast Performance** - Optimized images and lazy loading
- **Smooth Animations** - Framer Motion animations throughout
- **Error Handling** - Error boundaries and fallbacks
- **Accessibility** - WCAG compliant with keyboard navigation

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Frontend framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |
| **React Hot Toast** | Notifications |

## 🚀 Deployment

### Deploy to Netlify

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/asia-leader-tea.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings are auto-configured via `netlify.toml`

3. **Auto-Deploy:**
   - Every push to `main` branch automatically redeploys
   - Preview deploys for pull requests

### Environment Variables

Create `.env.local` file:
```env
VITE_WHATSAPP_NUMBER=923229214000
```

## 🏃‍♂️ Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your WhatsApp number
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── public/              # Static assets
│   ├── images/          # Product images
│   ├── favicon.ico      # Favicon
│   ├── robots.txt       # SEO robots
│   └── sitemap.xml      # SEO sitemap
├── src/
│   ├── components/      # React components
│   ├── constants.ts     # Products & categories
│   ├── App.tsx          # Main app
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── netlify.toml         # Netlify config
└── vite.config.ts       # Vite config
```

## 🎨 Customization

### Adding Products
Edit `src/constants.ts`:
```typescript
{
  id: 24,
  categoryId: 'danedar',
  name: 'New Product',
  description: 'Product description',
  image: IMAGES.IMAGE_88,
  prices: { '250g': 420, '500g': 820, '1kg': 1640 },
  color: '#1f7a5a'
}
```

### Changing Colors
Edit category colors in `src/components/Products.tsx`:
```typescript
style={cat.id === 'milk' ? { color: '#60a5fa' } : ...}
```

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔍 SEO Features

- Meta tags for search engines
- Open Graph tags for social sharing
- Sitemap.xml for crawlers
- Robots.txt for indexing control
- Structured data (JSON-LD)

## 🛡️ Performance

- Lazy loading for components
- Image optimization
- Code splitting
- CDN-ready assets
- 90+ Lighthouse score

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with ❤️ for Asia Leader Tea
- Premium organic tea since 1992

---

<div align="center">
  <p>Made with ☕ and passion</p>
  <p><strong>Asia Leader Tea</strong> - Premium Organic Tea</p>
</div>
