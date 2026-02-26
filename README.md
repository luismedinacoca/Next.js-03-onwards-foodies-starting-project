# NextLevel Food

A food-sharing community web application built with Next.js. Users can browse meals shared by others, view detailed recipes, and submit their own culinary creations. The app demonstrates modern Next.js patterns including the App Router, Server Components, Server Actions, and optimized image handling.

## Features

- Browse meals with grid layout and optimized images
- View meal details with dynamic routes (`/meals/[slug]`)
- Share new meals via form with image upload
- Image slideshow on the landing page
- Community page for social features
- Server-side validation and XSS sanitization
- Loading states with Suspense
- Error boundaries and custom 404 handling
- Static and dynamic metadata for SEO

## Key Concepts

- **App Router**: File-system routing with layouts and nested routes
- **Server Components**: Default rendering on the server; Client Components only where interactivity is needed
- **Server Actions**: Form submissions handled via `shareMeal` server action with `useActionState`
- **SQLite**: Local database via `better-sqlite3`; images stored in `public/images/`

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | JavaScript, React 18 |
| Styling | Vanilla CSS, CSS Modules |
| Database | SQLite (`better-sqlite3`) |
| Utilities | `slugify` (URL slugs), `xss` (sanitization) |
| Linting | ESLint (`eslint-config-next`) |

## Installation

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd 03-onwards-foodies-starting-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize the database (creates `meals.db` and seeds with sample data):
   ```bash
   node initdb.js
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

| Route | Description |
|-------|-------------|
| `/` | Landing page with slideshow and links |
| `/meals` | Browse all meals |
| `/meals/[slug]` | View a single meal's details |
| `/meals/share` | Share a new meal |
| `/community` | Community features |

### Share a Meal

1. Go to `/meals/share`
2. Fill in title, summary, instructions, creator name, and email
3. Upload an image (required)
4. Submit; you will be redirected to `/meals` on success

## Project Structure

```
03-onwards-foodies-starting-project/
├── app/
│   ├── community/          # Community page
│   ├── components/         # Shared components
│   │   ├── images/         # ImageSlideshow
│   │   ├── main-header/    # MainHeader, NavLink, MainHeaderBackground
│   │   └── meals/          # MealsGrid, MealItem, ImagePicker, MealsFormSubmit
│   ├── meals/
│   │   ├── [mealSlug]/     # Dynamic meal details
│   │   ├── share/          # Share meal form
│   │   ├── layout.js       # Meals section layout
│   │   ├── loading-out.js  # Loading UI
│   │   ├── error.js        # Error boundary
│   │   └── page.js         # Meals listing
│   ├── globals.css
│   ├── layout.js           # Root layout
│   ├── not-found.js        # 404 page
│   └── page.js             # Home page
├── lib/
│   ├── actions.js          # Server actions (shareMeal)
│   └── meals.js            # Database queries (getMeals, getMeal, saveMeal)
├── public/images/          # Uploaded meal images
├── docs/
│   └── LECTURE_STEPS.md    # Educational documentation
├── initdb.js               # DB initialization + seed
├── next.config.js
├── package.json
└── jsconfig.json           # Path alias: @/* → ./*
```

## Configuration

### Environment

No environment variables are required for basic operation. The database file `meals.db` is created locally in the project root.

### Next.js

- Server Actions body size limit: 2MB (`next.config.js`)
- Path alias: `@/*` maps to project root (`jsconfig.json`)

### Database

- SQLite file: `meals.db` (created by `initdb.js`)
- Schema: `meals` table with `id`, `slug`, `title`, `image`, `summary`, `instructions`, `creator`, `creator_email`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (default: port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Testing & Quality

- **ESLint**: `eslint-config-next` with `@next/next/no-img-element` disabled
- No automated tests configured; manual testing recommended

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes with clear messages
4. Push and open a pull request

## Roadmap

- Add AWS S3 (or similar) for cloud image storage instead of local filesystem
- Implement user authentication and ownership of meals
- Add search and filtering for meals
- Expand community features

## License

Private project. See repository settings for license details.

## Acknowledgments

Based on the [Next.js Complete Guide](https://www.udemy.com/course/nextjs-react-the-complete-guide/) by Maximilian Schwarzmüller. The `docs/LECTURE_STEPS.md` file contains detailed lesson notes and implementation steps.
