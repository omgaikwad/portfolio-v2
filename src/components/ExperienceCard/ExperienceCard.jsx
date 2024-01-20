import SpecialText from "../SpecialText/SpecialText";
import styles from "./ExperienceCard.module.css";

const ExperienceCard = () => {
  return (
    <div className={styles["experience_card"]}>
      <div className={styles["experience_card__org_container"]}>
        <div className={styles["org_logo_container"]}>
          <img
            className={styles["org_logo"]}
            src="https://via.placeholder.com/150"
            alt="Organization Logo"
          />
        </div>

        <div className={styles["experience_container"]}>
          <div className={styles["org_details_container"]}>
            <p className={styles["org_name"]}>BrainCells</p>
            <SpecialText className={styles["experience_duration"]}>
              1 yr 8 mos
            </SpecialText>
            <p className={styles["org_location"]}>Pune, Maharashtra, India</p>
          </div>

          <div className={styles["job_role_container"]}>
            <div className={styles["job_title_container"]}>
              <p className={styles["job_role"]}>SDE</p>
              <p className={styles["job_type"]}>Full-time</p>
              <p className={styles["job_duration"]}>
                Jul 2019 - Present • <SpecialText>8 mons</SpecialText>{" "}
              </p>
              <p className={styles["job_location"]}>On-site</p>
            </div>

            <div className={styles["job_description_container"]}>
              <p className={styles["skills"]}>
                <span className={styles["skills_title"]}>Skills: </span>
                <span className={styles["skills_list"]}>
                  Python, Django, React, JavaScript, HTML, CSS
                </span>
              </p>
              <p className={styles["job_description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatum, voluptatem, quibusdam, dolore voluptate voluptates
                quia quos quod quae doloremque fugiat. Quisquam, quibusdam
                voluptatem. Quisquam, quibusdam voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <hr className={styles["divider"]} /> */}
    </div>
  );
};

export default ExperienceCard;
