import SpecialText from "../SpecialText/SpecialText";
import styles from "./EducationCard.module.css";

const EducationCard = (props) => {
  const { data } = props;
  const { name, degree, duration, grade, logo, totalTime } = data;

  return (
    <div className={styles["experience_card"]}>
      <div className={styles["experience_card__org_container"]}>
        <div className={styles["org_logo_container"]}>
          <img
            className={styles["org_logo"]}
            src={logo}
            alt="Organization Logo"
          />
        </div>

        <div className={styles["experience_container"]}>
          <div className={styles["org_details_container"]}>
            <p className={styles["org_name"]}>{name}</p>
            <p className={styles["job_type"]}>{degree}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <p className={styles["job_duration"]}>{duration}</p>
              <p className={styles["job_duration"]}>•</p>

              <SpecialText className={styles["experience_duration"]}>
                {totalTime}
              </SpecialText>
            </div>
          </div>

          <div className={styles["job_role_container"]}>
            <div className={styles["job_description_container"]}>
              {grade && (
                <p className={styles["skills"]}>
                  <span className={styles["skills_title"]}>Grade: </span>
                  <span className={styles["skills_list"]}>{grade}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <hr className={styles["divider"]} /> */}
    </div>
  );
};

export default EducationCard;
