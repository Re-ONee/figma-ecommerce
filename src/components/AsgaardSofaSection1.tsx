import { FunctionComponent } from "react";
import SizeContainer from "./SizeContainer";
import ContainerWrapper from "./ContainerWrapper";
import styles from "./AsgaardSofaSection1.module.css";
const AsgaardSofaSection1: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupParent}>
        <img className={styles.groupItem} alt="" src="/group-102@2x.png" />
        <div className={styles.asgaardSofaParent}>
          <div className={styles.asgaardSofa}>Asgaard sofa</div>
          <div className={styles.rs25000000}>Rs. 250,000.00</div>
          <img className={styles.groupInner} alt="" src="/group-88.svg" />
          <div className={styles.lineDiv} />
          <div className={styles.customerReview}>5 Customer Review</div>
          <div className={styles.settingTheBarContainer}>
            <p className={styles.settingTheBar}>
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <p className={styles.settingTheBar}></p>
          </div>
          <SizeContainer />
          <div className={styles.color}>Color</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <ContainerWrapper />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild3} />
            <div className={styles.addToCart}>Add To Cart</div>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.groupChild4} />
          <div className={styles.sku}>SKU</div>
          <div className={styles.ss001}>SS001</div>
          <div className={styles.sofas}>Sofas</div>
          <div className={styles.sofaChairHome}>Sofa, Chair, Home, Shop</div>
          <div className={styles.parent}>
            <div className={styles.div}>:</div>
            <div className={styles.div1}>:</div>
            <div className={styles.div2}>:</div>
            <div className={styles.div3}>:</div>
          </div>
          <div className={styles.category}>Category</div>
          <div className={styles.tags}>Tags</div>
          <div className={styles.share}>Share</div>
          <img
            className={styles.akarIconsfacebookFill}
            alt=""
            src="/akariconsfacebookfill.svg"
          />
          <img
            className={styles.antDesigntwitterCircleFillIcon}
            alt=""
            src="/antdesigntwittercirclefilled.svg"
          />
          <img
            className={styles.akarIconslinkedinBoxFill}
            alt=""
            src="/akariconslinkedinboxfill.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AsgaardSofaSection1;
