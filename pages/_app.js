import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import AdvancedLayout from '../components/AdvancedLayout';

function MyApp({ Component, pageProps }) {
  return (
    <AdvancedLayout>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </AdvancedLayout>
  );
}

export default MyApp;
