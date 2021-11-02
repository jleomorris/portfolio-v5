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
              <Banner />
              {/* <Nav /> */}
              {!loading && (
                <div className={`${bannerStyles['transitionImage--final']}`}>
                  <motion.img
                    src={`https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635814195/Portfolio-v5/Loader/main.jpg`}
                    layoutId='main-image-1'
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 1.6,
                    }}
                  />
                </div>
              )}
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
