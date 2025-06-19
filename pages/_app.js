import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import AdvancedLayout from '../components/AdvancedLayout';

function MyApp({ Component, pageProps }) {
  return (
    <AdvancedLayout>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
      <Analytics />
    </AdvancedLayout>
  );
}

export default MyApp;
