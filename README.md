# Jaber Ali Farooqi – Cyberpunk Portfolio

A modern, cyberpunk/cybersecurity-themed portfolio built with **Next.js 14**, **React 18**, **Tailwind CSS**, **Framer Motion**, **Three.js**, and more. Features advanced layouts, animated effects, and a professional showcase of cybersecurity skills and projects.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🚀 Features

- **Cyberpunk UI**: Neon, holographic, and matrix rain effects
- **Advanced Animations**: Framer Motion, custom Tailwind keyframes, and typewriter effects
- **3D & Particle Effects**: Matrix rain, floating particles, and more
- **Responsive & Accessible**: Mobile-friendly, keyboard navigable, and dark mode
- **Professional Content**: About, Projects, and Contact pages, all themed and animated
- **Easy Customization**: Modular components and Tailwind config for rapid changes

## 🗂️ Directory Structure

```
.
├── components/           # Reusable React components
│   ├── AdvancedLayout.js # Main layout with navbar, theme toggle, and footer
│   ├── CyberButton.js    # Cyberpunk-styled button component
│   ├── MatrixRain.js     # Matrix rain canvas effect
│   ├── ParticleField.js  # Floating particles effect
│   └── Layout.js         # Legacy layout (not used)
├── pages/                # Next.js pages
│   ├── _app.js           # Global app wrapper
│   ├── _document.js      # Custom document for fonts
│   ├── index.js          # Homepage
│   ├── about.js          # About page
│   ├── projects.js       # Projects showcase
│   └── contact.js        # Contact form
├── styles/               # CSS files
│   └── globals.css       # Global styles and Tailwind imports
├── public/               # Static assets
│   ├── favicon.ico       # Site favicon
│   └── resume.pdf        # Downloadable resume
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── next.config.js        # Next.js configuration
└── package.json          # Project dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaberfarooqi/jbn-portfolio.git
   cd jbn-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # If you encounter peer dependency issues:
   npm install --legacy-peer-deps
   ```

3. **Create public directory**
   ```bash
   mkdir public
   # Add your favicon.ico and resume.pdf to this directory
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Changing Content

- **Name/Branding**: Update in `components/AdvancedLayout.js`
- **Projects**: Edit the `projects` array in `pages/projects.js`
- **Skills**: Modify the `skills` array in `pages/index.js`
- **Contact Info**: Update in `pages/contact.js`

### Styling

- **Colors**: Edit the `colors` object in `tailwind.config.js`
- **Animations**: Modify `keyframes` in `tailwind.config.js`
- **Fonts**: Update in `pages/_document.js`

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

1. **AdvancedLayout.js**
   - Main layout wrapper
   - Navbar with "JAF" initials
   - Theme toggle
   - Matrix rain and particle effects
   - Footer with social links

2. **Homepage (index.js)**
   - Hero section with typewriter effect
   - Skills showcase
   - Featured projects
   - Terminal-style section

3. **Effects**
   - MatrixRain.js: Canvas-based matrix effect
   - ParticleField.js: Floating neon particles
   - CyberButton.js: Animated cyberpunk button

## 🐞 Troubleshooting

### Common Issues

1. **Missing framer-motion**
   ```bash
   npm install framer-motion
   ```

2. **Font Loading Warning**
   - Already fixed with custom `_document.js`

3. **Port in Use**
   - Next.js will automatically use the next available port
   - Check console for the correct URL

4. **Webpack Cache Issues**
   ```bash
   rm -rf .next
   npm run dev
   ```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🎯 Performance Optimization

- Image optimization with Next.js
- Font preloading
- Lazy loading components
- Tailwind purge for production

## 🔒 Security

- No sensitive data in client-side code
- Secure headers in Next.js config
- HTTPS recommended for production

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

Jaber Ali Farooqi
- Email: Jaberfarooqi@hotmail.com
- LinkedIn: [jaberfarooqi](https://linkedin.com/in/jaberfarooqi)
- GitHub: [jaberfarooqi](https://github.com/jaberfarooqi)

---
