import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
// Animation
import { AnimatePresence } from 'framer-motion';
// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AnimatePresence
        exitBeforeEnter
        // initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
