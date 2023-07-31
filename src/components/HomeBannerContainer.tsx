import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCardFormFilter from "./ContainerCardFormFilter";
import styles from "./HomeBannerContainer.module.css";
const HomeBannerContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/cart-sidebar");
  }, [navigate]);

  return (
    <div className={styles.banner}>
      <ContainerCardFormFilter
        imageDimensions="/mdiaccountalertoutline4.svg"
        imageDimensionsText="/akariconssearch5.svg"
        imageDimensionsCode="/akariconsheart4.svg"
        imageCode="/antdesignshoppingcartoutlined3.svg"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <div className={styles.maskGroup}>
        <img
          className={styles.scandinavianInteriorMockupWIcon}
          alt=""
          src="/scandinavianinteriormockupwalldecalbackground-1@2x.png"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.dermatologySkinCParent}>
            <b className={styles.dermatologySkinContainer}>
              <p className={styles.discoverOur}>{`Discover Our `}</p>
              <p className={styles.discoverOur}>New Collection</p>
            </b>
            <div className={styles.treatingAllSkin}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </div>
            <div className={styles.bookAnAppointmentWrapper}>
              <b className={styles.bookAnAppointment}>BUY Now</b>
            </div>
            <div className={styles.bookAnAppointmentContainer}>
              <div className={styles.bookAnAppointment1}>New Arrival</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerContainer;
