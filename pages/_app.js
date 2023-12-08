import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { config } from '@fortawesome/fontawesome-svg-core'

import "../styles/global.scss";
import "../styles/motion.scss";
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
