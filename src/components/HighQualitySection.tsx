import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./HighQualitySection.module.css";

type HighQualitySectionType = {
  imageDimensions?: string;
  imageId?: string;
  imageCode?: string;
  imageCodeUrl?: string;
  rectangleDiv?: boolean;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const HighQualitySection: FunctionComponent<HighQualitySectionType> = ({
  imageDimensions,
  imageId,
  imageCode,
  imageCodeUrl,
  rectangleDiv,
  propTop,
  propLeft,
}) => {
  const frameDiv3Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.featureWrapper} style={frameDiv3Style}>
      <div className={styles.feature}>
        <div className={styles.trophy1Parent}>
          <img className={styles.trophy1Icon} alt="" src={imageDimensions} />
          <div className={styles.text}>
            <div className={styles.highQuality}>High Quality</div>
            <div className={styles.craftedFromTop}>
              crafted from top materials
            </div>
          </div>
        </div>
        <div className={styles.guaranteeParent}>
          <img className={styles.trophy1Icon} alt="" src={imageId} />
          {!rectangleDiv && <div className={styles.frameChild} />}
          <div className={styles.text}>
            <div className={styles.highQuality}>Warranty Protection</div>
            <div className={styles.craftedFromTop}>Over 2 years</div>
          </div>
        </div>
        <div className={styles.guaranteeParent}>
          <img className={styles.trophy1Icon} alt="" src={imageCode} />
          <div className={styles.text}>
            <div className={styles.highQuality}>Free Shipping</div>
            <div className={styles.craftedFromTop}>Order over 150 $</div>
          </div>
        </div>
        <div className={styles.trophy1Parent}>
          <img className={styles.trophy1Icon} alt="" src={imageCodeUrl} />
          <div className={styles.text}>
            <div className={styles.highQuality}>24 / 7 Support</div>
            <div className={styles.craftedFromTop}>Dedicated support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighQualitySection;
