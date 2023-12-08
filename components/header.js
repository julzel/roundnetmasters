import { motion } from "framer-motion";
import styles from "../styles/components/header.module.scss";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#roundnet", label: "Roundnet" },
  { href: "#store", label: "Tienda" },
  { href: "#about", label: "Nosotros" },
  { href: "#contact", label: "Contacto" },
];

const Header = ({ onSectionChange, section }) => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 1 }}
    >
      <nav className={styles["header-nav"]}>
        {links.map(({ href, label }, index) => (
          <span
            role="link"
            tabIndex={0}
            className={styles["header-nav_item"]}
            key={href}
            onClick={() => onSectionChange(index)}
            style={{ textDecoration: section === index ? "underline" : "none" }}
            aria-label={label}
          >
            {label}
          </span>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
