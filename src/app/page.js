"use client";

import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import styles from "./page.module.css";

const HighlightedText = ({ children }) => (
  <span className={styles["highlighted_text"]}>{children}</span>
);

export default function Home() {
  const transition = {
    duration: 4,
    ease: "easeInOut",
  };

  return (
    <main className={styles["main"]}>
      <div className={styles["navbar"]}>
        <div className={styles["logo_container"]}>
          <img
            src="/assets/logo/logo.png"
            alt="logo"
            className={styles["logo"]}
          />
        </div>

        <div className={styles["hamburger_container"]}>
          <button className={styles["button"]}>Download Resume</button>
        </div>
      </div>

      <div className={styles["hero_section"]}>
        <div className={styles["hero_section__left_container"]}>
          <div className={styles["hero_section__left_container__text"]}>
            <div className={styles["avatar_container"]}>
              <img
                src="/assets/images/profile_pic.jpeg"
                alt="hero"
                className={styles["avatar"]}
              />
            </div>
            <h1 className={styles["heading"]}>Om Gaikwad</h1>
            <p className={styles["sub_heading"]}>Software engineer</p>
            <p className={styles["about_summary"]}>
              I'm Om Gaikwad, a software engineer based in Pune, India. I
              currently work as a SDE Frontend at BrainCells for over 1.5 years.
              I love building innovative, scalable and responsive products while
              crafting beautiful user experiences.
            </p>

            <button style={{ marginTop: "1rem" }} className={styles["button"]}>
              Download Resume
            </button>
          </div>
        </div>

        <div className={styles["hero_section__right_container"]}>klsjdf</div>
      </div>

      <div className={styles["experience_section"]}>
        <h2 className={styles["section_heading"]}>Experience</h2>

        <div className={styles["experience_card_container"]}>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>

      <div className={styles["project_section"]}>
        <h2 className={styles["section_heading"]}>Projects</h2>

        <div className={styles["project_card_container"]}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      <div className={styles["education_section"]}>
        <h2 className={styles["section_heading"]}>Education</h2>

        <div className={styles["education_card_container"]}>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </main>
  );
}
