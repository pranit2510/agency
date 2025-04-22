'use client'

const ThemeScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const storageKey = 'theme';
              const theme = localStorage.getItem(storageKey);
              const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              document.documentElement.classList.add(theme || systemTheme);
            } catch (e) {}
          })();
        `,
      }}
    />
  );
};

export default ThemeScript; 