import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import { RootProvider } from './contextProvider/RootContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RootProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </RootProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
