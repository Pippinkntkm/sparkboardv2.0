# SparkBoard Website 2.0

<!-- Trigger redeploy: public repo -->

A modern, responsive website built with React and Tailwind CSS. This project serves as a baseline for creating beautiful, professional web applications.

## Features

- ⚡ **React 18** - Latest React features and performance optimizations
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📱 **Responsive Design** - Mobile-first approach with responsive breakpoints
- 🚀 **Modern Build** - Create React App with optimized production builds
- 🎯 **Component-Based** - Modular, reusable components
- 🔧 **Customizable** - Easy to customize colors, fonts, and styling

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── Features.js     # Features showcase
│   └── Footer.js       # Site footer
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sparkboard-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`. You can modify the primary and secondary color schemes:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
    900: '#1e3a8a',
  },
  secondary: {
    50: '#f8fafc',
    // ... other shades
    900: '#0f172a',
  }
}
```

### Components

All components are located in the `src/components/` directory and can be easily modified or extended. Each component is self-contained with its own styling using Tailwind CSS classes.

### Styling

The project uses Tailwind CSS with custom component classes defined in `src/index.css`. You can add new utility classes or modify existing ones in the `@layer components` section.

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy to Netlify

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `build`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help, please open an issue on GitHub or contact the development team. 