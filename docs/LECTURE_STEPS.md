

<br>

## 🔧 97. Lesson 097 — *Exercise: Task and solution*

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


### ⚙️ 97.2 Updating code/theory according the context:

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

![](../img/section03-lecture097-001.png)

### 🐞 97.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Placeholder Content | ⚠️ Identified | All new route components (`page.js`) currently only contain placeholder `<h1>` elements. |
| Missing Styling | ⚠️ Identified | Newly created pages lack specific styling beyond global defaults. |
| Incomplete Dynamic Metadata | ℹ️ Low Priority | Dynamic routes like `[mealSlug]` will need metadata for SEO purposes. |

### 🧱 97.4 Pending Fixes (TODO)

- [ ] Replace placeholder `<h1>` tags with actual functional components and UI for all routes.
- [ ] Implement data fetching logic for `[mealSlug]` to display real meal details.
- [ ] Add specific CSS modules or Tailwind classes to new pages.
- [ ] Configure `generateMetadata` for dynamic routes to improve SEO.

<br>

## 🔧 98. Lesson 098 — *Revisiting: The Concept Of Layouts*

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

### ⚙️ 98.2 Updating code/theory according the context:

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

### 🐞 98.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Placeholder Layout Content | ⚠️ Identified | The `MealsLayout` component (`app/meals/layout.js`) only contains a placeholder paragraph tag with an emoji. It lacks meaningful structure, styling, or functional purpose. |
| Missing Layout Styling | ⚠️ Identified | The layout component has no CSS classes or styling applied. It should integrate with the application's design system (TailwindCSS) for consistent appearance. |
| No Semantic HTML Structure | ⚠️ Identified | The layout uses a fragment (`<>...</>`) instead of semantic HTML elements like `<main>`, `<section>`, or `<nav>` that would improve accessibility and SEO. |
| Layout Not Client Component | ℹ️ Low Priority | If the layout needs interactivity in the future (state, event handlers), it will need to be converted to a Client Component with `'use client'` directive. Currently, it's a Server Component, which is fine for static content. |

### 🧱 98.4 Pending Fixes (TODO)

- [ ] Replace placeholder paragraph in `MealsLayout` with meaningful UI structure (e.g., section header, navigation, or breadcrumbs).
- [ ] Add TailwindCSS classes or CSS modules to style the `MealsLayout` component consistently with the application design.
- [ ] Wrap layout content in semantic HTML elements (`<main>`, `<section>`, or `<nav>`) instead of fragments for better accessibility.
- [ ] Consider adding a shared header or navigation component specific to the meals section within the layout.
- [ ] Add proper spacing and layout structure to ensure child pages render correctly within the layout container.



<br>

## 🔧 99. Lesson 099 — *Adding a Custom Component To A Layout*

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

### ⚙️ 99.2 Updating code/theory according the context:

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

### 🐞 99.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Invalid HTML Structure in Navigation | ⚠️ Identified | In `app/components/main-header.js` (lines 10-17), `<li>` elements are used directly inside `<nav>` without a parent `<ul>` or `<ol>` element. This violates HTML semantics and accessibility standards. Navigation lists should be wrapped in a proper list container. |
| Missing Styling and CSS Classes | ⚠️ Identified | The `MainHeader` component (`app/components/main-header.js`) has no CSS classes or styling applied. The header, logo link, and navigation elements lack visual styling and layout structure, making them appear unstyled in the browser. |
| Accessibility Concerns with Logo Link | ⚠️ Identified | The logo link in `app/components/main-header.js` (lines 6-9) wraps both an `<img>` and text content. This can cause accessibility issues with screen readers and keyboard navigation. The link should have proper `aria-label` attributes and the text should be structured more semantically. |
| Missing Semantic Navigation Structure | ⚠️ Identified | The navigation in `MainHeader` lacks proper semantic structure. The `<nav>` element should contain a `<ul>` wrapping the `<li>` items, and navigation links should have proper accessibility attributes like `aria-label` or `aria-current` for active states. |
| No Keyboard Navigation Support | ℹ️ Low Priority | The header component doesn't implement keyboard event handlers (`onKeyDown`) for accessibility. While Next.js `Link` components support keyboard navigation by default, custom event handlers could enhance the user experience for keyboard users. |
| Image Optimization Not Utilized | ℹ️ Low Priority | The component uses `<img>` tag instead of Next.js's optimized `<Image>` component from `next/image`. While `logoImg.src` provides some optimization, using the `Image` component would provide better performance, lazy loading, and responsive image handling. |

### 🧱 99.4 Pending Fixes (TODO)

- [ ] Fix HTML semantics in `MainHeader` component: Wrap `<li>` elements in a `<ul>` container within the `<nav>` element (`app/components/main-header.js`, lines 10-17).
- [ ] Add TailwindCSS classes or CSS modules to style the `MainHeader` component, including proper layout, spacing, and visual design for the header, logo, and navigation links.
- [ ] Improve accessibility of the logo link by adding `aria-label` attribute and restructuring the link content to be more semantic (`app/components/main-header.js`, lines 6-9).
- [ ] Add proper semantic structure to navigation: Ensure `<nav>` contains `<ul>` with `<li>` items, and add `aria-label` to the navigation element for screen readers.
- [ ] Consider replacing `<img>` with Next.js `<Image>` component from `next/image` for better image optimization, lazy loading, and responsive image handling.
- [ ] Add keyboard event handlers (`onKeyDown`) to navigation links if custom keyboard navigation behavior is needed beyond default Next.js `Link` functionality.
- [ ] Add active state styling and `aria-current` attribute to navigation links to indicate the current page for better accessibility and UX.


<br>

## 🔧 100. Lesson 100 — *Styling NextJS Project: Your Options & Using CSS Modules*

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

### ⚙️ 100.2 Updating code/theory according the context:

**Summary**
This section demonstrates how to style a Next.js component using CSS Modules. The process involves creating a CSS Module file (`main-header.module.css`) with component-specific styles, then importing and applying those styles to the `MainHeader` component using the `className` prop. This approach provides scoped styling that prevents style conflicts while maintaining clean, maintainable code organization. The lesson covers responsive design with media queries, hover/active states, and proper CSS Module import patterns.

#### 100.2.1 Creating `main-header.module.css` file:

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

### 🐞 100.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Unused `.active` CSS Class | ⚠️ Identified | The `.active` class is defined in `app/components/main-header.module.css` (lines 41-45) but is never applied to any element in `app/components/main-header.js`. This class appears intended for active navigation state but lacks implementation logic. |
| Missing Active State Logic | ⚠️ Identified | Navigation links in `MainHeader` component don't have active state detection or styling. The component doesn't check the current route to apply the `.active` class, so users can't visually identify which page they're currently viewing. |
| Missing Focus States for Accessibility | ⚠️ Identified | Navigation links in `app/components/main-header.module.css` have `:hover` and `:active` states but lack `:focus` states for keyboard navigation. This creates accessibility issues for users navigating with keyboard or screen readers. |
| Commented Out Font Family | ℹ️ Low Priority | Line 20 in `main-header.module.css` contains a commented-out `font-family: 'Montserrat', sans-serif;` declaration. This suggests uncertainty about typography choices or incomplete styling decisions. |
| No Mobile Navigation Handling | ℹ️ Low Priority | The CSS Module includes responsive padding via media queries but doesn't address mobile navigation patterns (e.g., hamburger menu, collapsible navigation). The navigation may overflow or become cramped on small screens. |
| Missing Link Styling in Navigation | ℹ️ Low Priority | Navigation links (`<Link>` components) inside `<li>` elements don't have explicit CSS classes applied. They inherit styles from `.nav a` selector, but this creates tight coupling between CSS structure and HTML structure, making it harder to style links differently if needed. |

### 🧱 100.4 Pending Fixes (TODO)

- [ ] Implement active state logic in `MainHeader` component: Use Next.js `usePathname()` hook (requires `'use client'`) or compare `href` prop with current route to conditionally apply `classes.active` to navigation links (`app/components/main-header.js`).
- [ ] Add `:focus` pseudo-class styles to `.nav a` selector in `main-header.module.css` for keyboard navigation accessibility. Include visible focus indicators (e.g., outline or box-shadow) that meet WCAG accessibility standards.
- [ ] Remove unused `.active` class from CSS Module or implement its usage. If keeping it, ensure it's properly applied via JavaScript logic; otherwise, remove it to reduce dead code.
- [ ] Resolve commented-out font-family declaration: Either uncomment and use it if intended, or remove the comment if the font choice is finalized. Consider if Montserrat should be applied to navigation or if Quicksand (from globals.css) is sufficient.
- [ ] Add mobile-responsive navigation: Implement a hamburger menu or collapsible navigation for small screens. This may require converting `MainHeader` to a Client Component and adding state management for mobile menu visibility.
- [ ] Consider adding explicit CSS classes to navigation `<Link>` components if more granular styling control is needed, or document that `.nav a` selector is intentionally used for all navigation links.
- [ ] Add `aria-current="page"` attribute to active navigation links for better screen reader support when active state logic is implemented.



<br>

## 🔧 101. Lesson 101 — *Optimizing Images with the NextJS Image Component*

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


### ⚙️ 101.2 Updating code/theory according the context:

**Summary**
This section demonstrates the transition from standard HTML `<img>` tags to the optimized Next.js `<Image>` component. It focuses on implementing this change in the `MainHeader` component for the application logo. The lesson covers importing the component, updating the JSX structure, and resolving performance warnings by utilizing the `priority` attribute for critical above-the-fold content.

Previous the changing:
![without using the Image next component](../img/section03-lecture101-001.png)

> Attributes:
* src
* alt

#### 101.2.1 Upgrade the logo from `<img>` to `<Image>`:

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

### 🐞 101.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Large Favicon Asset | ⚠️ Identified | The `app/icon.png` file is 1.3 MB, which is excessively large for a favicon and can impact build performance and metadata generation. |
| Inconsistent Alt Text | ⚠️ Identified | There is currently no standardized approach for `alt` text across the application, which could lead to accessibility gaps as more images are added. |
| Remote Image Limitation | ℹ️ Low Priority | Future images fetched from external databases will require specific configuration in `next.config.js` to work with the `<Image>` component. |

### 🧱 101.4 Pending Fixes (TODO)

- [ ] Optimize `app/icon.png` to a standard favicon size (e.g., 32x32 or 512x512) and reduce file size.
- [ ] Create a reusable `MealImage` component that handles consistent `alt` text and placeholder logic for meal listings.
- [ ] Add `remotePatterns` to `next.config.js` once external image sources are identified.
- [ ] Audit `app/meals/page.js` and `app/community/page.js` to ensure standard `<img>` tags aren't introduced as those pages are built out.


<br>

## 🔧 102. Lesson 102 — *Using More Custom Components*

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

### ⚙️ 102.2 Updating code/theory according the context:

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


### 🐞 102.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Orphaned Imports in `layout.js` | ⚠️ Identified | After moving `MainHeaderBackground` to `MainHeader`, the imports and commented-out code in `app/layout.js` (lines 3 and 14) are no longer needed and should be removed. |
| Inconsistent CSS Selectors | ℹ️ Low Priority | `main-header-background.module.css` uses both a class selector and a nested tag selector (`.header-background svg`). While functional, it's slightly inconsistent with the pure class-based approach used elsewhere. |

### 🧱 102.4 Pending Fixes (TODO)

- [ ] Clean up `app/layout.js`: Remove the unused import of `MainHeaderBackground` and the commented-out component call.
- [ ] Audit `app/globals.css` to ensure no leftover styles from the SVG background remain now that they are in a CSS Module.
- [ ] Add `aria-hidden="true"` to the SVG in `MainHeaderBackground` as it is purely decorative.

<br>

## 🔧 103. Lesson 103 — *Populating The Starting Page Content*

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
### ⚙️ 103.2 Updating code/theory according the context:

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

### 🐞 103.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Typo in Hero Description | ⚠️ Identified | In `app/page.js`, the word "Taste" is misspelled as "Tasrw". |
| Placeholder Slideshow | ⚠️ Identified | The slideshow container in `app/page.js` contains a `....` placeholder instead of actual content or a component. |
| Redundant Paragraphs | ⚠️ Identified | Both sections in `main` contain duplicate sentences ("NextLevel Food is a place to discover..."), making the content feel repetitive and unpolished. |
| Hardcoded Text | ℹ️ Low Priority | All landing page content is hardcoded in the component, which may make future internationalization (i18n) or updates more difficult. |

### 🧱 103.4 Pending Fixes (TODO)

- [ ] Correct the typo "Tasrw" to "Taste" in `app/page.js` (line 12).
- [ ] Remove redundant paragraphs in the descriptive sections of `app/page.js`.
- [ ] Implement an `ImageSlideshow` component to replace the placeholder `....` in `app/page.js`.
- [ ] Add `aria-label` to the slideshow container for improved accessibility.
- [ ] Extract the landing page text into a configuration file or constants to facilitate future updates.



<br>

## 🔧 104. Lesson 104 — *Preparing an Image Slideshow*

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

### ⚙️ 104.2 Updating code/theory according the context:

**Summary**
This section documents the implementation of an automated `ImageSlideshow` component. It covers the creation of the React component using `useEffect` and `useState` for image rotation, the application of sophisticated CSS transitions for smooth visual effects, and the integration of the slideshow into the application's landing page. Finally, it addresses the common "use client" error that occurs when using browser-only hooks in Server Components.

#### 104.2.1 Create `components/images/image-slideshow.js` file:

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


### 🐞 104.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Missing "use client" Directive | ⚠️ Identified | The `ImageSlideshow` component uses `useState` and `useEffect`, which are Client-only features. Without the `"use client"` directive at the top of the file, Next.js throws an error when trying to render the component. |
| Potential Memory Leaks | ✅ Fixed | The `useEffect` hook in `ImageSlideshow` correctly returns a cleanup function that calls `clearInterval(interval)`, preventing multiple timers from running if the component re-renders or unmounts. |
| Lack of Manual Controls | ⚠️ Identified | The slideshow is purely automatic. Users cannot manually skip images or pause the rotation, which can be an accessibility and UX issue. |
| Inaccessible Images in Map | ℹ️ Low Priority | While `alt` text is provided, the slideshow doesn't use `aria-live` or other roles to inform screen readers when the image changes automatically. |

### 🧱 104.4 Pending Fixes (TODO)

- [ ] Add the `"use client"` directive at the top of `app/components/images/image-slideshow.js` to resolve the runtime crash.
- [ ] Implement manual navigation (Previous/Next buttons or indicator dots) to improve user control.
- [ ] Add `aria-live="polite"` or similar accessibility attributes to the slideshow container.
- [ ] Consider adding a "Pause on Hover" feature to the slideshow interval logic.



<br>

## 🔧 105. Lesson 105 — *React Server Components vs Client Components - When To Use What*

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


### 105.2 Updating code/theory according the context:

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

### 🐞 105.3 Issues:

| Issue | Status | Log/Error |
|---|---|---|
| Confusion over execution environment | ✅ Fixed | Initially unclear where `console.log` outputs appear; clarified as terminal for Server Components. |
| Unnecessary Client Components | ⚠️ Identified | Risk of making parent components "Client" when only a small child needs interactivity. |
| Performance Overhead | ℹ️ Low Priority | Excessive use of Client Components can increase the JavaScript bundle unnecessarily. |

### 🧱 105.4 Pending Fixes (TODO)

- [ ] Audit all components in `app/components` to ensure they are Server Components unless interactivity is strictly required.
- [ ] Refactor navigation links to use a small Client Component wrapper if active states (like `usePathname`) are needed, rather than making the entire header a Client Component.
- [ ] Remove troubleshooting `console.log` statements from `MainHeader` and other components.




---
<br>
<br>
<br>
<br>

🔥 🔥 🔥 

<br>

## 🔧 XXX. Lesson XXX — *{{TITLE_NAME}}*

### 🧠 XXX.1 Context:


### ⚙️ XXX.2 Updating code/theory according the context:

#### XXX.2.1
```tsx
/*  */

```

#### XXX.2.2
```tsx
/*  */

```

### 🐞 XXX.3 Issues:
- **first issue**: something..

| Issue | Status | Log/Error |
|---|---|---|

### 🧱 XXX.4 Pending Fixes (TODO)

- [ ]