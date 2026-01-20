import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1F7A5A", // User Spec Green
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#F5F6F7", // User Spec Light Gray
                    foreground: "#111111",
                },
                accent: {
                    DEFAULT: "#FACC15", // User Spec Yellow
                    foreground: "#111111",
                },
                background: "#ffffff",
                foreground: "#111111", // User Spec Black
                muted: "#444444", // User Spec Dark Gray
                border: "#E5E7EB", // User Spec Border
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    "2xl": "1200px",
                },
            },
        },
    },
    plugins: [],
};
export default config;
