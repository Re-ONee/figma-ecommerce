import { FunctionComponent } from "react";
import styles from "./ShareContainer.module.css";
const ShareContainer: FunctionComponent = () => {
  return (
    <div className={styles.share}>
      <div className={styles.images}>
        <div className={styles.imagesChild} />
        <img className={styles.imagesItem} alt="" src="/rectangle-36@2x.png" />
        <img className={styles.imagesInner} alt="" src="/rectangle-38@2x.png" />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-40@2x.png"
        />
        <img
          className={styles.imagesChild1}
          alt=""
          src="/rectangle-39@2x.png"
        />
        <img
          className={styles.imagesChild2}
          alt=""
          src="/rectangle-41@2x.png"
        />
        <img
          className={styles.imagesChild3}
          alt=""
          src="/rectangle-44@2x.png"
        />
        <img
          className={styles.imagesChild4}
          alt=""
          src="/rectangle-43@2x.png"
        />
        <img
          className={styles.imagesChild5}
          alt=""
          src="/rectangle-45@2x.png"
        />
        <img
          className={styles.imagesChild6}
          alt=""
          src="/rectangle-37@2x.png"
        />
      </div>
      <div className={styles.title}>
        <div className={styles.title1}>Share your setup with</div>
        <b className={styles.title2}>#FuniroFurniture</b>
      </div>
    </div>
  );
};

export default ShareContainer;
