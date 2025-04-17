# Fab Design Tokens

A practical case study and implementation of a simple multi-platform design token system.

## 🌟 Features

- Design tokens defined in Figma and exported as JSON
- Tokens transformation with Style Dictionary
- Monorepo management with Turborepo
- Multi-platform support:
  - Web app with Vite, React, and shadcn/ui
  - Mobile apps with React Native for iOS and Android
- Component documentation with Storybook
- Technical documentation with Fumadocs

## 📁 Project Structure

```
fab-design-tokens/
├── apps/                   # Applications
│   ├── docs/               # Technical documentation (Fumadocs)
│   ├── mobile/             # React Native mobile app
│   └── web/                # React web app (Vite)
│       └── .storybook/     # Storybook configuration
├── packages/                # Shared packages
│   ├── design-tokens/      # Design tokens implementation
│   ├── eslint-config/      # ESLint configuration
│   ├── typescript-config/  # TypeScript configuration
│   └── ui/                 # Shared UI components
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm (v7 or newer)

### Installation

```bash
# Clone the repository
git clone https://github.com/fabriziocuscini/fab-design-tokens.git
cd fab-design-tokens

# Install dependencies
npm install
```

### Development

```bash
# Build design tokens
npm run tokens:build

# Run web app
npm run web:dev

# Run mobile app
npm run mobile:start

# Run Storybook
npm run storybook

# Run documentation site
npm run docs:dev
```

## 🔄 Design Token Workflow

1. Define design tokens in Figma
2. Export tokens as JSON files
3. Place exported files in `packages/design-tokens/src/`
4. Run token transformation: `npm run tokens:build`
5. Use the generated tokens in Web and Mobile apps

## 📱 Platforms

### Web (React + Vite)

The web app uses:
- React and Vite
- React Router 7 for routing
- shadcn/ui components
- Tailwind CSS for styling

### Mobile (React Native)

- Built with React Native
- Works on iOS and Android
- Uses React Native Reusables for UI components
- Web version available for testing

## 📚 Documentation

- Storybook for component documentation and testing
- Fumadocs for technical documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
