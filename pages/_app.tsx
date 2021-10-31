import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';
// Styling
import '../styles/globals.scss';
// Animation
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Header from '../components/Header';

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
              {/* <Banner /> */}
              {/* <Nav /> */}
              <Component {...pageProps} />
              {!loading && (
                <div className='transition-image final'>
                  <motion.img
                    src={`../../images/image-2.jpg`}
                    layoutId='main-image-1'
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 1.6,
                    }}
                  />
                </div>
              )}
              <Footer />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Provider>
  );
}

export default MyApp;
