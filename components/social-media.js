import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

import styles from "@/styles/components/social-media.module.scss";

const SocialMedia = () => {
  return (
    <nav className={styles["social-media"]}>
      <Link href="https://www.facebook.com/RoundnetMastersCR">
        <motion.i
          // whileHover={{ scale: 2 }} // Example spring effect
          // transition={{ type: "spring", stiffness: 300 }} // Customization of the spring effect
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </motion.i>
      </Link>
      <Link href="https://www.instagram.com/roundnetmasterscr/">
        <i>
          <FontAwesomeIcon icon={faYoutube} />
        </i>
      </Link>
      <Link href="https://www.youtube.com/channel/UCk6XJZ7jX6y0YFkZ6vYq0XQ">
        <i>
          <FontAwesomeIcon icon={faFacebookF} />
        </i>
      </Link>
      <Link href="https://www.tiktok.com/@roundnetmasterscr">
        <i>
          <FontAwesomeIcon icon={faTiktok} />
        </i>
      </Link>
    </nav>
  );
};

export default SocialMedia;
