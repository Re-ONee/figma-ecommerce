import { FunctionComponent } from "react";
import styles from "./LivingCardContainer.module.css";
const LivingCardContainer: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.livingWrapper}>
        <div className={styles.living}>Living</div>
      </div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.dining}>Dining</div>
      <img
        className={styles.imageLivingRoomIcon}
        alt=""
        src="/imageliving-room@2x.png"
      />
      <img className={styles.maskGroupIcon1} alt="" src="/mask-group1@2x.png" />
      <div className={styles.bedroomWrapper}>
        <div className={styles.living}>Bedroom</div>
      </div>
      <div className={styles.browseTheRangeParent}>
        <b className={styles.browseTheRange}>Browse The Range</b>
        <div className={styles.treatingAllSkin}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
};

export default LivingCardContainer;
