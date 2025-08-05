INITIAL.md
==========

This file provides a quick overview for new contributors to the Kodomo Gakuen website project.

* * * * *

🚀 Project Overview
-------------------

This is a **bilingual, static frontend website** for Kodomo Gakuen, a Japanese preschool/kindergarten serving the Higashi Yamato area. It's built using **React** and the **Next.js** framework, with **Framer Motion** handling animations. Styling is primarily handled with **Tailwind CSS** for utility-first development, augmented by **tailwind-merge** for robust class management. The entire site is self-contained on the frontend with **no backend services**.

* * * * *

🛠️ Key Technologies
--------------------

-   **Frameworks**: React.js, Next.js

-   **Animation**: Framer Motion

-   **Styling**: **Tailwind CSS**, tailwind-merge

-   **Development**: Next.js development server

-   **Deployment**: Static Site Generation (SSG) via Next.js `build` output

* * * * *

⚡ Getting Started (Development Commands)
----------------------------------------

To get the project up and running locally:

1.  **Install Dependencies**:

    Bash

    ```
    npm install
    # or
    yarn install

    ```

2.  **Start Development Server**: This will launch the site with hot-reloading.

    Bash

    ```
    npm run dev
    # or
    yarn dev

    ```

    The site will typically be accessible at `http://localhost:3000`.

3.  **Build for Production**:

    Bash

    ```
    npm run build
    # or
    yarn build

    ```

    This generates the static HTML, CSS, and JS files in the `out/` directory ready for deployment.

* * * * *

📁 High-Level Project Structure
-------------------------------

-   `/pages/`: Next.js pages, defining routes (e.g., `index.js`, `en/about.js`).

-   `/components/`: Reusable React components (e.g., `Header`, `Footer`, `Hero`).

-   `/public/`: Static assets like images (`/public/images/`) and documents (`/public/documents/`).

-   `/styles/` (or similar): Global CSS, often including Tailwind base styles.

-   `tailwind.config.js`: Tailwind CSS configuration.

* * * * *

🏗️ Layout & Content Conventions
--------------------------------

-   **Global Layout**: The **Header** and **Footer** components are fixed and consistent across all pages.

-   **Hero Sections**:

    -   The **Homepage** (`/pages/index.js` or `/pages/[lang]/index.js`) features a **unique, distinct hero section**.

    -   **All other pages** use a **standardized hero component** that prominently displays the specific page title within it.

-   **Bilingual Content**: Content is managed within the codebase, supporting both Japanese (root) and English (`/en/` paths) versions, primarily handled via Next.js's internationalized routing features.

* * * * *

🎨 Styling
----------

-   We use **Tailwind CSS** for a utility-first approach, applying classes directly in JSX.

-   **tailwind-merge** is used to combine and resolve conflicting Tailwind classes efficiently.

-   The project adopts a **mobile-first** approach for responsive design using Tailwind's responsive prefixes (e.g., `md:`, `lg:`).

 Examples
----------

-   URL: https://www.kodomogakuen.com/

- Follow this exact layout with these pages


* * * * *

💡 Important Notes
------------------

-   This is a **fully static site**; there is no database or server-side API. All content is part of the build.

-   Animations are primarily handled with **Framer Motion**, so familiarize yourself with its basics.

-   Follow existing code patterns for component structure, styling, and data handling.

* * * * *

This version of `INITIAL.md` gives a clearer picture to anyone new to the project about the core styling methodology.