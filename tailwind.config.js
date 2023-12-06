/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        "7": "1.75rem",
        "2.5xl": "2rem",

      },

      width: {
        highlightcard: "22rem"
      },
      height: {
        header: "25vh",
        dashboard: "75vh"
      },

      maxWidth: {
        app: "70rem"
      },

      gridTemplateColumns: {
        table: "4fr 2fr 2fr 1fr"
      },

      colors: {
        purple: {
          300: "#885AFF",
          400: "#6933FF",
          500: "#5429CC"
        },
        green: {
          400: "#33CC95"
        },
        gray: {
          500: "#969CB2",
          700: "#363F5F"
        },
        red: {
          500: "#E52E4D",
        },
        background: {
          "primary": "#F0F2F5"
        }
      }
    },
  },
  plugins: [],
}

