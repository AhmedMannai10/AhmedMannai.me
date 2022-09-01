/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./sections/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["Ubuntu"],
                inter: ["Inter"],
            },
            colors: {
                //light mode colors
                primary: "#dbe1e8",
                secondary: "#FFF",
                h_color: "#12181B",
                text_color: "#454E56",

                //dark mode colors
                dark_primary: "#12181B",
                dark_secondary: "#2A2E35",
                dark_h_color: "#FFF",
                dark_text_color: "#D4D5D7",

                bg_btn: "#473bd5",
            },
        },
    },
    plugins: [],
};
