# 👨🏾‍💻 Project: Foodies Next.js App

## 📋 Project Overview
This project is a modern web application built with **Next.js** to showcase a food-sharing community. It features dynamic routing, server-side data fetching, and high-performance image optimization.

- **What This Project Does**: 
  - Allows users to browse a collection of meals shared by others.
  - Enables users to share their own culinary creations.
  - Provides a dedicated community space for food enthusiasts.
  - Implements an interactive image slideshow for the landing page.
- **Technology Stack**: 
  - **Framework**: Next.js (App Router)
  - **Language**: JavaScript / React
  - **Styling**: Vanilla CSS with CSS Modules
  - **Assets**: Optimized images via `next/image`
- **Key Components**: 
  - `MainHeader`: Global navigation and branding.
  - `NavLink`: Interactive links with active-state detection.
  - `ImageSlideshow`: Automated, performant hero slideshow.
  - `MainHeaderBackground`: Decoupled decorative SVG background.

## 📑 Table of Contents
- [👨🏾‍💻 Project Overview](#-project-overview)
- [📑 Table of Contents](#-table-of-contents)
- [📁 Visual Project Tree](#-visual-project-tree)
- [🧳 Section 03: NextJS Essential (App Router)](#-section-03-nextjs-essential-app-router)
  - [📚 Lesson 097: Exercise: Task and solution](#-97-lesson-097--exercise-task-and-solution)
  - [📚 Lesson 098: Revisiting: The Concept Of Layouts](#-98-lesson-098--revisiting-the-concept-of-layouts)
  - [📚 Lesson 099: Adding a Custom Component To A Layout](#-99-lesson-099--adding-a-custom-component-to-a-layout)
  - [📚 Lesson 100: Styling NextJS Project: Your Options & Using CSS Modules](#-100-lesson-100--styling-nextjs-project-your-options--using-css-modules)
  - [📚 Lesson 101: Optimizing Images with the NextJS Image Component](#-101-lesson-101--optimizing-images-with-the-nextjs-image-component)
  - [📚 Lesson 102: Using More Custom Components](#-102-lesson-102--using-more-custom-components)
  - [📚 Lesson 103: Populating The Starting Page Content](#-103-lesson-103--populating-the-starting-page-content)
  - [📚 Lesson 104: Preparing an Image Slideshow](#-104-lesson-104--preparing-an-image-slideshow)
  - [📚 Lesson 105: React Server Components vs Client Components](#-105-lesson-105--react-server-components-vs-client-components---when-to-use-what)
  - [📚 Lesson 106: Using Client Components Efficiently](#-106-lesson-106--using-client-components-efficiently)

## 📁 Visual Project Tree
```
03-onwards-foodies-starting-project/
├── app/
│   ├── community/
│   │   ├── page.js                # 📄 Community page displaying social features
│   │   └── page.module.css        # 📄 Scoped styles for the community page
│   ├── components/
│   │   ├── images/
│   │   │   ├── image-slideshow.js # 📄 Animated slideshow component
│   │   │   └── image-slideshow.module.css
│   │   └── main-header/
│   │       ├── main-header.js     # 📄 Global navigation header
│   │       ├── main-header.module.css
│   │       ├── main-header-background.js
│   │       ├── main-header-background.module.css
│   │       ├── nav-link.js        # 📄 Individual navigation link component
│   │       └── nav-link.module.css
│   ├── meals/
│   │   ├── [mealSlug]/
│   │   │   └── page.js            # 📄 Dynamic route for meal details
│   │   ├── share/
│   │   │   └── page.js            # 📄 Page for sharing new meals
│   │   ├── layout.js              # 📄 Layout for meals section
│   │   └── page.js                # 📄 Main meals listing page
│   ├── globals.css                # 📄 Global application styles
│   ├── icon.png                   # 📄 App icon
│   ├── layout.js                  # 📄 Root application layout
│   ├── page.js                    # 📄 Landing/Home page
│   └── page.module.css            # 📄 Styles for the landing page
├── assets/                        # 📁 Static assets (images, icons)
├── docs/
│   └── LECTURE_STEPS.md           # 📄 This educational documentation
├── img/                           # 📁 Screenshots for documentation
├── public/                        # 📁 Static assets served directly
├── jsconfig.json                  # 📄 Path aliases configuration
├── next.config.js                 # 📄 Next.js configuration
├── package.json                   # 📄 Project dependencies
└── README.md                      # 📄 General project information
```

<br>

## 🧳 Section 03: *NextJS Essential (App Router)*

### 📑 Table of Contents
- [📚 Lesson 097: Exercise: Task and solution](#-97-lesson-097--exercise-task-and-solution)
- [📚 Lesson 098: Revisiting: The Concept Of Layouts](#-98-lesson-098--revisiting-the-concept-of-layouts)
- [📚 Lesson 099: Adding a Custom Component To A Layout](#-99-lesson-099--adding-a-custom-component-to-a-layout)
- [📚 Lesson 100: Styling NextJS Project: Your Options & Using CSS Modules](#-100-lesson-100--styling-nextjs-project-your-options--using-css-modules)
- [📚 Lesson 101: Optimizing Images with the NextJS Image Component](#-101-lesson-101--optimizing-images-with-the-nextjs-image-component)
- [📚 Lesson 102: Using More Custom Components](#-102-lesson-102--using-more-custom-components)
- [📚 Lesson 103: Populating The Starting Page Content](#-103-lesson-103--populating-the-starting-page-content)
- [📚 Lesson 104: Preparing an Image Slideshow](#-104-lesson-104--preparing-an-image-slideshow)
- [📚 Lesson 105: React Server Components vs Client Components](#-105-lesson-105--react-server-components-vs-client-components---when-to-use-what)
- [📚 Lesson 106: Using Client Components Efficiently](#-106-lesson-106--using-client-components-efficiently)

<br>

## 🔧 97. Lesson 097 — *Exercise: Task and solution*

- [Lecture 097: Exercise: Task and solution](#-97-lesson-097--exercise-task-and-solution)
    - [97.1 Context](#971-context)
    - [97.2 Updating code according the context](#972-updating-code-according-the-context)
        - [97.2.1 create `/community` route](#9721-create-community-route)
        - [97.2.2 create `/meals/[mealSlug]` route](#9722-create-mealsmealslug-route)
        - [97.2.3 create `/meals/share` route](#9723-create-mealsshare-route)
        - [97.2.4 Create `/meals` route](#9724-create-meals-route)
        - [97.2.5 Create `/app` route](#9725-create-app-route)
    - [97.3 Pending Fixes (TODO)](#973-pending-fixes-todo)

### 🧠 97.1 Context:

Next.js uses a **file-system based router**, where folders are used to define routes. Each folder represents a route segment that maps to a URL segment. To create a nested route, you nest folders inside each other. A special `page.js` file is required to make a route segment publicly accessible.

- **Static Routes**: Defined by standard folder names (e.g., `app/community` maps to `/community`).
- **Nested Routes**: Defined by nesting folders (e.g., `app/meals/share` maps to `/meals/share`).
- **Dynamic Routes**: Defined by wrapping folder names in square brackets (e.g., `app/meals/[mealSlug]` maps to `/meals/any-id`). This allows the segment to act as a placeholder for dynamic data.

**When to use:**
- Static routes are used for fixed pages like "About", "Contact", or "Community".
- Dynamic routes are essential for resource-specific pages like "Product Details" or "Blog Posts" where the content depends on an ID or slug.

**Advantages:**
- Highly intuitive once the convention is understood.
- Enables automatic code splitting per route.
- Simplifies navigation management without complex configuration files.

**Disadvantages:**
- Strict naming requirements (`page.js`, `layout.js`, etc.) can be restrictive.
- Moving files physically changes the URL structure, which requires care for SEO and links.

**Alternatives:**
- In some scenarios, **Catch-all Routes** (`[...slug]`) or **Optional Catch-all Routes** (`[[...slug]]`) might be more appropriate for highly flexible URL structures.


### ⚙️ 97.2 Updating code according the context:

**Summary**
This section documents the practical implementation of the application's core routing structure. It covers the creation of static routes for general sections (`/meals`, `/community`), a nested route for a specific feature (`/meals/share`), and a dynamic route for individual meal details (`/meals/[mealSlug]`). Finally, it connects these routes with navigation links on the home page.


Project Tree:
```
03-onwards-foodies-starting-project/
├── app
│   ├── community
│   │   └── page.js                # Community page displaying social features
│   ├── meals
│   │   ├── [mealSlug]
│   │   │   └── page.js            # Dynamic route for specific meal details
│   │   ├── share
│   │   │   └── page.js            # Page for users to share their own meals
│   │   └── page.js                # Main meals list page (all meals)
│   ├── globals.css                # Global CSS styles and Tailwind imports
│   ├── icon.png                   # Main application favicon/icon
│   ├── layout.js                  # Root layout wrapping all pages
│   └── page.js                    # Home/Landing page of the application
├── assets
│   ├── icons                      # UI icons (community.png, events.png, etc.)
│   └── images                     # Original food images and brand assets
├── docs                           # Documentation and lesson notes
├── public
│   └── images                     # Static food images served via /images URL
├── .eslintrc.json                 # Linting rules for code quality
├── .gitignore                     # Files and folders ignored by Git
├── jsconfig.json                  # JS configuration for path aliases (@/...)
├── next.config.js                 # Next.js specific settings
├── package.json                   # Project dependencies (Next.js, React)
└── README.md                      # Project documentation
```


#### 97.2.1 create `/community` route:

Having this project:
* [starting project (local)](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/foodies-starting-project.zip)

* [Starting project (CodeSandbox)](https://codesandbox.io/p/devbox/meals-app-starting-project-8vjnw3)
**Subsection Summary**
Defines the `/community` static route. This serves as the foundation for the social/collaboration features of the application.

```tsx
/* app/community/page.js */
export default function CommunityPage() {
  return <h1>Community Page</h1>
}
```

#### 97.2.2 create `/meals/[mealSlug]` route:

**Subsection Summary**
Implements a dynamic route segment using `[mealSlug]`. This allows the application to respond to any URL under `/meals/` that doesn't match a static route, passing the segment as a parameter to the component.

```tsx
/* app/meals/[mealSlug]/page.js */
// localhost:3000/meals/some-meals
export default function MealDetailsPage() {
  return <h1>Meal Details</h1>
}
```

#### 97.2.3 create `/meals/share` route:

**Subsection Summary**
Creates a nested static route `/meals/share` within the `meals` directory. This demonstrates how to organize feature-specific sub-routes.

```tsx
/* app/meals/share/page.js */
export default function ShareMealPage() {
  return <h1>Share Meal</h1>
}
```

#### 97.2.4 Create `/meals` route:

**Subsection Summary**
Sets up the main `/meals` landing page. This will eventually act as the hub for browsing all available food entries.

```tsx
/* app/meals/page.js */
export default function MealsPage(){
  return <h1>Meals Page</h1>
}
```

#### 97.2.5 Create `/app` route:

**Subsection Summary**
Links the root landing page to the new routes using the Next.js `Link` component. Linking is crucial for enabling smooth client-side transitions instead of full-page reloads.

```tsx
/* app/page.js */
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/meals/share">Share Meal</Link></p>
      <p><Link href="/community">Community</Link></p>
    </main>
  );
}
```

![Landing Page Linking](../img/section03-lecture097-001.png)

### 🧱 97.3 Pending Fixes (TODO)

- [ ] Replace placeholder `<h1>` tags with actual functional components and UI for all routes.
- [ ] Implement data fetching logic for `[mealSlug]` to display real meal details.
- [ ] Add specific CSS modules or Tailwind classes to new pages.
- [ ] Configure `generateMetadata` for dynamic routes to improve SEO.
- [ ] Address **Placeholder Content**: All new route components (`page.js`) currently only contain placeholder `<h1>` elements.
- [ ] Address **Missing Styling**: Newly created pages lack specific styling beyond global defaults.
- [ ] Address **Incomplete Dynamic Metadata**: Dynamic routes like `[mealSlug]` will need metadata for SEO purposes.

<br>

## 🔧 98. Lesson 098 — *Revisiting: The Concept Of Layouts*

- [Lecture 098: Revisiting: The Concept Of Layouts](#-98-lesson-098--revisiting-the-concept-of-layouts)
    - [98.1 Context](#981-context)
    - [98.2 Updating code according the context](#982-updating-code-according-the-context)
        - [98.2.1 Adding a `Layout` in `meals/` folder](#9821-adding-a-layout-in-meals-folder)
    - [98.3 Pending Fixes (TODO)](#983-pending-fixes-todo)

### 🧠 98.1 Context:

In Next.js App Router, **Layouts** are special React components that wrap route segments and persist across navigation. Unlike pages, layouts preserve their state and don't re-render when navigating between child routes. A `layout.js` file must export a default component that accepts a `children` prop, which represents the nested route segments.

**When layouts are used:**
- **Root Layout** (`app/layout.js`): Required for every Next.js app. Wraps all routes and typically includes `<html>` and `<body>` tags, global styles, metadata, and shared UI elements like headers or navigation.
- **Nested Layouts**: Created in route folders (e.g., `app/meals/layout.js`) to wrap specific route segments. They apply only to routes within that folder and its subfolders.
- **Shared UI**: When you need consistent navigation bars, sidebars, or section-specific headers that persist across multiple pages.
- **State Preservation**: When you want to maintain component state (like open menus or scroll positions) during client-side navigation.

**Examples from the project:**
- `app/layout.js`: Root layout that wraps the entire application, includes global CSS imports, metadata, and a decorative SVG header background.
- `app/meals/layout.js`: Nested layout that wraps all meals-related routes (`/meals`, `/meals/share`, `/meals/[mealSlug]`), displaying a "🧇 Meals Layout" indicator that appears on all meals pages.

**Advantages:**
- **Code Reusability**: Shared UI elements (headers, navigation, sidebars) are defined once and reused across multiple pages.
- **Performance**: Layouts don't re-render on navigation, reducing unnecessary work and improving perceived performance.
- **State Preservation**: Component state in layouts persists during client-side navigation, improving user experience.
- **Nested Structure**: Multiple layouts can be nested, allowing for hierarchical UI organization (root → section → subsection).
- **Automatic Wrapping**: Next.js automatically wraps route segments with their parent layouts, following the folder structure.

**Disadvantages:**
- **Strict Naming**: Must be named exactly `layout.js` (case-sensitive), which can be restrictive.
- **Nested Behavior**: Can be confusing when multiple nested layouts exist, as they all render simultaneously.
- **Limited Flexibility**: All routes in a segment inherit the layout, making it difficult to have exceptions without restructuring folders.
- **State Management**: Shared state in layouts can lead to unexpected behavior if not carefully managed.

**When to consider alternatives:**
- **Client Components**: If you need interactivity (event handlers, state, effects), layouts must be Client Components (`'use client'`), which can impact performance.
- **Template Components**: Use `template.js` instead of `layout.js` if you want the component to re-render on every navigation (useful for animations or analytics).
- **Route Groups**: Use route groups (`(folderName)`) to organize routes without affecting the URL structure when you need different layouts for different route sets.

**Layout Hierarchy:**
In this project, the layout hierarchy is:
1. `app/layout.js` (Root Layout) → wraps everything
2. `app/meals/layout.js` (Meals Layout) → wraps only `/meals/*` routes

When visiting `/meals/share`, both layouts render: Root Layout → Meals Layout → ShareMealPage component.

### ⚙️ 98.2 Updating code according the context:

**Summary**
This section demonstrates the implementation of nested layouts in Next.js by creating a section-specific layout for the meals routes. The `MealsLayout` component wraps all routes under `/meals`, providing a consistent UI wrapper that persists across navigation between meals-related pages. This showcases how layouts can be nested hierarchically and how they automatically apply to all child routes within their directory.

#### 98.2.1 Adding a `Layout` in `meals/` folder:

**Subsection Summary**
Creates a nested layout component specifically for the meals section. This layout wraps all routes under `/meals` (including `/meals`, `/meals/share`, and `/meals/[mealSlug]`), displaying a visual indicator ("🧇 Meals Layout") that appears on all meals-related pages. The layout receives `children` as a prop, which represents the nested page components that will be rendered inside it.
```tsx
/* app/meals/layout.js */
export default function MealsLayout({ children }){
  return (
    <>
      <p>🧇 Meals Layout</p>
      { children }
    </>
  )
}
```

```
03-onwards-foodies-starting-project/
├── app
│   ├── community
│   │   └── page.js                # Community page displaying social features
│   ├── meals
│   │   ├── [mealSlug]
│   │   │   └── page.js            # Dynamic route for specific meal details
│   │   ├── share
│   │   │   └── page.js            # Page for users to share their own meals
│   │   ├── layout.js              # 👈🏽 ✅ Meals layout wrapping all Meals pages
│   │   └── page.js                # Main meals list page (all meals)
│   ├── globals.css                # Global CSS styles and Tailwind imports
│   ├── icon.png                   # Main application favicon/icon
│   ├── layout.js                  # Root layout wrapping all pages
│   └── page.js                    # Home/Landing page of the application
├── assets
│   ├── icons                      # UI icons (community.png, events.png, etc.)
│   └── images                     # Original food images and brand assets
├── docs                           # Documentation and lesson notes
├── public
│   └── images                     # Static food images served via /images URL
├── .eslintrc.json                 # Linting rules for code quality
├── .gitignore                     # Files and folders ignored by Git
├── jsconfig.json                  # JS configuration for path aliases (@/...)
├── next.config.js                 # Next.js specific settings
├── package.json                   # Project dependencies (Next.js, React)
└── README.md                      # Project documentation
```

![Meals Layout only](../img/sectio03-lecture098-001.png)

### 🧱 98.3 Pending Fixes (TODO)

- [ ] Replace placeholder paragraph in `MealsLayout` with meaningful UI structure (e.g., section header, navigation, or breadcrumbs).
- [ ] Add TailwindCSS classes or CSS modules to style the `MealsLayout` component consistently with the application design.
- [ ] Wrap layout content in semantic HTML elements (`<main>`, `<section>`, or `<nav>`) instead of fragments for better accessibility.
- [ ] Consider adding a shared header or navigation component specific to the meals section within the layout.
- [ ] Add proper spacing and layout structure to ensure child pages render correctly within the layout container.
- [ ] Address **Placeholder Layout Content**: The `MealsLayout` component (`app/meals/layout.js`) only contains a placeholder paragraph tag with an emoji. It lacks meaningful structure, styling, or functional purpose.
- [ ] Address **Missing Layout Styling**: The layout component has no CSS classes or styling applied. It should integrate with the application's design system (TailwindCSS) for consistent appearance.
- [ ] Address **No Semantic HTML Structure**: The layout uses a fragment (`<>...</>`) instead of semantic HTML elements like `<main>`, `<section>`, or `<nav>` that would improve accessibility and SEO.
- [ ] Address **Layout Not Client Component**: If the layout needs interactivity in the future (state, event handlers), it will need to be converted to a Client Component with `'use client'` directive. Currently, it's a Server Component, which is fine for static content.



<br>

## 🔧 99. Lesson 099 — *Adding a Custom Component To A Layout*

- [Lecture 099: Adding a Custom Component To A Layout](#-99-lesson-099--adding-a-custom-component-to-a-layout)
    - [99.1 Context](#991-context)
    - [99.2 Updating code according the context](#992-updating-code-according-the-context)
        - [99.2.1 Adding `main-header.js` file](#9921-adding-main-headerjs-file)
        - [99.2.2 Adding the `main-header.js` reference in `layout.js` file](#9922-adding-the-main-headerjs-reference-in-layoutjs-file)
    - [99.3 Pending Fixes (TODO)](#993-pending-fixes-todo)

### 🧠 99.1 Context:

In Next.js, **custom components** are reusable React components that can be imported and used within layouts, pages, or other components. When added to a layout, these components become part of the shared UI that persists across all routes wrapped by that layout. This pattern promotes code reusability, maintainability, and separation of concerns.

**When custom components in layouts are used:**
- **Shared UI Elements**: When you need consistent headers, navigation bars, footers, or sidebars that appear on multiple pages.
- **Code Organization**: To break down complex layouts into smaller, manageable, and testable pieces.
- **Reusability**: When the same component needs to be used across different layouts or pages.
- **Separation of Concerns**: To keep layout files clean and focused, delegating specific UI responsibilities to dedicated components.

**Examples from the project:**
- `app/components/main-header.js`: A custom header component that includes the application logo, branding, and main navigation links. This component is imported and used in the root layout (`app/layout.js`), making it visible on every page of the application.
- The `MainHeader` component encapsulates all header-related logic and markup, keeping the root layout clean and focused on its primary responsibility of wrapping the application structure.

**Advantages:**
- **Modularity**: Components can be developed, tested, and maintained independently.
- **Reusability**: Once created, components can be imported and used in multiple places without code duplication.
- **Maintainability**: Changes to shared UI elements only need to be made in one place, reducing the risk of inconsistencies.
- **Readability**: Layout files remain clean and easy to understand when complex UI is extracted into named components.
- **Testability**: Individual components can be unit tested in isolation.
- **Performance**: Next.js can optimize component rendering independently, and components can be lazy-loaded if needed.

**Disadvantages:**
- **File Organization**: Requires careful planning of component structure and folder organization to avoid confusion.
- **Import Overhead**: Additional import statements are needed, though this is minimal.
- **Prop Drilling**: If components need shared data, you may need to pass props through multiple component layers or use context.
- **Component Coupling**: Over-extraction can lead to tightly coupled components that are difficult to modify independently.

**When to consider alternatives:**
- **Client Components**: If the component needs interactivity (state, event handlers, browser APIs), it must be marked with `'use client'`, which can impact performance.
- **Server Components**: By default, components are Server Components, which is ideal for static content and better performance. Only convert to Client Components when necessary.
- **Layout-specific Components**: For components that are only used in one layout, consider keeping them co-located with that layout rather than in a global components folder.
- **Third-party Libraries**: For complex UI elements (modals, dropdowns, etc.), consider using established component libraries instead of building from scratch.

**Image Import Pattern:**
When importing images in Next.js, the import returns an object with properties like `src`, `width`, `height`, and `blurDataURL`. Using `logoImg.src` accesses the optimized image path that Next.js generates. This pattern enables automatic image optimization, lazy loading, and responsive image generation.

### ⚙️ 99.2 Updating code according the context:

**Summary**
This section demonstrates how to create and integrate a custom reusable component (`MainHeader`) into a Next.js layout. The process involves creating a dedicated component file that encapsulates header functionality (logo, branding, navigation), then importing and rendering it within the root layout. This pattern allows the header to persist across all pages while keeping the layout code clean and maintainable. The lesson also covers Next.js image import patterns and how to properly reference imported images.

#### 99.2.1 Adding `main-header.js` file:

**Subsection Summary**
Creates a new reusable header component (`MainHeader`) that encapsulates the application's header structure, including the logo, branding text, and main navigation links. The component uses Next.js `Link` components for client-side navigation and demonstrates the pattern of importing static images from the assets folder. The component is designed to be imported and used in layouts, making it available across all pages.
```tsx
/* app/components/main-header.js */
import Link from "next/link";
import logoImg from '@/assets/logo.png';

export default function MainHeader(){
  return <header>
    <Link href="/">
      <img src={logoImg.src} alt="A plate with food on it" />
      NextLevel Food
    </Link>
    <nav>
      <li>
        <Link href="/meals">Browse Meals</Link>
      </li>
      <li>
        <Link href="/community">Foodies Community</Link>
      </li>
    </nav>
  </header>
}
```

* Why `logoImg.src`?

When importing images in Next.js using `import logoImg from '@/assets/logo.png'`, Next.js returns an object (not a string URL) that contains optimized image metadata. The `src` property contains the actual URL path to the optimized image that Next.js generates. This enables automatic image optimization, lazy loading, and responsive image generation. Using `logoImg.src` instead of a direct string path ensures you're using Next.js's optimized image handling.

```js
{
  src: "/_next/static/media/logo.abc123.png",
  height: 200,
  width: 200,
  blurDataURL: "data:image/..."
}
```

#### 99.2.2 Adding the `main-header.js` reference in `layout.js` file:

**Subsection Summary**
Integrates the `MainHeader` component into the root layout by importing it and rendering it within the layout's JSX structure. This makes the header component visible on every page of the application since the root layout wraps all routes. The component is placed after the decorative SVG background and before the `{children}` prop, ensuring it appears at the top of every page while maintaining the layout hierarchy.
```tsx
/* app/layout.js */
import './globals.css';
import MainHeader from './components/main-header';    // 👈🏽 ✅

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="header-background">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: '#59453c', stopOpacity: '1' }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: '#8f3a09', stopOpacity: '1' }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <MainHeader />    {/* 👈🏽 ✅ */}
        {children}
      </body>
    </html>
  );
}
```

![app vision](../img/section03-lecture099-001.png)

### 🧱 99.3 Pending Fixes (TODO)

- [ ] Fix HTML semantics in `MainHeader` component: Wrap `<li>` elements in a `<ul>` container within the `<nav>` element (`app/components/main-header.js`, lines 10-17).
- [ ] Add TailwindCSS classes or CSS modules to style the `MainHeader` component, including proper layout, spacing, and visual design for the header, logo, and navigation links.
- [ ] Improve accessibility of the logo link by adding `aria-label` attribute and restructuring the link content to be more semantic (`app/components/main-header.js`, lines 6-9).
- [ ] Add proper semantic structure to navigation: Ensure `<nav>` contains `<ul>` with `<li>` items, and add `aria-label` to the navigation element for screen readers.
- [ ] Consider replacing `<img>` with Next.js `<Image>` component from `next/image` for better image optimization, lazy loading, and responsive image handling.
- [ ] Add keyboard event handlers (`onKeyDown`) to navigation links if custom keyboard navigation behavior is needed beyond default Next.js `Link` functionality.
- [ ] Add active state styling and `aria-current` attribute to navigation links to indicate the current page for better accessibility and UX.
- [ ] Address **Invalid HTML Structure in Navigation**: In `app/components/main-header.js` (lines 10-17), `<li>` elements are used directly inside `<nav>` without a parent `<ul>` or `<ol>` element. This violates HTML semantics and accessibility standards. Navigation lists should be wrapped in a proper list container.
- [ ] Address **Missing Styling and CSS Classes**: The `MainHeader` component (`app/components/main-header.js`) has no CSS classes or styling applied. The header, logo link, and navigation elements lack visual styling and layout structure, making them appear unstyled in the browser.
- [ ] Address **Accessibility Concerns with Logo Link**: The logo link in `app/components/main-header.js` (lines 6-9) wraps both an `<img>` and text content. This can cause accessibility issues with screen readers and keyboard navigation. The link should have proper `aria-label` attributes and the text should be structured more semantically.
- [ ] Address **Missing Semantic Navigation Structure**: The navigation in `MainHeader` lacks proper semantic structure. The `<nav>` element should contain a `<ul>` wrapping the `<li>` items, and navigation links should have proper accessibility attributes like `aria-label` or `aria-current` for active states.
- [ ] Address **No Keyboard Navigation Support**: The header component doesn't implement keyboard event handlers (`onKeyDown`) for accessibility. While Next.js `Link` components support keyboard navigation by default, custom event handlers could enhance the user experience for keyboard users.
- [ ] Address **Image Optimization Not Utilized**: The component uses `<img>` tag instead of Next.js's optimized `<Image>` component from `next/image`. While `logoImg.src` provides some optimization, using the `Image` component would provide better performance, lazy loading, and responsive image handling.


<br>

## 🔧 100. Lesson 100 — *Styling NextJS Project: Your Options & Using CSS Modules*

- [Lecture 100: Styling NextJS Project: Your Options & Using CSS Modules](#-100-lesson-100--styling-nextjs-project-your-options--using-css-modules)
    - [100.1 Context](#1001-context)
    - [100.2 Updating code according the context](#1002-updating-code-according-the-context)
        - [100.2.1 Creating `main-header.module.css` file](#10021-creating-main-headermodulecss-file)
        - [100.2.2 Importing and using `main-header.module.css` file inside `main-header.js` file](#10022-importing-and-using-main-headermodulecss-file-inside-main-headerjs-file)
    - [100.3 Pending Fixes (TODO)](#1003-pending-fixes-todo)

### 🧠 100.1 Context:

**CSS Modules** are a CSS file format that automatically generates unique class names scoped to a specific component, preventing style conflicts and ensuring styles only apply where intended. In Next.js, CSS Modules are created by naming CSS files with the `.module.css` extension (e.g., `component.module.css`). When imported, they return an object mapping original class names to generated, scoped class names.

**When CSS Modules are used:**
- **Component-scoped styling**: When you need styles that belong to a specific component and shouldn't leak to other components.
- **Avoiding naming conflicts**: In large applications where multiple developers might use similar class names like `.button` or `.header`.
- **Maintainability**: When you want styles co-located with components for easier maintenance and refactoring.
- **Scoped styling without build tools**: CSS Modules provide scoping out of the box without needing additional CSS-in-JS libraries or complex build configurations.

**Styling options in Next.js:**
1. **Global CSS** (`globals.css`): Applied globally across the entire application. Best for base styles, resets, typography, and shared utilities.
2. **CSS Modules** (`.module.css`): Scoped to individual components. Best for component-specific styles that shouldn't affect other parts of the application.
3. **TailwindCSS**: Utility-first CSS framework. Best for rapid UI development with pre-built utility classes.
4. **Styled Components / CSS-in-JS**: Runtime CSS-in-JavaScript solutions. Best for dynamic styling based on props or state.
5. **Sass/SCSS**: CSS preprocessor with variables, nesting, and mixins. Can be used as global CSS or CSS Modules (`.module.scss`).

**Examples from the project:**
- `app/globals.css`: Global stylesheet imported in the root layout (`app/layout.js`). Contains base styles, font imports, body background, and utility classes like `.not-found` and `.error`.
- `app/components/main-header.module.css`: CSS Module file scoped to the `MainHeader` component. Contains styles for `.header`, `.logo`, `.nav`, and `.active` classes that only apply to the header component.
- The `MainHeader` component imports the CSS Module as `classes` and applies scoped class names using `className={classes.header}`, `className={classes.logo}`, etc.

**Advantages:**
- **Style Encapsulation**: Styles are automatically scoped to the component, preventing unintended style leakage and conflicts.
- **No Naming Conflicts**: Generated unique class names eliminate the need for BEM or other naming conventions to avoid collisions.
- **Co-location**: CSS files can be placed next to component files, improving code organization and maintainability.
- **Standard CSS Syntax**: Uses regular CSS (or SCSS/Sass), making it easy for developers familiar with CSS.
- **Build-time Optimization**: Next.js automatically optimizes and minifies CSS Modules during the build process.
- **Type Safety**: When using TypeScript, CSS Modules can provide type definitions for class names.

**Disadvantages:**
- **No Dynamic Styles**: CSS Modules don't support dynamic styling based on props or state without additional JavaScript logic.
- **Limited Runtime Flexibility**: Unlike CSS-in-JS solutions, you can't generate styles at runtime based on component props.
- **Class Name Obfuscation**: Generated class names are hashed (e.g., `header_abc123`), making debugging slightly more difficult.
- **No Shared Styles**: Each component needs its own CSS Module file, which can lead to code duplication for shared styles (though global CSS can complement this).
- **Learning Curve**: Developers need to understand the import pattern (`import classes from './file.module.css'`) and how to reference classes.

**When to consider alternatives:**
- **Global CSS**: Use for base styles, resets, typography, and application-wide utilities that should apply everywhere.
- **TailwindCSS**: Consider when you want rapid UI development with utility classes and don't need component-scoped styles.
- **CSS-in-JS (Styled Components)**: Use when you need dynamic styles based on props, state, or theme values that change at runtime.
- **Sass/SCSS**: Use when you need CSS preprocessor features (variables, nesting, mixins) while maintaining CSS Module scoping (`.module.scss`).

**CSS Module Import Pattern:**
When importing a CSS Module in Next.js, the import returns an object where keys are the original class names and values are the generated, scoped class names:
```javascript
import classes from './main-header.module.css';
// classes = { header: 'main-header_header_abc123', logo: 'main-header_logo_def456', ... }
```

### ⚙️ 100.2 Updating code according the context:

**Summary**
This section demonstrates how to style a Next.js component using CSS Modules. The process involves creating a CSS Module file (`main-header.module.css`) with component-specific styles, then importing and applying those styles to the `MainHeader` component using the `className` prop. This approach provides scoped styling that prevents style conflicts while maintaining clean, maintainable code organization. The lesson covers responsive design with media queries, hover/active states, and proper CSS Module import patterns.

#### 100.2.1 Creating `main-header.module.css` file:

[main-header.module.css](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/components/main-header/main-header.module.css)

**Subsection Summary**
Creates a CSS Module file specifically for the `MainHeader` component. The stylesheet defines scoped styles for the header container (flexbox layout with responsive padding), navigation (flex list with gap spacing), navigation links (hover/active states with gradient text effects), logo link (flex layout with typography), and an unused `.active` class for future active state implementation. The CSS includes responsive design via media queries and modern CSS features like `background-clip` for gradient text effects.
```css
/* app/components/main-header.module.css */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
}

@media (min-width: 768px) {
  .header {
    padding: 2rem 10%;
  }
}

.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.5rem;
  /* font-family: 'Montserrat', sans-serif; */
  font-size: 1.25rem;
}

.nav a {
  text-decoration: none;
  color: #ddd6cb;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.nav a:hover,
.nav a:active {
  background: linear-gradient(90deg, #ff8a05, #f9b331);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 18px rgba(248, 190, 42, 0.8);
}

.active {
  background: linear-gradient(90deg, #ff8a05, #f9b331);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-decoration: none;
  color: #ddd6cb;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-size: 1.5rem;
}

.logo img {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
}
```

#### 100.2.2 Importing and using `main-header.module.css` file inside `main-header.js` file:

**Subsection Summary**
Demonstrates the CSS Module import pattern and application in the React component. The CSS Module is imported as `classes`, which provides an object mapping original class names to scoped, generated class names. These scoped classes are then applied to JSX elements using the `className` prop (`classes.header`, `classes.logo`, `classes.nav`). This ensures that styles from the CSS Module only apply to this component and won't conflict with styles from other components.

```tsx
/* app/components/main-header.js */
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';   // 👈🏽 ✅

export default function MainHeader(){
  return <header className={classes.header}>      {/* 👈🏽 ✅ */}
    <Link className={classes.logo} href="/">      {/* 👈🏽 ✅ */}
      <img src={logoImg.src} alt="A plate with food on it" />
      NextLevel Food
    </Link>
    <nav className={classes.nav}>      {/* 👈🏽 ✅ */}
      <ul>
        <li>
          <Link href="/meals">Browse Meals</Link>
        </li>
        <li>
          <Link href="/community">Foodies Community</Link>
        </li>
      </ul>
    </nav>
  </header>
}
```

![using module.css for main-header component](../img/section03-lecture100-001.png)

### 🧱 100.3 Pending Fixes (TODO)

- [ ] Implement active state logic in `MainHeader` component: Use Next.js `usePathname()` hook (requires `'use client'`) or compare `href` prop with current route to conditionally apply `classes.active` to navigation links (`app/components/main-header.js`).
- [ ] Add `:focus` pseudo-class styles to `.nav a` selector in `main-header.module.css` for keyboard navigation accessibility. Include visible focus indicators (e.g., outline or box-shadow) that meet WCAG accessibility standards.
- [ ] Remove unused `.active` class from CSS Module or implement its usage. If keeping it, ensure it's properly applied via JavaScript logic; otherwise, remove it to reduce dead code.
- [ ] Resolve commented-out font-family declaration: Either uncomment and use it if intended, or remove the comment if the font choice is finalized. Consider if Montserrat should be applied to navigation or if Quicksand (from globals.css) is sufficient.
- [ ] Add mobile-responsive navigation: Implement a hamburger menu or collapsible navigation for small screens. This may require converting `MainHeader` to a Client Component and adding state management for mobile menu visibility.
- [ ] Consider adding explicit CSS classes to navigation `<Link>` components if more granular styling control is needed, or document that `.nav a` selector is intentionally used for all navigation links.
- [ ] Add `aria-current="page"` attribute to active navigation links for better screen reader support when active state logic is implemented.
- [ ] Address **Unused `.active` CSS Class**: The `.active` class is defined in `app/components/main-header.module.css` (lines 41-45) but is never applied to any element in `app/components/main-header.js`. This class appears intended for active navigation state but lacks implementation logic.
- [ ] Address **Missing Active State Logic**: Navigation links in `MainHeader` component don't have active state detection or styling. The component doesn't check the current route to apply the `.active` class, so users can't visually identify which page they're currently viewing.
- [ ] Address **Missing Focus States for Accessibility**: Navigation links in `app/components/main-header.module.css` have `:hover` and `:active` states but lack `:focus` states for keyboard navigation. This creates accessibility issues for users navigating with keyboard or screen readers.
- [ ] Address **Commented Out Font Family**: Line 20 in `main-header.module.css` contains a commented-out `font-family: 'Montserrat', sans-serif;` declaration. This suggests uncertainty about typography choices or incomplete styling decisions.
- [ ] Address **No Mobile Navigation Handling**: The CSS Module includes responsive padding via media queries but doesn't address mobile navigation patterns (e.g., hamburger menu, collapsible navigation). The navigation may overflow or become cramped on small screens.
- [ ] Address **Missing Link Styling in Navigation**: Navigation links (`<Link>` components) inside `<li>` elements don't have explicit CSS classes applied. They inherit styles from `.nav a` selector, but this creates tight coupling between CSS structure and HTML structure, making it harder to style links differently if needed.



<br>

## 🔧 101. Lesson 101 — *Optimizing Images with the NextJS Image Component*

- [Lecture 101: Optimizing Images with the NextJS Image Component](#-101-lesson-101--optimizing-images-with-the-nextjs-image-component)
    - [101.1 Context](#1011-context)
    - [101.2 Updating code according the context](#1012-updating-code-according-the-context)
        - [101.2.1 Upgrade the logo from `<img>` to `<Image>`](#10121-upgrade-the-logo-from-img-to-image)
        - [101.2.2 Adding `priority` to `<Image>` next component](#10122-adding-priority-to-image-next-component)
        - [101.2.3 Benefits using `<Image>` next built-in component](#10123-benefits-using-image-next-built-in-component)
    - [101.3 Pending Fixes (TODO)](#1013-pending-fixes-todo)

### 🧠 101.1 Context:

The **Next.js Image component** (`next/image`) is an extension of the HTML `<img>` element, evolved for the modern web. It includes various built-in performance optimizations to help you achieve good Core Web Vitals. These scores are a key measurement of user experience on your website, and are factored into Google's search rankings.

**When to use:**
- Always use `<Image>` instead of standard `<img>` tags for UI elements and content images within a Next.js application.
- Use the `priority` prop for any image that is the Largest Contentful Paint (LCP) element or visible "above the fold" to ensure it preloads.

**Examples from the project:**
- `app/components/main-header.js`: The application logo is implemented using the `<Image>` component. Since it is part of the header and always visible at the top of the page, the `priority` prop is applied to optimize initial load and remove browser warnings.

**Advantages:**
- **Improved Performance:** Automatically serves correctly sized images for each device using modern formats like WebP and AVIF.
- **Visual Stability:** Automatically prevents Layout Shift (CLS) by requiring dimensions or using `fill` mode.
- **Faster Page Loads:** Images are lazy-loaded by default as they enter the viewport, reducing initial load weight.
- **Asset Flexibility:** Features on-demand image resizing, even for images hosted on remote servers.

**Disadvantages:**
- **Complexity with Remote Images:** Requires explicit domain/pattern configuration in `next.config.js` for external sources.
- **Strict Sizing:** Requires developers to be more explicit about image dimensions compared to standard `<img>` tags.

**Alternatives:**
- Standard `<img>` tag: Useful for cases where you need absolute control over the element without Next.js interventions, or for non-web environments (like generated emails).
- External Optimization Services: Services like Cloudinary or Imgix if you prefer to offload optimization entirely from the Next.js server.


### ⚙️ 101.2 Updating code according the context:

**Summary**
This section demonstrates the transition from standard HTML `<img>` tags to the optimized Next.js `<Image>` component. It focuses on implementing this change in the `MainHeader` component for the application logo. The lesson covers importing the component, updating the JSX structure, and resolving performance warnings by utilizing the `priority` attribute for critical above-the-fold content.

Previous the changing:
![without using the Image next component](../img/section03-lecture101-001.png)

> Attributes:
* src
* alt

#### 101.2.1 Upgrade the logo from `<img>` to `<Image>`:

[Image Component](https://nextjs.org/docs/app/api-reference/components/image)

**Subsection Summary**
Replaces the standard `<img>` tag with the Next.js `<Image>` component in the `MainHeader`. This update enables automatic image optimization, properly sized assets, and prevents layout shifts, ensuring a more stable and faster user experience.
```tsx
/* app/components/main-header.js */
import Link from "next/link";
import Image from "next/image";   // 👈🏽 ✅

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader(){
  return <header className={classes.header}>
    <Link className={classes.logo} href="/">
      <Image src={logoImg} alt="A plate with food on it" />   {/* 👈🏽 ✅ */}
      NextLevel Food
    </Link>
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/meals">Browse Meals</Link>
        </li>
        <li>
          <Link href="/community">Foodies Community</Link>
        </li>
      </ul>
    </nav>
  </header>
}
```

![using Image next component](../img/section03-lecture101-002.png)

> Attributes:
* alt
* fetchPriority
* width
* height
* decoding
* data-nimg
* style
* srcset
* src

#### 101.2.2 Adding `priority` to `<Image>` next component:

**Subsection Summary**
Applies the `priority` attribute to the logo image. This instructs the browser to preload the image as it's identified as a critical asset for the initial page render (above the fold), effectively improving the LCP (Largest Contentful Paint) metric.

Due to this issue:

![priority issue in Image next component](../img/section03-lecture101-003.png)

```tsx
/* app/components/main-header.js */
import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader(){
  return <header className={classes.header}>
    <Link className={classes.logo} href="/">
      <Image src={logoImg} alt="A plate with food on it" priority/>  {/* 👈🏽 ✅ */}
      NextLevel Food
    </Link>
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/meals">Browse Meals</Link>
        </li>
        <li>
          <Link href="/community">Foodies Community</Link>
        </li>
      </ul>
    </nav>
  </header>
}
```


#### 101.2.3 Benefits using `<Image>` next built-in component:

**Subsection Summary**
Highlights the technical benefits of using the Next.js `Image` component over standard tags. Key advantages include automatic WebP conversion, built-in lazy loading for off-screen images, and the generation of multiple `srcset` variants for different screen resolutions.

![benefits - Image next built-in component](../img/section03-lecture101-004.png)

### 🧱 101.3 Pending Fixes (TODO)

- [ ] Optimize `app/icon.png` to a standard favicon size (e.g., 32x32 or 512x512) and reduce file size.
- [ ] Create a reusable `MealImage` component that handles consistent `alt` text and placeholder logic for meal listings.
- [ ] Add `remotePatterns` to `next.config.js` once external image sources are identified.
- [ ] Audit `app/meals/page.js` and `app/community/page.js` to ensure standard `<img>` tags aren't introduced as those pages are built out.
- [ ] Address **Large Favicon Asset**: The `app/icon.png` file is 1.3 MB, which is excessively large for a favicon and can impact build performance and metadata generation.
- [ ] Address **Inconsistent Alt Text**: There is currently no standardized approach for `alt` text across the application, which could lead to accessibility gaps as more images are added.
- [ ] Address **Remote Image Limitation**: Future images fetched from external databases will require specific configuration in `next.config.js` to work with the `<Image>` component.


<br>

## 🔧 102. Lesson 102 — *Using More Custom Components*

- [Lecture 102: Using More Custom Components](#-102-lesson-102--using-more-custom-components)
    - [102.1 Context](#1021-context)
    - [102.2 Updating code according the context](#1022-updating-code-according-the-context)
        - [102.2.1 create `main-header-background.js` file](#10221-create-main-header-backgroundjs-file)
        - [102.2.2 Import `main-header-background.js` component in `layout.js`](#10222-import-main-header-backgroundjs-component-in-layoutjs)
        - [102.2.3 Create a `module.css` for `main-header-background.js` component](#10223-create-a-modulecss-for-main-header-backgroundjs-component)
        - [102.2.4 update `main-header-background.js` component, importing its `module.css` file](#10224-update-main-header-backgroundjs-component-importing-its-modulecss-file)
        - [102.2.5 Import `main-header-background.js` component in `main-header.js` instead](#10225-import-main-header-backgroundjs-component-in-main-headerjs-instead)
        - [102.2.6 Create a new folder by `main.header`](#10226-create-a-new-folder-by-mainheader)
    - [102.3 Pending Fixes (TODO)](#1023-pending-fixes-todo)

### 🧠 102.1 Context:

**Custom components** in Next.js allow for modularizing complex UI elements into smaller, manageable pieces. This lesson focuses on refactoring the root layout by extracting a decorative SVG background into its own component and organizing header-related components into a dedicated directory.

**When to use:**
- **Refactoring**: When a layout or page becomes too cluttered with UI details that aren't core to its primary responsibility.
- **Organization**: When multiple components are tightly related (e.g., a header and its background) and should be grouped together.
- **Reusability**: When a UI element (like a specific background) might be needed in other parts of the application.

**Advantages:**
- **Enhanced Readability**: Layout files stay focused on structure rather than implementational details of specific UI elements.
- **Easier Maintenance**: Changing the background or header logic only requires visiting specific, small files.
- **Improved Scoping**: Using CSS Modules for extracted components prevents global style pollution.
- **Better Developer Experience**: Clear folder structures make it easier to find and manage related code.

**Disadvantages:**
- **Increased File Count**: Refactoring leads to more files, which can slightly increase complexity if not named and organized properly.
- **Prop/Style Complexity**: If extracted components need complex state or dynamic styles, managing them might require more boilerplate.

**Alternatives:**
- **Inline SVG/Styles**: Keep code in the layout if it's extremely simple and unlikely to change or be reused.
- **Global CSS**: Use global classes for backgrounds if they are truly universal and don't benefit from component scoping.

### ⚙️ 102.2 Updating code according the context:

**Summary**
This section details the refactoring of the application's header and background structure. The process involves extracting the decorative SVG background from `layout.js` into its own component (`MainHeaderBackground`), applying scoped styling via CSS Modules, and finally organizing all header-related components into a dedicated `main-header` folder for better project structure.

#### 102.2.1 create `main-header-background.js` file:

**Subsection Summary**
Extracts the complex SVG background markup from the root layout into a standalone functional component. This encapsulates the decorative logic and keeps the main layout file cleaner.

```tsx
/* app/components/main-header-background.js 👈🏽 ✅ */
export default function MainHeaderBackground() {
  return (
    // This code comes from app/layout.js
    <div className="header-background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#59453c", stopOpacity: "1" }} />
            <stop offset="100%" style={{ stopColor: "#8f3a09", stopOpacity: "1" }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
```

#### 102.2.2 Import `main-header-background.js` component in `layout.js`:

**Subsection Summary**
Updates the root layout to use the newly created background component. This simplifies the layout's JSX and delegates the background rendering to the specialized component.
```tsx
/* app/layout.js */
import './globals.css';
import MainHeader from './components/main-header';
import MainHeaderBackground from './components/main-header-background';   // 👈🏽 ✅

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />    {/* 👈🏽 ✅ */}
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
```

#### 102.2.3 Create a `module.css` for `main-header-background.js` component

**Subsection Summary**
Implements scoped styling for the background component using CSS Modules. This ensures that the background's absolute positioning and sizing don't interfere with other layout elements.
```tsx
/* app/components/main-header-background.module.css */
.header-background {
  position: absolute;
  width: 100%;
  height: 320px;
  top: 0;
  left: 0;
  z-index: -1;
}

.header-background svg {    // 👈🏽 ✅
  display: block;
  width: 100%;
  height: auto;
}

// this code comes from app/globals.css 👈🏽 ✅
```

#### 102.2.4 update `main-header-background.js` component, importing its `module.css` file:

**Subsection Summary**
Integrates the CSS Module into the background component. It demonstrates how to reference class names with hyphens using bracket notation (`classes["header-background"]`).
```tsx
/* app/components/main-header-background.js */
import classes from "./main-header-background.module.css";    // 👈🏽 ✅

export default function MainHeaderBackground() {
  return (
    <div className={classes["header-background"]}>    {/* 👈🏽 ✅ */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#59453c", stopOpacity: "1" }} />
            <stop offset="100%" style={{ stopColor: "#8f3a09", stopOpacity: "1" }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
```

#### 102.2.5 Import `main-header-background.js` component in `main-header.js` instead:

**Subsection Summary**
Further refines the architecture by moving the background component into the `MainHeader`. This makes sense semantically as the background is visually tied to the header, further simplifying the root layout.
```tsx
/* app/components/main-header.js */
import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";    // 👈🏽 ✅

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />    {/* 👈🏽 ✅ */}
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
```

meanwhile:

```tsx
/* app/layout.js */
import './globals.css';
import MainHeader from './components/main-header';
//import MainHeaderBackground from './components/main-header-background';   // 👈🏽 ✅

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <MainHeaderBackground /> 👈🏽 ✅ */}
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
```

#### 102.2.6 Create a new folder by `main.header`

**Subsection Summary**
Finalizes the project organization by grouping all header-related files (background, styles, and the main header component) into a single folder. This follows the best practice of co-locating related files.

```
app
├-- components
|    └-- main-header/
|         ├-- main-header.js
|         ├-- main-header.module.css
|         ├-- main-header-background.js
|         └-- main-header-background.module.css
....
```


### 🧱 102.3 Pending Fixes (TODO)

- [ ] Clean up `app/layout.js`: Remove the unused import of `MainHeaderBackground` and the commented-out component call.
- [ ] Audit `app/globals.css` to ensure no leftover styles from the SVG background remain now that they are in a CSS Module.
- [ ] Add `aria-hidden="true"` to the SVG in `MainHeaderBackground` as it is purely decorative.
- [ ] Address **Orphaned Imports in `layout.js`**: After moving `MainHeaderBackground` to `MainHeader`, the imports and commented-out code in `app/layout.js` (lines 3 and 14) are no longer needed and should be removed.
- [ ] Address **Inconsistent CSS Selectors**: `main-header-background.module.css` uses both a class selector and a nested tag selector (`.header-background svg`). While functional, it's slightly inconsistent with the pure class-based approach used elsewhere.

<br>

## 🔧 103. Lesson 103 — *Populating The Starting Page Content*

- [Lecture 103: Populating The Starting Page Content](#-103-lesson-103--populating-the-starting-page-content)
    - [103.1 Context](#1031-context)
    - [103.2 Updating code according the context](#1032-updating-code-according-the-context)
        - [103.2.1 Update `page.js` file](#10321-update-pagejs-file)
        - [103.2.2 Create `page.module.css` file](#10322-create-pagemodulecss-file)
        - [103.2.3 Import `page.module.css` in `page.js` file](#10323-import-pagemodulecss-in-pagejs-file)
    - [103.3 Pending Fixes (TODO)](#1033-pending-fixes-todo)

### 🧠 103.1 Context:

Next.js applications often require a dedicated **Home/Landing page** that serves as the entry point for users. This page typically includes a "Hero" section with a call to action (CTA) and descriptive sections explaining the application's value proposition.

**When to use:**
- To provide a high-level overview of the application.
- To guide users toward primary features (e.g., "Browse Meals", "Join Community").
- To establish the brand identity using gradients, typography, and visual assets.

**Advantages:**
- **Centralized Entry Point**: Consolidates the most important links and information.
- **Improved UX**: Clear CTAs help users understand what to do next.
- **SEO Optimization**: Landing pages are primary targets for search engines; proper headers and descriptions improve ranking.
- **Visual Appeal**: Using CSS Modules allows for complex, scoped designs without affecting other pages.

**Disadvantages:**
- **Content Maintenance**: Landing pages often require frequent updates to keep information fresh.
- **Performance Risks**: Large hero sections or slideshows can impact LCP (Largest Contentful Paint) if not optimized.

**Alternatives:**
- Using a redirect to a dashboard if the application is for logged-in users only.
- A minimal landing page if the product is simple and doesn't need extensive explanation.

### ⚙️ 103.2 Updating code according the context:

**Summary**
This section focuses on populating the application's landing page (`app/page.js`) with structured content and custom styles. It involves creating a layout with a hero section, a slideshow placeholder, and informative sections for users. The styling is managed through a dedicated CSS Module (`app/page.module.css`), ensuring that the landing page's unique design (like gradients and specific layouts) remains isolated from the rest of the application.

#### 103.2.1 Update `page.js` file:

**Subsection Summary**
Initializes the structure of the Home component using semantic HTML elements like `<header>` and `<main>`. It sets the foundation for a two-part layout: an introductory top section and a descriptive bottom section.
```tsx
/* app/page.js */
export default function Home() {
  return (
    <>
      <header></header>
      <main></main>
    </>
  );
}
```

#### 103.2.2 Create `page.module.css` file:

* [page.module.css](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/app/page.module.css)

* [page.js](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/app/page.js)

**Subsection Summary**
Defines the visual design for the landing page. It includes sophisticated CSS patterns such as flexbox for layout, linear gradients for text and buttons, and hover effects for interactivity. The styles are scoped to the page to prevent global conflicts.
```css
/* app/page.module.css */
.header {
  display: flex;
  gap: 3rem;
  margin: 3rem auto;
  width: 90%;
  max-width: 75rem;
}

.slideshow {
  width: 40rem;
  height: 25rem;
}

.hero {
  color: #ddd6cb;
  font-size: 1.5rem;
}

.hero h1 {
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  background: linear-gradient(90deg, #f9572a, #ffc905);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta {
  font-size: 1.5rem;
  display: flex;
  gap: 1rem;
}

.cta a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: linear-gradient(90deg, #f9572a, #ff9b05);
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
}

.cta a:hover,
.cta a:active {
  background: linear-gradient(90deg, #fd4715, #f9b241);
}

.cta a:first-child {
  background: transparent;
  font-weight: normal;
  color: #ff9b05;
  padding-left: 0;
}

.cta a:first-child:hover,
.cta a:first-child:active {
  background: transparent;
  color: #f9b241;
}

.section {
  display: flex;
  flex-direction: column;
  color: #ddd6cb;
  font-size: 1.5rem;
  max-width: 50rem;
  width: 90%;
  margin: 2rem auto;
  text-align: center;
}
```

#### 103.2.3 Import `page.module.css` in `page.js` file:

**Subsection Summary**
Integrates the styles into the Home component and populates it with links and text. It uses Next.js `Link` for efficient client-side navigation to the meals and community routes.
```tsx
/* app/page.js */
import Link from "next/link";
import classes from "./page.module.css";    // 👈🏽 ✅
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>....</div>

        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Tasrw & share food from all over the world</p>
          </div>

          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to
            discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to
            discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
      </main>
    </>
  );
}
```

![](../img/section03-lecture103-001.png)

### 🧱 103.3 Pending Fixes (TODO)

- [ ] Correct the typo "Tasrw" to "Taste" in `app/page.js` (line 12).
- [ ] Remove redundant paragraphs in the descriptive sections of `app/page.js`.
- [ ] Implement an `ImageSlideshow` component to replace the placeholder `....` in `app/page.js`.
- [ ] Add `aria-label` to the slideshow container for improved accessibility.
- [ ] Extract the landing page text into a configuration file or constants to facilitate future updates.
- [ ] Address **Typo in Hero Description**: In `app/page.js`, the word "Taste" is misspelled as "Tasrw".
- [ ] Address **Placeholder Slideshow**: The slideshow container in `app/page.js` contains a `....` placeholder instead of actual content or a component.
- [ ] Address **Redundant Paragraphs**: Both sections in `main` contain duplicate sentences ("NextLevel Food is a place to discover..."), making the content feel repetitive and unpolished.
- [ ] Address **Hardcoded Text**: All landing page content is hardcoded in the component, which may make future internationalization (i18n) or updates more difficult.



<br>

## 🔧 104. Lesson 104 — *Preparing an Image Slideshow*
- [Lecture 104: Preparing an Image Slideshow](#-104-lesson-104--preparing-an-image-slideshow)
    - [104.1 Context](#1041-context)
    - [104.2 Updating code according the context](#1042-updating-code-according-the-context)
        - [104.2.1 Create `components/images/image-slideshow.js` file](#10421-create-componentsimagesimage-slideshowjs-file)
        - [104.2.2 create its `module.css` file](#10422-create-its-modulecss-file)
        - [104.2.3 Import `image-slideshow.js` file in `page.js`](#10423-import-image-slideshowjs-file-in-pagejs)
        - [104.2.4. App crashes](#10424-app-crashes)
    - [104.3 Pending Fixes (TODO)](#1043-pending-fixes-todo)

### 🧠 104.1 Context:

An **Image Slideshow** in Next.js is a dynamic UI component that cycles through a set of images. It is commonly used in landing pages or hero sections to showcase multiple visual assets without taking up excessive vertical space. Implementing a slideshow often involves state management (to track the current image) and side effects (to handle the automatic rotation).

**When to use:**
- **Hero Sections**: To create an engaging and visually rich entry point for the application.
- **Product Showcases**: To display multiple views of a product or a gallery of items.
- **Dynamic Portfolios**: To highlight various projects or features.

**Advantages:**
- **Visual Engagement**: Movement catches the eye and keeps users interested.
- **Information Density**: Allows displaying multiple pieces of content in a single container.
- **Controlled Pacing**: Automatic transitions can guide the user's attention through important assets.

**Disadvantages:**
- **Performance Overhead**: Requires loading multiple images, which can impact LCP if not properly optimized with `next/image`.
- **User Control**: Automatic slideshows can sometimes be annoying if transitions are too fast or if no manual controls are provided.
- **Complexity**: Managing transitions, timers, and cleanups requires careful implementation of React hooks.

**When to consider alternatives:**
- **Static Hero Image**: If the application's core message can be conveyed with a single powerful image, a static hero is often better for performance and user focus.
- **Interactive Carousel**: If users need to browse at their own pace, a carousel with manual navigation (arrows, dots) is preferred over a purely automatic slideshow.

**Implementation with `setInterval`**:
In React, an automatic slideshow is typically implemented using `setInterval` within a `useEffect` hook. This ensures the timer starts when the component mounts and is cleaned up when it unmounts, preventing memory leaks and unexpected behavior.

### ⚙️ 104.2 Updating code according the context:

**Summary**
This section documents the implementation of an automated `ImageSlideshow` component. It covers the creation of the React component using `useEffect` and `useState` for image rotation, the application of sophisticated CSS transitions for smooth visual effects, and the integration of the slideshow into the application's landing page. Finally, it addresses the common "use client" error that occurs when using browser-only hooks in Server Components.

#### 104.2.1 Create `components/images/image-slideshow.js` file:

[image-slideshow.js](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/components/images/image-slideshow.js)

**Subsection Summary**
Defines the `ImageSlideshow` component logic. It manages an internal state `currentImageIndex` and uses a `useEffect` hook to set up a 5-second interval timer that cycles through a predefined array of imported images. Each image is rendered using the Next.js `Image` component.
```tsx
/* app/components/images/image-slideshow.js */
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './image-slideshow.module.css';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
```

#### 104.2.2 create its `module.css` file:

[image-slideshow.module.css](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/components/images/image-slideshow.module.css)

**Subsection Summary**
Implements the visual styling and animation logic for the slideshow. It uses `position: absolute` to stack images and combines `opacity` with `transform` (scale and rotation) to create a smooth, sophisticated transition effect when the `.active` class is applied.
```tsx
/* app/components/images/image-slideshow.module.css */
.slideshow {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}

.slideshow img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: scale(1.1) translateX(-1rem) rotate(-5deg);
  transition: all 0.5s ease-in-out;
}

.slideshow .active {
  z-index: 1;
  opacity: 1;
  transform: scale(1) translateX(0) rotate(0);
}
```


#### 104.2.3 Import `image-slideshow.js` file in `page.js`

**Subsection Summary**
Integrates the `ImageSlideshow` component into the landing page's hero section. It replaces the previous placeholder with the dynamic slideshow, enhancing the visual appeal of the home page.
```tsx
/* app/page.js */
import Link from "next/link";
import classes from "./page.module.css";

import ImageSlideshow from "./components/images/image-slideshow"; // 👈🏽 ✅

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />    {/* 👈🏽 ✅ */}
        </div>

        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Tasrw & share food from all over the world</p>
          </div>

          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to
            discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to
            discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
      </main>
    </>
  );
}
```

#### 104.2.4. App crashes:

**Subsection Summary**
Identifies a critical error where the application crashes because `ImageSlideshow` uses React hooks (`useState`, `useEffect`) but is rendered as a Server Component. This serves as a practical example of when the `"use client"` directive is required.

!["use client" issue](../img/section03-lecture104-001.png)


### 🧱 104.3 Pending Fixes (TODO)

- [ ] Add the `"use client"` directive at the top of `app/components/images/image-slideshow.js` to resolve the runtime crash.
- [ ] Implement manual navigation (Previous/Next buttons or indicator dots) to improve user control.
- [ ] Add `aria-live="polite"` or similar accessibility attributes to the slideshow container.
- [ ] Consider adding a "Pause on Hover" feature to the slideshow interval logic.
- [ ] Address **Missing "use client" Directive**: The `ImageSlideshow` component uses `useState` and `useEffect`, which are Client-only features. Without the `"use client"` directive at the top of the file, Next.js throws an error when trying to render the component.
- [ ] Address **Potential Memory Leaks**: The `useEffect` hook in `ImageSlideshow` correctly returns a cleanup function that calls `clearInterval(interval)`, preventing multiple timers from running if the component re-renders or unmounts.
- [ ] Address **Lack of Manual Controls**: The slideshow is purely automatic. Users cannot manually skip images or pause the rotation, which can be an accessibility and UX issue.
- [ ] Address **Inaccessible Images in Map**: While `alt` text is provided, the slideshow doesn't use `aria-live` or other roles to inform screen readers when the image changes automatically.



<br>

## 🔧 105. Lesson 105 — *React Server Components vs Client Components - When To Use What*

- [Lecture 105: React Server Components vs Client Components - When To Use What](#-105-lesson-105--react-server-components-vs-client-components---when-to-use-what)
    - [105.1 Context](#1051-context)
    - [105.2 Updating code according the context](#1052-updating-code-according-the-context)
        - [105.2.1 Comment `Imageslideshow` component and add a `console.log()` in `main-header.js` file](#10521-comment-imageslideshow-component-and-add-a-consolelog-in-main-headerjs-file)
        - [105.2.2 add `'use client'` at the beginning of the file `image-slideshow.js`](#10522-add-use-client-at-the-beginning-of-the-file-image-slideshowjs)
        - [105.2.3 and add a `console.log()` in `image-slideshow.js`](#10523-and-add-a-consolelog-in-image-slideshowjs)
        - [105.2.4 Uncomment `Imageslideshow` component in `app/page.js` file](#10524-uncomment-imageslideshow-component-in-apppagejs-file)
    - [105.3 Pending Fixes (TODO)](#1053-pending-fixes-todo)

### 🧠 105.1 Context:

**React Server Components (RSC)** are a new type of component in Next.js that render exclusively on the server. By default, all components in the Next.js App Router are Server Components. **Client Components**, on the other hand, are opted into using the `'use client'` directive and are rendered on the client (browser), although they are also pre-rendered on the server for initial load.

#### When and Why to use:
- **Server Components (Default)**: Used for the majority of the application. They are ideal for data fetching directly from the database or file system, keeping sensitive information (like API keys) secure on the server, and reducing the bundle size sent to the client.
- **Client Components**: Used only when interactivity is required. This includes using React hooks (`useState`, `useEffect`), browser-only APIs (like `localStorage` or `geolocation`), or event listeners (like `onClick`).

#### Examples from the project:
- `app/page.js`: A Server Component that renders the landing page structure.
- `app/components/images/image-slideshow.js`: A Client Component (marked with `'use client'`) because it uses `useState` and `useEffect` to manage the automatic image rotation.

#### Advantages & Disadvantages:
| Component Type | Advantages | Disadvantages |
| :--- | :--- | :--- |
| **Server** | Zero bundle size impact, direct backend access, better SEO/LCP. | No interactivity, no hooks, no browser APIs. |
| **Client** | Full interactivity, access to browser APIs, state management. | Larger bundle size, potentially slower initial TTI (Time to Interactive). |

#### Alternatives:
- If a component needs minimal interactivity, consider moving that interactivity to a smaller, nested Client Component while keeping the parent as a Server Component. This "leaf component" strategy minimizes the amount of JavaScript sent to the client.


### ⚙️ 105.2 Updating code according the context:

**Summary**
This section explores the practical differences between Server and Client Components by experimenting with `console.log` behavior and fixing runtime errors. It demonstrates that Server Components execute on the server (logs appear in the terminal), while Client Components execute in the browser (logs appear in the DevTools console). The lesson also reinforces when to use the `'use client'` directive to enable React hooks.

#### 105.2.1 Comment `Imageslideshow` component and add a `console.log()` in `main-header.js` file:

**Subsection Summary**
Demonstrates the execution environment of Server Components. By adding a `console.log` to `MainHeader` (a Server Component), we observe that the output appears in the server terminal, not the browser console. This confirms that the code is executing on the server side during the rendering process.
```tsx
/* app/page.js */
import Link from "next/link";
import classes from "./page.module.css";
//import ImageSlideshow from "./components/images/image-slideshow";   // 👈🏽 ✅
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          {/* <ImageSlideshow /> */}    {/* 👈🏽 ✅ */}
        </div>

        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Tasrw & share food from all over the world</p>
          </div>

          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to
            discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to
            discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
      </main>
    </>
  );
}

```

Meanwhile:
```tsx
/* app/components/main-header/main-header.js */
import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
export default function MainHeader() {
  console.log("🛞  Executing MainHeader component...");    // 👈🏽 ✅
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
```

![server component execution vs client component](../img/section03-lecture105-001.png)

> Note:

* Add a console.log("Meals page") in `Meals` component
* This console.log will be visible from the terminal.


#### 105.2.2 Add to `image-slideshow.js` component the `"use client"`:

**Subsection Summary**
Resolves the runtime crash in the slideshow by explicitly marking it as a Client Component. This allows the component to use the `useState` and `useEffect` hooks, which are essential for its dynamic behavior but unavailable in Server Components.
```tsx
/* app/components/images/image-slideshow.js */
"use client";   // 👈🏽 ✅
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './image-slideshow.module.css';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
```

![use client component](../img/section03-lecture105-002.png)

### 🧱 105.3 Pending Fixes (TODO)

- [ ] Audit all components in `app/components` to ensure they are Server Components unless interactivity is strictly required.
- [ ] Refactor navigation links to use a small Client Component wrapper if active states (like `usePathname`) are needed, rather than making the entire header a Client Component.
- [ ] Remove troubleshooting `console.log` statements from `MainHeader` and other components.
- [ ] Address **Confusion over execution environment**: Initially unclear where `console.log` outputs appear; clarified as terminal for Server Components.
- [ ] Address **Unnecessary Client Components**: Risk of making parent components "Client" when only a small child needs interactivity.
- [ ] Address **Performance Overhead**: Excessive use of Client Components can increase the JavaScript bundle unnecessarily.



<br>

## 🔧 106. Lesson 106 — *Using Client Components Efficiently*

- [Lecture 106: Using Client Components Efficiently](#-106-lesson-106--using-client-components-efficiently)
    - [106.1 Context](#1061-context)
    - [106.2 Updating code according the context](#1062-updating-code-according-the-context)
        - [106.2.1 Adding `Community` page content](#10621-adding-community-page-content)
        - [106.2.2 creating `page.module.css` for `community` component](#10622-creating-pagemodulecss-for-community-component)
        - [106.2.2 Fixing the issue for `<Link>` as active](#10622-fixing-the-issue-for-link-as-active)
        - [106.2.3 Create `nav-link.js` & `nav-link.module.css` files](#10623-create-nav-linkjs--nav-linkmodulecss-files)
        - [106.2.4 Update `main-header.js` code and `main-header.module.css` file](#10624-update-main-headerjs-code-and-main-headermodulecss-file)
    - [106.3 Pending Fixes (TODO)](#1063-pending-fixes-todo)

### 🧠 106.1 Context:

Using Client Components efficiently involves keeping them as small as possible and pushing them down the component tree. This "Leaf Component" strategy ensures that the majority of your application remains as **Server Components**, which offers significant advantages for performance and data management.

**When and Why to use:**
- **Interactivity Scope**: Only use Client Components for the specific UI elements that need browser-side features (hooks, event listeners, browser APIs).
- **Server Component Benefits**: By keeping parent components as Server Components, you maintain direct access to server-side resources (like databases), keep sensitive logic off the client, and reduce the JavaScript bundle size.

**Examples from the project:**
- `app/components/main-header/main-header.js`: Refactored to remain a Server Component even though it needs to highlight the active link.
- `app/components/main-header/nav-link.js`: A new Client Component created specifically to handle the "active link" logic using `usePathname`.

**Advantages:**
- **Optimized Bundle Size**: Less JavaScript is sent to the client.
- **Improved Performance**: Faster initial TTI (Time to Interactive) and better SEO.
- **Maintainability**: Clear separation between static structure and interactive behavior.

**Disadvantages:**
- **File Fragmentation**: Can lead to a larger number of small component files.
- **Prop Passing**: Requires careful management of props when passing data from Server to Client Components.

**When to consider alternatives:**
- If a large part of a component's subtree is highly interactive, it might be more practical and cleaner to make the entire parent a Client Component, rather than creating dozens of tiny "leaf" components.

### ⚙️ 106.2 Updating code according the context:

**Summary**
This section demonstrates how to optimize the use of Client Components by refactoring the global header. We transition from a less efficient approach where the entire `MainHeader` was a Client Component to a more surgical approach. By extracting the interactive navigation logic into a dedicated `NavLink` component, we allow `MainHeader` to revert to a Server Component, thus regaining its server-side benefits while still providing dynamic breadcrumbs/highlighting.

#### 106.2.1 Adding `Community` page content:

[page.js](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/app/community/page.js)

**Subsection Summary**
Populates the `CommunityPage` with static content (text and icons) using the Next.js `Image` component. This remains a Server Component as it requires no client-side interactivity.
```tsx
/* app/community/page.js */
import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
```

#### 106.2.2 creating `page.module.css` for `community` component:

[page.module.css](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/app/community/page.module.css)

**Subsection Summary**
Defines the visual styles for the Community page, including responsive layouts, typography, and specific styling for the list of perks.
```tsx
/* app/community/page.module.css */
.header {
  gap: 3rem;
  margin: 3rem auto 5rem auto;
  width: 90%;
  max-width: 75rem;
  color: #ddd6cb;
  font-size: 1.5rem;
  text-align: center;
}

.header h1 {
  font-family: 'Montserrat', sans-serif;
}

.highlight {
  background: linear-gradient(90deg, #f9572a, #ff8a05);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main {
  width: 90%;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
}

.main h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #ddd6cb;
}

.perks {
  list-style: none;
  margin: 3rem 0;
  padding: 0;
}

.perks li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.perks img {
  width: 8rem;
  height: 8rem;
  object-fit: contain;
}

.perks p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: #ddd6cb;
}
```

![community page and its content](../img/section03-lecture106-001.png)

#### 106.2.2 Fixing the issue for `<Link>` as active:

**Subsection Summary**
Demonstrates an initial (but inefficient) fix for highlighting the active link. It uses the `usePathname` hook within `MainHeader`, which necessitates marking the entire header as a Client Component with the `"use client"` directive.
```tsx
/* app/components/main-header/main-header.js */
"use client"    // 👈🏽 ✅
import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";    // 👈🏽 ✅

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  const path = usePathname();    // 👈🏽 ✅
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link>    {/* 👈🏽 ✅ */}
            </li>
            <li>
              <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined}>Foodies Community</Link>   {/* 👈🏽 ✅ */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
```

> Without adding `"use client"`, it will occur this error:

![no usec client - issue](../img/section03-lecture106-002.png)

> Issue fixed:

![link active by Community](../img/section03-lecture106-003.png)
![link active by Meals](../img/section03-lecture106-004.png)


> New Issue:

- `main-header.js` is not `React Server Component (RSC)` anymore.
- `main-header.js` loses its server component advantages.

#### 106.2.3 Create `nav-link.js` & `nav-link.module.css` files:

**Subsection Summary**
Implements the optimized "leaf component" solution. The `NavLink` component is marked with `"use client"` and isolates the `usePathname` hook, allowing it to manage its own active state styling independently of its parent.
```tsx
/* app/components/main-header/nav-link.js */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link 
      href={href} 
      className={ path.startsWith(href) 
        ? `${classes.link} ${classes.active}` 
        : classes.link }
    >
      {children}
    </Link>
  );
}

```

And 

```css
/* app/components/main-header/nav-link.module.css */
.link {
  text-decoration: none;
  color: #ddd6cb;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.link:hover,
.link:active {
  background: linear-gradient(90deg, #ff8a05, #f9b331);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 18px rgba(248, 190, 42, 0.8);
}

.active {
  background: linear-gradient(90deg, #ff8a05, #f9b331);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

#### 106.2.4 Update `main-header.js` code and `main-header.module.css` file:

**Subsection Summary**
Refactors the `MainHeader` to use the new `NavLink` component. This allows for the removal of the `"use client"` directive from `MainHeader`, restoring it as a Server Component. It also involves cleaning up or commenting out styles that were moved to the `NavLink` module.
```jsx
/* app/components/main-header/main-header.js */
//"use client";   // 👈🏽 ✅
import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
// import { usePathname } from "next/navigation";   // 👈🏽 ✅
import NavLink from "./nav-link";   // 👈🏽 ✅

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  // const path = usePathname();    // 👈🏽 ✅
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>   {/* 👈🏽 ✅ */}
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>    {/* 👈🏽 ✅ */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

```

and 

```css
/*  */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
}

@media (min-width: 768px) {
  .header {
    padding: 2rem 10%;
  }
}

.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.5rem;
  /* font-family: 'Montserrat', sans-serif; */
  font-size: 1.25rem;
}

/* .nav a {   // 👈🏽 ✅ (.nav a => .link)
  text-decoration: none;
  color: #ddd6cb;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.nav a:hover,
.nav a:active {   // 👈🏽 ✅ (.nav a => .link)
  background: linear-gradient(90deg, #ff8a05, #f9b331);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 18px rgba(248, 190, 42, 0.8);
} */

/* .active {    // 👈🏽 ✅
  background: linear-gradient(90deg, #ff8a05, #f9b331);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} */

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-decoration: none;
  color: #ddd6cb;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-size: 1.5rem;
}

.logo img {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
}
```

### 🧱 106.3 Pending Fixes (TODO)

- [ ] Extract interactive navigation logic into the `NavLink` component.
- [ ] Restore `MainHeader` as a Server Component by removing `"use client"`.
- [ ] Clean up `app/components/main-header/main-header.module.css` by removing the commented-out CSS blocks.
- [ ] Implement an exact match check in `NavLink` (e.g., `path === href`) if the root path `/` is added to the main navigation menu.
- [ ] Address **Inefficient Client Component usage**: Initially, `MainHeader` was converted to a Client Component just to access the `usePathname` hook, which is an anti-pattern for large layout components.
- [ ] Address **Commented-out dead code**: Removed the commented-out CSS blocks in `main-header.module.css` that were moved to `nav-link.module.css`.
- [ ] Address **Broad URL matching in `NavLink`**: `path.startsWith(href)` might cause multiple links to appear active if one path is a subset of another (e.g., `/` vs `/meals`). This isn't currently an issue but worth noting for future routes.


<br>

## 🔧 107. Lesson 107 — *Outputting Meals Data & Images With Unknown Dimensions*

- [Lecture 107: Outputting Meals Data & Images With Unknown Dimensions](#-107-lesson-107--outputting-meals-data--images-with-unknown-dimensions)
  - [107.1 Context](#1071-context)
  - [107.2 Updating code/theory according the context](#1072-updating-code-according-the-context)
    - [107.2.1 create `page.module.css` file](#10721-create-pagemodulecss-file)
    - [107.2.2 Update `meals/page.js` file](#10722-update-mealspagejs-file)
    - [107.2.3 Create `meals/meals-grid.module.css` file](#10723-create-mealsmeals-gridmodulecss-file)
    - [107.2.4 Create and update the `meals/meals-grid.js` file](#10724-create-and-update-the-mealsmeals-gridjs-file)
    - [107.2.5 create `meals/meal-item.module.css` file](#10725-create-mealsmeal-itemmodulecss-file)
    - [107.2.6 create and update `meals/meal-item.js` file](#10726-create-and-update-mealsmeal-itemjs-file)
    - [107.2.7 Update the `meals/meal-grid.js` file](#10727-update-the-mealsmeal-gridjs-file)
    - [107.2.8 Update `meals/page.js` file and import `MealsGrid` component](#10728-update-mealspagejs-file-and-import-mealsgrid-component)
  - [107.3 Issues](#1073-issues)
  - [107.4 Pending Fixes (TODO)](#1074-pending-fixes-todo)

### 🧠 107.1 Context:

In many web applications, you need to display lists of items that include images where you don't know the dimensions in advance. Next.js provides tools to handle this performantly while maintaining layout stability.

- **Dynamic Image Sizing**: When dimensions are unknown, the `fill` prop in the Next.js `Image` component allows the image to fill its parent container.
- **Parent Container Requirements**: When using `fill`, the parent element must have `position: relative`, `position: absolute`, or `position: fixed`.
- **Image Cropping and Scaling**: Use `object-fit: cover` to ensure the image fills the container without being distorted.
- **Grid Layouts**: `display: grid` with `auto-fill` and `minmax` is an excellent pattern for creating responsive lists of items.

**Key Concepts:**
1. **`fill` Prop**: Allows images to size themselves relative to their parent rather than requiring hardcoded width and height.
2. **Container-Driven Sizing**: Layout shifts are prevented by the container having a defined size, even if the image content is dynamic.
3. **`object-fit` Integration**: Crucial for maintaining aspect ratio of dynamic images within static containers.

**Advantages:**
- **Flexibility**: Handles images from external sources or user uploads easily.
- **Layout Stability**: Prevents Cumulative Layout Shift (CLS) by giving the parent container a fixed size.
- **Responsive Design**: Works seamlessly with grid and flexbox layouts.

**Gotchas:**
- Forgetting `position: relative` on the parent container when using `fill` will cause the image to fill the nearest positioned ancestor (often the whole page).
- If `object-fit` is not used, the image might look stretched or squashed.

**When to consider alternatives:**
- If you *do* know the aspect ratio or exact dimensions, specifying `width` and `height` is generally more efficient for the browser.

### ⚙️ 107.2 Updating code/theory according the context:

#### **Summary**
This section documents the transition of the meals listing page from a placeholder to a functional grid-based layout. It covers the creation of scoped styles for the meals page, the implementation of a reusable `MealsGrid` component for managing item lists, and a `MealItem` component for individual meal presentations. A key technical focus is the use of the `fill` prop in the `Image` component to handle dynamic images within fixed-size containers.

Repos:
- [page.module.css](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/app/meals/page.module.css)
- [meals-grid.module.css](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/components/meals/meals-grid.module.css)
- [meal-item.module.css](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/components/meals/meal-item.module.css)
- [meal-item.js](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/components/meals/meal-item.js)

#### 107.2.1 create `page.module.css` file:

**Subsection Summary**
Defines the visual structure for the meals listing page. Includes high-level styles for the header (margins, fonts, gradients) and a sophisticated loading animation for future use during data fetching.
```css
/* app/meals/page.module.css */
.header {
  gap: 3rem;
  margin: 3rem auto 5rem auto;
  width: 90%;
  max-width: 75rem;
  color: #ddd6cb;
  font-size: 1.5rem;
}

.header h1 {
  font-family: 'Montserrat', sans-serif;
}

.highlight {
  background: linear-gradient(90deg, #f9572a, #ff8a05);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header p {
  margin: 0;
}

.cta a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: linear-gradient(90deg, #f9572a, #ff9b05);
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
}

.loading {
  text-align: center;
  animation: loading 1.2s ease-in-out infinite;
}

@keyframes loading {
  0% {
    color: #e9e9e9;
  }
  50% {
    color: #b89b84;
  }
  100% {
    color: #e9e9e9;
  }
}
```

#### 107.2.2 Update `meals/page.js` file:

**Subsection Summary**
Populates the main meals page with a header and a call-to-action link. It sets up the basic layout using the newly created CSS module and prepares the `main` section to receive the meals grid. Note: Current link has a typo (`/meal/share` instead of `/meals/share`).
```jsx
/* app/meals/page.js */
import Link from 'next/link'
import classes from './page.module.css'

export default function MealsPage(){
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>.
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meal/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}></main>
    </>
  )
}
```

#### 107.2.3 Create `meals/meals-grid.module.css` file

**Subsection Summary**
Implements a responsive grid layout for the meals list. It uses `grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))` to ensure the layout adapts to different screen sizes while maintaining a minimum item width.
```css
/* app/components/meals/meals-grid.module.css */
.meals {
  width: 90%;
  max-width: 90rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 5rem;
  margin: 2rem auto;
  list-style: none;
  padding: 0;
}
```

#### 107.2.4 Create and update the `meals/meals-grid.js` file:

**Subsection Summary**
Creates the `MealsGrid` component that maps through an array of meals. It currently uses a placeholder `<li>` for each meal. Note: This implementation currently contains a bug where the `map` callback does not return any JSX.
```jsx
/* app/components/meals/meals-grid.js */
import classes from './meals-grid.module.css'

export default function MealsGrid({meals}){
  return (
    <ul className={classes.meals}>
      {meals.map( (meal) => {
        <li key={meal.id}>{meal.title}</li>
      })}
    </ul>
  )
}
```

#### 107.2.5 create `meals/meal-item.module.css` file:

**Subsection Summary**
Provides detailed styling for individual meal cards. Key features include a fixed-height image container with `position: relative` (to support the `Image` component's `fill` prop), `object-fit: cover` for images, and gradient backgrounds for a premium look.
```css
/* app/components/meals/meal-item.module.css */
.meal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  color: #ddd6cb;
  background: linear-gradient(90deg, #2c1e19, #25200f);
}

.headerText {
  padding: 0.5rem 1rem 0 1rem;
}

.headerText h2 {
  margin: 0;
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
}

.headerText p {
  font-size: 0.75rem;
  color: #cfa69b;
  font-style: italic;
}

.meal h2,
.meal p {
  margin: 0;
}

.image {
  position: relative;
  height: 15rem;
}

.meal img {
  object-fit: cover;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.summary {
  padding: 1rem 1rem 0 1rem;
}

.actions {
  padding: 1rem;
  text-align: right;
}

.actions a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: linear-gradient(90deg, #f9572a, #ff9b05);
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
}

.actions a:hover,
.actions a:active {
  background: linear-gradient(90deg, #fd4715, #f9b241);
  box-shadow: 0 0 12px rgba(242, 100, 18, 0.8);
}
```

#### 107.2.6 create and update `meals/meal-item.js` file:

**Subsection Summary**
Implements the `MealItem` component using the Next.js `Image` component with the `fill` prop. This allows the component to display images of varying aspect ratios consistently within its card-like structure. It also includes links to dynamic meal detail pages.
```jsx
/* app/components/meals/meal-item.js */
import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
```

![meals/[mealSlug] link](../img/section03-lecture107-001.png)

> Note:

* You can use the "`fill`" prop instead of setting a "`width`" and "`height`" whenever you have an image where you don't know the dimensions in advance.

#### 107.2.7 Update the `meals/meal-grid.js` file importing and using the `<MealItem />` component:

**Subsection Summary**
Integrates the `MealItem` component into the `MealsGrid` list. It uses the spread operator (`{...meal}`) to pass all meal properties as props to the item component. Note: The return bug in the `map` persists here.
```jsx
/* app/components/meals/meals-grid.js */
import classes from './meals-grid.module.css'
import MealItem from './meal-item';   // 👈🏽 ✅

export default function MealsGrid({meals}){
  return (
    <ul className={classes.meals}>
      {meals.map( (meal) => {
        <li key={meal.id}>
          <MealItem {...meal} />    {/* 👈🏽 ✅ */}
        </li>
      })}
    </ul>
  )
}
```

#### 107.2.8 Update `meals/page.js` file and import `MealsGrid` component:

**Subsection Summary**
Completes the initial meals page implementation by importing and rendering the `MealsGrid`. It currently passes an empty array as a placeholder for data that will be fetched in future lessons.
```jsx
/* app/meals/page.js */
import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '../components/meals/meals-grid'    // 👈🏽 ✅ 

export default function MealsPage(){
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>.
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meal/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />    {/* 👈🏽 ✅ */}
      </main>
    </>
  )
}
```

### 🐞 107.3 Issues:

- **Missing return in `MealsGrid` map**: In `app/components/meals/meals-grid.js` (lines 7-11), the `map` function uses curly braces `{}` but does not include a `return` statement, resulting in an empty list being rendered even if meals were provided.
- **Incorrect CTA Link**: In `app/meals/page.js` (line 14), the link `href="/meal/share"` is incorrect; it should be `href="/meals/share"` to match the defined route.
- **Empty Meals Data**: The `MealsPage` is currently passing an empty array `[]` to `MealsGrid`, making the page appear empty by default.

| Issue | Status | Log/Error |
|---|---|---|
| Missing return in `map` | ⚠️ Identified | `app/components/meals/meals-grid.js:7-11` |
| Typo in Share Meal Link | ⚠️ Identified | `app/meals/page.js:14` |
| Empty Data Placeholder | ℹ️ Informational | `app/meals/page.js:18` |

### 🧱 107.4 Pending Fixes (TODO)

- [ ] Add `return` statement to the `map` function in `app/components/meals/meals-grid.js` (line 8).
- [ ] Fix the `href` attribute in `app/meals/page.js` from `/meal/share` to `/meals/share`.
- [ ] Implement data fetching logic in `app/meals/page.js` to replace the empty array with real meal data.
- [ ] Add `placeholder="blur"` to images in `MealItem` for better perceived performance once local images are available.


<br>

## 🔧 108. Lesson 108 — *Setting Up A SQLite Database*

- [108. Lesson 108 — *Setting Up A SQLite Database*](#-108-lesson-108--setting-up-a-sqlite-database)
- [108.1 Context](#1081-context)
- [108.2 Updating code/theory according the context](#1082-updating-code-according-the-context)
  - [108.2.1 Install better-sqlite3](#10821-install-better-sqlite3)
  - [108.2.2 Create initdb.js](#10822-create-initdbjs)
  - [108.2.3 Execute initdb.js](#10823-execute-initdbjs)
  - [108.2.4 Database File Creation](#10824-database-file-creation)
- [108.3 Issues](#1083-issues)
- [108.4 Pending Fixes (TODO)](#1084-pending-fixes-todo)

### 🧠 108.1 Context:

**SQLite** is a lightweight, serverless, zero-configuration, transactional SQL database engine. Unlike most other SQL databases, SQLite does not have a separate server process. It reads and writes directly to ordinary disk files. In the context of a Next.js application, particularly during development, it provides a simple and efficient way to persist data without the overhead of setting up a full-blown database server like PostgreSQL or MySQL.

**When to use:**
- **Local Development**: Perfect for prototyping and early-stage development due to its simplicity.
- **Embedded Applications**: Ideal for applications that need a self-contained database.
- **Small-Scale Production**: Can be used for applications with low-to-medium traffic and simple data needs.

**Examples from the project:**
- `initdb.js`: A script used to initialize the database schema and populate it with initial dummy data.
- `meals.db`: The resulting SQLite database file that stores all meal-related information.
- `better-sqlite3`: The Node.js library used to interact with the SQLite database synchronously, which simplifies the integration in Server Components.

**Key Concepts:**
1. **Serverless Architecture**: No separate database process; the database is a file.
2. **Synchronous Execution**: `better-sqlite3` executes queries synchronously, which is often preferred in server-side logic for its simplicity.
3. **Seeding**: The process of populating the database with initial data using a script like `initdb.js`.

**Advantages:**
- Zero configuration and easy setup.
- Highly portable (the whole database is one file).
- Excellent performance for read-heavy workloads common in landing pages and listings.

**Disadvantages/Gotchas:**
- **Concurrency**: SQLite can struggle with many simultaneous write operations compared to client-server databases.
- **Limited Scaling**: Not designed for massive datasets or highly distributed systems.
- **File Management**: You must ensure the database file is properly backed up and not accidentally deleted.

**When to consider alternatives:**
- If your application expects a very high volume of concurrent writes.
- If you need advanced features like full-text search or complex GIS capabilities provided by databases like PostgreSQL.
- If your data needs to be shared across multiple distributed server instances.

### ⚙️ 108.2 Updating code/theory according the context:

#### **Summary**
This section documents the setup and initialization of a persistent SQLite database for the meals application. It covers the installation of the `better-sqlite3` driver, the creation of a seeding script (`initdb.js`) to define the schema and insert mock data, and the execution process that results in the creation of the `meals.db` file. This establishes the data layer that will power the meals listing and detail pages.

Repo:

* [initdb.js](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/initdb.js)

#### 108.2.1 Install `better-sqlite3` dependency:

**Subsection Summary**
Installs the necessary library to interact with SQLite. `better-sqlite3` is chosen for its performance and synchronous API, which integrates well with Node.js and Next.js.

```bash
npm install better-sqlite3
```

#### 108.2.2 Create `initdb.js`:

**Subsection Summary**
Defines the database initialization script. This file creates the `meals` table with the required schema (slug, title, image, summary, instructions, etc.) and populates it with an array of dummy meal objects. It uses prepared statements for efficient data insertion.

```jsx
/* initdb.js */
const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
  {
    title: 'Juicy Cheese Burger',
    slug: 'juicy-cheese-burger',
    image: '/images/burger.jpg',
    summary:
      'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.',
    instructions: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.

      2. Cook the patty:
         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

      3. Assemble the burger:
         Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

      4. Serve:
         Complete the assembly with the top bun and serve hot.
    `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    title: 'Spicy Curry',
    slug: 'spicy-curry',
    image: '/images/curry.jpg',
    summary:
      'A rich and spicy curry, infused with exotic spices and creamy coconut milk.',
    instructions: `
      1. Chop vegetables:
         Cut your choice of vegetables into bite-sized pieces.

      2. Sauté vegetables:
         In a pan with oil, sauté the vegetables until they start to soften.

      3. Add curry paste:
         Stir in 2 tablespoons of curry paste and cook for another minute.

      4. Simmer with coconut milk:
         Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.

      5. Serve:
         Enjoy this creamy curry with rice or bread.
    `,
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  },
  {
    title: 'Homemade Dumplings',
    slug: 'homemade-dumplings',
    image: '/images/dumplings.jpg',
    summary:
      'Tender dumplings filled with savory meat and vegetables, steamed to perfection.',
    instructions: `
      1. Prepare the filling:
         Mix minced meat, shredded vegetables, and spices.

      2. Fill the dumplings:
         Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.

      3. Steam the dumplings:
         Arrange dumplings in a steamer. Steam for about 10 minutes.

      4. Serve:
         Enjoy these dumplings hot, with a dipping sauce of your choice.
    `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
  },
  {
    title: 'Classic Mac n Cheese',
    slug: 'classic-mac-n-cheese',
    image: '/images/macncheese.jpg',
    summary:
      "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
    instructions: `
      1. Cook the macaroni:
         Boil macaroni according to package instructions until al dente.

      2. Prepare cheese sauce:
         In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.

      3. Combine:
         Mix the cheese sauce with the drained macaroni.

      4. Bake:
         Transfer to a baking dish, top with breadcrumbs, and bake until golden.

      5. Serve:
         Serve hot, garnished with parsley if desired.
    `,
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com',
  },
  {
    title: 'Authentic Pizza',
    slug: 'authentic-pizza',
    image: '/images/pizza.jpg',
    summary:
      'Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.',
    instructions: `
      1. Prepare the dough:
         Knead pizza dough and let it rise until doubled in size.

      2. Shape and add toppings:
         Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.

      3. Bake the pizza:
         Bake in a preheated oven at 220°C for about 15-20 minutes.

      4. Serve:
         Slice hot and enjoy with a sprinkle of basil leaves.
    `,
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com',
  },
  {
    title: 'Wiener Schnitzel',
    slug: 'wiener-schnitzel',
    image: '/images/schnitzel.jpg',
    summary:
      'Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.',
    instructions: `
      1. Prepare the veal:
         Pound veal cutlets to an even thickness.

      2. Bread the veal:
         Coat each cutlet in flour, dip in beaten eggs, and then in breadcrumbs.

      3. Fry the schnitzel:
      Heat oil in a pan and fry each schnitzel until golden brown on both sides.

      4. Serve:
      Serve hot with a slice of lemon and a side of potato salad or greens.
 `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
  },
  {
    title: 'Fresh Tomato Salad',
    slug: 'fresh-tomato-salad',
    image: '/images/tomato-salad.jpg',
    summary:
      'A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.',
    instructions: `
      1. Prepare the tomatoes:
        Slice fresh tomatoes and arrange them on a plate.
    
      2. Add herbs and seasoning:
         Sprinkle chopped basil, salt, and pepper over the tomatoes.
    
      3. Dress the salad:
         Drizzle with olive oil and balsamic vinegar.
    
      4. Serve:
         Enjoy this simple, flavorful salad as a side dish or light meal.
    `,
    creator: 'Sophia Green',
    creator_email: 'sophiagreen@example.com',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
```

#### 108.2.3 execute from terminal:

**Subsection Summary**
Triggers the database creation and seeding process. Running this command in the project root executes the logic in `initdb.js`.

```bash
node initdb.js
```

#### 108.2.4 new `meals.db` file appears:

**Subsection Summary**
Visual verification of the database creation. The `meals.db` file is generated in the root directory, containing the schema and initial data specified in `initdb.js`.

```
03-onwards-foodies-starting-project/
├── app/
│   ├── community/
│   │   ├── page.js                     # 📄 Community page displaying social features
│   │   └── page.module.css             # 📄 Scoped styles for the community page
│   ├── components/
│   │   ├── images/
│   │   │   ├── image-slideshow.js      # 📄 Animated slideshow component
│   │   │   └── image-slideshow.module.css
│   │   ├── meals/
│   │   │   ├── meal-item.js            # 📄 meal item component
│   │   │   ├── meal-item.module.css    # 📄 Scoped styles for meal item component
│   │   │   ├── meals-grid.js           # 📄 meals grid component
│   │   │   ├── meals-grid.module.css   # 📄 Scoped styles for meals grid component
│   │   └── main-header/
│   │       ├── main-header.js          # 📄 Global navigation header
│   │       ├── main-header.module.css
│   │       ├── main-header-background.js
│   │       ├── main-header-background.module.css
│   │       ├── nav-link.js             # 📄 Individual navigation link component
│   │       └── nav-link.module.css
│   ├── meals/
│   │   ├── [mealSlug]/
│   │   │   └── page.js                 # 📄 Dynamic route for meal details
│   │   ├── share/
│   │   │   └── page.js                 # 📄 Page for sharing new meals
│   │   ├── layout.js                   # 📄 Layout for meals section
│   │   ├── page.js                     # 📄 Main meals listing page
│   │   └── page.module.css             # 📄 Scoped styles for Main meals page
│   ├── globals.css                     # 📄 Global application styles
│   ├── icon.png                        # 📄 App icon
│   ├── layout.js                       # 📄 Root application layout
│   ├── page.js                         # 📄 Landing/Home page
│   └── page.module.css                 # 📄 Styles for the landing page
├── assets/                             # 📁 Static assets (images, icons)
├── docs/
│   └── LECTURE_STEPS.md                # 📄 This educational documentation
├── img/                                # 📁 Screenshots for documentation
├── public/                             # 📁 Static assets served directly
├── jsconfig.json                       # 📄 Path aliases configuration
├── initdb.js                           # 📄 👈🏽 ✅ initdb.js for generate a db
├── meals.db                            # 📄 👈🏽 ✅ sqlite database
├── next.config.js                      # 📄 Next.js configuration
├── package.json                        # 📄 Project dependencies
└── README.md                           # 📄 General project information
```

### 🐞 108.3 Issues:

- **Missing Error Handling**: The `initdb.js` script does not include error handling (e.g., `try-catch` blocks) for database operations, which could lead to ungraceful failures if the file system is read-only or the disk is full.
- **Manual Execution Requirement**: The database must be seeded manually using `node initdb.js`. There is no automated process (like a post-install script) to ensure the database exists before the application starts.
- **Idempotency Concerns**: While `CREATE TABLE IF NOT EXISTS` is idempotent, running the script multiple times without a `DELETE` or `TRUNCATE` before insertion would lead to duplicate entries if the unique `slug` constraint wasn't present, or errors because of it.

| Issue | Status | Log/Error |
|---|---|---|
| Lack of `try-catch` in `initdb.js` | ⚠️ Identified | `initdb.js:167-199` |
| Manual database seeding | ℹ️ Informational | `initdb.js` |
| Image Path Dependency | ℹ️ Identified | `initdb.js:8,30,...` (Images must exist in `/public/images`) |

### 🧱 108.4 Pending Fixes (TODO)

- [ ] Implement data fetching logic in `lib/meals.js` (to be created) to load meals from `meals.db`.
- [ ] Add basic error handling to `initdb.js` to provide better feedback during seeding.
- [ ] Consider adding a `db:setup` script to `package.json` to automate database initialization.
- [ ] Verify that all images referenced in `dummyMeals` exist in the `public/images` directory.
- [ ] Address **Data Persistence**: Ensure the `meals.db` file is not tracked by Git if it contains environment-specific data, but in this case, it's used for shared developmental state.


---

<br>
<br>
<br>

🔥 🔥 🔥 

<br>

## 🔧 XXX. Lesson XXX — *{{TITLE_NAME}}*

### 🧠 XXX.1 Context:

### ⚙️ XXX.2 Updating code/theory according the context:

#### XXX.2.1
```jsx
/*  */

```

#### XXX.2.2
```jsx
/*  */

```

### 🐞 XXX.3 Issues:
- **first issue**: something..

| Issue | Status | Log/Error |
|---|---|---|

### 🧱 XXX.4 Pending Fixes (TODO)

- [ ]