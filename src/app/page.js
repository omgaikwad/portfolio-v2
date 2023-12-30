import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["navbar"]}>
        <div className={styles["logo_container"]}>
          <img
            src="/assets/logo/omgaikwad-logo.png"
            alt="logo"
            className={styles["logo"]}
          />
        </div>

        <div></div>
      </div>

      <div className={styles["hero_container"]}>
        <h1 className={styles["heading"]}>Om Gaikwad</h1>
        <p className={styles["sub_heading"]}>Full Stack Developer</p>
      </div>
    </main>
  );
}
