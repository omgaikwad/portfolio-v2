import SpecialText from "../SpecialText/SpecialText";
import styles from "./EducationCard.module.css";

const EducationCard = () => {
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
            <p className={styles["org_name"]}>
              D. Y. Patil College of Engineering (DYPCOE) , Akurdi, Pune
            </p>
            <p className={styles["job_type"]}>
              Bachelor of Engineering, Information Technology
            </p>
            <p className={styles["job_duration"]}>
              Aug 2019 - Jun 2023 •{" "}
              <SpecialText className={styles["experience_duration"]}>
                4 yrs
              </SpecialText>
            </p>
          </div>

          <div className={styles["job_role_container"]}>
            <div className={styles["job_description_container"]}>
              <p className={styles["skills"]}>
                <span className={styles["skills_title"]}>Grade: </span>
                <span className={styles["skills_list"]}>8.50</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <hr className={styles["divider"]} /> */}
    </div>
  );
};

export default EducationCard;
