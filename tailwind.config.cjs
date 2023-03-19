/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: { min: "1149px" },
        mobile: { min: "300px", max: "1148px" },
        xs: { min: "300px", max: "640px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1535px" },
        "2xl": { min: "1536px" },
      },
      colors: {
        "primary-color": "#175756",
        "secondary-color": "#f3a803",
        "textColor-grey": "#616161",
        "textColor-blue": "#2C8EFF",
        "textColor-lightGrey": "#B8B8B8",
        green: "#48CA5C",
        orange: "#EB7421",
      },
    },
  },
  plugins: [],
};
