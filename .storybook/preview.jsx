import React, { useEffect } from 'react';
import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },

  // Toggle "Light / Dark" en la toolbar de Storybook.
  // Cambia la clase .dark en <html>, que es lo que usan
  // las variables de tema de shadcn/ui (y por lo tanto de tweakcn).
  globalTypes: {
    theme: {
      description: 'Tema de color',
      toolbar: {
        title: 'Tema',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light',
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
      }, [theme]);
      return <Story />;
    },
  ],
};

export default preview;
