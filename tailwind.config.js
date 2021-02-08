module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      maru: ['Yusei Magic'],
    },
    extend: {
      // backgroundImage: (theme) => ({
      //   'hero-pattern':
      //     "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=840&q=80')",
      //   'footer-texture':
      //     "url('https://images.unsplash.com/photo-1531386450450-969f935bd522?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80')",
      // }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
