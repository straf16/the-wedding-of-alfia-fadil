tailwind.config = {
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '16': '16px',
    },
    backgroundPosition: {
      top: 'top',
      center: 'center',
      'top-4': 'center top -15rem',
    },
    fontFamily: {
      sans: ['Gilda Display', 'sans-serif'],
      serif: ['Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'cream': '#d5bdaf',
        'brown': '#C9A498',
      },
    }
  },
}