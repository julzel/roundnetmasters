import styles from "@/styles/components/title.module.scss";

const Title = ({ type, className, children }) => {
  {
    switch (type) {
      case "banner": 
        return (
          <h2 className={`${styles.title} ${styles.banner}`}>
            {children}
          </h2>
        );
      case "main-seo":
        return (
          <h1 className={styles.seo}>
            {children}
          </h1>
        );
      case "secondary-seo":
        return (
          <h2 className={styles.seo}>
            {children}
          </h2>
        );
      case "h1":
        return (
          <h1 className={`${styles.title} ${styles.h1} ${className}`}>{children}</h1>
        );
      case "h2":
        return (
          <h2 className={`${styles.title} ${styles.h2} ${className}`}>{children}</h2>
        );
      case "h3":
        return (
          <h3 className={`${styles.title} ${styles.h3} ${className}`}>{children}</h3>
        );
      case "h4":
        return (
          <h4 className={`${styles.title} ${styles.h4} ${className}`}>{children}</h4>
        );
      case "h5":
        return (
          <h5 className={`${styles.title} ${styles.h5} ${className}`}>{children}</h5>
        );
      case "h6":
        return (
          <h6 className={`${styles.title} ${styles.h6} ${className}`}>{children}</h6>
        );
      default:
        return <h2 className={`${styles.title} ${className}`}>{children}</h2>;
    }
  }
};

export default Title;
