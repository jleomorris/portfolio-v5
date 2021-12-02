import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';
// Styling
import '../styles/globals.scss';
import bannerStyles from '../styles/Banner.module.scss';
// Animation
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
// Google analytics
import ReactGA from 'react-ga';
// Components
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Contact from '../components/Contact';
import TabletMobileHeader from '../components/TabletMobileHeader.js';
import { useRouter } from 'next/router';

const TRACKING_ID = 'UA-205580979-2'; // YOUR_OWN_TRACKING_ID

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [isCurrentPageContact, setIsCurrentPageContact] =
    useState<boolean>(false);
  const [isTabletMobileHeaderOpen, setIsTabletMobileHeaderOpen] =
    useState<boolean>(false);

  // Initialise GA
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    loading
      ? document.querySelector('body')!.classList.add('loading')
      : document.querySelector('body')!.classList.remove('loading');
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
              {!isTabletMobileHeaderOpen && <Component {...pageProps} />}
              {!isCurrentPageContact && <Contact />}
              <Footer />
              {isTabletMobileHeaderOpen && (
                <TabletMobileHeader
                  setIsTabletMobileHeaderOpen={setIsTabletMobileHeaderOpen}
                />
              )}
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Provider>
  );
}

export default MyApp;
