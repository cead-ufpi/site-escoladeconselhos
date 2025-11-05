/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#0D47A1',
                'secondary': '#1976D2',
                'accent': '#42A5F5',
                'text-primary': '#212121',
                'text-secondary': '#757575',
                'background': '#FFFFFF',
                'surface': '#F5F5F5',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
