import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MillennialDesignContainer.module.css";

type MillennialDesignContainerType = {
  articleTitle?: string;
  imageDescription?: string;

  /** Style props */
  propTop?: Property.Top;
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propWidth2?: Property.Width;
};

const MillennialDesignContainer: FunctionComponent<
  MillennialDesignContainerType
> = ({
  articleTitle,
  imageDescription,
  propTop,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const groupDiv3Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
    };
  }, [propTop, propWidth]);

  const groupDiv4Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const goingAllInWithStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={styles.groupParent} style={groupDiv3Style}>
      <div
        className={styles.goingAllInWithMillennialDParent}
        style={groupDiv4Style}
      >
        <div className={styles.goingAllInWith} style={goingAllInWithStyle}>
          {articleTitle}
        </div>
        <div className={styles.aug2022}>03 Aug 2022</div>
      </div>
      <img className={styles.groupChild} alt="" src={imageDescription} />
    </div>
  );
};

export default MillennialDesignContainer;
