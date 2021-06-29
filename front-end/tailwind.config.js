const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        15: "60px",
        wrapper: "15px",
        dropdown: "264px",
        checkbox: "16px",
      },
      width: {
        wrapper: "15px",
        dropdown: "250px",
        checkbox: "16px",
      },
      minWidth: {
        75: "75px",
        200: "200px",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        primary: "#9ba8b0",
        secondary: "#1f282d",
        fakeBlack: "#2c3439",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        secondary: "#1f282d",
        fakeBlack: "#2c3439",
        hover: "#f3f5f7",
      }),
      textColor: {
        fakeWhite: "#f9fafb",
        grey: "#5a6872",
        icon: "#0080a4",
      },
      minHeight: {
        14: "14px",
      },
      fontSize: {
        sm: ["12px", "18px"],
        md: ["14px", "20px"],
        price: ["0.8em", "32px"],
      },
      zIndex: {
        minus: -1,
      },
      inset: {
        "-66px": "-66px",
      },
      boxShadow: {
        medium:
          "0 10px 20px rgb(25 32 36 / 10%), 0 3px 6px rgb(25 32 36 / 4%), 0 -3px 6px rgb(25 32 36 / 4%)",
      },
      outline: {
        0: "0",
      },
      transitionDelay: {
        0: "0ms",
      },
      margin: {
        xIcon: "3px",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["hover", "group-hover"],
      backgroundColor: ["label-checked", "checked", "before"],
      inset: ["before"],
      zIndex: ["before"],
      borderColor: ["label-checked", "checked"],
      textColor: ["label-checked", "checked"],
    },
  },
  plugins: [
    require("tailwindcss-pseudo-elements"),
    require("@tailwindcss/forms"),
    plugin(({ addVariant, e }) => {
      addVariant("label-checked", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`); // escape class
          const yourSelector = 'input[type="checkbox"]'; // your input selector. Could be any
          return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
        });
      });
    }),
  ],
};
