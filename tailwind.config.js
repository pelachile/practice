module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      'nuetral-bg': '#1F2128',
      nuetral: {
        100: '#0F0F12',
        300: '#2C2C35',
        400: '#64646F',
        500: '#8B8B93',
        1100: '#FFFFFF',
      },
      brand: {
        1: '#7364DB',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
