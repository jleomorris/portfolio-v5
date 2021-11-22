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
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Contact from '../components/Contact';
import TabletMobileHeader from '../components/TabletMobileHeader.js';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [isCurrentPageContact, setIsCurrentPageContact] =
    useState<boolean>(false);
  const [isTabletMobileHeaderOpen, setIsTabletMobileHeaderOpen] =
    useState<boolean>(false);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  useEffect(() => {
    if (router.route === '/contact') {
      setIsCurrentPageContact(true);
    } else {
      setIsCurrentPageContact(false);
    }
  }, [router]);

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
              <Header
                isTabletMobileHeaderOpen={isTabletMobileHeaderOpen}
                setIsTabletMobileHeaderOpen={setIsTabletMobileHeaderOpen}
              />
              <Component {...pageProps} />
              {!isCurrentPageContact && <Contact />}
              <Footer />
              {isTabletMobileHeaderOpen && <TabletMobileHeader />}
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Provider>
  );
}

export default MyApp;
