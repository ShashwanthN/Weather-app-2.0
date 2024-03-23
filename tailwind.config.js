module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#A8EB12',
      'yellow': '#ffc82c',
      'bgPrimary': '#051937',
      'bgSecondary': '#161b22',
      'bglighter': '#14181e',
      'textPrimary': '#e6edf3',
      'textSecondary': '#848d97',
      'white':'#ffffff',
      'bgTertiary':'#283041',
      'BorderCol':'#57606a',
      'divider': '#30363d'

    },
    screens: {
      xsm: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      maxWidth: {
        'custom-1': '500px',
        'custom-2': '200px', 
       },
    },
    
  },
  plugins: [
  ],
};
