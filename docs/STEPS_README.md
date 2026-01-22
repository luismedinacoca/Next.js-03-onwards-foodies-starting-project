

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




---
<br>
<br>
<br>
<br>

🔥 🔥 🔥 

<br>

## 🔧 XX. Lesson YYY — *{{TITLE_NAME}}*

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
