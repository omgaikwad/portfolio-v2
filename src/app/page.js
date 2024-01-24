"use client";

import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import styles from "./page.module.css";
import EducationCard from "@/components/EducationCard/EducationCard";
import { motion } from "framer-motion";
import experienceData from "../app/experience.json";

export default function Home() {
  // Constants
  const experience = experienceData.experience;

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

        <div className={styles["hero_section__right_container"]}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnssvgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnsSvgjs="http://svgjs.dev/svgjs"
              viewBox="0 0 800 800"
            >
              <g
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  loop: Infinity,
                }}
                transform="matrix(0.9876883405951378,-0.15643446504023087,0.15643446504023087,0.9876883405951378,-57.64912225414747,-85.50155022196276)"
              >
                <circle
                  r="50"
                  cx="684"
                  cy="684"
                  stroke-width="0.5"
                  stroke="#f92c85"
                  fill="none"
                  opacity="0.47"
                  transform="rotate(-264, 400, 400)"
                ></circle>
                <circle
                  r="63.6875"
                  cx="648.5"
                  cy="648.5"
                  stroke-width="0.8125"
                  stroke="#f92c85"
                  fill="none"
                  opacity="0.45499999999999996"
                  transform="rotate(-276, 400, 400)"
                ></circle>
                <circle
                  r="77.375"
                  cx="613"
                  cy="613"
                  stroke-width="1.125"
                  stroke="#f92c85"
                  fill="none"
                  opacity="0.43999999999999995"
                  transform="rotate(-288, 400, 400)"
                ></circle>
                <circle
                  r="91.0625"
                  cx="577.5"
                  cy="577.5"
                  stroke-width="1.4375"
                  stroke="#f92c85"
                  fill="none"
                  opacity="0.425"
                  transform="rotate(-300, 400, 400)"
                ></circle>
                <circle
                  r="104.75"
                  cx="542"
                  cy="542"
                  stroke-width="1.75"
                  stroke="#f92c85"
                  fill="none"
                  opacity="0.41"
                  transform="rotate(-312, 400, 400)"
                ></circle>
                <circle
                  r="118.4375"
                  cx="506.5"
                  cy="506.5"
                  stroke-width="2.0625"
                  stroke="#f92c85"
                  fill="none"
                  opacity="0.39499999999999996"
                  transform="rotate(-324, 400, 400)"
                ></circle>
                <circle
                  r="132.125"
                  cx="471"
                  cy="471"
                  stroke-width="2.375"
                  stroke="#f92c85"
                  fill="none"
                  opacity="0.38"
                  transform="rotate(-336, 400, 400)"
                ></circle>
                <circle
                  r="145.8125"
                  cx="435.5"
                  cy="435.5"
                  stroke-width="2.6875"
                  stroke="#f92c85"
                  fill="none"
                  opacity="0.365"
                  transform="rotate(-348, 400, 400)"
                ></circle>
                <circle
                  r="159.5"
                  cx="400"
                  cy="400"
                  stroke-width="3"
                  stroke="#f92c85"
                  fill="none"
                  opacity="0.35"
                  transform="rotate(-360, 400, 400)"
                ></circle>
              </g>
            </svg>
          </motion.svg>{" "}
        </div>
      </div>

      <div className={styles["experience_section"]}>
        <h2 className={styles["section_heading"]}>Experience</h2>

        <div className={styles["experience_card_container"]}>
          {experience.map((item, index) => {
            return <ExperienceCard key={index} data={item} />;
          })}
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
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
        </div>
      </div>
    </main>
  );
}
