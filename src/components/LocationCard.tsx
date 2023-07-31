import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./LocationCard.module.css";

type LocationCardType = {
  /** Style props */
  propBottom?: Property.Bottom;
  propLeft?: Property.Left;
  propTop?: Property.Top;
};

const LocationCard: FunctionComponent<LocationCardType> = ({
  propBottom,
  propLeft,
  propTop,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      bottom: propBottom,
      left: propLeft,
      top: propTop,
    };
  }, [propBottom, propLeft, propTop]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerChild} />
      <div className={styles.groupParent}>
        <div className={styles.universityDriveSuite200CorParent}>
          <div className={styles.universityDriveSuiteContainer}>
            <p className={styles.universityDriveSuite}>
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className={styles.universityDriveSuite}>FL 33134 USA</p>
          </div>
          <b className={styles.funiro}>Funiro.</b>
          <div className={styles.groupContainer}>
            <div className={styles.groupDiv}>
              <div className={styles.groupParent1}>
                <div className={styles.homeParent}>
                  <div className={styles.home}>Home</div>
                  <div className={styles.shop}>Shop</div>
                  <div className={styles.about}>About</div>
                  <div className={styles.contact}>Contact</div>
                </div>
                <div className={styles.links}>Links</div>
              </div>
              <div className={styles.helpParent}>
                <div className={styles.home}>Help</div>
                <div className={styles.paymentOptionsParent}>
                  <div className={styles.home}>Payment Options</div>
                  <div className={styles.returns}>Returns</div>
                  <div className={styles.privacyPolicies}>Privacy Policies</div>
                </div>
              </div>
            </div>
            <div className={styles.newsletterParent}>
              <div className={styles.home}>Newsletter</div>
              <div className={styles.enterYourEmailAddressParent}>
                <div className={styles.enterYourEmail}>
                  Enter Your Email Address
                </div>
                <div className={styles.groupChild} />
                <div className={styles.subscribe}>SUBSCRIBE</div>
                <div className={styles.groupItem} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.groupInner} />
          <div className={styles.furinoAllRights}>
            2023 furino. All rights reverved
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
