import Link from "next/link";
import styles from "../styles/components/header.module.scss";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#roundnet", label: "Roundnet" },
  { href: "#store", label: "Tienda" },
  { href: "#about", label: "Nosotros" },
  { href: "#contact", label: "Contacto" },
];

const Header = ({ onSectionChange }) => {
  return (
    <header className={styles.header}>
      <nav className={styles["header-nav"]}>
        {links.map(({ href, label }, index) => (
          <span
            role="link"
            tabIndex={0 }
            className={styles["header-nav_item"]}
            key={href}
            onClick={() => onSectionChange(index)}
          >
            {label}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Header;
