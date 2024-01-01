import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["navbar"]}>
        <div className={styles["logo_container"]}>
          <img
            src="/assets/logo/logo.png"
            alt="logo"
            className={styles["logo"]}
          />
        </div>

        <div className={styles["hamburger_container"]}>
          {/* <svg
            width="4rem"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.4 -0.97735 10.8 7.955"
          >
            <path
              class={styles["wave"]}
              d="M 0 0 C 2 -2 3 2 5 0 C 7 -2 8 2 10 0 M 0 3 C 2 1 3 5 5 3 C 7 1 8 5 10 3 M 0 6 C 2 4 3 8 5 6 C 7 4 8 8 10 6"
              stroke="#5ebec4"
              stroke-width="0.4"
              fill="none"
            />
          </svg> */}
        </div>
      </div>

      <div className={styles["hero_container"]}>
        <h1 className={styles["heading"]}>Om Gaikwad</h1>
        <p className={styles["heading"]}>Full Stack Developer</p>
      </div>
    </main>
  );
}
