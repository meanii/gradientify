module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      'synthwave',
      'emerald',
      'forest',
      'dark',
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}