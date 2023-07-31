import { FunctionComponent } from "react";
import styles from "./ContainerInspirations01.module.css";
const ContainerInspirations01: FunctionComponent = () => {
  return (
    <div className={styles.inspirations}>
      <div className={styles.bg} />
      <div className={styles.products}>
        <div className={styles.image}>
          <img
            className={styles.imageChild}
            alt=""
            src="/rectangle-24@2x.png"
          />
          <div className={styles.cta}>
            <div className={styles.ctaChild} />
            <img
              className={styles.right16pxIcon}
              alt=""
              src="/right-16px.svg"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.contentChild} />
            <div className={styles.parent}>
              <div className={styles.div}>01</div>
              <img className={styles.frameChild} alt="" src="/vector-1.svg" />
              <div className={styles.div}>Bed Room</div>
            </div>
            <div className={styles.innerPeace}>Inner Peace</div>
          </div>
        </div>
        <img
          className={styles.productsChild}
          alt=""
          src="/rectangle-25@2x.png"
        />
        <img
          className={styles.productsItem}
          alt=""
          src="/rectangle-26@2x.png"
        />
        <div className={styles.indicator}>
          <img className={styles.activeIcon} alt="" src="/active.svg" />
          <div className={styles.indicatorChild} />
          <div className={styles.indicatorChild} />
          <div className={styles.indicatorChild} />
        </div>
        <img className={styles.productsInner} alt="" src="/group-13.svg" />
      </div>
      <div className={styles.cta1}>
        <div className={styles.ctaItem} />
        <div className={styles.exploreMore}>Explore More</div>
      </div>
      <div className={styles.title}>
        <b className={styles.title1}>
          <p className={styles.beautifulRooms}>{`50+ Beautiful rooms `}</p>
          <p className={styles.beautifulRooms}>inspiration</p>
        </b>
        <div className={styles.subtitle}>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </div>
      </div>
    </div>
  );
};

export default ContainerInspirations01;
