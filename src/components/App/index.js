import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';
import React, {
  useState, useMemo, useCallback,
} from 'react';
import GlobalStyles from '../../assets/styles/global';
import themes from '../../assets/styles/themes';
import Router from '../../router';
import Header from '../Header';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(
    () => themes[theme] || themes.dark,
    [theme],
  );

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <HashRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Header onToggleTheme={handleToggleTheme} />
        <Router />
      </ThemeProvider>
    </HashRouter>
  );
}
