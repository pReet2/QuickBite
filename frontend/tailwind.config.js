/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"

];
export const theme = {
  extend: {},
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('flowbite/plugin')

];