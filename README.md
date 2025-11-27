# OBI Nature Escapes - Comprehensive Developer Documentation

A modern, responsive marketing website for OBI Space - a 2-acre lakeside event venue in Bengaluru, India. This documentation provides comprehensive information for developers to understand, develop, and optimize this project.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Architecture](#architecture)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Configuration](#configuration)
7. [Components Documentation](#components-documentation)
8. [Styling System](#styling-system)
9. [Database & Backend](#database--backend)
10. [Features & Functionality](#features--functionality)
11. [Performance Optimizations](#performance-optimizations)
12. [Development Guidelines](#development-guidelines)
13. [Deployment](#deployment)
14. [Troubleshooting](#troubleshooting)
15. [Future Enhancements](#future-enhancements)

---

## 🎯 Project Overview

OBI Nature Escapes is a single-page application (SPA) built with React and TypeScript, designed to showcase a lakeside event venue. The website features:

- **Event Space Showcases**: Interactive displays of various event spaces
- **Package Information**: Detailed pricing and package options
- **Afterschool Programs**: Information about educational programs
- **Art & Movement Programs**: Scroll-stacked card display with animations
- **Image Gallery**: Visual showcase of the venue
- **Customer Testimonials**: Social proof section
- **Contact/Enquiry Form**: Integrated with Supabase backend
- **Virtual Tour Section**: 360° tour integration
- **Responsive Design**: Mobile-first approach with smooth animations

### Key Design Principles

- **Dark Theme**: Modern dark UI with warm accent colors
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Performance First**: Optimized for fast load times and smooth interactions
- **Accessibility**: Semantic HTML and ARIA-compliant components
- **SEO Optimized**: Proper meta tags and semantic structure

---

## 🛠 Tech Stack

### Core Framework
- **React 18.3.1**: Latest React with concurrent features
- **TypeScript 5.8.3**: Type-safe development
- **Vite 5.4.19**: Fast build tool and dev server

### UI & Styling
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components built on Radix UI
- **Radix UI**: Unstyled, accessible component primitives
- **Lucide React 0.462.0**: Icon library
- **tailwindcss-animate**: Animation utilities

### State Management & Data Fetching
- **TanStack Query (React Query) 5.83.0**: Server state management
- **React Hook Form 7.61.1**: Form state management
- **Zod 3.25.76**: Schema validation

### Routing
- **React Router DOM 6.30.1**: Client-side routing

### Backend & Database
- **Supabase 2.84.0**: Backend-as-a-Service (PostgreSQL, Auth, Storage)
- **@supabase/supabase-js**: Supabase client library

### Animation & Interactions
- **Lenis 1.3.15**: Smooth scrolling library
- **Custom ScrollStack Component**: Advanced scroll-stacking animations
- **Intersection Observer API**: Scroll-triggered animations

### Form Handling
- **React Hook Form**: Form state and validation
- **@hookform/resolvers**: Zod integration for React Hook Form

### Additional Libraries
- **date-fns 3.6.0**: Date manipulation
- **embla-carousel-react 8.6.0**: Carousel component
- **recharts 2.15.4**: Chart library (if needed)
- **sonner 1.7.4**: Toast notifications
- **next-themes 0.3.0**: Theme management (dark mode support)

### Development Tools
- **ESLint 9.32.0**: Code linting
- **TypeScript ESLint 8.38.0**: TypeScript-specific linting
- **@vitejs/plugin-react-swc 3.11.0**: Fast React refresh with SWC
- **PostCSS 8.5.6**: CSS processing
- **Autoprefixer 10.4.21**: CSS vendor prefixing

---

## 🏗 Architecture

### Application Architecture

```
┌─────────────────────────────────────────┐
│           Browser (Client)              │
├─────────────────────────────────────────┤
│  React App (SPA)                        │
│  ├── React Router (Routing)             │
│  ├── TanStack Query (Data Fetching)    │
│  ├── React Hook Form (Forms)            │
│  └── Custom Hooks (Business Logic)     │
├─────────────────────────────────────────┤
│  Supabase Client                        │
│  ├── Database (PostgreSQL)              │
│  ├── Real-time Subscriptions           │
│  └── Storage (if needed)                │
└─────────────────────────────────────────┘
```

### Component Architecture

The application follows a **component-based architecture** with clear separation of concerns:

1. **Pages** (`src/pages/`): Top-level route components
2. **Components** (`src/components/`): Reusable UI components
3. **UI Components** (`src/components/ui/`): Base shadcn/ui components
4. **Hooks** (`src/hooks/`): Custom React hooks
5. **Integrations** (`src/integrations/`): External service clients
6. **Lib** (`src/lib/`): Utility functions

### Data Flow

1. **User Interaction** → Component Event Handler
2. **Form Submission** → React Hook Form → Validation (Zod)
3. **API Call** → Supabase Client → Database
4. **State Update** → TanStack Query → Component Re-render
5. **UI Update** → React Reconciliation → DOM Update

---

## 📁 Project Structure

```
obi-nature-escapes/
├── public/                          # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/
│   ├── assets/                     # Image assets
│   │   ├── afterschool.jpg
│   │   ├── celebration-garden.jpg
│   │   ├── green-pavilion.jpg
│   │   ├── hero-sunset.jpg
│   │   ├── nature-trails.jpg
│   │   ├── obi-hero.png
│   │   └── picnic-lawns.jpg
│   │
│   ├── components/                 # React components
│   │   ├── ui/                    # shadcn/ui base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── form.tsx
│   │   │   └── ... (40+ components)
│   │   │
│   │   ├── About.tsx              # About section
│   │   ├── Afterschool.tsx       # Afterschool programs
│   │   ├── ArtMovementPrograms.tsx  # Art programs with ScrollStack
│   │   ├── EnquiryForm.tsx       # Contact form
│   │   ├── EventSpaces.tsx       # Event spaces showcase
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Gallery.tsx           # Image gallery
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Location.tsx          # Location/map section
│   │   ├── NavLink.tsx           # Navigation link component
│   │   ├── Offerings.tsx         # Services offerings
│   │   ├── Packages.tsx          # Package information
│   │   ├── ScrollStack.tsx       # Custom scroll-stacking component
│   │   ├── Testimonials.tsx     # Customer testimonials
│   │   └── VirtualTour.tsx      # 360° tour section
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── use-mobile.tsx        # Mobile detection hook
│   │   ├── use-scroll-animation.tsx  # Scroll animation hook
│   │   └── use-toast.ts          # Toast notification hook
│   │
│   ├── integrations/              # External service integrations
│   │   └── supabase/
│   │       ├── client.ts         # Supabase client setup
│   │       └── types.ts           # TypeScript types (auto-generated)
│   │
│   ├── lib/                      # Utility functions
│   │   └── utils.ts              # Common utilities (cn, etc.)
│   │
│   ├── pages/                    # Page components (routes)
│   │   ├── Index.tsx             # Home page
│   │   ├── About.tsx             # About page
│   │   ├── Gallery.tsx           # Gallery page
│   │   ├── Spaces.tsx            # Spaces page
│   │   └── NotFound.tsx          # 404 page
│   │
│   ├── App.tsx                   # Main app component
│   ├── App.css                   # App-specific styles
│   ├── index.css                 # Global styles & design system
│   ├── main.tsx                  # Application entry point
│   └── vite-env.d.ts            # Vite type definitions
│
├── supabase/                     # Supabase configuration
│   ├── config.toml              # Supabase config
│   └── migrations/              # Database migrations
│       ├── 20251126124524_*.sql
│       └── 20251126124548_*.sql
│
├── .env                          # Environment variables (not in git)
├── components.json               # shadcn/ui configuration
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── tsconfig.app.json            # TypeScript app config
├── tsconfig.node.json           # TypeScript node config
└── vite.config.ts               # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher (LTS recommended)
- **Package Manager**: npm, yarn, or pnpm
- **Git**: For version control
- **Supabase Account**: For backend services (free tier available)

### Installation Steps

1. **Clone the repository**
```bash
   git clone <repository-url>
cd obi-nature-escapes
```

2. **Install dependencies**
```bash
npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```
   
   To get these values:
   - Go to your Supabase project dashboard
   - Navigate to Settings → API
   - Copy the "Project URL" and "anon public" key

4. **Set up Supabase database**
   
   Run the migrations in `supabase/migrations/`:
   ```bash
   # Using Supabase CLI (if installed)
   supabase db push
   
   # Or manually run SQL files in Supabase SQL Editor
   ```

5. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (optimized) |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## ⚙️ Configuration

### Vite Configuration (`vite.config.ts`)

```typescript
{
  server: {
    host: "::",      // Listen on all network interfaces
    port: 8080,     // Development server port
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Path alias for imports
    },
  },
}
```

### TypeScript Configuration

- **Base Config** (`tsconfig.json`): Root configuration
- **App Config** (`tsconfig.app.json`): Application-specific settings
- **Node Config** (`tsconfig.node.json`): Node.js/build tool settings

Key settings:
- Path aliases: `@/*` → `./src/*`
- Strict mode: Disabled (can be enabled for stricter type checking)
- JSX: React mode

### Tailwind Configuration (`tailwind.config.ts`)

- **Content paths**: Scans all `.tsx`, `.ts` files
- **Theme extensions**: Custom colors, fonts, animations
- **Plugins**: `tailwindcss-animate` for animations

### ESLint Configuration (`eslint.config.js`)

- **Base**: JavaScript recommended rules
- **TypeScript**: TypeScript ESLint recommended
- **React**: React hooks and refresh rules
- **Custom**: Unused vars warning disabled

### shadcn/ui Configuration (`components.json`)

- **Style**: Default (slate-based)
- **Aliases**: Configured for `@/components`, `@/lib`, `@/hooks`
- **Registry**: Includes `@react-bits` registry for additional components

---

## 🧩 Components Documentation

### Core Components

#### `Header.tsx`
Navigation header with logo, menu items, and CTA button.

**Props**: None (uses internal state)

**Features**:
- Responsive mobile menu
- Active route highlighting
- Smooth scroll to sections

#### `Hero.tsx`
Hero section with main headline and CTA.

**Props**: None

**Features**:
- Gradient text effects
- Scroll-triggered animations
- Responsive image handling

#### `ArtMovementPrograms.tsx`
Art and movement programs section using ScrollStack component.

**Props**: None

**Features**:
- Scroll-stacking card animation
- Background images for each card
- Age group badges
- Learn More buttons

**Data Structure**:
```typescript
{
  icon: LucideIcon,
  title: string,
  description: string,
  ageGroups: string[],
  bgImage: string
}
```

#### `ScrollStack.tsx`
Custom component for creating scroll-stacking card animations.

**Props**:
- `useWindowScroll?: boolean` - Use window scroll vs container scroll
- `itemDistance?: number` - Distance between items (default: 100)
- `itemScale?: number` - Scale increment per item (default: 0.03)
- `itemStackDistance?: number` - Stack offset (default: 30)
- `stackPosition?: string` - Stack trigger position (default: '20%')
- `baseScale?: number` - Base scale for stacked items (default: 0.85)
- `rotationAmount?: number` - Rotation per item (default: 0)
- `blurAmount?: number` - Blur for stacked items (default: 0)

**Usage**:
```tsx
<ScrollStack useWindowScroll={true}>
  <ScrollStackItem itemClassName="bg-card">
    <h2>Card Content</h2>
  </ScrollStackItem>
</ScrollStack>
```

**Technical Details**:
- Uses Lenis for smooth scrolling
- GPU-accelerated transforms
- Optimized with `requestAnimationFrame`
- Caches initial positions for performance

#### `EnquiryForm.tsx`
Contact/enquiry form with Supabase integration.

**Props**: None

**Features**:
- Form validation with Zod
- Supabase integration
- Toast notifications
- Loading states
- Error handling

**Form Fields**:
- Name (required)
- Phone (required)
- Email (required)
- Event Type (required, dropdown)
- Event Date (optional)
- Message (optional)

**Database Table**: `enquiries`

#### `EventSpaces.tsx`
Showcase of available event spaces.

**Props**: None

**Features**:
- Card-based layout
- Hover effects
- Responsive grid
- Scroll animations

#### `Gallery.tsx`
Image gallery component.

**Props**: None

**Features**:
- Grid layout
- Image optimization
- Lightbox (if implemented)
- Lazy loading

#### `Testimonials.tsx`
Customer testimonials carousel.

**Props**: None

**Features**:
- Carousel/slider
- Customer photos
- Quote display
- Auto-rotation (if implemented)

### UI Components (shadcn/ui)

All UI components are located in `src/components/ui/` and follow shadcn/ui patterns:

- **Button**: Multiple variants (default, outline, ghost, etc.)
- **Card**: Container with header, content, footer
- **Input**: Text input with validation states
- **Textarea**: Multi-line text input
- **Select**: Dropdown select with search
- **Toast**: Notification system
- **Dialog**: Modal dialogs
- **Form**: Form wrapper with validation
- And 30+ more components...

**Adding New UI Components**:
```bash
npx shadcn@latest add [component-name]
```

---

## 🎨 Styling System

### Design System

The project uses a **custom design system** defined in `src/index.css` with CSS variables.

#### Color Palette

**Primary Colors** (HSL):
- Primary: `hsl(25, 95%, 58%)` - Orange/sunset
- Secondary: `hsl(142, 45%, 45%)` - Green/nature
- Accent: `hsl(45, 100%, 65%)` - Yellow/gold

**Neutral Colors**:
- Background: `hsl(0, 0%, 5%)` - Very dark
- Foreground: `hsl(0, 0%, 98%)` - Almost white
- Muted: `hsl(0, 0%, 12%)` - Dark gray
- Border: `hsl(0, 0%, 18%)` - Medium gray

#### Typography

- **Sans Font**: Inter (system fallback)
- **Display Font**: Poppins (for headings)

#### Gradients

```css
--gradient-sunset: linear-gradient(135deg, hsl(25, 95%, 58%), hsl(15, 90%, 65%), hsl(340, 80%, 70%));
--gradient-nature: linear-gradient(135deg, hsl(142, 45%, 45%), hsl(152, 50%, 55%));
--gradient-glow: radial-gradient(circle at top, hsl(25, 95%, 58% / 0.15), transparent 70%);
```

#### Shadows

```css
--shadow-warm: 0 10px 40px -10px hsl(25, 95%, 58% / 0.25);
--shadow-subtle: 0 4px 20px -4px hsl(25, 35% 15% / 0.1);
```

#### Animations

Custom keyframes and transitions defined in `tailwind.config.ts`:
- Accordion animations
- Custom transitions with cubic-bezier easing

### Tailwind Utilities

**Custom Classes**:
- `.text-gradient`: Gradient text effect
- `.gradient-sunset`: Sunset gradient background
- `.gradient-nature`: Nature gradient background
- `.hover-lift`: Hover elevation effect
- `.hover-glow`: Hover glow effect

**Responsive Breakpoints**:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

### CSS Architecture

1. **Base Layer** (`@layer base`): CSS variables and resets
2. **Components Layer** (`@layer components`): Reusable component classes
3. **Utilities Layer** (`@layer utilities`): Utility classes

---

## 🗄 Database & Backend

### Supabase Setup

The project uses **Supabase** as the backend service:

1. **Database**: PostgreSQL
2. **Authentication**: Supabase Auth (if needed)
3. **Storage**: Supabase Storage (if needed)
4. **Real-time**: Supabase Realtime (if needed)

### Database Schema

#### `enquiries` Table

Stores contact form submissions:

```sql
CREATE TABLE enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date DATE,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Other Tables (if applicable)

Check `supabase/migrations/` for complete schema definitions.

### Supabase Client

**Location**: `src/integrations/supabase/client.ts`

**Configuration**:
- Auto-refresh tokens
- LocalStorage persistence
- Type-safe with generated types

**Usage**:
```typescript
import { supabase } from "@/integrations/supabase/client";

const { data, error } = await supabase
  .from("enquiries")
  .insert({ name, email, ... });
```

### Type Generation

Supabase types are auto-generated in `src/integrations/supabase/types.ts`.

To regenerate types:
```bash
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/integrations/supabase/types.ts
```

---

## ✨ Features & Functionality

### Scroll Animations

**Implementation**: `useScrollAnimation` hook

**Usage**:
```typescript
const { ref, isVisible } = useScrollAnimation();

<div ref={ref} className={isVisible ? 'visible' : ''}>
  Content
</div>
```

**How it works**:
- Uses Intersection Observer API
- Triggers when element enters viewport
- Configurable threshold

### Smooth Scrolling

**Implementation**: Lenis library

**Configuration**:
- Duration: 1.2s
- Easing: Custom cubic-bezier
- Touch multiplier: 2x
- Lerp: 0.1 (smooth interpolation)

**Location**: `ScrollStack.tsx` and potentially global

### Form Handling

**Implementation**: React Hook Form + Zod

**Features**:
- Client-side validation
- Type-safe form data
- Error messages
- Loading states
- Success/error toasts

### Scroll Restoration

**Implementation**: Custom solution in `App.tsx` and `main.tsx`

**Features**:
- Disables browser scroll restoration
- Forces scroll to top on page load
- Scrolls to top on route changes

### Responsive Design

**Approach**: Mobile-first

**Breakpoints**:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Techniques**:
- Flexible grid layouts
- Responsive images
- Mobile navigation menu
- Touch-friendly interactions

---

## 🚀 Performance Optimizations

### Code Splitting

- **Route-based**: Each page is a separate chunk
- **Lazy Loading**: Components loaded on demand (if implemented)

### Image Optimization

- **Format**: Use WebP when possible
- **Lazy Loading**: Native `loading="lazy"` attribute
- **Responsive Images**: `srcset` for different screen sizes

### Bundle Optimization

- **Tree Shaking**: Unused code eliminated
- **Minification**: Production builds are minified
- **Compression**: Gzip/Brotli for deployment

### Runtime Optimizations

1. **ScrollStack Component**:
   - Caches initial positions
   - Uses `requestAnimationFrame` for smooth updates
   - GPU-accelerated transforms
   - Debounced scroll handlers

2. **React Optimizations**:
   - `useCallback` for memoized functions
   - `useMemo` for expensive calculations
   - Component memoization where needed

3. **Lenis Smooth Scroll**:
   - Efficient scroll interpolation
   - Optimized for 60fps

### Best Practices

- ✅ Use `React.memo` for expensive components
- ✅ Lazy load images below the fold
- ✅ Debounce scroll/resize handlers
- ✅ Use CSS transforms instead of position changes
- ✅ Minimize re-renders with proper state management

---

## 📝 Development Guidelines

### Code Style

**TypeScript**:
- Use TypeScript for all new files
- Define proper types/interfaces
- Avoid `any` type (use `unknown` if needed)

**Naming Conventions**:
- Components: PascalCase (`MyComponent.tsx`)
- Hooks: camelCase with `use` prefix (`useMyHook.tsx`)
- Utilities: camelCase (`myUtility.ts`)
- Constants: UPPER_SNAKE_CASE

**File Organization**:
- One component per file
- Co-locate related files
- Use index files for clean imports

### Component Guidelines

1. **Functional Components**: Use function components (not classes)
2. **Hooks**: Use hooks for state and side effects
3. **Props**: Define prop types with TypeScript interfaces
4. **State**: Use local state when possible, lift when needed
5. **Effects**: Clean up side effects in `useEffect` return

### Git Workflow

**Branch Naming**:
- `feature/feature-name`: New features
- `fix/bug-name`: Bug fixes
- `refactor/component-name`: Refactoring
- `docs/update-name`: Documentation updates

**Commit Messages**:
- Use clear, descriptive messages
- Reference issues if applicable
- Follow conventional commits format

### Testing (Future)

When adding tests:
- Unit tests for utilities
- Component tests for UI
- Integration tests for flows
- E2E tests for critical paths

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deployment Options

#### Vercel (Recommended)

1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. Add environment variables in Vercel dashboard
4. Deploy!

#### Netlify

1. Connect repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables
4. Deploy

#### Other Platforms

- **AWS S3 + CloudFront**: Static hosting
- **GitHub Pages**: Free static hosting
- **Firebase Hosting**: Google's hosting service

### Environment Variables

Make sure to set these in your deployment platform:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

### Post-Deployment Checklist

- [ ] Test all routes
- [ ] Verify form submissions work
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify analytics (if added)
- [ ] Check performance metrics
- [ ] Test error handling

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Build Errors

**Issue**: TypeScript errors during build

**Solution**:
- Check `tsconfig.json` settings
- Ensure all types are properly defined
- Run `npm run lint` to identify issues

#### 2. Supabase Connection Issues

**Issue**: Cannot connect to Supabase

**Solution**:
- Verify `.env` file has correct values
- Check Supabase project is active
- Verify API keys are correct
- Check network/CORS settings

#### 3. ScrollStack Not Working

**Issue**: Cards not stacking properly

**Solution**:
- Check browser console for errors
- Verify Lenis is properly initialized
- Ensure cards have proper initial positions
- Check `useWindowScroll` prop is set correctly

#### 4. Images Not Loading

**Issue**: Images show broken links

**Solution**:
- Verify image paths are correct
- Check if images exist in `src/assets/`
- Ensure proper import statements
- Check build output includes images

#### 5. Styling Issues

**Issue**: Styles not applying

**Solution**:
- Clear browser cache
- Restart dev server
- Check Tailwind config includes file paths
- Verify CSS is imported in `main.tsx`

### Debugging Tips

1. **React DevTools**: Install browser extension
2. **Console Logging**: Use `console.log` strategically
3. **Network Tab**: Check API calls and responses
4. **Performance Tab**: Identify bottlenecks
5. **Lighthouse**: Run performance audits

### Getting Help

- Check existing issues in repository
- Review Supabase documentation
- Check React/TypeScript documentation
- Review component library docs (shadcn/ui)

---

## 🔮 Future Enhancements

### Potential Improvements

1. **Performance**:
   - Implement code splitting for routes
   - Add service worker for offline support
   - Optimize images with next-gen formats
   - Implement virtual scrolling for long lists

2. **Features**:
   - Add search functionality
   - Implement booking system
   - Add user authentication
   - Create admin dashboard
   - Add blog/news section
   - Implement multi-language support

3. **SEO**:
   - Add structured data (JSON-LD)
   - Implement sitemap generation
   - Add Open Graph meta tags
   - Implement canonical URLs

4. **Analytics**:
   - Add Google Analytics
   - Track form submissions
   - Monitor performance metrics
   - User behavior tracking

5. **Accessibility**:
   - Add ARIA labels
   - Improve keyboard navigation
   - Add focus indicators
   - Screen reader optimization

6. **Testing**:
   - Add unit tests
   - Component testing
   - E2E testing
   - Performance testing

---

## 📚 Additional Resources

### Documentation Links

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Supabase Docs](https://supabase.com/docs)
- [React Router Docs](https://reactrouter.com)
- [TanStack Query Docs](https://tanstack.com/query/latest)

### Project-Specific

- Component library: shadcn/ui
- Icon library: Lucide React
- Smooth scroll: Lenis
- Form validation: Zod

---

## 📄 License

Private project - All rights reserved.

---

## 👥 Contributing

This is a private project. For internal contributors:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request
5. Get code review approval
6. Merge to main

---

## 📞 Support

For questions or issues:
- Check this documentation first
- Review code comments
- Check Supabase dashboard for backend issues
- Contact the project maintainer

---

**Last Updated**: 2025-01-27
**Version**: 1.0.0
**Maintainer**: OBI Development Team
