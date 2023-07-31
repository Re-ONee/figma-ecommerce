import { FunctionComponent } from "react";
import styles from "./ContainerCardFormFilter.module.css";

type ContainerCardFormFilterType = {
  imageDimensions?: string;
  imageDimensionsText?: string;
  imageDimensionsCode?: string;
  imageCode?: string;

  /** Action props */
  onGroupContainer1Click?: () => void;
};

const ContainerCardFormFilter: FunctionComponent<
  ContainerCardFormFilterType
> = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsCode,
  imageCode,
  onGroupContainer1Click,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.groupParent}>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.shop}>Shop</div>
          <div className={styles.about}>About</div>
          <div className={styles.contact}>Contact</div>
        </div>
        <div
          className={styles.mdiaccountAlertOutlineParent}
          onClick={onGroupContainer1Click}
        >
          <img
            className={styles.mdiaccountAlertOutlineIcon}
            alt=""
            src={imageDimensions}
          />
          <img
            className={styles.akarIconssearch}
            alt=""
            src={imageDimensionsText}
          />
          <img
            className={styles.akarIconsheart}
            alt=""
            src={imageDimensionsCode}
          />
          <img
            className={styles.antDesignshoppingCartOutliIcon}
            alt=""
            src={imageCode}
          />
          <div className={styles.meubelHouseLogos05Parent}>
            <img
              className={styles.meubelHouseLogos05Icon}
              alt=""
              src="/meubel-house-logos05@2x.png"
            />
            <b className={styles.skinclinic}>Furniro</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
