import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
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
          <h3 className={styles["project_card__title"]}>Spotlight</h3>

          <p className={styles["project_card__subtitle"]}>Video Library App</p>
        </div>
        <p className={styles["project_card__description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quos, voluptatem quod, quia nemo voluptate quibusdam
          voluptatibus quae doloribus consequuntur. Quisquam voluptates, quos,
          voluptatem quod, quia nemo voluptate quibusdam voluptatibus quae
          doloribus consequuntur.
        </p>
        <div className={styles["project_card__action_button_container"]}>
          <a href="" className={`${styles["project_card__action_button"]}`}>
            Github
          </a>
          <a href="" className={`${styles["project_card__action_button"]}`}>
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
