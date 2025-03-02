import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './components/ui/theme-provider.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.tsx';
import { Toaster as Toast } from 'sonner';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from '@/components/ui/toaster.tsx';
import { TooltipProvider } from './components/ui/tooltip.tsx';
import GoToTop from './components/shared/GoToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TooltipProvider>
          <RouterProvider router={router} />
          <Toast richColors />
          </TooltipProvider>
          <Toaster />
          <GoToTop />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
