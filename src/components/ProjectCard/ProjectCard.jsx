import { Icon } from "@iconify/react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const { data } = props;
  const { title, subtitle, description, githubRepoLink, liveProjectLink } =
    data;

  return (
    <div className={styles["project_card"]}>
      <div className={styles["project_card__image_container"]}>
        {/* random square image */}
        <img
          src={`https://picsum.photos/seed/${Math.random()}/500/500`}
          alt="random"
          className={styles["project_card__image"]}
        />
      </div>

      <div className={styles["project_card__content"]}>
        <div className={styles["project_card__title_container"]}>
          <h3 className={styles["project_card__title"]}>{title}</h3>

          <p className={styles["project_card__subtitle"]}>{subtitle}</p>
        </div>
        <p className={styles["project_card__description"]}>{description}</p>
        <div className={styles["project_card__action_button_container"]}>
          <a
            href={githubRepoLink}
            className={`${styles["project_card__action_button"]}`}
          >
            Github <Icon icon="mdi:github" />
          </a>
          <a
            href={liveProjectLink}
            className={`${styles["project_card__action_button"]}`}
          >
            Live <Icon icon="fluent:open-12-regular" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
