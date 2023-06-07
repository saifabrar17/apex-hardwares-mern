module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-tools': "url('https://template65062.motopreview.com/mt-demo/65000/65062/mt-content/uploads/2017/11/mt-1257_home_slider-5.jpg')",
        'hero-cutter': "url('https://template65062.motopreview.com/mt-demo/65000/65062/mt-content/uploads/2017/11/mt-1257_home_slider04.jpg')",
        'hero-hammer': "url('https://template65062.motopreview.com/mt-demo/65000/65062/mt-content/uploads/2017/11/mt-1257_home_slider-3.jpg')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#28AAA9",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
