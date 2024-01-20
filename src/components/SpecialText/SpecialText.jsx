import styles from "./SpecialText.module.css";

const SpecialText = ({ children }) => {
  return <span className={styles["special_text"]}>{children}</span>;
};

export default SpecialText;
