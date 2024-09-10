import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
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
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <RootProvider>
            <ThemeProvider>
              <Router />
            </ThemeProvider>
          </RootProvider>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
}
