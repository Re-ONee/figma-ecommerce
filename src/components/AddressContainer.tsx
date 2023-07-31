import { FunctionComponent } from "react";
import styles from "./AddressContainer.module.css";
const AddressContainer: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles.bxsphoneIcon} alt="" src="/bxsphone.svg" />
      <div className={styles.address}>Address</div>
      <div className={styles.workingTime}>Working Time</div>
      <div className={styles.phone}>Phone</div>
      <div className={styles.thSeAvenue}>
        236 5th SE Avenue, New York NY10000, United States
      </div>
      <div className={styles.mondayFriday900Container}>
        <p className={styles.mondayFriday900}>Monday-Friday: 9:00 - 22:00</p>
        <p className={styles.mondayFriday900}>Saturday-Sunday: 9:00 - 21:00</p>
      </div>
      <div className={styles.mobile845466789Container}>
        <p className={styles.mondayFriday900}>Mobile: +(84) 546-6789</p>
        <p className={styles.mondayFriday900}>Hotline: +(84) 456-6789</p>
      </div>
      <img className={styles.biclockFillIcon} alt="" src="/biclockfill.svg" />
    </div>
  );
};

export default AddressContainer;
