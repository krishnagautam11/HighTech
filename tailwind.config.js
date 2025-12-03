module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        '320': '320px',
        '991': '991px',
        '1200' : '1200px',
      },
    },
  },
  plugins: [],
}


// export const content = [
//   "./src/**/*.{js,jsx,ts,tsx}",
//   "./public/index.html"
// ];
// export const theme = {
//   extend: {
//     screens: {
//       '320':'320px',
//       '991': '991px',
//     },
//   },

// };
// export const plugins = [];