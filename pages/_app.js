import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import "../styles/global.scss";
import "../styles/motion.scss";

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
