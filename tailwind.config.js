/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
            },
            colors: {
                blue: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
            },
            fontSize: {
                'caption': ['10px', '14px'],
                'body': ['12px', '18px'],
                'heading': ['15px', '21px'],
                'title': ['18px', '25px'],
            },
        },
    },
    plugins: [],
};
