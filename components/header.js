import Link from "next/link";

import styles from "../styles/components/header.module.scss";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#store", label: "Tienda" },
  { href: "#roundnet", label: "Roundnet" },
  { href: "#about", label: "Nosotros" },
  { href: "#contact", label: "Contacto" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <div className="logo">
        <Link href="/">Roundnet Masters</Link>
      </div> */}
      <nav className={styles["header-nav"]}>
        {links.map(({ href, label }) => (
          <a className={styles["header-nav_item"]} key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
