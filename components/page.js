// reusable layout component for pages
// keeps the header and footer consistent across pages
import { motion } from "framer-motion";
import Header from "./header";

import styles from "../styles/components/page.module.scss";

const Page = ({ children }) => {
  return (
    <div className="page">
      <motion.main
        className={styles.page}
        initial={{ opacity: 0, scale: 0, }}
        animate={{ opacity: 1, scale: 1, }}
        exit={{ opacity: 0, scale: 0, }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Page;
