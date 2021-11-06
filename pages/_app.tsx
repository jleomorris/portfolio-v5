import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';
// Styling
import '../styles/globals.scss';
import bannerStyles from '../styles/Banner.module.scss';
// Animation
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Banner from '../components/Banner';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <Provider store={store}>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence
          exitBeforeEnter
          // initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {loading ? (
            <motion.div key='loader'>
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Provider>
  );
}

export default MyApp;
