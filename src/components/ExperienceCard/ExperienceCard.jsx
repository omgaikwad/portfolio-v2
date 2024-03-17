import SpecialText from "../SpecialText/SpecialText";
import styles from "./ExperienceCard.module.css";

const ExperienceCard = ({ data }) => {
  const {
    isExperienceConnected = false,

    company,
    companyLogo,
    companyWebsite,
    experience,
    address,
    designation,
    jobTime,
    timeDuration,
    locationType,
    skills,
    description,
    connectedExperience,
    isSameOrgExperience,
  } = data;

  return (
    <div className={styles["experience_card"]}>
      <div className={styles["experience_card__org_container"]}>
        <div className={styles["org_logo_container"]}>
          {!isSameOrgExperience && (
            <img
              className={styles["org_logo"]}
              src={companyLogo}
              alt="Organization Logo"
            />
          )}
        </div>

        <div className={styles["experience_container"]}>
          {!isSameOrgExperience && (
            <div className={styles["org_details_container"]}>
              <p className={styles["org_name"]}>{company}</p>

              {isExperienceConnected ? (
                <SpecialText className={styles["experience_duration"]}>
                  {connectedExperience}
                </SpecialText>
              ) : (
                <SpecialText className={styles["experience_duration"]}>
                  {experience}
                </SpecialText>
              )}

              <p className={styles["org_location"]}>{address}</p>
            </div>
          )}

          <div className={styles["job_role_container"]}>
            <div className={styles["job_title_container"]}>
              <p className={styles["job_role"]}>{designation}</p>
              <p className={styles["job_type"]}>{jobTime}</p>
              <p className={styles["job_duration"]}>
                {timeDuration} • <SpecialText>{experience}</SpecialText>
              </p>
              <p className={styles["job_location"]}>{locationType}</p>
            </div>

            <div className={styles["job_description_container"]}>
              <p className={styles["skills"]}>
                <span className={styles["skills_title"]}>Skills: </span>
                <span className={styles["skills_list"]}>
                  {skills.map((skill, index) => (
                    <span key={index} className={styles["skill"]}>
                      {skill},{" "}
                    </span>
                  ))}
                </span>
              </p>
              <p className={styles["job_description"]}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
