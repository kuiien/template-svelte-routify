const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')]
}

module.exports = config
