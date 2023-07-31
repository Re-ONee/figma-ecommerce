import { FunctionComponent } from "react";
import styles from "./BillingDetailsForm.module.css";
const BillingDetailsForm: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.billingDetails}>Billing details</div>
      <div className={styles.firstNameParent}>
        <div className={styles.firstName}>First Name</div>
        <div className={styles.groupItem} />
      </div>
      <div className={styles.lastName}>Last Name</div>
      <div className={styles.groupInner} />
      <div className={styles.companyNameOptional}>Company Name (Optional)</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.streetAddressParent}>
        <div className={styles.firstName}>Street address</div>
        <div className={styles.groupChild1} />
      </div>
      <div className={styles.zipCodeParent}>
        <div className={styles.firstName}>ZIP code</div>
        <div className={styles.groupChild1} />
      </div>
      <div className={styles.townCityParent}>
        <div className={styles.firstName}>Town / City</div>
        <div className={styles.groupChild1} />
      </div>
      <div className={styles.phoneParent}>
        <div className={styles.firstName}>Phone</div>
        <div className={styles.groupChild1} />
      </div>
      <div className={styles.emailAddressParent}>
        <div className={styles.firstName}>Email address</div>
        <div className={styles.groupChild1} />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild6} />
        <div className={styles.additionalInformation}>
          Additional information
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.countryRegionParent}>
          <div className={styles.firstName}>Country / Region</div>
          <div className={styles.groupChild1} />
        </div>
        <div className={styles.sriLanka}>Sri Lanka</div>
        <img
          className={styles.dashiconsarrowDownAlt2}
          alt=""
          src="/dashiconsarrowdownalt21.svg"
        />
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.countryRegionParent}>
          <div className={styles.firstName}>Province</div>
          <div className={styles.groupChild1} />
          <div className={styles.sriLanka}>Western Province</div>
        </div>
        <img
          className={styles.dashiconsarrowDownAlt2}
          alt=""
          src="/dashiconsarrowdownalt21.svg"
        />
      </div>
    </div>
  );
};

export default BillingDetailsForm;
