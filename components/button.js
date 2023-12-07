import styles from "@/styles/components/button.module.scss";

const Button = ({ onClick, children, variant = "primary", borderless, type='button' }) => {
  const buttonType = variant === "primary" ? styles.primary : styles.secondary;
  const borderlessType = borderless ? styles.borderless : "";

  if (type === 'link') {
    return (
      <span className={`${styles.button} ${buttonType} ${borderlessType}`}>
        {children}
      </span>
    );
  }

  return (
    <button
      className={`${styles.button} ${buttonType} ${borderlessType}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
