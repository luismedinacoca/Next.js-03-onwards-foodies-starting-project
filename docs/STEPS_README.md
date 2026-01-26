

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



---
<br>
<br>
<br>
<br>

🔥 🔥 🔥 

<br>

## 🔧 XX. Lesson XXX — *{{TITLE_NAME}}*

### 🧠 XX.1 Context:


### ⚙️ XX.2 Updating code/theory according the context:

#### XX.2.1
```tsx
/*  */

```

#### XX.2.2
```tsx
/*  */

```

### 🐞 XX.3 Issues:
- **first issue**: something..

| Issue | Status | Log/Error |
|---|---|---|

### 🧱 XX.4 Pending Fixes (TODO)

- [ ]
