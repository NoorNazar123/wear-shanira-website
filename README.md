# Wear Shanira

Wear Shanira is a modern e-commerce web application built with [Next.js](https://nextjs.org), designed to showcase and sell premium handbags and accessories. The project emphasizes a clean, minimalistic design and provides a seamless user experience.

## Features

- **Dynamic Product Catalog**: Displays a collection of handbags with detailed descriptions and images.
- **Shopping Cart**: Add, remove, and manage items in the cart.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Custom Animations**: Smooth transitions and animations for a premium feel.
- **Global State Management**: Context API for managing cart state.
- **Tailwind CSS**: For styling and layout.

---

## Folder Structure

The project is organized as follows:

```plaintext
wear-shanira/
├── .next/                # Next.js build output (ignored in version control)
├── app/                  # Application source code
│   ├── components/       # Reusable UI components
│   │   └── ProductCard.tsx
│   ├── bags/             # Bags collection page
│   │   └── page.tsx
│   ├── layout.tsx        # Root layout with global context and header/footer
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles using Tailwind CSS
├── public/               # Static assets (images, icons, etc.)
│   ├── images/           # Product and hero images
├── types/                # TypeScript type definitions (if any)
├── .gitignore            # Git ignore rules
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
├── eslint.config.mjs     # ESLint configuration
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS
└── README.md             # Project documentation
```

---

## Folder Structure Diagram

Below is a visual representation of the folder structure:

```
wear-shanira
├── .next
├── app
│   ├── components
│   │   └── ProductCard.tsx
│   ├── bags
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
├── public
│   ├── images
├── types
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

---

## Getting Started

To get started with the project, follow these steps:

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run the Development Server**:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed programming language for JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ESLint**: Linting tool for maintaining code quality.

---

## Contribution

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License.
