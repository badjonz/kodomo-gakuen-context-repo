# Template and Framework Selection

Based on analysis of the current project structure and CLAUDE.md documentation, Kodomo Gakuen is already using a well-established React/Next.js frontend stack.

**Current Framework Analysis:**
- **Framework:** Next.js with React (App Router structure)
- **Styling:** Tailwind CSS with tailwind-merge utility
- **Animation:** Framer Motion for declarative animations  
- **Type Safety:** TypeScript (recommended, currently JavaScript-based)
- **Build Tool:** Next.js built-in (Webpack/Turbo under the hood)
- **Development:** Hot reloading via `npm run dev`

**Project Structure Already Established:**
```
/src/app/          # Next.js App Router
/src/components/   # React components organized by type
/src/utils/        # Utility functions (cn.ts for class merging)
/public/images/    # Static assets
```

**Key Dependencies in Use:**
- `framer-motion` - Advanced animations
- `tailwind-merge` - Intelligent CSS class merging
- `clsx` - Conditional class utility

This is brownfield development with an existing, well-structured codebase that follows Next.js best practices.
