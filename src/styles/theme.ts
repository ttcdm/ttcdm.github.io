export const theme = {




colors: {
  // DARKER BACKGROUND LAYERS
  primary:   '#070B14', // page background (darker than before)
  secondary: '#0A0F1C', // cards/sections

  // INTERACTIVE ACCENTS (keep cyan CTAs)
  accent:    '#22D3EE',
  light:     '#2079b4ff',

  // NAME / BRAND COLOR (use this for your name)
  name:      '#A78BFA', // pick any: e.g., '#8B5CF6' (violet), '#7DD3FC' (soft cyan)

  // TYPOGRAPHY
  text:      '#E2E8F0',
  textLight: '#94A3B8',
  textDark:  '#070B14',

  // GLASS
  glass: {
    background: 'rgba(7, 11, 20, 0.35)',
    border:     'rgba(167,139,250,0.18)',
    card:       'rgba(10, 15, 28, 0.55)',
  },

  // GRADIENTS
  gradient: {
    main:   'linear-gradient(135deg, #070B14 0%, #0A0F1C 50%, #070B14 100%)',
    accent: 'linear-gradient(135deg, #22D3EE 0%, #A78BFA 100%)',
    glass:  'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)',
  },

  // OVERLAYS
  overlay: {
    light: 'rgba(255,255,255,0.06)',
    dark:  'rgba(2,6,23,0.55)',
  },
},







  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  transitions: {
    default: '0.3s ease',
  },
};

export type Theme = typeof theme;
