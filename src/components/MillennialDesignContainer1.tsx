import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MillennialDesignContainer1.module.css";

type MillennialDesignContainer1Type = {
  articleTitle?: string;
  imageDescription?: string;
  decoratingMaterial?: string;
  designDimensions?: string;

  /** Style props */
  propTop?: Property.Top;
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
};

const MillennialDesignContainer1: FunctionComponent<
  MillennialDesignContainer1Type
> = ({
  articleTitle,
  imageDescription,
  decoratingMaterial,
  designDimensions,
  propTop,
  propWidth,
  propWidth1,
}) => {
  const groupDivStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const groupDiv1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDiv2Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={styles.goingAllInWithMillennialDParent}
      style={groupDivStyle}
    >
      <div className={styles.goingAllInWith}>{articleTitle}</div>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
        ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
        aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a
        iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
        Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et
        ultrices neque ornare aenean euismod elementum.
      </div>
      <img className={styles.groupChild} alt="" src={imageDescription} />
      <div className={styles.groupParent} style={groupDiv1Style}>
        <div className={styles.adminParent}>
          <div className={styles.admin}>Admin</div>
          <img
            className={styles.dashiconsadminUsers}
            alt=""
            src="/dashiconsadminusers.svg"
          />
        </div>
        <div className={styles.woodParent} style={groupDiv2Style}>
          <div className={styles.wood}>{decoratingMaterial}</div>
          <img className={styles.citagIcon} alt="" src="/citag.svg" />
        </div>
        <div className={styles.oct2022Parent}>
          <div className={styles.wood}>14 Oct 2022</div>
          <img
            className={styles.uiscalenderIcon}
            alt=""
            src={designDimensions}
          />
        </div>
      </div>
      <div className={styles.readMoreParent}>
        <div className={styles.readMore}>Read more</div>
        <div className={styles.groupItem} />
      </div>
    </div>
  );
};

export default MillennialDesignContainer1;
